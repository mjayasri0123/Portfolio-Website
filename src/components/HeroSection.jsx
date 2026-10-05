import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Pause, 
  Play, 
  GraduationCap, 
  Mail, 
  MessageCircle, 
  FileText,
  Camera,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './HeroSection.css';

export default function HeroSection() {
  const { personalInfo, heroCaptions, contact } = portfolioData;

  // Caption Rotator State
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Photo mode: true = real photo, false = stylized avatar fallback
  const [usePhoto, setUsePhoto] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showAssetTip, setShowAssetTip] = useState(false);

  // 3D Tilt interactive ref for the portrait card
  const cardRef = useRef(null);

  // Hero Strengths Caption Rotation Timer
  useEffect(() => {
    if (isPaused || isHovered) return;

    const interval = setInterval(() => {
      setCurrentCaptionIndex((prev) => (prev + 1) % heroCaptions.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [isPaused, isHovered, heroCaptions.length]);

  // 3D Card Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="hero" className="hero-section site-section">
      <div className="container hero-container">
        
        {/* Left Column: Text & Content */}
        <div className="hero-content">
          {/* Eyebrow Status Pill */}
          <div className="hero-badge-row hero-anim-1">
            <div className="glass-pill glass-pill-peach">
              <span className="pulsing-status-dot" />
              <span>Seeking First Work Experience</span>
            </div>
            <div className="glass-pill glass-pill-teal">
              <MapPin size={13} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Main Title & Degree Introduction */}
          <h1 className="hero-title hero-anim-2">
            Hi, I’m <span className="hero-name-gradient">{personalInfo.name}</span>
          </h1>

          <div className="hero-subheading hero-anim-3">
            <span className="degree-highlight">B.Com Graduate</span>
            <span className="subheading-separator">•</span>
            <span className="degree-sub">MBA (HR) Pursuing</span>
          </div>

          {/* Rotating Strengths Caption Box */}
          <div 
            className="caption-rotator-card glass-panel-subtle hero-anim-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="caption-label">
              <Sparkles size={14} className="caption-sparkle-icon" />
              <span>Focus & Skill Spotlight:</span>
            </div>

            <div className="caption-slider-window">
              <div 
                key={currentCaptionIndex} 
                className="sliding-caption-text"
              >
                “{heroCaptions[currentCaptionIndex]}”
              </div>
            </div>

            {/* Rotator Controls */}
            <div className="caption-controls">
              <button
                type="button"
                className="pause-toggle-btn"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Play caption rotation" : "Pause caption rotation"}
                title={isPaused ? "Play rotation" : "Pause rotation"}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
                <span className="control-text">{isPaused ? "Paused" : "Live"}</span>
              </button>

              <div className="caption-dots" aria-hidden="true">
                {heroCaptions.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`caption-dot ${idx === currentCaptionIndex ? 'active' : ''}`}
                    onClick={() => setCurrentCaptionIndex(idx)}
                    aria-label={`Go to caption ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition Description */}
          <p className="hero-description hero-anim-5">
            {personalInfo.tagline} Educated at <strong>Chellammal Women’s College</strong> and actively pursuing an MBA in Human Resources at <strong>G K M Engineering College</strong>. Eager to contribute disciplined organization, computer proficiency, and dependable teamwork to an ambitious organization.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group hero-anim-6">
            <a 
              href={contact.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-btn glass-btn-primary"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <a 
              href={`mailto:${contact.email}`} 
              className="glass-btn glass-btn-secondary"
            >
              <Mail size={18} />
              <span>Send Email</span>
            </a>

            <a 
              href="#education" 
              className="glass-btn glass-btn-teal"
            >
              <GraduationCap size={18} />
              <span>Qualifications</span>
            </a>
          </div>

          {/* Quick Snapshot Metrics */}
          <div className="hero-quick-facts hero-anim-7">
            <div className="fact-item">
              <span className="fact-title">Academic Base</span>
              <span className="fact-value">B.Com (General) 2026</span>
            </div>
            <div className="fact-divider" />
            <div className="fact-item">
              <span className="fact-title">Current Study</span>
              <span className="fact-value">MBA (HR) 2026–2028</span>
            </div>
            <div className="fact-divider" />
            <div className="fact-item">
              <span className="fact-title">Workplace Stance</span>
              <span className="fact-value">Responsible & Orderly</span>
            </div>
          </div>

        </div>

        {/* Right Column: Clean, Unobstructed Glassmorphic Portrait Frame */}
        <div className="hero-visual">
          <div 
            className="portrait-frame-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* Ambient Backlight Halos with pulsing glow */}
            <div className="portrait-halo halo-peach" />
            <div className="portrait-halo halo-teal" />

            {/* Glass Container with 3D tilt ref */}
            <div ref={cardRef} className="portrait-glass-card glass-panel">
              
              {/* Dynamic Animated Border Beam that sweeps around the card frame */}
              <div className="portrait-border-beam" aria-hidden="true" />

              {/* Photo Area: Completely unobstructed for maximum visual clarity */}
              <div className="portrait-inner">
                {usePhoto && !imageError ? (
                  <img
                    src={personalInfo.heroImage}
                    alt={personalInfo.imageAlt}
                    className="portrait-image"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="portrait-avatar-fallback">
                    <div className="avatar-monogram">JS</div>
                    <span className="avatar-name">Jaya Sri M</span>
                    <span className="avatar-title">B.Com • MBA HR</span>
                    <div className="avatar-sparkle">
                      <GraduationCap size={28} />
                    </div>
                  </div>
                )}

                {/* Subtle Specular Sheen (leaves photo 100% visible) */}
                <div className="portrait-light-sweep" aria-hidden="true" />
                <div className="portrait-sheen" aria-hidden="true" />
              </div>

              {/* Clean Location & Availability Strip (Below Photo, Non-Obstructing) */}
              <div className="portrait-status-strip">
                <div className="status-badge-inline">
                  <span className="badge-beacon-dot" />
                  <span className="status-location">{personalInfo.location}</span>
                </div>
                <span className="status-dot-separator">•</span>
                <span className="status-availability">Immediate Availability</span>
              </div>

              {/* Photo Options Bar & Asset Replacement Guidance */}
              <div className="portrait-footer-actions">
                <button
                  type="button"
                  className="photo-toggle-btn"
                  onClick={() => setUsePhoto(!usePhoto)}
                  title="Toggle between real photo and stylized monogram"
                >
                  <Camera size={14} />
                  <span>{usePhoto ? "Switch to Monogram" : "Show Portrait"}</span>
                </button>

                <button
                  type="button"
                  className="asset-info-btn"
                  onClick={() => setShowAssetTip(!showAssetTip)}
                  aria-expanded={showAssetTip}
                  title="Asset placement guidance"
                >
                  <FileText size={14} />
                  <span>Image Location</span>
                </button>
              </div>

              {/* Asset Placement Guidance Dropdown */}
              {showAssetTip && (
                <div className="asset-guidance-popup glass-panel-subtle" role="dialog">
                  <p className="guidance-title"><strong>Portrait Asset Information:</strong></p>
                  <p className="guidance-text">
                    File is stored in <code>/public/profile.jpg</code>.
                  </p>
                  <p className="guidance-sub">
                    To replace with any new image, drop your photo into the <code>public/</code> folder as <code>profile.jpg</code>, or configure the path in <code>src/data/portfolioData.js</code>.
                  </p>
                  <button 
                    type="button" 
                    className="guidance-close-btn"
                    onClick={() => setShowAssetTip(false)}
                  >
                    Got it
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
