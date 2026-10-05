import React from 'react';
import { ArrowUp, Heart, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const { personalInfo, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Main Footer Row */}
        <div className="footer-top-row">
          
          <div className="footer-brand-wrap">
            <div className="footer-brand">
              <div className="brand-monogram">
                <span>JS</span>
              </div>
              <div className="brand-info">
                <span className="footer-name">{personalInfo.name}</span>
                <span className="footer-role">B.Com Graduate • MBA (HR) Pursuing</span>
              </div>
            </div>

            <p className="footer-tagline">
              Responsible and orderly; looking forward to a first work experience in Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Navigation</h4>
            <ul className="footer-nav-list" role="list">
              <li><a href="#about">About Profile</a></li>
              <li><a href="#education">Education Timeline</a></li>
              <li><a href="#skills">Skills & Strengths</a></li>
              <li><a href="#courses">Additional Courses</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact & Message</a></li>
            </ul>
          </div>

          <div className="footer-contact-group">
            <h4 className="footer-links-title">Direct Inquiries</h4>
            <ul className="footer-contact-list" role="list">
              <li>
                <a href={`mailto:${contact.email}`} className="footer-contact-link">
                  <Mail size={14} className="text-peach" />
                  <span>{contact.email}</span>
                </a>
              </li>
              <li>
                <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <Phone size={14} className="text-teal" />
                  <span>{contact.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <div className="footer-location-tag">
                  <MapPin size={14} className="text-peach" />
                  <span>{contact.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Jaya Sri M. All rights reserved.
          </div>

          <div className="tech-badge-wrap">
            <span className="tech-badge glass-panel-subtle">
              <Sparkles size={13} className="text-peach" />
              <span>React 19 + Vite • Glassmorphism Architecture</span>
            </span>
          </div>

          <button
            type="button"
            className="back-to-top-btn glass-panel-subtle"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
