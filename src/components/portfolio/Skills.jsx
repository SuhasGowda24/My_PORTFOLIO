import { Cpu } from 'lucide-react';
import Reveal from './Reveal';
import { SKILLS } from './resumeData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary">02</span>
            <span className="h-px w-8 bg-primary/50" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Skills
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={0.04 * i}>
              <div className="group glass rounded-xl p-6 h-full hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/90">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="hairline rounded-md px-2.5 py-1 text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}