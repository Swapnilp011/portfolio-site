import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import BlogPreview from '@/components/sections/blog-preview';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
