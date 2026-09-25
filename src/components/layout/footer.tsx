'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { socialLinks, profileInfo } from '@/lib/data';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer-wrap">
        <div className="container">
          <div className="footer-inner">
            {/* Brand Logo & Name */}
            <div className="footer-brand">
              <div className="header-logo-frame" style={{ width: '32px', height: '32px' }}>
                <Image
                  src={profileInfo.logoUrl}
                  alt={`${profileInfo.name} Logo`}
                  width={24}
                  height={24}
                />
              </div>
              <span>{profileInfo.name}</span>
            </div>

            {/* Social Links */}
            <div className="footer-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={link.name}
                  title={`Visit my ${link.name} profile`}
                  style={{ width: '40px', height: '40px' }}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Swapnil Pawar. Designed &amp; Developed with precision.
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Floating Back-to-Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
