
import type { Project, Skill, Experience } from './types';
import { GitBranch, Link, Github, Smartphone, Linkedin, Instagram } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/250px-Java_programming_language_logo.svg.png' },
  { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/330px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS3', logo: 'https://miro.medium.com/1*Aenej4dxqEZ9j7zsI9pSnw.png' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'DSA', logo: '', icon: GitBranch },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'Flutter', logo: 'https://docs.flutter.dev/assets/images/branding/flutter/logo/default.svg' },
];

export const projects: Project[] = [
  {
    title: 'FairFare – AI-Powered Smart Budget Travel Assistant',
    description: [
        'Developed a mobile-first web application using React.js and Firebase to help travelers avoid overspending and prevent "tourist tax" scams in real-time.',
        'Integrated Google Gemini API to build a "Fair Price Guardrail" engine that analyzes user expenses against hyperlocal economic data.',
        'Implemented Google Maps & Places API to provide context-aware, budget-friendly food and transport recommendations.',
        'Utilized Cloud Firestore for real-time data synchronization of travel budgets and itineraries across devices.'
    ],
    image: '',
    tags: ['React.js', 'Firebase', 'Gemini API', 'Google Maps', 'AI'],
    liveUrl: 'https://fairfaretravel.vercel.app/',
    repoUrl: 'https://github.com/Swapnilp011/FairFare',
  },
  {
    title: 'Study Gen Hack',
    description: [
        'Developed an AI-driven learning platform that personalizes study plans based on a learner’s goals, skills, and schedule.',
        'Built during a 36-hour international hackathon, the platform transforms notes and books into tailored, interactive study tools.',
        'Full-stack solution using Next.js, Tailwind CSS, Firebase for authentication/data, and Vercel for hosting.'
    ],
    image: '',
    tags: ['Next.js', 'AI', 'Firebase', 'Tailwind CSS', 'Full-stack'],
    liveUrl: 'https://studygenhack.vercel.app/',
  },
  {
    title: 'IEEE IICT Student Branch Website',
    description: [
        'Developed the new official website for the IEEE IICT Student Branch at MGM University for the INNOVISTA 2025 UI/UX & Development Challenge.',
        'The site serves as a central hub for members, featuring event information, galleries, team profiles, and contact details.',
        'Focused on creating a highly functional and visually appealing platform to support the student community.'
    ],
    image: '',
    tags: ['UI/UX', 'Web Development', 'Next.js', 'IEEE'],
    liveUrl: 'https://ieee-iict.vercel.app/',
  },
  {
    title: 'Edusity',
    description: [
        'Designed a modern educational platform for a smooth, interactive, and user-friendly experience for students.',
        'This project demonstrates skills in React and front-end development.',
        'Solves real-world problems like interactive course exploration and user-friendly navigation.'
    ],
    image: '',
    tags: ['React.js', 'Vite', 'Frontend', 'EdTech'],
    liveUrl: 'https://edusity-demo.vercel.app/',
    repoUrl: 'https://github.com/Swapnilp011/Edusity',
  },
  {
    title: 'E-Cell IICT MGMU Website',
    description: [
        'Developed a full-stack web application for the E-Cell website using Next.js, React, and TypeScript.',
        'Implemented secure authentication and profile management with Firebase Authentication and Firestore.',
        'Designed a modern, responsive UI with Tailwind CSS and ShadCN for content management.'
    ],
    image: '',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Full-stack'],
    liveUrl: 'https://e-cell-iictmgmu-website.vercel.app/',
    repoUrl: 'https://github.com/Swapnilp011/E-cell-website',
  },
];

export const experience: Experience[] = [
    {
        title: 'Web Development Intern',
        company: 'INFINOVA TECHNOLOGIES',
        companyLogo: 'https://www.infinovaglobal.org/TECH_Logo.svg',
        companyUrl: 'https://www.infinovaglobal.org/',
        period: 'Oct 2025 – Dec 2025',
        location: 'Remote',
        description: [
            'Developed responsive web features using React, JSX, and CSS.',
            'Created and implemented Figma-based UI designs.',
            'Debugged and optimized front-end performance.',
        ],
    },
];

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Swapnilp011' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/swapnilp011/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/swapnilp011' },
];
