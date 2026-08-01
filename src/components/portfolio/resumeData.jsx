import { jsPDF } from 'jspdf';

export const PROFILE = {
  name: 'Suhas S',
  title: 'Machine Learning Engineer | Full Stack Developer | AI Engineer',
  pitch: 'Building end-to-end AI solutions and scalable web applications — from data to deployment.',
  // Replace this with a URL to your photo (or upload one and paste the file_url here).
  photo: '',
  bio: 'Computer Science undergraduate (2022–2026) with hands-on experience across Machine Learning, Deep Learning, Computer Vision, and Full Stack Development. Skilled in building scalable web applications, REST APIs, and predictive models using Python, React, TensorFlow, and Scikit-learn. Currently seeking software engineering or AI/ML engineering roles.',
  email: 'suhas@example.com',
  location: 'Bengaluru, India',
  links: {
    linkedin: 'https://linkedin.com/in/suhas-s-641a6a243',
    github: 'https://github.com/SuhasGowda24',
  },
};

export const SKILLS = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'SQL'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'React.js'] },
  { group: 'Backend', items: ['Flask', 'Django', 'Node.js'] },
  { group: 'Machine Learning', items: ['Scikit-learn', 'Hyperparameter Tuning', 'Data Preprocessing', 'Feature Engineering'] },
  { group: 'Deep Learning', items: ['TensorFlow', 'Keras', 'CNN', 'Transfer Learning'] },
  { group: 'Computer Vision', items: ['OpenCV'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Render', 'Vercel'] },
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Gleamator Technologies',
    period: 'Internship',
    points: [
      'Developed AcademiaFlow, a full-stack student management system with role-based dashboards (Admin, Teacher, Student).',
      'Designed and integrated RESTful APIs using Django REST Framework with MySQL.',
      'Built responsive UI using React.js to automate academic workflows.',
    ],
  },
];

export const PUBLICATIONS = [
  {
    title: "NeuroSense: AI-Driven Parkinson's Disease Prediction Using Online Handwriting",
    venue: 'National Conference on Recent Innovations in Engineering (2025)',
    isbn: '978-81-929425-1-3',
    award: false,
    url: '',
    abstract: "A full-stack screening application that analyzes online handwriting to detect early Parkinson's disease indicators using a CNN with transfer learning. The model achieved 87% accuracy, an F1-score of 0.85, and 96.67% specificity on the held-out test set.",
  },
  {
    title: 'Crop Yield Prediction using Machine Learning',
    venue: 'NISCE-25 Conference Proceedings',
    isbn: '978-93-49421-81-3',
    award: true,
    url: '',
    abstract: 'A Random Forest based approach to predicting crop yields from agricultural and real-time weather data, achieving 85% accuracy. Awarded Best Paper at NISCE-25 for its applied impact on precision agriculture.',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Applied AI: Practical Implementations',
    issuer: 'Microsoft & SAP (TechSaksham)',
    year: '2024',
    url: '',
    description: 'Hands-on program covering applied artificial intelligence concepts and practical implementations using Microsoft & SAP tools and frameworks.',
  },
  {
    name: 'Web Application Development Workshop',
    issuer: 'PyGenicarc',
    year: '2024',
    url: '',
    description: 'Workshop on building and deploying modern web applications, covering frontend fundamentals, backend APIs, and deployment basics.',
  },
  {
    name: 'Microsoft Applied Skills: Power Apps',
    issuer: 'Microsoft',
    year: '2024',
    url: '',
    description: 'Microsoft-verified credential for building canvas apps, model-driven apps, and automating workflows with Power Apps.',
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