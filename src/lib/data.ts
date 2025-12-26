
import type { Project, Skill, Post, Experience } from './types';
import { GitBranch, Link, Github, Smartphone, Linkedin, Instagram } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'Python', logo: 'https://www.python.org/static/img/python-logo.png' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/250px-Java_programming_language_logo.svg.png' },
  { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/330px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS3', logo: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'DSA', logo: '', icon: GitBranch },
  { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
];

export const projects: Project[] = [
  {
    title: 'Study Gen Hack',
    description: 'Study Gen Hack is an AI-driven learning platform that personalizes study plans based on a learner’s goals, skills, and schedule. It was developed during a 36-hour international hackathon. The platform transforms notes and books into tailored, interactive, and multilingual study tools. Build a full-stack solution using a modern tech stack including Next.js, Tailwind CSS. The app uses Firebase for data and authentication, and Vercel for Hosting.',
    image: '',
    tags: ['Next.js', 'AI', 'Firebase', 'Tailwind CSS', 'Full-stack'],
    liveUrl: 'https://studygenhack.vercel.app/',
  },
  {
    title: 'IEEE IICT Student Branch Website',
    description: 'As part of the INNOVISTA 2025 UI/UX & Development Challenge, we developed the new official website for the IEEE IICT Student Branch at MGM University. The site serves as a central hub for members, featuring information about the branch, upcoming events, a gallery of past activities, team member profiles, and a contact section. Our focus was on creating a highly functional and visually appealing platform to support the student community.',
    image: '',
    tags: ['UI/UX', 'Web Development', 'Next.js', 'IEEE'],
    liveUrl: 'https://ieee-iict.vercel.app/',
  },
  {
    title: 'Edusity',
    description: 'Edusity is a modern educational platform designed to provide a smooth, interactive, and user-friendly experience for students and learners. This project demonstrates skills in React and front-end development, while also solving real-world problems like interactive course exploration and user-friendly navigation.',
    image: '',
    tags: ['React.js', 'Vite', 'Frontend', 'EdTech'],
    liveUrl: 'https://edusity-demo.vercel.app/',
    repoUrl: 'https://github.com/Swapnilp011/Edusity',
  },
  {
    title: 'E-Cell IICT MGMU Website',
    description: 'Developed a full-stack web application for the E-Cell (Entrepreneurship Cell) website using Next.js, React, and TypeScript, and deployed it on Vercel for fast and scalable hosting. Implemented secure authentication and profile management with Firebase Authentication and Firestore to ensure reliable data handling. Designed a modern, responsive UI with Tailwind CSS and ShadCN, enabling the platform to actively publish updates and manage E-Cell content for students and organizers.',
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
        period: 'Sept 2025 – Present',
        location: 'Remote',
        description: [
            'Developed responsive web features using React, JSX, and CSS.',
            'Created and implemented Figma-based UI designs.',
            'Debugged and optimized front-end performance.',
        ],
    },
];

export const posts: Post[] = [
    {
        slug: 'edusity-is-live',
        title: 'Edusity is Live! – My Latest Web Development Project',
        date: '2025-10-16',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'I’m excited to share my recent project, Edusity, a modern educational platform designed to provide a smooth, interactive, and user-friendly experience for students and learners.',
        content: `
<p>I’m excited to share my recent project, Edusity, a modern educational platform designed to provide a smooth, interactive, and user-friendly experience for students and learners. ✨</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Key Features:</h3>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>Interactive Navigation:</strong> Smooth scrolling and quick access to all sections.</li>
    <li><strong>Programs & Courses:</strong> Organized section highlighting all offerings.</li>
    <li><strong>Campus Gallery:</strong> Visual showcase of campus facilities.</li>
    <li><strong>Testimonials:</strong> Real feedback section for authenticity.</li>
    <li><strong>Contact Form & Video Player:</strong> Integrated interactive components for better engagement.</li>
</ul>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Tech & Tools I Used:</h3>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>Frontend:</strong> React.js with Vite</li>
    <li><strong>Styling:</strong> CSS modules for modular design</li>
    <li><strong>Smooth Scrolling:</strong> react-scroll for seamless navigation</li>
    <li><strong>Deployment:</strong> Hosted on Vercel for fast, reliable access</li>
</ul>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Challenges & Learning Experience:</h3>
<ul class="list-disc list-inside space-y-2 my-4">
    <li>Deployed the project on Linux-based servers, solving case-sensitive import issues.</li>
    <li>Learned how to handle React hooks, component reusability, and state management efficiently.</li>
    <li>Managed responsive design for both desktop and mobile users.</li>
</ul>
<p>I wanted to create a hands-on project that demonstrates my skills in React and front-end development, while also solving real-world problems like interactive course exploration and user-friendly navigation.</p>
<p class="mt-6">🔗 Check it live: <a href="https://edusity-project-one.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://edusity-project-one.vercel.app/</a></p>
<p>🔗 View code on GitHub: <a href="https://github.com/Swapnilp011/Edusity" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://github.com/Swapnilp011/Edusity</a></p>
<p>I’m looking forward to feedback and suggestions from the community to make Edusity even better! 🙌</p>
        `,
    },
    {
        slug: 'sunhacks-hackathon-2k25',
        title: 'My Experience at Sunhacks Hackathon 2K25 with StudyGenHack',
        date: '2025-08-24',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'A recap of my experience at Sunhacks Hackathon-2K25, where I worked on StudyGenHack, an AI-driven learning platform.',
        content: `
<p>🚀 Excited to share that I recently participated in Sunhacks Hackathon-2K25, a 36-hour international hackathon organized by Sandip University, Nashik!</p>
<p>During the hackathon, I worked on StudyGenHack, an AI-driven learning platform. The platform:</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li>Personalizes study plans based on a learner’s goals, skills, and schedule.</li>
    <li>Transforms notes & books into interactive, multilingual study tools.</li>
    <li>Makes learning more adaptive and engaging for students.</li>
</ul>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Tech Stack</h3>
<p>We used a modern tech stack to bring this project to life:</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>Full-stack Development:</strong> Next.js + Tailwind CSS</li>
    <li><strong>Backend:</strong> Firebase for authentication & data management</li>
    <li><strong>Deployment:</strong> Vercel for scalable hosting</li>
</ul>
<p>It was an amazing experience to brainstorm, build, and innovate within 36 hours while collaborating with brilliant minds. 🌟</p>
<p>A special thanks to Madhuri Kawarkhe for her valuable guidance and mentorship throughout this journey. Grateful to Sandip University for organizing such a global platform for innovation. Looking forward to participating in more hackathons and taking this project further!</p>
<p class="mt-6">🔗 Check out the project here: <a href="https://studygenhack.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://studygenhack.vercel.app/</a></p>
        `,
    },
    {
        slug: 'supernova-cosmobolt-robo-race-winner',
        title: 'Our Victory at the SUPERNOVA-COSMOBOLT Robo Race!',
        date: '2024-09-01',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'A recap of our victory at the SUPERNOVA-COSMOBOLT Robo Race at MGM University, where our team, Mortal Engine, secured 1st place.',
        content: `
<p>Thrilled to share that Team Mortal Engine secured 1st Position (Winner) at the SUPERNOVA-COSMOBOLT Robo Race, organized by MGMU School of Engineering and Technology at MGM University, Chhatrapati Sambhajinagar. 🏆🤖</p>
<p>This competition truly tested our teamwork, creativity, and design skills — and we’re proud to have come out on top! 💡✨</p>
<p>A big thank you to Parminder Kaur Dhingra ma’am and the organizers for hosting such a wonderful event, and kudos to all the participating teams for making the race so inspiring. 🙌</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Special Thanks</h3>
<p>Special thanks to all our supportive faculty members: Chetana Bhagat, Madhuri Kawarkhe, Udhav Parbhane — your guidance and encouragement made this achievement possible. 🙏</p>
<p>Special shoutout to my amazing teammates Asjad Pathan, Musaddique Khan, and Farooqui Furqan Ahmed — this victory was a real team effort! 💪</p>
        `,
    },
    {
        slug: 'innovista-2025-ieee-website',
        title: 'Our Experience at INNOVISTA 2025: Building the New IEEE IICT Website',
        date: '2024-08-28',
        author: 'Swapnil Pawar',
        image: '',
        excerpt: 'A recap of our experience at the INNOVISTA 2025 hackathon, where we built the new official website for the IEEE IICT Student Branch at MGM University.',
        content: `
<p>I'm thrilled to share that my teammate Mateen Shadab and I participated in INNOVISTA 2025, a UI/UX & Development Challenge organized by the @IEEE Student Branch, MGMU Institute of Information & Communication Technology – MGM University. It was an incredible experience to apply our skills and contribute to the community. 💡💻</p>
<p>As part of the hackathon, we successfully developed and launched the new official website for the IEEE IICT Student Branch 🌐.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">A Functional & Beautiful Hub</h3>
<p>We focused on creating a platform that not only looks great 🎨 but is also highly functional ⚙️. The new website serves as a central hub for everything related to the student branch, including:</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>About Us:</strong> Learn about the history, mission, and vision of the IEEE Student Branch.</li>
    <li><strong>Events:</strong> Stay updated on upcoming events and browse through our past workshops and competitions.</li>
    <li><strong>Gallery:</strong> A glimpse into the vibrant community with photos from our various events.</li>
    <li><strong>Team:</strong> Get to know the dedicated individuals who lead the student branch.</li>
    <li><strong>Contact Us:</strong> Easy access for anyone looking to connect with the team.</li>
</ul>
<p>This project was a true test of our skills in merging innovation with a practical user experience. 💪 We’re incredibly proud of what we accomplished and grateful for the opportunity. 🙌</p>
<p>A huge thank you to everyone who made this event possible, especially Prof. Dr. Sharvari Tamane and Ms. VIJAYA AHIRE, and a massive shoutout to the entire IEEE team at MGM University for their fantastic support and for organizing such a well-run and impactful event. 🎉</p>
<p class="mt-6">🔗 Check out the new website here: <a href="https://ieee-iict.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://ieee-iict.vercel.app/</a></p>
        `,
    },
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
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Swapnilp011' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/swapnilp011/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/swapnilp011' },
];


    
