import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight } from 'lucide-react';

import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const CATEGORIES = ['All', 'Machine Learning', 'Full Stack', 'Computer Vision'];

const FALLBACK = [
  {
    title: "NeuroSense: AI-Driven Parkinson's Disease Prediction Using Online Handwriting",
    category: 'Computer Vision',
    tech_stack: ['React.js', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Transfer Learning'],
    description: "Full-stack app for Parkinson's screening via handwriting analysis; CNN model achieved 87% accuracy, F1-score 0.85, 96.67% specificity. Published as a research paper at NCRIE 2025.",
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '87% Accuracy',
    order: 1,
  },
  {
    title: 'Heart Disease Prediction Using Machine Learning',
    category: 'Machine Learning',
    tech_stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
    description: 'End-to-end ML pipeline with EDA, feature engineering, and hyperparameter tuning; KNN model achieved 94.4% accuracy.',
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '94.4% Accuracy',
    order: 2,
  },
  {
    title: 'Crop Yield Prediction using Machine Learning',
    category: 'Machine Learning',
    tech_stack: ['Python', 'Scikit-learn', 'Streamlit', 'OpenWeather API'],
    description: 'Random Forest model for crop yield prediction using agricultural and real-time weather data; 85% accuracy. Published in NISCE-25 (Best Paper award).',
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '85% Accuracy',
    order: 3,
  },
  {
    title: 'Blood Donation Prediction',
    category: 'Machine Learning',
    tech_stack: ['Python', 'Scikit-learn'],
    description: 'Predictive model to identify potential blood donors; handled class imbalance and correlated features; Logistic Regression selected for 79.3% recall.',
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '79.3% Recall',
    order: 4,
  },
  {
    title: 'Cost of Living Index by Country',
    category: 'Full Stack',
    tech_stack: ['Python', 'Flask', 'SQLite'],
    description: 'Web app comparing cost of living across 50+ countries with full CRUD functionality and responsive UI.',
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '50+ Countries',
    order: 5,
  },
];

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const catSlug = (c) => c.toLowerCase().replace(/\s+/g, '');

export default function Projects() {
  const projects = FALLBACK;
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  // Per the design, filtering keeps the grid intact: non-matching cards dim
  // to low opacity rather than disappearing.
  const isDimmed = (p) => active !== 'All' && p.category !== active;

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary">04</span>
              <span className="h-px w-8 bg-primary/50" />
              <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Projects
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                    active === c
                      ? 'bg-primary text-primary-foreground glow-accent'
                      : 'hairline text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id ?? p.title} delay={0.04 * (i % 3)}>
              <ProjectCard project={p} dimmed={isDimmed(p)} onView={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({ project, dimmed, onView }) {
  const path = `projects/${catSlug(project.category)}/${slug(project.title)}`;
  return (
    <motion.article
      animate={{ opacity: dimmed ? 0.2 : 1, filter: dimmed ? 'grayscale(1)' : 'grayscale(0)' }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-xl p-6 overflow-hidden h-full flex flex-col"
    >
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute -inset-px rounded-xl border border-primary/40" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground/80 truncate">
          <FolderGit2 className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="truncate">{path}</span>
        </div>
        {project.metric && (
          <span className="shrink-0 font-mono text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded">
            {project.metric}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {(project.tech_stack || []).slice(0, 4).map((t) => (
          <span key={t} className="hairline rounded px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {t}
          </span>
        ))}
        {(project.tech_stack || []).length > 4 && (
          <span className="hairline rounded px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            +{project.tech_stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          {project.category}
        </span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:text-primary transition-colors"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.article>
  );
}