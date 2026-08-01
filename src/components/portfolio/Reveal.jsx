import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Reveal — scroll-triggered mount animation wrapper.
 */
export default function Reveal({ children, delay = 0, y = 24, className = '', once = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * useTheme — dark default, light toggle. Persists in localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.classList.toggle('light', saved === 'light');
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return { theme, toggle };
}

/**
 * useScrollProgress — 0..1 progress through the page.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}