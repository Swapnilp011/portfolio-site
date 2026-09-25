'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { profileInfo } from '@/lib/data';
import { Menu, X, Download, Send, Sparkles, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme preference on mount (Default is dark mode)
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'experience', 'skills', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Brand Logo & Name */}
            <Link href="/" className="header-brand">
              <div className="header-logo-frame">
                <Image
                  src={profileInfo.logoUrl}
                  alt={`${profileInfo.name} Logo`}
                  width={32}
                  height={32}
                />
              </div>
              <span>{profileInfo.name}</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="header-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Theme Toggle, CV & Contact Buttons + Mobile Trigger */}
            <div className="header-actions">
              {/* Theme Toggle Button */}
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="https://drive.google.com/file/d/18EjAC0SDmztRZwpDj_C78PE4vCYesIHr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm header-cta-cv"
              >
                <span>CV</span>
                <Download size={15} />
              </a>

              <a href="#contact" className="btn btn-primary btn-sm">
                <span>Hire Me</span>
                <Send size={14} />
              </a>

              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle navigation menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="header-brand">
            <div className="header-logo-frame">
              <Image
                src={profileInfo.logoUrl}
                alt={`${profileInfo.name} Logo`}
                width={28}
                height={28}
              />
            </div>
            <span>{profileInfo.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="mobile-nav-list">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <Sparkles size={16} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="https://drive.google.com/file/d/18EjAC0SDmztRZwpDj_C78PE4vCYesIHr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            onClick={closeMobileMenu}
          >
            <span>Download Resume</span>
            <Download size={16} />
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={closeMobileMenu}
          >
            <span>Get in Touch</span>
            <Send size={16} />
          </a>
        </div>
      </aside>
    </>
  );
}
