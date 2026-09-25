'use client';

import { useState } from 'react';
import Image from 'next/image';
import { skills } from '@/lib/data';
import { Code2, Terminal, Cpu, Database, Layout, Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of programming languages, modern web frameworks, AI tools, and databases I leverage to build scalable software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon-frame">
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={44}
                    height={44}
                  />
                ) : (
                  skill.icon && <skill.icon className="skill-icon-svg" />
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
