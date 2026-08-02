import { useEffect, useState } from 'react';

const NAME = 'SUHAS';

/**
 * Intro loader — letter-by-letter name reveal, glow pulse, tracking-out
 * tagline with a pulsing dot, traveling shimmer on the progress line, and a
 * scale+blur exit instead of a flat fade. Pure CSS, no framer-motion needed.
 *
 * Usage in App.jsx:
 *   const [introDone, setIntroDone] = useState(false);
 *   return (
 *     <>
 *       {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
 *       <Navbar /> ...rest of the site
 *     </>
 *   );
 */
export default function IntroLoader({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1700);
    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const doneTimer = setTimeout(() => onComplete?.(), 550);
    return () => clearTimeout(doneTimer);
  }, [exiting, onComplete]);

  return (
    <div
      className={[
        'fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden',
        'transition-all duration-500 ease-in-out',
        exiting ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0',
      ].join(' ')}
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* soft glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-blob-a" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-blob-b" />
      </div>

      {/* radial glow pulsing directly behind the name */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* name — letter by letter reveal */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter whitespace-nowrap">
          {NAME.split('').map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-letter-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {letter}
            </span>
          ))}
          {/* <span
            className="inline-block text-primary animate-letter-in"
            style={{ animationDelay: `${NAME.length * 60}ms` }}
          >
            .
          </span> */}
          {" "}
          <span
            className="inline-block animate-letter-in"
            style={{ animationDelay: `${(NAME.length + 1) * 60}ms` }}
          >
            S
          </span>
        </h1>

        {/* tagline — slides up, with a small pulsing dot before it */}
        <div className="overflow-hidden h-12 flex items-center mt-1 gap-2">
          <span className="relative flex h-1.5 w-1.5 animate-slide-up" style={{ animationDelay: '480ms' }}>
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-dot" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span
            className="font-mono text-xl md:text-2xl text-muted-foreground font-light tracking-[0.5em] animate-slide-up"
            style={{ animationDelay: '480ms' }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* progress line with a traveling shimmer */}
        <div className="relative mt-8 h-px w-[200px] overflow-hidden animate-line-grow">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-foreground/60 to-transparent animate-shimmer-travel" />
        </div>
      </div>
    </div>
  );
}