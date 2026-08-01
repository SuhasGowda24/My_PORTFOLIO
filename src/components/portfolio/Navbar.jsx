import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useScrollProgress, useTheme } from './Reveal';
import { PROFILE } from './resumeData';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const progress = useScrollProgress();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass-strong border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="#hero" className="group flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-dot" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-heading font-bold tracking-tight text-sm">
              SUHAS<span className="text-primary">.</span>S
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={toggle}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {/* progress gauge */}
        <div className="h-px w-full bg-transparent">
          <div
            className="h-px bg-primary transition-[width] duration-150"
            style={{ width: `${progress * 100}%`, boxShadow: '0 0 8px hsl(var(--primary))' }}
          />
        </div>
      </nav>
    </header>
  );
}