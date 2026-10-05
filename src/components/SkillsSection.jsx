import React from 'react';
import { 
  Sparkles, 
  FileSpreadsheet, 
  FileText, 
  Presentation, 
  Keyboard, 
  Monitor, 
  Clock, 
  MessageSquare, 
  Users, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './SkillsSection.css';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  // Icon mapping helper
  const getSkillIcon = (skillName) => {
    switch (skillName) {
      case 'Microsoft Word':
        return <FileText size={20} className="text-peach" />;
      case 'Microsoft Excel':
        return <FileSpreadsheet size={20} className="text-teal" />;
      case 'Microsoft PowerPoint':
        return <Presentation size={20} className="text-peach" />;
      case 'Typing & Accurate Data Entry':
        return <Keyboard size={20} className="text-teal" />;
      case 'General Computer Proficiency':
        return <Monitor size={20} className="text-peach" />;
      case 'Time Management & Organization':
        return <Clock size={20} className="text-teal" />;
      case 'Problem-Solving & Communication':
        return <MessageSquare size={20} className="text-peach" />;
      case 'Leadership & Teamwork':
        return <Users size={20} className="text-teal" />;
      default:
        return <ShieldCheck size={20} className="text-teal" />;
    }
  };

  return (
    <section id="skills" className="skills-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={16} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-description">
            Faithfully structured competencies spanning administrative software, accurate data processing, and collaborative work strengths.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.id} className="skill-category-card glass-panel reveal-child">
              
              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon-pill">
                  <span className="cat-num">0{catIdx + 1}</span>
                </div>
                <div className="category-titles">
                  <h3 className="category-title">{cat.categoryTitle}</h3>
                  <p className="category-description">{cat.description}</p>
                </div>
              </div>

              {/* Skills Items List */}
              <div className="skills-items-grid">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-card glass-panel-subtle interactive-card">
                    <div className="skill-icon-bubble">
                      {getSkillIcon(skill.name)}
                    </div>

                    <div className="skill-details">
                      <div className="skill-name-row">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-check-mark">
                          <Check size={14} />
                        </span>
                      </div>
                      <p className="skill-explanation">{skill.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Competency Commitment Banner */}
        <div className="skills-commitment-banner glass-panel-subtle">
          <div className="commitment-icon-wrap">
            <ShieldCheck size={24} className="text-teal" />
          </div>
          <div className="commitment-text">
            <strong>Commitment to Continuous Improvement:</strong> While seeking a foundational role, Jaya Sri is actively enhancing practical office skills, typing precision, and human resources fundamentals through daily study.
          </div>
        </div>

      </div>
    </section>
  );
}
