import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Reusable pop-up modal used for certifications, publications, etc.
 * Pass `open`, `onClose`, a badge string, a title, optional body children,
 * and an array of `links` ({ href, label, primary }) for action buttons.
 */
export default function Modal({ open, onClose, badge, title, children, links = [] }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl glass-strong rounded-xl overflow-hidden max-h-[85vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="flex items-start justify-between gap-4 p-6 sm:p-7 border-b border-border/60">
              <div className="min-w-0">
                {badge && (
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {badge}
                  </div>
                )}
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-bold leading-tight text-foreground">
                  {title}
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

            <div className="p-6 sm:p-7 overflow-y-auto scrollbar-thin">
              {children}

              {links.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-transform ${
                        l.primary
                          ? 'bg-primary text-primary-foreground glow-accent'
                          : 'glass text-foreground'
                      }`}
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}