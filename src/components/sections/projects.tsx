'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & RAG' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Web & UI' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    if (activeCategory === 'ai') {
      return projects.filter((p) =>
        p.tags.some((t) => ['AI', 'RAG', 'Gemini API', 'ChromaDB'].includes(t))
      );
    }
    if (activeCategory === 'fullstack') {
      return projects.filter((p) =>
        p.tags.some((t) => ['Full-stack', 'FastAPI', 'Firebase', 'SQL Server'].includes(t))
      );
    }
    if (activeCategory === 'frontend') {
      return projects.filter((p) =>
        p.tags.some((t) => ['React.js', 'Next.js', 'UI/UX', 'Web Development', 'Frontend', 'EdTech'].includes(t))
      );
    }
    return projects;
  }, [activeCategory]);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span>Engineering Projects</span>
          </h2>
          <p className="section-desc">
            A curated collection of full-stack web applications, AI/RAG architectures, and responsive systems built for real-world impact.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="projects-filter-bar">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? projects.length
                : cat.id === 'ai'
                ? projects.filter((p) => p.tags.some((t) => ['AI', 'RAG', 'Gemini API', 'ChromaDB'].includes(t))).length
                : cat.id === 'fullstack'
                ? projects.filter((p) => p.tags.some((t) => ['Full-stack', 'FastAPI', 'Firebase', 'SQL Server'].includes(t))).length
                : projects.filter((p) => p.tags.some((t) => ['React.js', 'Next.js', 'UI/UX', 'Web Development', 'Frontend', 'EdTech'].includes(t))).length;

            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="project-card">
              {/* Project Header */}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>

              {/* Tag Pills */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="project-desc-list">
                {project.description.map((point, i) => (
                  <li key={i} className="project-desc-item">
                    <span className="project-desc-bullet"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Project Action Links */}
              <div className="project-footer">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={15} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
