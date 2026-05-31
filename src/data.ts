export const site = {
  name: 'Aditya Kulkarni',
  title: 'Software Engineer & AI Developer',
  summary: 'Building intelligent systems, cybersecurity solutions, and impactful software.',
  intro:
    'Computer Science student focused on AI, cybersecurity, and cloud computing. I build real-world products, experiments, and open-source tools with a long-term goal of pursuing an MS.',
  email: 'aditya@example.com',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com',
};

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'JavaScript'],
  },
  {
    category: 'AI/ML',
    items: ['TensorFlow', 'Scikit-learn', 'Data Analytics'],
  },
  {
    category: 'Cybersecurity',
    items: ['Network Security', 'Intrusion Detection', 'Linux'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Docker'],
  },
];

export const featuredProjects = [
  {
    title: 'AI-Based Network Intrusion Detection System',
    description: 'A machine learning driven security pipeline that identifies anomalous network behavior and surfaces threats in real time.',
    stack: ['Python', 'TensorFlow', 'Security'],
    category: 'Cybersecurity',
  },
  {
    title: 'Email Sorting & Management Platform',
    description: 'A productivity workflow that classifies, prioritizes, and organizes mail with a minimal, high-signal interface.',
    stack: ['React', 'TypeScript', 'Automation'],
    category: 'Web Development',
  },
  {
    title: 'Raspberry Pi Home Server',
    description: 'A compact home lab setup for media, storage, and self-hosted services with practical DevOps workflows.',
    stack: ['Raspberry Pi', 'Linux', 'Docker'],
    category: 'Raspberry Pi',
  },
  {
    title: 'Pi-hole Network Ad Blocker',
    description: 'A network-wide ad blocking and DNS filtering setup tuned for visibility, control, and low-latency performance.',
    stack: ['Linux', 'Networking', 'DNS'],
    category: 'Cybersecurity',
  },
  {
    title: 'Vehicle GPS Outlier Detection System',
    description: 'A tracking and anomaly detection workflow designed to flag suspicious route deviations and movement patterns.',
    stack: ['Python', 'Data Analytics', 'ML'],
    category: 'AI & Machine Learning',
  },
];

export const projectDetails = featuredProjects.map((project, index) => ({
  ...project,
  image: `/project-${index + 1}.svg`,
  github: 'https://github.com',
  live: 'https://example.com',
  descriptionLong:
    'A premium concept build presented as a polished case study with strategic problem framing, technical execution, and measurable outcomes.',
}));

export const education = [
  {
    title: 'Bachelor of Engineering in Computer Science',
    subtitle: 'University / College Name',
    details: 'Focused on systems, software engineering, AI, and security fundamentals.',
  },
];

export const experience = [
  {
    title: 'Software Engineering Intern',
    subtitle: 'Company Name',
    details: 'Built product features, improved reliability, and collaborated across design and engineering.',
  },
  {
    title: 'Cybersecurity / AI Project Builder',
    subtitle: 'Independent',
    details: 'Developed practical projects spanning anomaly detection, cloud infrastructure, and home lab systems.',
  },
];

export const certifications = [
  'AWS Cloud Practitioner',
  'Google Cybersecurity Certificate',
  'Python for Data Science',
];

export const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Web Development', 'Raspberry Pi'];
