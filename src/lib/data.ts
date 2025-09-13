
import type { Project, Skill, Post } from './types';
import { Code, Database, Wind, Bot, GitBranch, Cpu, Briefcase, PenTool, LayoutTemplate, Link, Github, Smartphone } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'Python', icon: Code },
  { name: 'C/C++', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'HTML/CSS', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'DSA', icon: GitBranch },
  { name: 'SQL', icon: Database },
  { name: 'Flutter', icon: Smartphone },
];

export const projects: Project[] = [
  {
    title: 'Study Gen Hack',
    description: 'An AI-driven learning platform that personalizes study plans based on a learner’s goals, skills, and schedule. Developed during a 36-hour international hackathon, it transforms notes and books into tailored, interactive, and multilingual study tools using Next.js, Tailwind CSS, Firebase, and Vercel.',
    image: '',
    tags: ['Next.js', 'AI', 'Firebase', 'Tailwind CSS', 'Full-stack'],
  },
  {
    title: 'E-Cell IICT MGMU Website',
    description: 'A full-stack web application for the E-Cell (Entrepreneurship Cell) featuring secure authentication, profile management, and a modern, responsive UI. Built with Next.js, TypeScript, Firebase, and Tailwind CSS to manage and publish content for students and organizers.',
    image: '',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Full-stack'],
  },
  {
    title: 'YouTube Clone Homepage',
    description: 'Designed and developed a YouTube.com homepage using HTML and CSS, focusing on layout design, responsiveness, and maintaining visual similarity to the original platform.',
    image: '',
    tags: ['HTML', 'CSS', 'Frontend'],
  },
  {
    title: 'Weather Forecasting App',
    description: 'Designed and built an Android app using Java that fetches weather forecasts from an API, providing users with up-to-date weather information.',
    image: '',
    tags: ['Android', 'Java', 'API'],
    repoUrl: 'https://github.com/Swapnilp011/Weather-Forecasting-App-Android',
  },
];

export const posts: Post[] = [
    {
        slug: 'youtube-clone-html-css',
        title: 'Building the YouTube Homepage with HTML & CSS',
        date: '2024-08-15',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'A walkthrough of how I recreated the YouTube homepage layout using just HTML and CSS, focusing on structure, styling, and responsiveness.',
        content: `
<p>Recreating a complex layout like YouTube's homepage is a great exercise in mastering HTML and CSS. This project challenged me to pay close attention to detail, from the video grid to the sidebar navigation.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Structuring the Page</h3>
<p>The foundation of the clone is a solid HTML structure. I used semantic tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;aside&gt;</code> to create a meaningful and accessible layout. The video grid itself was built using CSS Grid, which is perfect for creating flexible and responsive grid-based layouts.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Styling with CSS</h3>
<p>CSS was used to replicate YouTube's visual design. This included setting up the color scheme, typography, and spacing. Flexbox was used extensively for aligning items within containers, like the video metadata (title, channel name, views). One of the key challenges was ensuring the layout was responsive and looked good on different screen sizes, which was achieved using media queries.</p>
        `,
    },
    {
        slug: 'android-weather-app-java',
        title: 'Creating a Weather Forecasting App in Android with Java',
        date: '2023-05-28',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'A summary of my project to build a native Android weather app. I used Java and integrated a third-party weather API to fetch and display real-time data.',
        content: `
<p>This project was my first major dive into Android development with Java. The goal was to create a simple yet functional weather app that could fetch data from a real-world API.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Core Functionality</h3>
<ul>
    <li><strong>API Integration:</strong> I used a popular weather API (like OpenWeatherMap) to fetch current weather and forecast data based on a user's location.</li>
    <li><strong>UI Design:</strong> The user interface was designed using Android's XML layouts to display the temperature, weather conditions, and a weekly forecast.</li>
    <li><strong>Data Parsing:</strong> The JSON response from the API was parsed using Java libraries to extract the relevant weather information.</li>
</ul>
<p>This project was a great learning experience in mobile development, handling asynchronous network requests, and managing application state in an Android environment.</p>
        `,
    }
];

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Swapnilp011' },
    { name: 'LinkedIn', icon: Briefcase, url: 'https://www.linkedin.com/in/swapnilp011/' }
];
