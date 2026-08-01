import { useState } from 'react';
import { ArrowRight, Award, BookOpen, ScrollText } from 'lucide-react';
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
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Publications
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="mt-6 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                  Academic<br />Contributions
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Peer-reviewed research at the intersection of machine learning
                  and real-world problem domains.
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
                    <div className="shrink-0 mt-1">
                      {p.award ? (
                        <span className="foil-badge inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-lg">
                          <Award className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 text-primary">
                          <ScrollText className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                        <BookOpen className="h-3 w-3" />
                        Research Paper
                      </div>
                      <h4 className="mt-2 font-heading text-base sm:text-lg font-semibold leading-snug text-foreground">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">{p.venue}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted-foreground/80">
                        <span>ISBN {p.isbn}</span>
                        {p.award && (
                          <span className="foil-badge rounded-full px-3 py-1 text-white text-[10px] font-semibold uppercase tracking-wider">
                            ★ Best Paper Award
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelected(p)}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-foreground hover:text-primary transition-colors"
                      >
                        View
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
        badge={selected?.award ? 'Research Paper · Best Paper Award' : 'Research Paper'}
        title={selected?.title ?? ''}
        links={selected?.url ? [{ href: selected.url, label: 'Read Paper', primary: true }] : []}
      >
        {selected && (
          <div className="space-y-5">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Venue</h4>
              <p className="text-sm text-foreground">{selected.venue}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Abstract</h4>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{selected.abstract}</p>
            </div>
            <div className="flex flex-wrap gap-4 font-mono text-[11px] text-muted-foreground/80">
              <span>ISBN {selected.isbn}</span>
              {selected.award && (
                <span className="foil-badge rounded-full px-3 py-1 text-white text-[10px] font-semibold uppercase tracking-wider">
                  ★ Best Paper Award
                </span>
              )}
            </div>
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