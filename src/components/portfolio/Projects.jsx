import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import NSense from '../../assets/images/NSense.png';
import AcademiaSync from '../../assets/images/Academia2.png';
import CYP from '../../assets/images/CYP2.png';
import DocuMind from '../../assets/images/RAG.png';
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
    github_url: 'https://github.com/SuhasGowda24/Crop_Yield_Prediction.git',
    paper_url: 'https://github.com/SuhasGowda24/research-publications/blob/main/IJESIRD%20Journal%20Paper.pdf',
    order: 3,
  },
  {
  title: 'DocuMind AI: RAG-Based Document Question Answering System',
  tech_stack: [
    'Python',
    'LangChain',
    'Sentence Transformers',
    'ChromaDB',
    'Groq API',
    'PyPDF',
    'Streamlit',
    'RAGAS'
  ],
  description: 'Built an end-to-end RAG application that answers questions from research PDFs using semantic retrieval and LLM generation. Implemented document processing, query expansion, vector search, Reciprocal Rank Fusion (RRF), context-grounded responses, and source attribution.',
  results: [
    '94.71% Faithfulness',
    '72.57% Answer Relevancy',
    '10 Evaluation Questions'
  ],
  resultsNote:
    'Preliminary RAGAS evaluation results. The evaluation used two different LLM configurations due to API quota limitations.',
  image_url: DocuMind,
  github_url: 'https://github.com/SuhasGowda24/ai-ml-knowledge-assistant',
  demo_url: 'https://ai-ml-knowledge-assistant-csaaac5cj8sva59rz9mhyp.streamlit.app/',
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
  title: 'Bank GoodCredit: Credit Risk Prediction & Customer Scoring',
  tech_stack: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'XGBoost',
    'LightGBM',
    'CatBoost',
    'Feature Engineering',
    'Model Evaluation'
  ],
  description:
    'Developed a machine learning solution to predict customer credit risk and classify customers as Good or Bad using historical account, payment, enquiry, and demographic data. Performed exploratory data analysis, leakage-safe preprocessing, feature engineering, and comparative evaluation of multiple classification algorithms. Optimized Logistic Regression using hyperparameter tuning, Gini-based model selection, and classification threshold analysis.',
  results: [
    '39.67% Gini Coefficient',
    'ROC-AUC: 0.6983',
    '55.72% Bad-Class Recall',
    '1.77 Percentage Points Above Benchmark'
  ],
  resultsNote:
    'Optimized Logistic Regression (C = 0.01) selected as the final model, exceeding the 37.90% Gini benchmark. At a 0.05 classification threshold, the model achieved 55.72% recall and 8.18% precision for Bad customers. Evaluated on a held-out test set of 4,780 records.',
  image_url: CreditRisk,
  github_url: 'https://github.com/SuhasGowda24/Bank-GoodCredit-Credit-Risk-Prediction.git',
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