export type NavItem = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  note: string;
};

export type SkillCategory = {
  title: string;
  technologies: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
};

export type ProjectItem = {
  name: string;
  slug: string;
  category: string;
  description: string;
  purpose: string;
  features: string[];
  technologies: string[];
  techNote?: string;
  liveUrl?: string;
  githubUrl?: string;
  outcome: string;
};

export type CapabilityItem = {
  title: string;
  description: string;
  proof: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Gagandeep",
  location: "Punjab",
  title: "MERN Stack Developer",
  intro:
    "MERN Stack Developer building performant web experiences with React, Next.js, Node.js, APIs, and modern interface systems.",
  summary:
    "Hands-on developer with experience across Node.js backends, Next.js frontends, REST APIs, JWT authentication, UI optimization, multilingual interfaces, and business workflow platforms.",
  email: "officialgagandeep2002@gmail.com",
  phone: "9815733159",
  linkedin: "https://www.linkedin.com/in/gdeep2002/",
  github: "https://github.com/gagan-gag",
};

export const stats: Stat[] = [
  {
    value: "4",
    label: "Roles Delivered",
    note: "Across product, industrial training, academic, and international web work.",
  },
  {
    value: "30%",
    label: "Rendering Improvement",
    note: "Video rendering speed improvement explicitly stated in the resume.",
  },
  {
    value: "2020-2024",
    label: "B.Tech Timeline",
    note: "Computer Science Engineering at Chandigarh Engineering College.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript", "HTML/XML", "CSS", "Tailwind CSS", "Redux", "RTK Query", "Vite"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "Python", "RESTful APIs", "JWT", "API Integrations"],
  },
  {
    title: "Databases",
    technologies: ["SQL", "MongoDB", "NoSQL"],
  },
  {
    title: "Tools",
    technologies: ["Git", "Babel", "ESLint", "Prettier"],
  },
  {
    title: "Other",
    technologies: ["FFmpeg", "Stripe Checkout Sessions", "Captcha Verification", "i18n"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "MERN Stack Developer",
    company: "Oriental Outsourcing Consultants Private Limited",
    location: "Mohali, Punjab",
    period: "Nov 2025 - Present",
    description:
      "Developing backend-heavy and frontend-rich product experiences for media processing and academic content platforms.",
    responsibilities: [
      "Developed a Node.js backend for a video generation platform using FFmpeg to merge overlays, backgrounds, audio, and images with support for large chunked uploads.",
      "Implemented Stripe Checkout Sessions with webhooks, JWT authentication, captcha verification, and SSL-secured email delivery.",
      "Developed and maintained the frontend of AcadeNutri using Next.js, React.js, Tailwind CSS, and Redux Toolkit Query.",
      "Built responsive and reusable UI components with multilingual (i18n) support and integrated form validations, APIs, and authentication flows.",
    ],
    achievements: [
      "Improved video rendering speed by 30%.",
      "Optimized user experience and API data handling by leveraging RTK Query caching and data-fetching capabilities.",
    ],
    technologies: ["Node.js", "FFmpeg", "Stripe", "JWT", "Next.js", "React", "Tailwind CSS", "RTK Query", "i18n"],
  },
  {
    title: "Web-Developer",
    company: "Getapexai",
    location: "United States of America",
    period: "Feb 2025 - Sep 2025",
    description:
      "Worked on an email automation AI platform with a modern frontend stack and a Python backend.",
    responsibilities: [
      "Developed an Email Automation AI platform using a React (Vite) frontend and Python backend.",
      "Led frontend development with a focus on UI/UX optimisation, efficient state management on Redux, and seamless API integration for real-time email workflows.",
    ],
    achievements: [
      "Shaped the frontend architecture around speed, clarity, and workflow efficiency.",
    ],
    technologies: ["React", "Vite", "Python", "Redux", "API Integration"],
  },
  {
    title: "Young Professional (Web-Developer)",
    company: "IIT Ropar",
    location: "Ropar, Punjab",
    period: "Oct 2024 - Feb 2025",
    description:
      "Contributed to front-end and back-end development work in an academic environment.",
    responsibilities: [
      "Contributed to front-end using ReactJS.",
      "Contributed to back-end development with Node.js.",
    ],
    achievements: [
      "Supported production-oriented development in a research and education setting.",
    ],
    technologies: ["ReactJS", "Node.js"],
  },
  {
    title: "Full Stack Developer (Industrial Training)",
    company: "Hoping Minds",
    location: "Mohali, Punjab",
    period: "Jan 2024 - June 2024",
    description:
      "Built and maintained full-stack web applications during industrial training.",
    responsibilities: [
      "Built and maintained web applications using React, Node.js, and MongoDB.",
      "Developed RESTful APIs to support front-end functionalities.",
    ],
    achievements: [
      "Strengthened full-stack delivery skills across interface and API layers.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "RESTful APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Custom Coded",
    slug: "custom-coded",
    category: "Business Platform",
    description:
      "A comprehensive web-based platform designed to streamline business operations through custom software solutions.",
    purpose:
      "Solve fragmented business workflows with secure user management, dynamic data handling, responsive interfaces, API integrations, and scalable operational tooling.",
    features: [
      "Secure user management",
      "Role-based access control",
      "Dynamic data handling",
      "Responsive multi-device interfaces",
      "API integrations",
      "Real-time data processing",
      "Efficient workflow management",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "FFmpeg", "API Integration", "Stripe Checkout Sessions", "Captcha Verification","i18n"],
    liveUrl: "https://customcodedweb.orientaloutsourcing.com/",
    outcome:
      "Designed to help businesses automate processes and manage operations seamlessly across multiple devices.",
  },
  {
    name: "Acadenutri",
    slug: "acadenutri",
    category: "HealthTech Platform",
    description:
      "A health and fitness management platform that connects nutritionists, personal trainers, and clients in a single ecosystem.",
    purpose:
      "Help health professionals centralize diet planning, workout management, client communication, scheduling, subscriptions, and payments in one product.",
    features: [
      "Personalized diet planning",
      "Workout management",
      "Client progress tracking",
      "Appointment scheduling",
      "In-app communication",
      "Subscription management",
      "Secure payment processing",
    ],
    technologies: ["Next.js", "Redux", "Node.js", "Express", "API Integration"],
    liveUrl: "https://acadenutri.com.br/",
    outcome:
      "Streamlines day-to-day service delivery for nutrition and fitness professionals while supporting business growth.",
  },
  {
    name: "Gatepax AI",
    slug: "gatepax-ai",
    category: "AI Automation",
    description:
      "An email automation AI platform built with a React (Vite) frontend and Python backend for real-time workflow execution.",
    purpose:
      "Improve email operations with a faster, clearer interface, reliable state management, and seamless backend connectivity for automation workflows.",
    features: [
      "Email automation workflows",
      "Real-time API integration",
      "Redux-based state management",
      "UI/UX optimization",
      "Responsive frontend architecture",
    ],
    technologies: ["React", "Vite", "Python", "Redux", "API Integration"],
    liveUrl: "https://gatepaxai.com/",
    outcome:
      "Led frontend delivery with a strong focus on usability, workflow speed, and maintainable integration patterns.",
  },
  {
    name: "E-Dukan",
    slug: "e-dukan",
    category: "E-commerce",
    description:
      "An electronic shopping site built and maintained as a full-stack web application.",
    purpose:
      "Support online shopping experiences with a React-based storefront, Node.js services, MongoDB data storage, and RESTful APIs powering frontend functionality.",
    features: [
      "Product-focused web application",
      "React frontend",
      "Node.js backend",
      "MongoDB data layer",
      "RESTful APIs",
    ],
    technologies: ["React", "Node.js", "MongoDB", "RESTful APIs"],
    outcome:
      "Delivered and maintained the application across both frontend and backend layers for e-commerce use cases.",
  },
  {
    name: "GZOD",
    slug: "gzod",
    category: "E-commerce Frontend",
    description:
      "A shopping web application focused on delivering a smooth and responsive online buying experience.",
    purpose:
      "Create a polished storefront UI with reusable components, responsive layouts, and fast styling workflows that improve shopping usability across devices.",
    features: [
      "Clean UI components",
      "Responsive device-friendly layouts",
      "Reusable React component structure",
      "Tailwind CSS rapid styling",
      "Performance-focused UX",
    ],
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://gzodstore.netlify.app/",
    outcome:
      "Built the frontend experience with an emphasis on responsiveness, performance, and a clean shopping journey.",
  },
];

export const capabilities: CapabilityItem[] = [
  {
    title: "Frontend Development",
    description: "Builds responsive interfaces with React, Next.js, Vue.js, Tailwind CSS, Redux, and Vite.",
    proof: "Used across AcadeNutri, email automation, and multiple web application roles.",
  },
  {
    title: "Full Stack Development",
    description: "Connects UI layers, APIs, authentication, and data workflows into complete web products.",
    proof: "Delivered with React, Node.js, MongoDB, RESTful APIs, and platform-level integrations.",
  },
  {
    title: "Backend/API Development",
    description: "Implements Node.js and Python backends, REST APIs, JWT auth, and webhook-driven flows.",
    proof: "Resume cites video generation backend work, RESTful APIs, JWT, Stripe webhooks, and Python services.",
  },
  {
    title: "Database Development",
    description: "Works with SQL, MongoDB, and NoSQL-backed applications.",
    proof: "Technical skills and industrial training experience directly reference these systems.",
  },
  {
    title: "Performance Optimization",
    description: "Improves rendering and UX performance without sacrificing feature depth.",
    proof: "Resume states a 30% video rendering speed improvement and application performance optimization through RTK Query.",
  },
  {
    title: "Integrations & Localization",
    description: "Handles third-party integrations, multilingual support, forms, and workflow tooling.",
    proof: "Experience includes Stripe, captcha verification, API integrations, email delivery, and i18n support.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Chandigarh Engineering College",
    degree: "BTech in Computer Science Engineering",
    period: "July 2020 - July 2024",
    highlights: ["GPA: 7.5/10.0"],
  },
  {
    institution: "D.A.V. Sen. Sec. School",
    degree: "Intermediate",
    period: "April 2019 - April 2020",
    highlights: ["Percentage: 83%", "Stream: Non-Medical (Mathematics)"],
  },
  {
    institution: "New Model High School",
    degree: "Matriculation",
    period: "April 2017 - April 2018",
    highlights: ["Percentage: 70.6%"],
  },
];
