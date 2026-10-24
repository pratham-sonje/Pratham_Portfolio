import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Pratham Mukund Sonje',
  title: 'Full-Stack Web Developer',
  location: 'Pune, India',
  email: 'sonjeprathamsp1802@gmail.com',
  phone: '+919373516016',
  phoneDisplay: '+91 9373516016',
  linkedin: 'https://www.linkedin.com/in/pratham-mukund-sonje-85ab7822a/',
  github: 'https://github.com/pratham-sonje', // [Placeholder: Update with your exact GitHub profile URL]
  resumeFileName: 'Pratham_Mukund_Sonje_Resume.pdf',
  resumeFilePath: 'assets/resume/Pratham_Mukund_Sonje_Resume.pdf',
  yearsOfExperience: '3+',
  profileImage: 'assets/images/profile.png',
  summary:
    'Web developer with 3 years of experience building Angular and Ionic applications, focused on REST APIs integration, reusable component architecture, and performance. Experienced with NgRx state management, PostgreSQL/MongoDB, and CI/CD-driven deployment. Comfortable owning features end-to-end in fast-paced delivery environments.',

  stats: [
    { label: 'Years of Experience', value: '3+', helper: 'Angular & Full-Stack' },
    { label: 'Production Projects', value: '2+', helper: 'Enterprise & Mobile' },
    { label: 'Technologies Mastered', value: '15+', helper: 'Frontend, Backend, DB' },
    { label: 'Academic Distinction', value: '78.9%', helper: 'MCA Graduate' },
  ],

  experiences: [
    {
      id: 'junior-dev',
      role: 'Junior Software Developer',
      company: 'Application Nexus Webservices Pvt. Ltd.',
      location: 'Pune, India',
      period: 'June 2024 – Present',
      type: 'Full-time',
      current: true,
      achievements: [
        'Built and maintained Angular applications integrating REST APIs via HttpClient and RxJS Observables, including authentication flows, HTTP interceptors, and centralized error handling.',
        'Designed reusable Angular components and Reactive Forms within a modular service-based architecture, reducing duplicate code across feature modules.',
        'Improved frontend rendering performance and optimized database queries to reduce load times and improve system reliability in production.',
        'Partnered with cross-functional teams (design, backend, QA) to ship features on schedule and provide ongoing support for deployed systems.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs',
        'Reactive Forms',
        'Performance Optimization',
        'Database Queries',
        'CI/CD',
      ],
    },
    {
      id: 'intern-dev',
      role: 'Software Developer Intern',
      company: 'Application Nexus Webservices Pvt. Ltd.',
      location: 'Pune, India',
      period: 'January 2024 – May 2024',
      type: 'Internship',
      current: false,
      achievements: [
        'Contributed to cross-platform Ionic mobile applications supporting Android and web with a responsive, mobile-first UI.',
        'Integrated REST API services to retrieve and render application data efficiently within the mobile interface.',
        'Implemented JWT-based authentication for secure login and persistent user sessions.',
        'Built geolocation-based features enabling users to locate nearby hospitals and healthcare services.',
      ],
      technologies: [
        'Ionic',
        'Angular',
        'TypeScript',
        'Mobile-First UI',
        'JWT Auth',
        'Geolocation',
        'REST APIs',
        'Android & Web',
      ],
    },
  ],

  projects: [
    {
      id: 'fmp',
      title: 'FMP (Flag-Maker Print)',
      subtitle: 'Vector Graphics Editing & AI-Powered Canvas System',
      company: 'Application Nexus Webservices Pvt. Ltd.',
      description:
        'A high-performance browser-based graphics editing platform enabling vector design, prompt-to-SVG generation, and seamless Shopify e-commerce integration.',
      highlights: [
        'Enabled import of complex SVG graphics into Fabric.js canvas using third-party APIs for accurate vector editing.',
        'Built an AI-driven feature allowing users to generate PNG images from prompts and convert them into SVG graphics.',
        'Developed responsive browser-based canvas operations optimized with jQuery for improved rendering performance.',
        'Migrated core REST endpoints to GraphQL, reducing redundant data fetching and simplifying client-side query logic.',
        'Implemented Google Analytics tracking to monitor user behavior and product engagement.',
      ],
      technologies: [
        'Fabric.js',
        'JavaScript (ES6+)',
        'GraphQL',
        'Fastify',
        'Shopify',
        'jQuery',
        'HTML5/CSS3',
        'Google Analytics',
      ],
      category: 'Enterprise',
      featured: true,
      metrics: 'AI-to-SVG Pipeline & Sub-second Canvas Rendering',
      githubUrl: 'https://github.com/pratham-sonje/flag-maker-print', // [Placeholder: Private enterprise repository or demo repository]
      liveUrl: 'https://flagmakerprint.com', // [Placeholder: Production or client URL]
    },
    {
      id: 'child-vaccination',
      title: 'Child Vaccination App',
      subtitle: 'Cross-Platform Pediatric Healthcare & Facility Locator',
      company: 'Application Nexus Webservices Pvt. Ltd.',
      description:
        'A cross-platform mobile and web application providing timely vaccination schedules, pediatric records, and geolocation-based hospital discovery.',
      highlights: [
        'Built core UI modules including login, dashboard, and vaccine information screens.',
        'Applied JWT authentication for secure login and persistent sessions.',
        'Connected backend APIs to dynamically load vaccination data into the mobile interface.',
        'Created a location-aware functionality utilizing Capacitor geolocation to pinpoint nearby healthcare facilities, which led to a 30% increase in user satisfaction.',
      ],
      technologies: [
        'Ionic',
        'Angular',
        'TypeScript',
        'Capacitor',
        'CodeIgniter-4',
        'PHP',
        'MySQL',
        'JWT Auth',
      ],
      category: 'Mobile & Canvas',
      featured: true,
      metrics: '+30% User Satisfaction with Geolocation Pinpointing',
      githubUrl: 'https://github.com/pratham-sonje/child-vaccination-app', // [Placeholder: Enterprise repository or demo repository]
      liveUrl: '', // [Placeholder: Internal enterprise product / On-request demo]
    },
  ],

  skillCategories: [
    {
      title: 'Frontend Development',
      icon: 'code',
      description:
        'Building reactive, scalable, and responsive user interfaces with modern component architectures.',
      skills: [
        { name: 'Angular', level: 'Advanced', featured: true },
        { name: 'TypeScript', level: 'Advanced', featured: true },
        { name: 'RxJS', level: 'Advanced', featured: true },
        { name: 'NgRx', level: 'Proficient', featured: true },
        { name: 'Ionic Framework', level: 'Advanced', featured: true },
        { name: 'Angular Reactive Forms', level: 'Advanced', featured: true },
        { name: 'JavaScript (ES6+)', level: 'Advanced', featured: true },
        { name: 'HTML5 & CSS3', level: 'Advanced', featured: true },
        { name: 'Tailwind CSS', level: 'Proficient', featured: false },
        { name: 'Bootstrap', level: 'Proficient', featured: false },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: 'server',
      description:
        'Designing resilient RESTful and GraphQL endpoints with secure authentication and clean services.',
      skills: [
        { name: 'Node.js', level: 'Proficient', featured: true },
        { name: 'Express.js', level: 'Proficient', featured: true },
        { name: 'REST APIs', level: 'Advanced', featured: true },
        { name: 'GraphQL', level: 'Proficient', featured: true },
        { name: 'PHP', level: 'Intermediate', featured: false },
        { name: 'Fastify', level: 'Proficient', featured: false },
        { name: 'CodeIgniter-4', level: 'Intermediate', featured: false },
        { name: 'JWT Authentication', level: 'Advanced', featured: true },
      ],
    },
    {
      title: 'Databases & Storage',
      icon: 'database',
      description: 'Relational schema design, query optimization, and document storage.',
      skills: [
        { name: 'PostgreSQL', level: 'Proficient', featured: true },
        { name: 'MongoDB', level: 'Proficient', featured: true },
        { name: 'MySQL', level: 'Proficient', featured: true },
        { name: 'Query Optimization', level: 'Proficient', featured: false },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: 'terminal',
      description:
        'Version control workflows, API testing suites, and automated continuous deployment.',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', featured: true },
        { name: 'GitLab', level: 'Proficient', featured: false },
        { name: 'Postman', level: 'Advanced', featured: true },
        { name: 'VS Code', level: 'Advanced', featured: false },
        { name: 'CI/CD Pipelines', level: 'Proficient', featured: true },
        { name: 'Capacitor', level: 'Proficient', featured: false },
        { name: 'Fabric.js', level: 'Proficient', featured: false },
      ],
    },
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Abasaheb Garware College',
      location: 'Pune, India',
      period: '2022 – 2024',
      score: '78.85%',
      scoreType: 'Score',
      highlights: [
        'Advanced software engineering, web architectures, and algorithms.',
        'Distinction with 78.85% academic score.',
      ],
    },
    {
      degree: 'Bachelor of Computer Science (BCS)',
      institution: 'KTHM College',
      location: 'Nashik, India',
      period: '2019 – 2022',
      score: '79.64%',
      scoreType: 'Score',
      highlights: [
        'Core computer science foundations, data structures, database systems, and object-oriented programming.',
        'Distinction with 79.64% academic score.',
      ],
    },
  ],
};
