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
            <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
             <p className="font-mono text-xs text-muted-foreground">
  <span className="text-primary"></span> © 2026 Suhas S — built with React, Tailwind & too much coffee.
</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SuhasGowda24" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/suhas-s-641a6a243" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:srisuhasgowda24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}