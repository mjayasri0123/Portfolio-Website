import React, { useState } from 'react';
import { 
  Award, 
  PlusCircle, 
  FolderEdit, 
  Trash2, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Info,
  ChevronRight,
  X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './AchievementsSection.css';

export default function AchievementsSection() {
  // Pull initial entries from portfolioData.js (empty array by default per instructions)
  const initialEntries = portfolioData.certificationsAndAchievements || [];

  const [achievements, setAchievements] = useState(initialEntries);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  // Form state for adding interactive demonstration items
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    year: '2026',
    description: '',
    link: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.issuer.trim()) return;

    const newEntry = {
      id: `cert-${Date.now()}`,
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      year: formData.year.trim() || '2026',
      description: formData.description.trim() || 'Professional certification completed.',
      link: formData.link.trim()
    };

    setAchievements((prev) => [newEntry, ...prev]);
    setFormData({ title: '', issuer: '', year: '2026', description: '', link: '' });
    setShowAddModal(false);
  };

  const handleRemove = (id) => {
    setAchievements((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section id="achievements" className="achievements-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Award size={16} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-description">
            Configurable showcase designed to highlight future professional certifications, honors, and milestones.
          </p>
        </div>

        {/* Action Bar for Adding / Editing */}
        <div className="achievements-toolbar">
          <button
            type="button"
            className="glass-btn glass-btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <PlusCircle size={16} />
            <span>Add New Entry</span>
          </button>

          <button
            type="button"
            className="glass-btn glass-btn-secondary"
            onClick={() => setShowConfigGuide(!showConfigGuide)}
            aria-expanded={showConfigGuide}
          >
            <FolderEdit size={16} />
            <span>{showConfigGuide ? "Hide Edit Guide" : "How to Edit via Code"}</span>
          </button>
        </div>

        {/* Configuration Guide Banner */}
        {showConfigGuide && (
          <div className="config-guide-panel glass-panel">
            <div className="guide-header">
              <Info size={18} className="text-peach" />
              <h3 className="guide-title">How to Edit or Add Permanent Entries</h3>
              <button 
                type="button" 
                className="guide-close-btn"
                onClick={() => setShowConfigGuide(false)}
                aria-label="Close guide"
              >
                <X size={16} />
              </button>
            </div>
            <p className="guide-body">
              All portfolio data is kept separate from presentation. To add, edit, or remove entries permanently, edit the file:
              <br />
              <code className="code-filepath">src/data/portfolioData.js</code>
            </p>
            <div className="guide-code-snippet">
              <pre>
{`// In src/data/portfolioData.js:
certificationsAndAchievements: [
  {
    id: "cert-1",
    title: "HR Analytics Foundations",
    issuer: "Coursera / SHRM",
    year: "2026",
    description: "Hands-on data-driven human resource metrics and workforce planning.",
    link: "https://example.com"
  }
]`}
              </pre>
            </div>
            <p className="guide-subtext">
              Any item added to that array will automatically display with full styling without modifying any UI component.
            </p>
          </div>
        )}

        {/* Content Area: Empty State OR Grid of Entries */}
        {achievements.length === 0 ? (
          /* Clear, Dignified Empty State (Per Prompt Requirements) */
          <div className="empty-state-card glass-panel">
            <div className="empty-icon-wrap">
              <Sparkles size={40} className="empty-sparkle-icon" />
            </div>
            <h3 className="empty-title">Awaiting Upcoming Career Milestones</h3>
            <p className="empty-description">
              No certifications or achievements are listed other than the verified programs shown above. As Jaya Sri progresses through her <strong>MBA in Human Resources</strong> and commences her <strong>first work experience</strong>, future recognitions, corporate awards, and advanced credentials will be featured here.
            </p>

            <div className="empty-actions">
              <button
                type="button"
                className="glass-btn glass-btn-teal"
                onClick={() => setShowAddModal(true)}
              >
                <PlusCircle size={16} />
                <span>Test Adding an Entry</span>
              </button>
            </div>
          </div>
        ) : (
          /* Grid of Added Entries */
          <div className="achievements-grid">
            {achievements.map((item) => (
              <div key={item.id} className="achievement-card glass-panel interactive-card">
                <div className="achievement-header-row">
                  <span className="glass-pill glass-pill-peach">
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </span>

                  <button
                    type="button"
                    className="delete-item-btn"
                    onClick={() => handleRemove(item.id)}
                    title="Remove this entry"
                    aria-label={`Remove ${item.title}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <h3 className="achievement-item-title">{item.title}</h3>
                <div className="achievement-issuer">
                  <Award size={15} className="text-teal" />
                  <span>{item.issuer}</span>
                </div>

                <p className="achievement-item-desc">{item.description}</p>

                {item.link && (
                  <div className="achievement-link-wrap">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Add Entry Modal */}
        {showAddModal && (
          <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
            <div 
              className="modal-panel glass-panel" 
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="modal-header">
                <div className="modal-title-row">
                  <Award size={20} className="text-peach" />
                  <h3 id="modal-title" className="modal-title">Add Achievement / Certification</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setShowAddModal(false)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddSubmit} className="modal-form">
                <div className="form-group">
                  <label htmlFor="ach-title">Title / Certification Name *</label>
                  <input
                    id="ach-title"
                    name="title"
                    type="text"
                    required
                    placeholder="e.g. Advanced Excel for Business"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="ach-issuer">Issuing Organization *</label>
                    <input
                      id="ach-issuer"
                      name="issuer"
                      type="text"
                      required
                      placeholder="e.g. University / Academy"
                      value={formData.issuer}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ach-year">Year</label>
                    <input
                      id="ach-year"
                      name="year"
                      type="text"
                      placeholder="e.g. 2026"
                      value={formData.year}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="ach-desc">Description / Takeaways</label>
                  <textarea
                    id="ach-desc"
                    name="description"
                    rows="3"
                    placeholder="Brief description of key skills acquired or achievement details..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ach-link">Credential URL (Optional)</label>
                  <input
                    id="ach-link"
                    name="link"
                    type="url"
                    placeholder="https://example.com/certificate"
                    value={formData.link}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="glass-btn glass-btn-secondary"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="glass-btn glass-btn-primary"
                  >
                    Add Entry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
