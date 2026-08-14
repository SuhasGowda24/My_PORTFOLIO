import { ArrowUpRight, FileText, Github, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  // close on Escape
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl glass-strong rounded-xl overflow-hidden max-h-[85vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* header */}
            {/* header */}
<div className="flex items-start justify-between gap-4 p-6 sm:p-7 border-b border-border/60">
  <div className="min-w-0">

    {project.status && (
      <span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-500">
        {project.status}
      </span>
    )}

    <h3 className="mt-3 font-heading text-xl sm:text-2xl font-bold leading-tight text-foreground">
      {project.title}
    </h3>

  </div>

  <button
    onClick={onClose}
    className="shrink-0 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-border/40 transition-colors"
    aria-label="Close"
  >
    <X className="h-5 w-5" />
  </button>
</div>

            {/* body */}
            <div className="p-6 sm:p-7 overflow-y-auto scrollbar-thin">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-2">Overview</h4>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{project.description}</p>

              {project.tech_stack?.length > 0 && (
                <>
                  <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.map((t) => (
                      <span key={t} className="hairline rounded px-2 py-1 font-mono text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </>
              )}

              {project.results?.length > 0 && (
                <>
                  <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-3">Key Results</h4>
                  <p className="text-sm sm:text-base font-medium text-foreground/90">
                    {project.results.join(' · ')}
                  </p>
                  {project.resultsNote && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.resultsNote}</p>
                  )}
                </>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider glow-accent hover:-translate-y-0.5 transition-transform"
                  >
                    <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md glass px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground hover:-translate-y-0.5 transition-transform"
                  >
                    <Globe className="h-4 w-4 text-primary" /> Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.paper_url && (
                  <a
                    href={project.paper_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md glass px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground hover:-translate-y-0.5 transition-transform"
                  >
                    <FileText className="h-4 w-4 text-primary" /> View Publication <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}