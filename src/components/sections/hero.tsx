'use client';

import Image from 'next/image';
import { Stars } from '@/components/ui/stars';
import { profileInfo, socialLinks } from '@/lib/data';
import { Download, ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Stars />
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            {/* Live Availability Pill */}
            <div className="hero-status-pill">
              <span className="status-dot-pulse"></span>
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Crafting Intelligent Systems &amp; <span className="hero-title-gradient">Modern Web Experiences</span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="hero-subtitle">
              Hi, I&apos;m <strong>Swapnil Pawar</strong>. A passionate Information Technology student specializing in <strong>Generative AI, Full-Stack Development, and high-performance Web Architectures</strong>.
            </p>

            {/* Action Buttons & Quick Social Badges */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={profileInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>Download CV</span>
                <Download size={18} />
              </a>
            </div>

            {/* Quick Identifiable Profile Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)',
                    border: '1px solid var(--border-subtle)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = link.color || '#fff';
                    e.currentTarget.style.borderColor = link.color || 'var(--primary-light)';
                    e.currentTarget.style.boxShadow = `0 0 12px ${link.color ? link.color + '40' : 'var(--primary-glow)'}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  title={`Open ${link.name}`}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Quick Stats / Highlights */}
            <div className="hero-stats-row">
              <div className="hero-stat-card">
                <span className="hero-stat-value">6+</span>
                <span className="hero-stat-label">Featured Projects</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-value">Final Year</span>
                <span className="hero-stat-label">B.Tech IT (IICT)</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-value">AI + Web</span>
                <span className="hero-stat-label">Core Focus</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Profile Avatar with Glowing Halo & Floating Badges */}
          <div className="hero-visual">
            <div className="avatar-halo-wrap">
              <div className="avatar-ambient-glow"></div>
              
              <div className="avatar-ring-outer">
                <div className="avatar-image-box">
                  <Image
                    src={profileInfo.avatarUrl}
                    alt={`${profileInfo.name} Profile`}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="floating-tech-badge badge-top-left">
                <Terminal size={16} color="#818cf8" />
                <span>RAG &amp; GenAI</span>
              </div>

              <div className="floating-tech-badge badge-bottom-right">
                <Code2 size={16} color="#06b6d4" />
                <span>Full-Stack Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
