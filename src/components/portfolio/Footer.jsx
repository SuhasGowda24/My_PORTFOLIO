import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const utc = now.toUTCString().split(' ').slice(4, 5)[0] + ' ' + now.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour12: false });
  const ist = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false });

  return (
    <footer className="relative border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-heading font-bold text-sm">SUHAS<span className="text-primary">.</span>S</span>
            <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
              © {new Date().getFullYear()} — All systems engineered locally
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SuhasGowda24" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/suhas-s-641a6a243" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:suhas@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* System Status bar */}
      <div className="border-t border-border/50 bg-background/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-primary">Ready for Collaboration</span>
          </div>
          <div className="flex items-center gap-5">
            <span>UTC {utc}</span>
            <span className="hidden sm:inline">IST {ist}</span>
            <span className="hidden md:inline">v2.0 · build 2026.07</span>
          </div>
        </div>
      </div>
    </footer>
  );
}