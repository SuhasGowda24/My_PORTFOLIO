import { Download, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { PROFILE, generateResume } from './resumeData';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="01" title="About Me" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p className="text-2xl sm:text-3xl font-heading font-medium leading-snug tracking-tight text-foreground">
              Computer Science undergraduate{' '}
              <span className="text-primary">(2022–2026)</span> with hands-on
              experience across Machine Learning, Deep Learning, Computer Vision,
              and Full Stack Development.
            </p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={generateResume}
                className="inline-flex items-center gap-2 rounded-md glass px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:text-primary transition-colors"
              >
                <Download className="h-4 w-4 text-primary" />
                Download Resume (PDF)
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                B.E. Computer Science · 2022–2026
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="glass rounded-xl p-6 sm:p-8 h-full">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
                // quick facts
              </div>
              <dl className="space-y-4">
                <Fact label="Name" value={PROFILE.name} />
                <Fact label="Focus" value="ML · Full Stack · AI" />
                <Fact label="Location" value={PROFILE.location} />
                <Fact label="Open to" value="Software / AI-ML Engineering roles" />
                <Fact label="Email" value={PROFILE.email} />
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-3 last:border-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">{label}</dt>
      <dd className="text-sm text-foreground text-right">{value}</dd>
    </div>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-primary">{index}</span>
      <span className="h-px w-8 bg-primary/50" />
      <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </h2>
    </div>
  );
}