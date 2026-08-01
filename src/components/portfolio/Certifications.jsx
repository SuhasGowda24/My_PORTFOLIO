import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BadgeCheck, BookOpen, Rocket, ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import Modal from './Modal';
import { ACHIEVEMENTS, CERTIFICATIONS } from './resumeData';

const ACHIEVEMENT_ICONS = { award: Award, book: BookOpen, rocket: Rocket };

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const achievementsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: achievementsRef,
    offset: ['start end', 'end start'],
  });

  // duplicate once so the marquee can loop seamlessly (two identical groups)
  const loop = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-24 sm:py-32 border-t border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary">06</span>
            <span className="h-px w-8 bg-primary/50" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Certifications &amp; Achievements
            </h2>
          </div>
        </Reveal>

        {/* Certifications — self-scrolling marquee */}
        <div className="mt-12">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-heading text-lg font-semibold text-foreground/90">Certifications</h3>
              <span className="font-mono text-[11px] text-muted-foreground/70 hidden sm:block">
                ← auto-scroll · hover to pause →
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-6 marquee-mask overflow-hidden -mx-5 sm:mx-0">
            <div className="marquee-track">
              {[0, 1].map((group) => (
                <div key={group} className="flex gap-5 pr-5" aria-hidden={group === 1 ? 'true' : undefined}>
                  {CERTIFICATIONS.map((c, i) => (
                    <CertCard key={`${group}-${i}`} cert={c} index={i} onView={() => setSelected(c)} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Achievements — scroll-driven parallax drift */}
        <div className="mt-16" ref={achievementsRef}>
          <Reveal>
            <h3 className="font-heading text-lg font-semibold text-foreground/90 mb-6">Achievements</h3>
          </Reveal>
          <div className="space-y-5">
            {ACHIEVEMENTS.map((a, i) => (
              <AchievementCard key={a.title} item={a} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        badge={selected ? `Certificate · ${selected.year}` : ''}
        title={selected?.name ?? ''}
        links={selected?.url ? [{ href: selected.url, label: 'View Certificate', primary: true }] : []}
      >
        {selected && (
          <div className="space-y-5">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Issued by</h4>
              <p className="text-sm text-foreground">{selected.issuer}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">About</h4>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{selected.description}</p>
            </div>
            <div className="rounded-lg border border-dashed border-border/70 aspect-[4/3] flex items-center justify-center bg-card/40 overflow-hidden">
              {selected.url ? (
                <img src={selected.url} alt={selected.name} className="h-full w-full object-contain" />
              ) : (
                <div className="text-center px-6">
                  <ExternalLink className="h-6 w-6 text-primary/60 mx-auto" />
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground/70 leading-snug">
                    Add a certificate image URL to show<br />a preview here in the modal.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function CertCard({ cert, index, onView }) {
  return (
    <div className="group glass rounded-xl p-6 w-[280px] sm:w-[320px] shrink-0 flex flex-col hover:border-primary/40 transition-colors">
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
      {cert.year && <p className="mt-1 font-mono text-[11px] text-muted-foreground/70">{cert.year}</p>}

      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">Credential</span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:text-primary transition-colors"
        >
          View
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function AchievementCard({ item, index, progress }) {
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
        <div>
          <h4 className="font-heading text-base font-semibold leading-snug text-foreground">{item.title}</h4>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}