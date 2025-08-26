import type { Project, Skill, Post } from './types';
import { Code, Database, Wind, Bot, GitBranch, Cpu, Briefcase, PenTool, LayoutTemplate, Link, Github } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'SQL', icon: Database },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'AI/ML', icon: Bot },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Cpu },
];

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and order processing. Built with Next.js, Express, and PostgreSQL.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'AI Chatbot for Customer Service',
    description: 'An intelligent chatbot using natural language processing to answer customer queries, integrated into a web application. Powered by Python and TensorFlow.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['Python', 'TensorFlow', 'AI/ML', 'Flask'],
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing tasks and projects, featuring drag-and-drop functionality and real-time updates. Built with React and Firebase.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['React', 'Firebase', 'JavaScript'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'The very website you are on! A server-rendered portfolio built with Next.js, featuring a blog and AI-powered content tools.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['Next.js', 'React', 'GenAI', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const posts: Post[] = [
    {
        slug: 'getting-started-with-nextjs-14',
        title: 'Getting Started with Next.js 14: A Beginner\'s Guide',
        date: '2024-05-15',
        author: 'Student Name',
        image: 'https://picsum.photos/800/450?random=5',
        excerpt: 'Next.js 14 brings a host of new features and improvements. In this post, we\'ll walk through setting up a new project and exploring the fundamentals of the App Router.',
        content: `
<p>Next.js 14 has been a game-changer for React developers, especially with the stable release of the App Router. This new paradigm shifts how we think about routing, data fetching, and component architecture.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Key Features of the App Router</h3>
<ul>
    <li><strong>Server Components:</strong> By default, components inside the 'app' directory are React Server Components. This reduces the amount of JavaScript sent to the client, leading to faster initial page loads.</li>
    <li><strong>Nested Layouts:</strong> Easily create complex, nested layouts that persist across route changes, avoiding unnecessary re-renders.</li>
    <li><strong>Streaming with Suspense:</strong> Improve user experience by progressively rendering UI and streaming content from the server as it becomes available.</li>
</ul>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Setting Up Your First Project</h3>
<p>To start, make sure you have Node.js 18.17 or later installed. Then, run the following command:</p>
<pre><code class="language-bash">npx create-next-app@latest</code></pre>
<p>The CLI will guide you through the setup process. Make sure to opt-in for the App Router when prompted. Once installed, navigate to your project directory and start the development server:</p>
<pre><code class="language-bash">npm run dev</code></pre>
<p>Congratulations! You've just set up your first Next.js 14 application. Open your browser to http://localhost:3000 to see it in action.</p>
        `,
    },
    {
        slug: 'deep-dive-into-tailwind-css',
        title: 'A Deep Dive into Tailwind CSS for Modern Web Design',
        date: '2024-04-22',
        author: 'Student Name',
        image: 'https://picsum.photos/800/450?random=6',
        excerpt: 'Tailwind CSS is a utility-first CSS framework that allows for rapid UI development without ever leaving your HTML. Let\'s explore why it\'s so popular and how to use it effectively.',
        content: `
<p>Tailwind CSS provides low-level utility classes that let you build completely custom designs without having to write custom CSS. The main benefit is the speed at which you can style your application.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">The Utility-First Approach</h3>
<p>Instead of writing CSS rules like this:</p>
<pre><code class="language-css">.card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}</code></pre>
<p>You can use Tailwind's utility classes directly in your HTML:</p>
<pre><code class="language-html">&lt;div class="bg-white rounded-lg p-6 shadow-md"&gt;...&lt;/div&gt;</code></pre>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Customization and Performance</h3>
<p>Tailwind is highly customizable via its 'tailwind.config.js' file. You can configure your color palette, spacing, fonts, and more. For production builds, Tailwind automatically removes all unused CSS, resulting in a highly optimized and small final CSS file.</p>
        `,
    },
    {
        slug: 'building-ai-apps-with-genkit',
        title: 'Building AI-Powered Applications with Google\'s Genkit',
        date: '2024-03-10',
        author: 'Student Name',
        image: 'https://picsum.photos/800/450?random=7',
        excerpt: 'Genkit is an open-source framework from Google that helps developers build, deploy, and monitor production-ready AI-powered features. Here\'s an overview of its core concepts.',
        content: `
<p>Genkit simplifies the process of integrating generative AI models into applications. It provides tools and a structured workflow for creating what it calls "flows".</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Core Concepts</h3>
<ul>
    <li><strong>Flows:</strong> A flow is a sequence of steps that orchestrates calls to AI models, data sources, and other tools to accomplish a task.</li>
    <li><strong>Models:</strong> Genkit has plugins for various model providers, like Google's Gemini or OpenAI's GPT models.</li>
    <li><strong>Prompts:</strong> You can define and manage your prompts within the framework, making them reusable and easier to version.</li>
    <li><strong>Evaluation and Monitoring:</strong> Genkit includes tools to evaluate the quality of your flows and monitor their performance in production.</li>
</ul>
<p>This portfolio's blog suggestion tool is a simple example of a Genkit flow in action, demonstrating how quickly you can add powerful AI features to a Next.js application.</p>
        `,
    }
];

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Briefcase, url: '#' },
    { name: 'Blog', icon: PenTool, url: '/blog' }
];
