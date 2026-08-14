import Reveal from './Reveal';
import { SKILLS } from './resumeData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-5">
          <span className="font-mono text-sm font-medium text-primary">
            03
          </span>

          <span className="h-px w-12 bg-primary/60" />

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Skills
          </h2>
        </div>
        </Reveal>
         <Reveal delay={0.05}>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/80">
            Technologies and tools I rely on to{" "}
            <span className="text-primary font-semibold">
              design, build, and ship reliable software.
            </span>
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={0.04 * i}>
              <div className="group relative glass rounded-2xl h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                {/* bold top accent bar */}
                <div className="h-1 w-full bg-primary/70 group-hover:bg-primary transition-colors" />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-heading text-base font-semibold text-foreground tracking-wide">
                      {s.group}
                    </h3>
                    <span className="font-mono text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="
rounded-full
border
border-primary/20
bg-primary/10
px-3
py-1
text-xs
font-medium
text-primary
shadow-sm
transition-all
duration-200
hover:-translate-y-0.5
hover:bg-primary/20
hover:border-primary/40
"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
  <p className="mt-14 text-center text-base text-muted-foreground">
    Always learning, always building —{" "}
    <span className="text-primary font-medium">
      one project at a time.
    </span>
  </p>
</Reveal>
      </div>
    </section>
  );
}