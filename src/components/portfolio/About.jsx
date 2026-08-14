import { GraduationCap, MapPin, Brain, Code2, ScanSearch, Award } from "lucide-react";
import Reveal from "./Reveal";
import { PROFILE } from "./resumeData";

const EXPERTISE = [
  {
    icon: Brain,
    title: "Machine Learning",
    points: ["TensorFlow & Keras", "Scikit-learn", "Model Development"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    points: ["React.js", "Flask & Django", "REST APIs"],
  },
  {
    icon: ScanSearch,
    title: "Computer Vision",
    points: ["OpenCV", "CNN Architectures", "Image Processing"],
  },
  {
    icon: Award,
    title: "Research",
    points: ["International Journal Publication", "National Conference Paper"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="01" title="About Me" />
        </Reveal>

        {/* intro — full width, own row */}
        <Reveal delay={0.05}>
          <div className="mt-14 max-w-5xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              Transforming ideas into{" "}
              <span className="text-primary italic">
              intelligent software
              </span>{" "}
              through AI, Machine Learning, and scalable Full-Stack Development.
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground max-w-3xl">{PROFILE.bio}</p>

            {/* <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-3 rounded-2xl
border border-border/60 bg-card/70 backdrop-blur px-5 py-4
transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <div>
                <p className="font-semibold text-foreground">
                  Bachelor of Engineering
                </p>

                <p className="text-sm text-foreground/90">
                  Computer Science
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  K S School of Engineering and Management
                </p>

                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  2022 – 2026
                </p>
              </div>
              </div>
            </div> */}
          </div>
        </Reveal>

        {/* what I build — card grid, full width, own row below */}
        <Reveal delay={0.15}>
          <div className="mt-16">
            <h3 className="
font-heading
text-lg
font-semibold
tracking-wide
text-foreground
mb-8
">
              Core Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERTISE.map((item) => (
                <ExpertiseCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExpertiseCard({ icon: Icon, title, points }) {
  return (
    <div className="
group
relative
rounded-2xl
border
border-border/50
bg-card/40
backdrop-blur
p-6
overflow-hidden
transition-all
duration-300
hover:border-primary/40
hover:bg-card/70
hover:shadow-xl
hover:-translate-y-1
">
      {/* thin top accent bar, brightens on hover — matches your glow-accent language instead of a generic shadow */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary/30 group-hover:bg-primary transition-colors duration-300" />

      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>

      <h4 className="font-heading text-lg font-semibold text-foreground">{title}</h4>

      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-mono text-sm font-medium text-primary">
        {index}
      </span>

      <span className="h-px w-12 bg-primary/60" />

      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}