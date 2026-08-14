import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import NSense from '../../assets/images/NSense.png';
import AcademiaSync from '../../assets/images/Academia2.png';
import CYP from '../../assets/images/CYP2.png';
import Cellpred from '../../assets/images/Cellpred.png';
import COL from '../../assets/images/COL.png';
import CreditRisk from '../../assets/images/CreditRisk.png';

const FALLBACK = [
  {
    title: "NeuroSense: AI-Driven Parkinson's Disease Prediction Using Online Handwriting",
    tech_stack: ['React.js', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
    description: "Full-stack Parkinson's screening application that analyzes online handwriting. CNN model (EfficientNetB0, transfer learning) deployed live on Hugging Face Spaces with real-time inference and Grad-CAM-style visual explanations to help users understand model predictions.",
    results: ['92% Accuracy', '0.92 F1-Score', '93.3% Specificity'],
    resultsNote:
      'EfficientNetB0 with transfer learning achieved the best performance among the evaluated CNN architectures.',
    image_url: NSense,
    github_url: 'https://github.com/SuhasGowda24/NeuroSense-AI-PD',
    demo_url: 'https://neuro-sense-ai-pd.vercel.app/',
    paper_url: 'https://github.com/SuhasGowda24/Published_Paper-NeuroSense-AI-Driven-Parkinson-s-Disease-Prediction-Using-Online-Handwriting/blob/main/Published%20Paper%20NeuroSense%20PD-(KSIT).pdf',
    order: 1,
  },
   {
    title: 'Academia Sync: Full-Stack Academic Management System',
    tech_stack: ['React.js', 'Django REST Framework', 'PostgreSQL (Neon)', 'JWT', 'Ollama', 'Vercel', 'Render'],
    description:
    'Multi-college academic management platform with college-specific role-based access for administrators, teachers, and students. Students are associated with their registered institution and can access only their college’s academic data, while the platform manages attendance, timetables, assignments, grades, custom forms, and AI-assisted low-attendance email drafting.',
    results: ['Role-Based Dashboards', 'End-to-End Academic Workflows', 'AI-Assisted Email Drafting'],
    resultsNote:
      'Built and deployed as an end-to-end full-stack application with a React frontend on Vercel, Django REST APIs on Render, PostgreSQL hosted on Neon, JWT-based authentication, and Ollama for locally running AI-assisted email generation.',
    image_url: AcademiaSync,
    github_url: 'https://github.com/SuhasGowda24/Academia_Sync',
    demo_url: 'https://academia-sync-blue.vercel.app/',
    order: 2,
  },
  {
    title: 'AI-Driven Crop Yield Prediction for Sustainable Agriculture',
    tech_stack: ['Python', 'Scikit-learn', 'Streamlit', 'OpenWeather API'],
    description:  'Machine learning application for crop yield prediction using agricultural, environmental, and real-time weather data. The system combines Random Forest with live weather inputs through the OpenWeather API and presents predictions through a Streamlit interface.',
    results: [
    '85% Prediction Accuracy',
    'Real-Time Weather Integration',
    'Streamlit Prediction Interface',
  ],
    resultsNote:
       'Designed to support crop planning and resource decisions by combining historical agricultural data with current weather conditions.',
    image_url: CYP,
    github_url: 'https://github.com/pavanu123/Crop_Yeild_Prediction_Using_ML',
    paper_url: 'https://github.com/SuhasGowda24/research-publications/blob/main/IJESIRD%20Journal%20Paper.pdf',
    order: 3,
  },
  {
    title: 'Cell Phone Price Range Prediction',
    tech_stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
    description: 'Multiclass classification of mobile phone price ranges using hardware and connectivity specs; compared 7 models and tuned with GridSearchCV. Tuned Logistic Regression achieved 98.25% test accuracy and 96.12% cross-validation accuracy.',
    results: [
      '98.25% Test Accuracy · 96.12% 5-Fold CV Accuracy · Logistic Regression Selected'
    ],
    image_url: Cellpred,
    github_url: 'https://github.com/SuhasGowda24/Cellphone-Price-Range-Prediction',
    paper_url: '',
    // metric: '98.25% Accuracy',
    order: 4,
  },
   {
    title: 'Cost of Living Index by Country',
    tech_stack: ['Python', 'Flask', 'SQLite'],
    description: 'Web app comparing cost of living across countries, letting users explore and compare cost-of-living metrics with a responsive, data-driven UI.',
    results: [  'Interactive Cost Comparison',
  'Full CRUD Operations',
  'Responsive Web Interface',],
    resultsNote: 'Designed to simplify the management and comparison of cost-of-living information through a centralized web application.',
    image_url: COL,
    github_url: 'https://github.com/SuhasGowda24/Mini_Project-Cost_of_living',
    demo_url: 'https://mini-project-cost-of-living.onrender.com/',
    order: 5,
  },
  {
  title: 'Credit Risk Prediction & Customer Scoring',
  tech_stack: [
    'Python',
    'Pandas',
    'Scikit-learn',
    'Feature Engineering',
    'Machine Learning',
    'Model Evaluation'
  ],
  description:
    'Ongoing banking risk analytics project focused on predicting customer credit quality and identifying potential credit default risk using historical account, payment, enquiry, and demographic data.',
  // results: [
  //   'Credit Risk Classification',
  //   'Feature Engineering & Selection',
  //   'Gini-Based Model Evaluation'
  // ],
  // resultsNote:
  //   'Currently working on data exploration, feature engineering, model development, Gini-based evaluation, and rank-order analysis as part of the credit risk modeling workflow.',
  image_url: CreditRisk,
  github_url: '',
  demo_url: '',
  paper_url: '',
  status: 'Currently Building',
  order: 6,
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
        {project.status && (
          <span className="absolute top-3 right-3 rounded-full bg-amber-500/10 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-500 border border-amber-500/25">
            {project.status}
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