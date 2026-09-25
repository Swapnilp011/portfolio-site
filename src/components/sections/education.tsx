'use client';

import Image from 'next/image';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span>Degrees</span>
          </h2>
          <p className="section-desc">
            Formal engineering education focused on computer science fundamentals and software systems.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-wrap">
          <div className="education-card">
            <div className="education-header">
              <div className="education-logo-box">
                <Image
                  src="https://cdn.mgmtech.org/static/mgmu.ac.in/assets/images/LogoMGM.svg"
                  alt="MGM University Logo"
                  width={52}
                  height={52}
                />
              </div>

              <div>
                <h3 className="education-degree">
                  Bachelor of Technology - Information Technology
                </h3>
                <p className="education-institution">
                  Institute of Information and Communication Technology (IICT), MGM University
                </p>
              </div>
            </div>

            <div className="education-badges-row">
              <span className="pill pill-primary">
                <Calendar size={13} />
                <span>B.Tech IT</span>
              </span>
              <span className="pill pill-cyan">
                <MapPin size={13} />
                <span>Chhatrapati Sambhajinagar, India</span>
              </span>
              <span className="pill pill-emerald">
                <Award size={13} />
                <span>Final Year Student</span>
              </span>
            </div>

            <p className="education-text">
              Pursuing my final year at the Institute of Information and Communication Technology (IICT), building a strong foundation in Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, and Modern AI/Full-Stack Software Architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
