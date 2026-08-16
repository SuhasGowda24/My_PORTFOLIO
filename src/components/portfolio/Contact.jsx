import { useState } from 'react';
import { Terminal, Copy, Check, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const CONTACT_METHODS = [
  {
    key: 'email',
    value: 'srisuhasgowda24@gmail.com',
    href: 'mailto:srisuhasgowda24@gmail.com',
    note: 'best for detailed discussions',
    external: false,
  },
  {
    key: 'linkedin',
    value: 'linkedin.com/in/suhas-s-641a6a243',
    href: 'https://linkedin.com/in/suhas-s-641a6a243',
    note: 'professional network',
    external: true,
  },
  {
    key: 'github',
    value: 'github.com/SuhasGowda24',
    href: 'https://github.com/SuhasGowda24',
    note: 'explore my projects',
    external: true,
  },
];

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1600);
    } catch {
      // clipboard unavailable — silently no-op, link is still clickable
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium text-primary">07</span>
            <span className="h-px w-12 bg-primary/60" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
  Let's build{" "}
  <span className="text-primary italic">
    something intelligent.
  </span>
</h3>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
  Open to{" "}
  <span className="text-primary font-medium">
    software engineering and AI/ML opportunities,
  </span>{" "}
  research collaborations, and interesting projects. Reach out — I read every message.
</p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="glass rounded-xl overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 bg-background/40">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3 w-3" /> contact.json
                </span>
              </div>

              {/* code body */}
              <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-7">
                <Line n={1} content={<span className="text-muted-foreground/70">{'{'}</span>} />

                {CONTACT_METHODS.map((c, i) => (
                  <Line
                    key={c.key}
                    n={i + 2}
                    content={
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-primary">"{c.key}"</span>
                        <span className="text-muted-foreground/50">:</span>
                        <a
                          href={c.href}
                          {...(c.external
                            ? {
                                target: '_blank',
                                rel: 'noreferrer',
                              }
                            : {})}
                          className="group/val inline-flex items-baseline gap-1.5 text-foreground/90 hover:text-primary transition-colors"
                        >
                          <span className="text-muted-foreground/50">"</span>
                          {c.value}
                          <span className="text-muted-foreground/50">"</span>
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/val:opacity-100 -translate-y-0 group-hover/val:-translate-y-0.5 transition-all" />
                        </a>
                        {i < CONTACT_METHODS.length - 1 && (
                          <span className="text-muted-foreground/50">,</span>
                        )}
                        <span className="hidden sm:inline text-muted-foreground/40 text-xs">
                          {'  '}// {c.note}
                        </span>

                        <button
                          type="button"
                          onClick={() => copy(c.key, c.value)}
                          aria-label={`Copy ${c.key}`}
                          className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          {copiedKey === c.key ? (
                            <Check className="h-3.5 w-3.5 text-primary" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </span>
                    }
                  />
                ))}

                <Line n={CONTACT_METHODS.length + 2} content={<span className="text-muted-foreground/70">{'}'}</span>} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Line({ n, content }) {
  return (
    <div className="flex items-start gap-4 py-1 px-2 -mx-2 rounded hover:bg-primary/[0.04] transition-colors">
      <span className="select-none font-mono text-xs text-muted-foreground/30 w-4 text-right shrink-0 pt-0.5">
        {n}
      </span>
      <div className="flex-1 min-w-0">{content}</div>
    </div>
  );
}