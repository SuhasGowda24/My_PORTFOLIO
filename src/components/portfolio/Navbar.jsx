import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useScrollProgress, useTheme } from './Reveal';
import { PROFILE } from './resumeData';

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock background scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <nav
        className={[
          'pointer-events-auto glass-strong border border-border/60 rounded-full',
          'transition-[margin-top,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'mt-3 shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.35)]'
            : 'mt-5 shadow-none',
        ].join(' ')}
      >
        <div className="flex items-center h-12 px-2">
          {/* logo — always visible, never shifts position */}
          <a href="#hero" className="flex items-center gap-2 px-2 shrink-0" onClick={closeMenu}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-dot" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-heading font-black tracking-[0.08em] text-sm uppercase whitespace-nowrap">
              SUHAS<span className="text-primary"></span>{" "}
              <span className="text-primary">S</span>
            </span>
          </a>

          {/* link rail — desktop only, clipped to 0 width until scrolled, then unfurls outward from the logo */}
          <div
            className={[
              'hidden md:flex items-center gap-0.5 overflow-hidden',
              'transition-[max-width,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
              scrolled ? 'max-w-[520px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0',
            ].join(' ')}
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* social icons — desktop only, join the bar alongside the links once scrolled */}
          <div
            className={[
              'hidden md:flex items-center overflow-hidden shrink-0',
              'transition-[max-width,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
              scrolled ? 'max-w-[80px] opacity-100 ml-1' : 'max-w-0 opacity-0 ml-0',
            ].join(' ')}
          >
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* hamburger — mobile only, opens the full-section menu below */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="md:hidden p-2 ml-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* mail + theme toggle — present from the very first paint, pinned to the right edge */}
          <div className="flex items-center gap-0.5 pl-1 ml-auto shrink-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
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

        {/* scroll gauge — only reveals once the bar has extended (desktop) */}
        <div
          className={[
            'hidden md:block h-px w-full bg-transparent transition-opacity duration-700',
            scrolled ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <div
            className="h-px bg-primary transition-[width] duration-150"
            style={{ width: `${progress * 100}%`, boxShadow: '0 0 8px hsl(var(--primary))' }}
          />
        </div>
      </nav>

      {/* mobile menu — backdrop + dropdown panel, mounted only on small screens */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="md:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm pointer-events-auto animate-in fade-in duration-200"
          />
          <div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            className="md:hidden fixed top-20 inset-x-4 z-50 pointer-events-auto glass-strong border border-border/60 rounded-2xl overflow-hidden shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.25)]"
          >
            <nav className="flex flex-col py-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="px-5 py-3 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-primary/[0.06] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-2 border-t border-border/60 py-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                onClick={closeMenu}
                className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}