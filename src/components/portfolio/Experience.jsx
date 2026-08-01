import { Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import { EXPERIENCE } from './resumeData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary">03</span>
            <span className="h-px w-8 bg-primary/50" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Experience / Timeline
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          {/* vertical trace */}
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" aria-hidden="true" />

          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={0.05 * i}>
              <div className={`relative pl-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 pb-12`}>
                {/* node */}
                <span className="absolute left-0 sm:left-1/2 top-2 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-primary/20" />
                  <span className="relative h-2 w-2 rounded-full bg-primary glow-accent" />
                </span>

                <div className={i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'}>
                  <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{e.period}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{e.role}</h3>
                  <p className="text-primary font-mono text-sm">{e.company}</p>
                </div>

                <div className={`mt-4 sm:mt-0 ${i % 2 === 0 ? 'sm:col-start-2 sm:pl-12' : 'sm:row-start-1 sm:pr-12 sm:text-right'}`}>
                  <ul className="space-y-3">
                    {e.points.map((p, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}