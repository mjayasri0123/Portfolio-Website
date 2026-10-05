import React from 'react';
import { 
  BookCheck, 
  Award, 
  CheckCircle2, 
  Building2, 
  Tag, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './AdditionalCoursesSection.css';

export default function AdditionalCoursesSection() {
  const { additionalCourses } = portfolioData;

  return (
    <section id="courses" className="courses-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <BookCheck size={16} />
            <span>Structured Training</span>
          </div>
          <h2 className="section-title">Additional Courses</h2>
          <p className="section-description">
            Vocational programs and skill development certifications completed to strengthen workplace readiness.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {additionalCourses.map((course, idx) => (
            <div key={course.id} className="course-card glass-panel interactive-card reveal-child">
              
              {/* Header Badge */}
              <div className="course-badge-row">
                <span className="glass-pill glass-pill-peach">
                  <Award size={13} />
                  <span>{course.credentialType}</span>
                </span>
                <span className="course-number">0{idx + 1}</span>
              </div>

              {/* Title & Organization */}
              <h3 className="course-title">{course.title}</h3>

              <div className="course-org-row">
                <Building2 size={16} className="text-teal" />
                <span className="course-org-name">{course.organization}</span>
              </div>

              {/* Summary Description */}
              <p className="course-summary-text">
                {course.summary}
              </p>

              {/* Tags / Topics */}
              <div className="course-tags-row">
                {course.tags.map((tag) => (
                  <span key={tag} className="course-tag glass-panel-subtle">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Verified Pill */}
              <div className="course-card-footer">
                <div className="verified-status">
                  <CheckCircle2 size={14} className="text-teal" />
                  <span>Credential Verified from Resume</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
