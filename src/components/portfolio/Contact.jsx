import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const CONTACT_METHODS = [
  {
    title: 'Email',
    description: 'Best for detailed discussions.',
    href: 'mailto:srisuhasgowda24@gmail.com',
    label: 'srisuhasgowda24@gmail.com',
    cta: 'Send Email',
    icon: Mail,
    accent: 'text-red-500',
    button: 'bg-red-600 hover:bg-red-700',
  },
  {
    title: 'LinkedIn',
    description: 'Professional network.',
    href: 'https://linkedin.com/in/suhas-s-641a6a243',
    label: 'linkedin.com/in/suhas-s-641a6a243',
    cta: 'Connect',
    icon: Linkedin,
    accent: 'text-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    title: 'GitHub',
    description: 'Explore my projects.',
    href: 'https://github.com/SuhasGowda24',
    label: 'github.com/SuhasGowda24',
    cta: 'Explore',
    icon: Github,
    accent: 'text-foreground',
    button: 'bg-neutral-900 hover:bg-neutral-800',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium text-primary">07</span>
            <span className="h-px w-12 bg-primary/60" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Open to software engineering and AI/ML engineering roles, research
            collaborations, and interesting projects. Reach out — I read every
            message.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((c) => (
              <ContactCard key={c.title} {...c} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({ title, description, href, label, cta, icon: Icon, accent, button }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group glass rounded-xl p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
    >
      <div>
        <Icon className={`h-8 w-8 mb-4 ${accent}`} />
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 font-mono text-xs text-muted-foreground/70 break-all">{label}</p>
      </div>

      <span
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors ${button}`}
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}