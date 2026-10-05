import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentTheme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Courses', href: '#courses' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  // Detect scroll position for dynamic glass blur elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'courses', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-container container" aria-label="Main Navigation">
        {/* Logo / Monogram */}
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-monogram">
            <span>JS</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Jaya Sri M</span>
            <span className="brand-subtitle">B.Com • MBA HR</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && <span className="active-dot" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Theme Toggle & Contact Button */}
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? (
              <Sun className="icon-theme" size={19} />
            ) : (
              <Moon className="icon-theme" size={19} />
            )}
          </button>

          <a href="#contact" className="glass-btn glass-btn-primary nav-cta-btn">
            <span>Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-backdrop" onClick={closeMobileMenu} />
        <div className="mobile-menu-panel glass-panel">
          <div className="mobile-menu-header">
            <div className="brand-monogram">
              <span>JS</span>
            </div>
            <button
              type="button"
              className="close-drawer-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              className="glass-btn glass-btn-primary full-width"
              onClick={closeMobileMenu}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
