'use client';

import { useState } from 'react';
import ContactForm from './contact-form';
import { socialLinks } from '@/lib/data';
import { Mail, Phone, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'swapnildpawar011@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span>Exceptional Together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind, an internship or full-time opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards & Copy Buttons */}
          <div className="contact-info-col">
            {/* Email Card with Click to Copy */}
            <div
              className="contact-direct-card"
              onClick={copyEmail}
              title="Click to copy email address"
            >
              <div className="contact-icon-frame">
                <Mail size={22} />
              </div>
              <div className="contact-direct-text">
                <span className="contact-direct-label">Email Address</span>
                <span className="contact-direct-val">{email}</span>
                <span className="contact-copy-hint">
                  {copied ? (
                    <>
                      <Check size={13} color="#10b981" />
                      <span style={{ color: '#10b981' }}>Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Click to copy email</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Phone Direct Card */}
            <a
              href="tel:+917387336071"
              className="contact-direct-card"
              title="Click to call"
            >
              <div className="contact-icon-frame">
                <Phone size={22} />
              </div>
              <div className="contact-direct-text">
                <span className="contact-direct-label">Phone / WhatsApp</span>
                <span className="contact-direct-val">+91 7387336071</span>
                <span className="contact-copy-hint">
                  <span>Available for inquiries</span>
                </span>
              </div>
            </a>

            {/* Social Links */}
            <div className="contact-socials-wrap">
              <span className="contact-social-label">Find Me Online</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-direct-card"
                    style={{ padding: '12px 14px', gap: '12px' }}
                    title={`Open ${link.name}`}
                  >
                    <div
                      className="contact-icon-frame"
                      style={{
                        width: '36px',
                        height: '36px',
                        color: link.color || '#fff',
                        borderColor: link.color ? `${link.color}40` : 'var(--border-subtle)',
                        background: link.color ? `${link.color}15` : 'rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <link.icon size={18} />
                    </div>
                    <div className="contact-direct-text">
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {link.name}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {link.badgeLabel || 'View Profile'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Glass Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
