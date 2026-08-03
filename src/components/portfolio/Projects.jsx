import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import NSense from '../../assets/images/NSense.png';

const FALLBACK = [
  {
    title: "NeuroSense: AI-Driven Parkinson's Disease Prediction Using Online Handwriting",
    category: 'Computer Vision',
    tech_stack: ['React.js', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Transfer Learning'],
    description: "Full-stack app for Parkinson's screening via handwriting analysis; CNN model achieved 87% accuracy, F1-score 0.85, 96.67% specificity. Published as a research paper at NCRIE 2025.",
    image_url: NSense,
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '87% Accuracy',
    order: 1,
  },
   {
    title: 'Academia Sync: Full-Stack Academic Management System',
    category: 'Full Stack',
    tech_stack: ['React', 'Django REST Framework', 'MySQL', 'JWT', 'Ollama (LLM)'],
    description: 'Multi-college academic management platform with role-based access for admins, teachers, and students — covering attendance, timetables, assignments, grades, and custom forms. Includes AI-generated email drafts for low-attendance alerts via a locally-run LLM.',
    image_url: '',
    github_url: 'https://github.com/SuhasGowda24/Academia_Sync',
    paper_url: '',
    metric: '20+ Modules',
    order: 2,
  },
  {
    title: 'Crop Yield Prediction using Machine Learning',
    category: 'Machine Learning',
    tech_stack: ['Python', 'Scikit-learn', 'Streamlit', 'OpenWeather API'],
    description: 'Random Forest model for crop yield prediction using agricultural and real-time weather data; 85% accuracy. Published in NISCE-25 (Best Paper award).',
    image_url: '',
    github_url: 'https://github.com/SuhasGowda24',
    paper_url: '',
    metric: '85% Accuracy',
    order: 3,
  },
  {
    title: 'Mobile Phone Price Range Prediction',
    category: 'Machine Learning',
    tech_stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
    description: 'Multiclass classification of mobile phone price ranges using hardware and connectivity specs; compared 7 models and tuned with GridSearchCV. Tuned Logistic Regression achieved 98.25% test accuracy and 96.12% cross-validation accuracy.',
    image_url: '',
    github_url: 'https://github.com/SuhasGowda24/Cellphone-Price-Range-Prediction',
    paper_url: '',
    metric: '98.25% Accuracy',
    order: 3,
  },
  {
    title: 'Cost of Living Index by Country',
    category: 'Full Stack',
    tech_stack: ['Python', 'Flask', 'SQLite'],
    description: 'Web app comparing cost of living across 50+ countries with full CRUD functionality and responsive UI.',
    image_url: '',
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
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium text-primary">04</span>
            <span className="h-px w-12 bg-primary/60" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id ?? p.title} delay={0.04 * (i % 3)}>
              <ProjectCard project={p} onView={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({ project, onView }) {
  return (
    <motion.article
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative glass rounded-2xl overflow-hidden h-full flex flex-col"
    >
      {/* thumbnail */}
      <div className="relative aspect-[16/10] w-full bg-white flex items-center justify-center overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
             className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
            <FolderGit2 className="h-10 w-10 text-primary/30" />
          </div>
        )}

        {/* overlays on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
        <span className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-primary border border-primary/20">
          {project.category}
        </span>
        {project.metric && (
          <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-primary border border-primary/20">
            {project.metric}
          </span>
        )}
      </div>

      {/* body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <button
          onClick={onView}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary px-4 py-2.5 text-sm font-medium transition-colors"
        >
          Explore Case Study
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}