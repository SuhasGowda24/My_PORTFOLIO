// import { useEffect, useRef, useState } from 'react';
// import { ChevronUp } from 'lucide-react';
// import { useScrollProgress } from './Reveal';

// const SECTIONS = [
//   { label: 'Home', href: '#hero' },
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Certifications', href: '#certifications' },
//   { label: 'Contact', href: '#contact' },
// ];

// export function SideNav() {
//   const [active, setActive] = useState(0);
//   const [segmentFill, setSegmentFill] = useState(0); // 0–1 progress within the active segment
//   const ids = useRef(SECTIONS.map((s) => s.href.slice(1)));

//   useEffect(() => {
//     const elements = ids.current.map((id) => document.getElementById(id)).filter(Boolean);
//     if (elements.length === 0) return;

//     const onScroll = () => {
//       const mid = window.innerHeight / 2;
//       let current = 0;
//       for (let i = 0; i < elements.length; i++) {
//         const rect = elements[i].getBoundingClientRect();
//         if (rect.top <= mid) current = i;
//       }
//       setActive(current);

//       const el = elements[current];
//       const rect = el.getBoundingClientRect();
//       const fill = Math.min(1, Math.max(0, (mid - rect.top) / rect.height));
//       setSegmentFill(fill);
//     };

//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll);
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-0">
//       {SECTIONS.map((s, i) => {
//         const isActive = i === active;
//         const isDone = i < active;
//         return (
//           <div key={s.href} className="flex flex-col items-end">
//             <a
//               href={s.href}
//               className={[
//                 'group flex items-center gap-2 py-1.5',
//                 'transition-all duration-300',
//               ].join(' ')}
//             >
//               {/* label — permanently shown for the active section, ghosted for others until hover */}
//               <span
//                 className={[
//                   'font-mono text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300',
//                   isActive
//                     ? 'opacity-100 text-foreground translate-x-0'
//                     : 'opacity-0 group-hover:opacity-70 text-muted-foreground translate-x-1 group-hover:translate-x-0',
//                 ].join(' ')}
//               >
//                 {s.label}
//               </span>

//               {/* index + dot */}
//               <span className="relative flex items-center justify-center w-4">
//                 {isActive && (
//                   <span className="absolute h-4 w-4 rounded-full bg-primary/15 animate-ping" />
//                 )}
//                 <span
//                   className={[
//                     'relative rounded-full border-2 transition-all duration-300',
//                     isActive
//                       ? 'h-2.5 w-2.5 bg-primary border-primary'
//                       : isDone
//                       ? 'h-1.5 w-1.5 bg-primary/50 border-primary/50'
//                       : 'h-1.5 w-1.5 bg-transparent border-muted-foreground/40 group-hover:border-primary/60',
//                   ].join(' ')}
//                 />
//               </span>
//             </a>

//             {/* segment — fills top-to-bottom as you scroll through this section */}
//             {i < SECTIONS.length - 1 && (
//               <div className="relative w-0.5 h-6 bg-border/30 rounded-full overflow-hidden mr-2">
//                 <div
//                   className="w-full bg-primary origin-top transition-[height] duration-150"
//                   style={{
//                     height: isDone ? '100%' : isActive ? `${segmentFill * 100}%` : '0%',
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /**
//  * Scroll-to-top — a ring that draws itself in as an SVG stroke tied to total
//  * page scroll progress, not a static circle. Fades in only once you've scrolled.
//  */
// export function ScrollTop() {
//   const progress = useScrollProgress();
//   const [visible, setVisible] = useState(false);
//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;

//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY > 400);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <button
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       className={[
//         'fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full glass-strong border border-border/60',
//         'flex items-center justify-center transition-all duration-500',
//         visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none',
//       ].join(' ')}
//     >
//       <svg className="absolute inset-0 -rotate-90" width="44" height="44" viewBox="0 0 44 44">
//         <circle
//           cx="22"
//           cy="22"
//           r={radius}
//           fill="none"
//           stroke="hsl(var(--border))"
//           strokeWidth="2"
//           opacity="0.4"
//         />
//         <circle
//           cx="22"
//           cy="22"
//           r={radius}
//           fill="none"
//           stroke="hsl(var(--primary))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference * (1 - progress)}
//           style={{ transition: 'stroke-dashoffset 150ms linear' }}
//         />
//       </svg>
//       <ChevronUp className="h-4 w-4 text-foreground relative" />
//     </button>
//   );
// }