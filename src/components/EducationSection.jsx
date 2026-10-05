import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './EducationSection.css';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={16} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">Education Journey</h2>
          <p className="section-description">
            Formal qualifications and current higher studies in commerce and human resources administration.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="education-timeline-wrap">
          
          {/* Vertical Track Line */}
          <div className="timeline-spine" aria-hidden="true" />

          <div className="education-cards-list">
            {education.map((item, index) => {
              const isOngoing = item.badgeType === 'ongoing';
              const isCurrent = item.badgeType === 'current';

              return (
                <div 
                  key={item.id} 
                  className={`education-timeline-item reveal-child ${isOngoing ? 'is-active-item' : ''}`}
                >
                  {/* Spine Node Dot */}
                  <div className="timeline-node" aria-hidden="true">
                    <div className="node-inner" />
                  </div>

                  {/* Glassmorphic Education Card */}
                  <div className="education-card glass-panel">
                    
                    {/* Top Row: Degree & Status Tag */}
                    <div className="card-top-row">
                      <div className="degree-meta">
                        <span className="degree-counter">0{index + 1}</span>
                        <h3 className="degree-name">{item.degree}</h3>
                      </div>

                      <div className="status-badge-wrap">
                        {isOngoing && (
                          <span className="glass-pill glass-pill-peach">
                            <Clock size={12} />
                            <span>Currently Pursuing</span>
                          </span>
                        )}
                        {isCurrent && (
                          <span className="glass-pill glass-pill-teal">
                            <Calendar size={12} />
                            <span>{item.period}</span>
                          </span>
                        )}
                        {!isOngoing && !isCurrent && (
                          <span className="glass-pill">
                            <CheckCircle2 size={12} />
                            <span>{item.status}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Institution and Period Information */}
                    <div className="institution-info-row">
                      <div className="info-badge">
                        <BookOpen size={15} className="text-peach" />
                        <span className="institution-name">{item.institution}</span>
                      </div>

                      <div className="info-badge">
                        <MapPin size={14} className="text-teal" />
                        <span>{item.location}</span>
                      </div>

                      <div className="info-badge">
                        <Calendar size={14} className="text-muted" />
                        <span>{item.period}</span>
                      </div>

                      {item.score && (
                        <div className="info-badge score-badge">
                          <Award size={14} className="text-peach" />
                          <span>Score: <strong>{item.score}</strong></span>
                        </div>
                      )}
                    </div>

                    {/* Academic Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="academic-highlights-list" role="list">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="highlight-item">
                            <span className="bullet-point" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
