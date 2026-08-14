import { jsPDF } from 'jspdf';
import profilePhoto from '../../assets/images/profilepic.png';
import companyLogo from '../../assets/images/Gleamator.ico';
import rubixeLogo from '../../assets/images/rubixelogo.png';

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
    period: '2020 — 2022',
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
    venue: 'National Conference on Recent Innovations in Engineering (2025)',
    isbn: '978-81-929425-1-3',
    award: false,
    url: '',
    abstract:
      "A full-stack screening application that analyzes online handwriting to detect early Parkinson's disease indicators using a CNN with transfer learning. The model achieved 87% accuracy, an F1-score of 0.85, and 96.67% specificity on the held-out test set.",
  },
  {
    title: 'Crop Yield Prediction using Machine Learning',
    venue: 'NISCE-25 Conference Proceedings',
    isbn: '978-93-49421-81-3',
    award: true,
    url: '',
    abstract:
      'A Random Forest based approach to predicting crop yields from agricultural and real-time weather data, achieving 85% accuracy. Awarded Best Paper at NISCE-25 for its applied impact on precision agriculture.',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Applied AI: Practical Implementations',
    issuer: 'Microsoft & SAP (TechSaksham)',
    year: '2024',
    url: '',
    description:
      'Hands-on program covering applied artificial intelligence concepts and practical implementations using Microsoft & SAP tools and frameworks.',
  },
  {
    name: 'Web Application Development Workshop',
    issuer: 'PyGenicarc',
    year: '2024',
    url: '',
    description:
      'Workshop on building and deploying modern web applications, covering frontend fundamentals, backend APIs, and deployment basics.',
  },
  {
    name: 'Microsoft Applied Skills: Power Apps',
    issuer: 'Microsoft',
    year: '2024',
    url: '',
    description:
      'Microsoft-verified credential for building canvas apps, model-driven apps, and automating workflows with Power Apps.',
  },
];

export const ACHIEVEMENTS = [
  { title: 'Best Paper Award', detail: 'NISCE-25 — for "Crop Yield Prediction using Machine Learning".', icon: 'award' },
  { title: 'Published Researcher', detail: 'Two peer-reviewed papers in national engineering conferences.', icon: 'book' },
  { title: 'Full-Stack Project Delivery', detail: 'Shipped AcademiaFlow end-to-end during industry internship.', icon: 'rocket' },
];

/**
 * Generates a clean, text-based resume PDF on the fly and triggers a download.
 */
export function generateResume() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();
  const M = 48;
  let y = 56;

  const ink = [15, 23, 42];
  const teal = [0, 122, 130];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...ink);
  doc.text(PROFILE.name, M, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(90, 90, 90);
  doc.text(PROFILE.title, M, y);
  y += 16;
  doc.text(PROFILE.links.linkedin + '  |  ' + PROFILE.links.github, M, y);
  y += 22;

  doc.setDrawColor(...teal);
  doc.setLineWidth(1);
  doc.line(M, y, W - M, y);
  y += 20;

  const heading = (t) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...teal);
    doc.text(t.toUpperCase(), M, y);
    y += 14;
    doc.setDrawColor(210, 210, 210);
    doc.setLineWidth(0.5);
    doc.line(M, y, W - M, y);
    y += 14;
  };

  const para = (t) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const lines = doc.splitTextToSize(t, W - M * 2);
    doc.text(lines, M, y);
    y += lines.length * 13 + 8;
  };

  const bullet = (t) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const lines = doc.splitTextToSize(t, W - M * 2 - 12);
    doc.text('•  ' + lines[0], M, y);
    doc.text(lines.slice(1), M + 12, y + 13 * (lines.length - 1));
    y += lines.length * 13 + 4;
  };

  heading('Profile');
  para(PROFILE.bio);

  heading('Experience');
  EXPERIENCE.forEach((e) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...ink);
    doc.text(`${e.role} — ${e.company}`, M, y);
    y += 13;
    e.points.forEach(bullet);
  });
  y += 6;

  heading('Skills');
  SKILLS.forEach((s) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`${s.group}:`, M, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    doc.text(s.items.join(', '), M + 90, y);
    y += 14;
  });
  y += 6;

  heading('Publications');
  PUBLICATIONS.forEach((p) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...ink);
    doc.text(p.title, M, y, { maxWidth: W - M * 2 });
    y += 13;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(90, 90, 90);
    doc.text(`${p.venue}${p.award ? ' — Best Paper Award' : ''}  |  ISBN ${p.isbn}`, M, y, { maxWidth: W - M * 2 });
    y += 16;
  });
  y += 4;

  heading('Certifications');
  CERTIFICATIONS.forEach((c) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(`•  ${c.name} — ${c.issuer}`, M, y, { maxWidth: W - M * 2 });
    y += 14;
  });

  doc.save('Suhas_S_Resume.pdf');
}