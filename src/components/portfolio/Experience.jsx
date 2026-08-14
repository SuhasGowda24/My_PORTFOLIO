import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { EXPERIENCE, EDUCATION } from './resumeData';

const TABS = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

function SectionHeader({ tab, onTabChange }) {
  return (
    <>
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium text-primary">02</span>
            <span className="h-px w-12 bg-primary/60" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Experience & Education
            </h2>
          </div>

          <TabToggle tab={tab} onTabChange={onTabChange} />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/80">
          A snapshot of my{' '}
          <span className="text-primary font-semibold">
            professional experience and academic journey.
          </span>
        </p>
      </Reveal>
    </>
  );
}

function TabToggle({ tab, onTabChange }) {
  const activeIndex = TABS.findIndex((t) => t.id === tab);

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 p-1">
      {TABS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onTabChange(id)}
          aria-pressed={tab === id}
          className={`relative z-10 px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-colors duration-300 ${
            tab === id ? 'text-background' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
      <span
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-300 ease-out"
        style={{ transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex === 0 ? 2 : 6}px))` }}
        aria-hidden="true"
      />
    </div>
  );
}

function TimelineNode({ isCurrent }) {
  return (
    <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center">
      <span className={`absolute h-3.5 w-3.5 rounded-full ${isCurrent ? 'bg-accent/20' : 'bg-primary/15'}`} />
      <span className={`relative h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-accent' : 'bg-primary'}`} />
    </span>
  );
}

function ExperienceDetails({ points }) {
  if (!points?.length) return null;

  return (
    <ul className="space-y-3">
      {points.map((point, idx) => (
        <li key={idx} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function EducationDetails({ field, location, achievement }) {
  if (!field && !location && !achievement) return null;

  return (
    <div className="space-y-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
      {field && <p className="font-medium text-foreground">{field}</p>}
      {location && <p>{location}</p>}
      {achievement && <p className="pt-1">{achievement}</p>}
    </div>
  );
}

function CompanyLogo({ src, alt }) {
  if (!src) return null;

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/40 bg-white">
      <img src={src} alt={alt} className="h-full w-full rounded-full object-contain p-1" />
    </span>
  );
}

function SkillTags({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function TimelineEntry({ entry, index, mode }) {
  const title = mode === 'experience' ? entry.role : entry.degree;
  const subtitle = mode === 'experience' ? entry.company : entry.school;
  const isCurrent = mode === 'experience' && entry.period?.includes('Present');

  return (
    <Reveal delay={0.08 * index}>
      <article className="relative pl-12">
        <TimelineNode isCurrent={isCurrent} />

        <div className="rounded-2xl border border-border/60 bg-background p-7 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
            <h3 className="font-heading text-lg sm:text-xl font-semibold leading-tight text-foreground">
              {title}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {entry.period}
            </span>
          </div>

          {/* Subtitle row: logo beside the company/school name, linked if a URL is available */}
          <div className="mt-3 flex items-center gap-2.5">
            {mode === 'education' && (
              <GraduationCap className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            )}
            {mode === 'experience' && (
              <CompanyLogo src={entry.companyLogo} alt={`${entry.company} logo`} />
            )}
            {mode === 'experience' && entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                {subtitle}
              </a>
            ) : (
              <p className="font-mono text-sm font-medium text-primary">{subtitle}</p>
            )}
          </div>

          {mode === 'education' && entry.score && (
            <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium text-primary">
              {entry.score}
            </span>
          )}

          <div className="mt-4">
            {mode === 'experience' ? (
              <ExperienceDetails points={entry.points} />
            ) : (
              <EducationDetails
                field={entry.field}
                location={entry.location}
                achievement={entry.achievement}
              />
            )}
          </div>

          {mode === 'experience' && <SkillTags tags={entry.tags} />}
        </div>
      </article>
    </Reveal>
  );
}

function Timeline({ data, mode }) {
  return (
    <div className="mt-16 relative">
      <div
        className="absolute left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent"
        aria-hidden="true"
      />

      <div className="space-y-10">
        {data.map((entry, i) => (
          <TimelineEntry
            key={`${mode}-${entry.company ?? entry.school}-${i}`}
            entry={entry}
            index={i}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState('experience');
  const data = tab === 'experience' ? EXPERIENCE : EDUCATION;

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader tab={tab} onTabChange={setTab} />
        <Timeline data={data} mode={tab} />
      </div>
    </section>
  );
}