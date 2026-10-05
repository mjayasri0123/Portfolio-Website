import React from 'react';
import { 
  UserCheck, 
  MapPin, 
  Languages, 
  Compass, 
  Trophy, 
  Calendar, 
  CheckCircle, 
  Heart,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './AboutSection.css';

export default function AboutSection() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="about-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <UserCheck size={16} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">About Jaya Sri M</h2>
          <p className="section-description">
            A grounded overview of academic background, core work principles, communication languages, and personal pursuits.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          
          {/* Main Profile Summary Card */}
          <div className="about-card main-summary-card glass-panel reveal-child">
            <div className="card-top-indicator">
              <span className="indicator-pill">Core Profile</span>
            </div>

            <h3 className="card-heading">
              Responsible, Orderly & Ready for First Work Experience
            </h3>

            <p className="card-body-text">
              {personalInfo.aboutSummary}
            </p>

            <div className="core-tenets-list">
              <div className="tenet-item">
                <div className="tenet-icon-wrap">
                  <CheckCircle size={18} className="text-peach" />
                </div>
                <div className="tenet-text">
                  <strong>Structured & Orderly Execution</strong>
                  <span>Consistently maintains structured folders, accurate documentation, and clean workspace standards.</span>
                </div>
              </div>

              <div className="tenet-item">
                <div className="tenet-icon-wrap">
                  <CheckCircle size={18} className="text-teal" />
                </div>
                <div className="tenet-text">
                  <strong>Eager to Learn & Adapt</strong>
                  <span>Looking forward to applying academic training in commerce and human resources into day-to-day office operations.</span>
                </div>
              </div>

              <div className="tenet-item">
                <div className="tenet-icon-wrap">
                  <CheckCircle size={18} className="text-peach" />
                </div>
                <div className="tenet-text">
                  <strong>Punctual & Dependable</strong>
                  <span>Respects organizational deadlines, schedules, and team commitments with unwavering reliability.</span>
                </div>
              </div>
            </div>

            {/* Quick Location & Availability Ribbon */}
            <div className="about-ribbon glass-panel-subtle">
              <div className="ribbon-item">
                <MapPin size={16} className="text-peach" />
                <span><strong>Location:</strong> {personalInfo.location}</span>
              </div>
              <div className="ribbon-divider" />
              <div className="ribbon-item">
                <GraduationCap size={16} className="text-teal" />
                <span><strong>Target Completion:</strong> 2026 (B.Com)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Interests */}
          <div className="about-side-column">
            
            {/* Languages Card */}
            <div className="about-card glass-panel languages-card reveal-child">
              <div className="card-header-mini">
                <Languages size={20} className="text-teal" />
                <h4 className="mini-card-title">Languages Spoken</h4>
              </div>

              <p className="mini-card-sub">
                Effective bilingual communication for regional and professional workplace collaboration.
              </p>

              <div className="languages-list">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="language-item glass-panel-subtle">
                    <div className="language-name-row">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-badge">{lang.fluency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Passions Card */}
            <div className="about-card glass-panel interests-card reveal-child">
              <div className="card-header-mini">
                <Heart size={20} className="text-peach" />
                <h4 className="mini-card-title">Interests & Activities</h4>
              </div>

              <p className="mini-card-sub">
                Well-rounded pursuits that energize focus, resilience, and curiosity.
              </p>

              <div className="interests-grid">
                {personalInfo.interests.map((item) => (
                  <div key={item.name} className="interest-item glass-panel-subtle">
                    <div className="interest-icon-circle">
                      {item.name === 'Travelling' ? (
                        <Compass size={22} className="text-peach" />
                      ) : (
                        <Trophy size={22} className="text-teal" />
                      )}
                    </div>
                    <div className="interest-info">
                      <h5 className="interest-title">{item.name}</h5>
                      <p className="interest-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
