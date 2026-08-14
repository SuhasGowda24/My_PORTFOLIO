import { useState } from 'react';
import { ArrowRight, BookOpen, ScrollText, Users } from 'lucide-react';
import Reveal from './Reveal';
import Modal from './Modal';
import { PUBLICATIONS } from './resumeData';

export default function Publications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="publications" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* sticky label */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">05</span>
                  <span className="h-px w-8 bg-primary/50" />
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    Publications
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="mt-6 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                  Research<br />Work
                </h3>

<p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
  Published research focused on applying{" "}
  <span className="text-primary font-medium">
    machine learning to real-world problems.
  </span>
</p>
              </Reveal>
            </div>
          </div>

          {/* scrollable entries */}
          <div className="lg:col-span-8 space-y-5">
            {PUBLICATIONS.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <article className="relative glass rounded-xl p-6 sm:p-7 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 text-primary">
                      <ScrollText className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                        <BookOpen className="h-3 w-3" />
                        Research Paper
                      </div>
                      <h4 className="mt-2 font-heading text-base sm:text-lg font-semibold leading-snug text-foreground">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">{p.venue}</p>

                      {p.authors?.length > 0 && (
                        <div className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground/80">
                          <Users className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                          <span>{p.authors.join(', ')}</span>
                        </div>
                      )}

                      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted-foreground/80">
                        {p.identifierValue && <span>{p.identifierLabel} {p.identifierValue}</span>}
                      </div>

                      <button
                        onClick={() => setSelected(p)}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        View Publication
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        badge="Research Paper"
        title={selected?.title ?? ''}
        links={selected?.url ? [{ href: selected.url, label: 'Read Paper', primary: true }] : []}
      >
        {selected && (
          <div className="space-y-5">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Venue</h4>
              <p className="text-sm text-foreground">{selected.venue}</p>
              {selected.website && (
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs font-mono text-primary hover:underline"
                >
                  {selected.website.replace(/^https?:\/\//, '')}
                </a>
              )}
            </div>

            {selected.authors?.length > 0 && (
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Authors</h4>
                <p className="text-sm text-foreground/80">{selected.authors.join(', ')}</p>
              </div>
            )}

            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Abstract</h4>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{selected.abstract}</p>
            </div>

            {selected.identifierValue && (
              <div className="flex flex-wrap gap-4 font-mono text-[11px] text-muted-foreground/80">
                <span>{selected.identifierLabel} {selected.identifierValue}</span>
              </div>
            )}

            {/* paper preview frame — shows when a url is provided */}
            <div className="rounded-lg border border-dashed border-border/70 aspect-[4/5] flex items-center justify-center bg-card/40 overflow-hidden">
              {selected.url ? (
                <object data={selected.url} type="application/pdf" className="h-full w-full">
                  <a href={selected.url} target="_blank" rel="noreferrer" className="text-primary text-xs font-mono">Open paper ↗</a>
                </object>
              ) : (
                <div className="text-center px-6">
                  <ScrollText className="h-6 w-6 text-primary/60 mx-auto" />
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground/70 leading-snug">
                    Add a paper PDF URL to show<br />a preview here in the modal.
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