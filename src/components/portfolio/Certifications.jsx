import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  BookOpen,
  Rocket,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Download
} from 'lucide-react';
import Reveal from './Reveal';
import Modal from './Modal';
import { ACHIEVEMENTS, CERTIFICATIONS } from './resumeData';

const ACHIEVEMENT_ICONS = { award: Award, book: BookOpen, rocket: Rocket };
const IMAGE_URL_RE = /\.(png|jpe?g|webp|gif|svg)$/i;
const AUTO_ADVANCE_MS = 3200;

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const achievementsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: achievementsRef,
    offset: ['start end', 'end start'],
  });

  const verified = CERTIFICATIONS.filter((c) => c.verified);
  const additional = CERTIFICATIONS.filter((c) => !c.verified);

  return (
    <section id="certifications" className="relative py-24 sm:py-32 border-t border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium text-primary">
              06
            </span>

            <span className="h-px w-12 bg-primary/60" />

            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Certifications & Achievements
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12">
            <CertCarousel
              title="Verified Certifications"
              subtitle={
                <>
                  Credentials with{" "}
                  <span className="text-primary font-medium">
                    public verification.
                  </span>
                </>
              }
              items={verified}
              onView={setSelected}
              offsetIndex={0}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <CertCarousel
            title="Additional Certifications"
            subtitle={
              <>
                Additional learning across{" "}
                <span className="text-primary font-medium">
                  AI, web development, and full-stack technologies.
                </span>
              </>
            }
            items={additional}
            onView={setSelected}
            offsetIndex={verified.length}
            className="mt-14"
          />
        </Reveal>

        {/* Achievements — scroll-driven parallax drift */}
        <div className="mt-16" ref={achievementsRef}>
          <Reveal>
            <h3 className="font-heading text-lg font-semibold text-foreground/90 mb-6">Achievements</h3>
          </Reveal>
          <div className="space-y-5">
            {ACHIEVEMENTS.map((a, i) => (
              <AchievementCard
                key={`${a.title}-${i}`}
                item={a}
                index={i}
                progress={scrollYProgress}
                onView={() => setSelectedAchievement(a)}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        badge={selected ? `Certificate · ${selected.year}` : ''}
        title={selected?.name ?? ''}
        links={
          selected?.url
            ? [{ href: selected.url, label: 'Verify Credential', primary: true }]
            : []
        }
      >
        {selected && (
          <div className="space-y-5">
            {/* Issued by */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Issued by</h4>
              <p className="text-sm text-foreground">{selected.issuer}</p>
              {selected.date && (
                <p className="mt-1 text-xs font-mono text-muted-foreground">
                  Issued {selected.date}
                </p>
              )}
            </div>

            {/* About */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">About</h4>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{selected.description}</p>
            </div>

            {/* Download button — sits between description and preview */}
            {selected.fileUrl && (
              <div className="flex justify-end">
                <a
                  href={selected.fileUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-md bg-amber-600/90 backdrop-blur-md border border-amber-500/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-amber-50 hover:bg-amber-500 hover:border-amber-400 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </div>
            )}

            {/* Certificate preview */}
            <div className="rounded-lg border border-border/70 bg-card/40 overflow-hidden relative">
  {selected.fileUrl ? (
    <div className="aspect-[4/3] flex items-center justify-center bg-white">
      {selected.fileType === 'image' ? (
        <img
          src={selected.fileUrl}
          alt={selected.name}
          className="h-full w-full object-contain p-2"
        />
      ) : (
        <iframe
          src={selected.fileUrl}
          title={selected.name}
          className="h-full w-full border-0"
        />
      )}
    </div>
  ) : selected.url && IMAGE_URL_RE.test(selected.url) ? (
    <div className="aspect-[4/3] flex items-center justify-center bg-white">
      <img
        src={selected.url}
        alt={selected.name}
        className="h-full w-full object-contain p-2"
      />
    </div>
  ) : (
    <div className="p-8 text-center">
      <ExternalLink className="h-6 w-6 text-primary/60 mx-auto" />
      <p className="mt-2 font-mono text-[11px] text-muted-foreground/70">
        Certificate file not hosted yet.
      </p>
    </div>
  )}
</div>
          </div>
        )}
      </Modal>
      <Modal
  open={!!selectedAchievement}
  onClose={() => setSelectedAchievement(null)}
  badge="Achievement"
  title={selectedAchievement?.title ?? ''}
>
  {selectedAchievement && (
    <div className="space-y-5">

      {/* About */}
      <div>
        <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">
          About
        </h4>

        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          {selectedAchievement.detail}
        </p>
      </div>

      {/* Date */}
      {selectedAchievement.date && (
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">
            Date
          </h4>

          <p className="text-sm text-foreground">
            {selectedAchievement.date}
          </p>
        </div>
      )}

      {/* Certificate */}
      {selectedAchievement.fileUrl && (
        <>
          <div className="rounded-lg border border-border/70 bg-card/40 overflow-hidden">
  <div className="aspect-[4/3] flex items-center justify-center bg-white">
    <object
      data={selectedAchievement.fileUrl}
      type="application/pdf"
      className="h-full w-full"
    >
      <a
        href={selectedAchievement.fileUrl}
        target="_blank"
        rel="noreferrer"
        className="text-primary text-xs font-mono"
      >
        Open certificate ↗
      </a>
    </object>
  </div>
</div>

          {/* Download */}
          <a
            href={selectedAchievement.fileUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider glow-accent hover:-translate-y-0.5 transition-transform"
          >
            <Download className="h-4 w-4" />
            Download Certificate
          </a>
        </>
      )}

    </div>
  )}
</Modal>
    </section>
  );
}

/**
 * CertCarousel
 * A scroll-snap track with real <button> arrow controls that step one
 * card at a time, gentle auto-advance that pauses on hover/touch, and
 * native swipe support on touch devices (the container is just a normal
 * scrollable div with snap points — swipe works for free).
 */
function CertCarousel({ title, subtitle, items, onView, offsetIndex = 0, className = '' }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-cert-card]');
    const step = card ? card.getBoundingClientRect().width + 20 : 300;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, items.length, scrollByCard]);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground/90">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label={`Scroll ${title} left`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label={`Scroll ${title} right`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="mt-5 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-5 scrollbar-thin -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        {items.map((c, i) => (
          <div key={c.name} data-cert-card className="snap-start shrink-0">
            <CertCard cert={c} index={offsetIndex + i} onView={() => onView(c)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * CertCard
 * Compact card with a hover overlay that reveals the certification's
 * description (only rendered if cert.description is present).
 */
function CertCard({ cert, index, onView }) {
  return (
    <div className="group relative glass rounded-xl p-6 w-[280px] sm:w-[320px] h-[240px] flex flex-col overflow-hidden hover:border-primary/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          CERT_{String(index + 1).padStart(2, '0')}
        </span>
        <BadgeCheck className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
      </div>

      <h4 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground">
        {cert.name}
      </h4>
      <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
      {cert.year && (
        <p className="mt-1 font-mono text-[11px] text-muted-foreground/70">{cert.year}</p>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          Credential
        </span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-2 text-xs font-mono text-foreground hover:text-primary transition-colors"
        >
          View Certificate
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Hover description overlay — only if cert.description exists.
          Clicking anywhere on it opens the certificate, same as the
          "View Certificate" button underneath. */}
      {cert.description && (
        <button
          type="button"
          onClick={onView}
          className="absolute inset-0 flex flex-col justify-center text-left bg-background/95 backdrop-blur-md p-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
            {cert.issuer}
          </span>
          <h4 className="mt-2 font-heading text-sm font-semibold text-foreground leading-snug">
            {cert.name}
          </h4>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-4">
            {cert.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-primary">
            View Certificate
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </button>
      )}
    </div>
  );
}

function AchievementCard({ item, index, progress, onView }) {
  const Icon = ACHIEVEMENT_ICONS[item.icon] || Award;
  const magnitude = 28 + index * 14;
  const dir = index % 2 === 0 ? 1 : -1;
  const x = useTransform(progress, [0, 0.5, 1], [dir * magnitude, -dir * magnitude * 0.4, dir * magnitude]);
  const rotate = useTransform(progress, [0, 0.5, 1], [dir * -1.5, 0, dir * 1.5]);
 
  return (
    <motion.div
      style={{ x, rotate }}
      className="group glass rounded-xl p-6 hover:border-primary/40 transition-colors"
    >
      <div className="flex items-start gap-4">
        <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading text-base font-semibold leading-snug text-foreground">{item.title}</h4>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
{item.fileUrl && (
  <button
    type="button"
    onClick={onView}
    className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary/80 hover:text-primary transition-colors"
  >
    View Certificate
    <ArrowRight className="h-3.5 w-3.5" />
  </button>
)}
        </div>
      </div>
    </motion.div>
  );
}