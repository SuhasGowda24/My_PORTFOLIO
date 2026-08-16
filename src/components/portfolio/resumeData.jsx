import profilePhoto from '../../assets/images/profilepic.png';
import companyLogo from '../../assets/images/Gleamator.ico';
import rubixeLogo from '../../assets/images/rubixelogo.png';
// import PublishedNeuroSense from '../../../public/Papers/Published Paper NeuroSense PD-(KSIT).pdf'; 

export const PROFILE = {
  name: 'Suhas S',
  title: 'AI Engineer | Machine Learning Engineer | Full-Stack Developer',
  pitch: 'Building end-to-end AI solutions and scalable web applications — from data to deployment.',
  // Replace this with a URL to your photo (or upload one and paste the file_url here).
  photo: profilePhoto,
  bio: 'Computer Science undergraduate passionate about building AI-powered applications, computer vision systems, and scalable web solutions using Python, React, TensorFlow, Flask, and Scikit-learn.',
  email: 'srisuhasgowda24@gmail.com',
  location: 'Bengaluru, India',
  links: {
    linkedin: 'https://linkedin.com/in/suhas-s-641a6a243',
    github: 'https://github.com/SuhasGowda24',
  },
};

export const EXPERIENCE = [
  {
    role: 'Artificial Intelligence Engineer Intern',
    company: 'Rubixe',
    companyLogo: rubixeLogo,
    link: 'https://rubixe.com/',
    period: 'Feb 2026 – Present',
    location: 'Bengaluru, Karnataka, India · Remote',
    points: [
      'Gaining practical, hands-on experience in Data Science, Machine Learning, Deep Learning, and Artificial Intelligence.',
      'Working on data science projects and a client project, building skills in data analysis and applied machine learning.',
      'Moving into AI-focused work, developing practical skills in AI and Deep Learning.',
    ],
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'Data Science', 'AI'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Gleamator Technologies',
    companyLogo: companyLogo,
    link: 'https://gleamator.in/',
    period: 'Feb 2026 – May 2026',
    location: 'Bengaluru, Karnataka, India',
      points: [
      'Developed and deployed AcademiaFlow, a full-stack academic management system with role-based dashboards for Admin, Teacher, and Student users.',
      'Designed and integrated RESTful APIs using Django REST Framework with MySQL.',
      'Built responsive UI using React.js to automate academic workflows.',
    ],
    tags: ['ReactJS', 'Django', 'PostgreSQL', 'REST APIs', 'Full-Stack'],
  },
];

export const EDUCATION = [
  {
    school: 'K S School of Engineering and Management, Bengaluru',
    degree: 'B.E. in Computer Science',
    period: '2022 — 2026',
    score: 'CGPA: 8.02',
    achievement:
      'Developed strong problem-solving, adaptability, and teamwork skills through academic and project-based experiences.',
  },
  {
    school: 'Sri Chaitanya PU College, Bengaluru',
    degree: 'Pre-University — PCMC',
    period: '2021 — 2022',
    score: '79.67%',
    points: [],
  },
];

export const SKILLS = [
  {
    group: 'Frontend Development',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    group: 'Backend Development',
    items: ['Python', 'Flask', 'Django', 'Node.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    group: 'AI & Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'Keras', 'Feature Engineering', 'Data Preprocessing', 'Hyperparameter Tuning'],
  },
  {
    group: 'Computer Vision',
    items: ['OpenCV', 'CNN'],
  },
  {
    group: 'Databases & Deployment',
    items: ['MySQL', 'MongoDB', 'Render', 'Vercel', 'Hugging Face Spaces'],
  },
  {
    group: 'Developer Tools',
    items: ['GitHub', 'VS Code', 'Jupyter Notebook', 'Postman'],
  },
];

export const PUBLICATIONS = [
  {
    title: "NeuroSense: AI-Driven Parkinson's Disease Prediction Using Online Handwriting",
    venue: 'National Conference on Recent Innovations in Engineering - 2025',
    identifierLabel: 'ISBN',
    identifierValue: '978-81-929425-1-3',
    website: 'https://github.com/SuhasGowda24/Published_Paper-NeuroSense-AI-Driven-Parkinson-s-Disease-Prediction-Using-Online-Handwriting/blob/main/Published%20Paper%20NeuroSense%20PD-(KSIT).pdf',
    authors: ['Jayashubha J', 'Suhas S', 'Sakesh P', 'Shashank D Urs', 'Pavan Kumar'],
    url:  '/Papers/Published%20Paper%20NeuroSense%20PD-(KSIT).pdf',
    abstract:
      "A full-stack screening application that analyzes online handwriting to detect early Parkinson's disease indicators using a CNN with transfer learning. The model achieved 87% accuracy, an F1-score of 0.85, and 96.67% specificity on the held-out test set.",
  },
  {
    title: 'AI-Driven Crop Yield Prediction for Sustainable Agriculture',
    venue: 'International Journal of Engineering Science Invention Research & Development (IJESIRD)',
    issue: 'Vol. 12, Special Issue 11 · May 2026',
    identifierLabel: 'E-ISSN',
    identifierValue: '2349-6185',
    website: 'https://www.ijesird.com/vol-12-special-issue-11-may-2026-proceeding-of-conference/',
    authors: ['Pavan U', 'Suhas S', 'Sakesh P', 'Shashank D Urs', 'Rajesh P C'],
    url: 'https://www.ijesird.com/wp-content/uploads/2026/05/1.pdf',
    abstract:
      'A Random Forest based approach to predicting crop yields from agricultural and real-time weather data, achieving 85% accuracy.',
  },
];

 
export const CERTIFICATIONS = [
  {
    name: 'AWS Academy Graduate — AWS Academy Cloud Developing',
    issuer: 'AWS Academy',
    year: '2025',
    url: 'https://www.credly.com/go/druSiNUR',
    fileUrl: '/Certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Developing_Badge20250611-30-yyvbd4.pdf',
    verified: true,
    description:
      'Cloud application development fundamentals across 40 course hours, covering compute, storage, and deployment on AWS.',
  },
  {
    name: 'Microsoft Applied Skills: Power Apps',
    issuer: 'Microsoft',
    year: '2025',
    url: 'https://learn.microsoft.com/en-us/users/suhass-9465/credentials/applied-skill/create-manage-canvas-apps-power-apps?tab=applied-skills-tab',
    fileUrl: '/Certificates/Credentials%20-%20suhass-9465%20_%20Microsoft%20Learn.pdf',
    verified: true,
    description:
      'Microsoft-verified credential for building canvas apps, model-driven apps, and automating workflows with Power Apps.',
  },
  {
    name: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2025',
    url: 'https://badges.parchment.com/public/assertions/IbD0hrinRmO3WBmHM2ziXA',
    fileUrl: '/Certificates/Postman%20API%20Fundamentals%20Student%20Expert.pdf',
    verified: true,
    description:
      'Postman credential demonstrating foundational skills in API requests, collections, testing workflows, and working with APIs using Postman.',
  },
 {
  name: 'Learn React by Building the Simplest App from Scratch',
  issuer: 'Udemy',
  year: '2025',
  url: 'https://ude.my/UC-3e8b7ab9-772d-4fd5-b43f-5a1f70bbc377',
  fileUrl: '/Certificates/react%200%20simplest%20app.pdf',
  verified: true,
  description:
    'Introductory React course covering component structure and building a first app from scratch.',
},

{
  name: 'Applied AI: Practical Implementations',
  issuer: 'Microsoft & SAP (TechSaksham)',
  year: '2024',
  url: '',
  fileUrl:
    '/Certificates/Certificate%20Applied%20Artificial%20Intelligence_%20Practical%20Implementations.pdf',
  verified: false,
  description:
    'Hands-on program covering applied artificial intelligence concepts and practical implementations using Microsoft & SAP tools and frameworks.',
},

{
  name: 'Introduction to Artificial Intelligence',
  issuer: 'Infosys Springboard',
  year: '2024',
  url: '',
  fileUrl: '/Certificates/infosys%20springboard%20certificate.pdf',
  verified: false,
  description:
    'Foundational course covering core AI concepts, completed through Infosys Springboard.',
},

{
  name: 'Generative AI Literacy',
  issuer: 'NASSCOM FutureSkills Prime',
  year: '2025',
  url: '',
  fileUrl: '/Certificates/nasscom-Gen%20AI.pdf',
  verified: false,
  description:
    'Course participation aligned to competency standards developed by the IT-ITeS Sector Skills Council, NASSCOM.',
},
{
  name: 'Web Application Development Workshop',
  issuer: 'PyGenicarc',
  year: '2024',
  url: '',
  fileUrl: '/Certificates/web%20application%20development.png',
  fileType: 'image',
  verified: false,
  description:
    'Workshop on building and deploying modern web applications, covering frontend fundamentals, backend APIs, and deployment basics.',
},
  {
    name: 'Full-Stack Foundations — 7 Courses',
    issuer: 'CodeChef',
    year: '2024–2025',
    url: 'https://www.codechef.com/certificates/verify',
    verified: false,
    description:
      'Learn HTML/CSS, CSS Intermediate, Projects using HTML/CSS, Learn JavaScript, Learn Python Programming, Learn SQL, and UX for Web Developers.',
  },
];
 
export const ACHIEVEMENTS = [
  {
  title: 'Full-Stack Developer Internship Completion',
  detail:
    'Successfully completed the Full Stack Developer internship at Gleamator Technologies.',
  icon: 'rocket',
  date: '2026',
  fileUrl: '/Certificates/Gleamator%20intern_completion%20.pdf',
},
{
  title: 'National-Level Project Competition',
  detail:
    'Participated in the National Level Project Competition 2025 at Bangalore Institute of Technology with NeuroSense: AI-Driven Parkinson’s Disease Prediction Using Online Handwriting.',
  icon: 'award',
  date: '14 Nov 2025',
  fileUrl: '/Certificates/SUHAS%20%20BIT%20participants%20certificate.pdf',
},
 {
    title: 'Published Researcher',
    detail:
      'Co-authored research papers published across national conference and international journal venues.',
    icon: 'book',
    fileUrl: '/Certificates/google%20publish%20cert.pdf',
  },

  {
    title: 'Research Presenter — NeuroSense',
    detail:
      'Presented NeuroSense research at NCRIE 2025, K.S. Institute of Technology.',
    icon: 'award',
    fileUrl: '/Certificates/Certificate%20of%20Publication.pdf',
  },

  {
    title: 'Research Presenter — Crop Yield Prediction',
    detail:
      'Presented "Crop Yield Prediction Using ML" at NISCE 2025, RR Institute of Technology.',
    icon: 'award',
    fileUrl: '/Certificates/ISBN-CERTIFICAT-SUHAS%20S%20.pdf',
  },
];

