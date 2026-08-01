import { ArrowDown, FileDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE, generateResume } from './resumeData';
import { Image } from '../../components/ui/image';

const TITLE = 'Machine Learning Engineer | Full Stack Developer | AI Engineer';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      {/* ambient glows */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary/60" />
              Hi, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading font-extrabold tracking-[-0.03em] leading-[1] text-[clamp(2.5rem,8vw,5.5rem)]"
            >
              Suhas<span className="text-primary">.</span> S
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 font-mono text-sm sm:text-base text-muted-foreground"
            >
              <span className="text-primary">$</span> {TITLE}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80 leading-relaxed"
            >
              Building end-to-end AI solutions and scalable web applications —{' '}
              <span className="text-primary font-medium">from data to deployment.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {PROFILE.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider glow-accent transition-transform hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <button
                onClick={generateResume}
                className="group inline-flex items-center justify-center gap-2 rounded-md glass px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-foreground transition-transform hover:-translate-y-0.5"
              >
                <FileDown className="h-4 w-4 text-primary" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-9 flex items-center gap-5 text-muted-foreground"
            >
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </motion.div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary glow-accent">
                <div className="h-full w-full rounded-full overflow-hidden bg-card/60 backdrop-blur-sm">
                  {PROFILE.photo ? (
                    <Image
                      src={PROFILE.photo}
                      alt="Suhas S"
                      fittingType="fill"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center px-6">
                      <span className="font-heading font-extrabold text-5xl text-primary/70">SS</span>
                      <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 leading-snug">
                        Add your photo in<br />resumeData → PROFILE.photo
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* orbiting dot */}
              <span className="absolute -top-2 right-8 h-3 w-3 rounded-full bg-primary pulse-dot" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs font-mono animate-bounce">
        scroll
      </div>
    </section>
  );
}