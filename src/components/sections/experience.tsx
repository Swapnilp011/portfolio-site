'use client';

import Image from 'next/image';
import { experience } from '@/lib/data';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
          <p className="section-desc">
            Professional track record and hands-on industry experience building modern web products.
          </p>
        </div>

        {/* Timeline List */}
        <div className="timeline-wrap">
          {experience.map((job) => (
            <div key={job.title} className="timeline-item">
              <div className="timeline-node"></div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-company-info">
                    {job.companyLogo && (
                      <div className="timeline-logo-box">
                        <Image
                          src={job.companyLogo}
                          alt={`${job.company} Logo`}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="timeline-role-title">{job.title}</h3>
                      <p className="timeline-company-name">
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            <span>{job.company}</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          job.company
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="timeline-meta-chips">
                    <span className="timeline-chip">
                      <Calendar size={13} color="#818cf8" />
                      <span>{job.period}</span>
                    </span>
                    <span className="timeline-chip">
                      <MapPin size={13} color="#06b6d4" />
                      <span>{job.location}</span>
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullet-list">
                  {job.description.map((point, index) => (
                    <li key={index} className="timeline-bullet-item">
                      <span className="timeline-bullet-dot"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
