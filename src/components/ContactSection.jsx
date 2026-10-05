import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles,
  Info,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ContactSection.css';

// Crisp, accessible inline SVGs for LinkedIn and GitHub
const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function ContactSection() {
  const { contact, reactionOptions } = portfolioData;

  // Form State
  const [senderName, setSenderName] = useState('');
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [messageText, setMessageText] = useState('');
  
  // Feedback states
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | 'draft' | null
  const [showBackendDocs, setShowBackendDocs] = useState(false);

  // Copy to clipboard helper
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Handle reaction selection
  const handleSelectReaction = (reaction) => {
    if (selectedReaction?.emoji === reaction.emoji) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction(reaction);
      if (!messageText) {
        setMessageText(reaction.text);
      }
    }
  };

  // Build formatted message
  const composeFinalMessage = () => {
    const greeting = senderName.trim() ? `From: ${senderName.trim()}` : 'From: Portfolio Visitor';
    const reactionBadge = selectedReaction ? `\nReaction: ${selectedReaction.emoji} ${selectedReaction.label}` : '';
    const body = messageText.trim() ? `\n\nMessage:\n${messageText.trim()}` : '';
    return `${greeting}${reactionBadge}${body}\n\n— Sent via Jaya Sri M's Portfolio Website`;
  };

  // Action: Open in Mailto
  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      selectedReaction 
        ? `${selectedReaction.emoji} [Portfolio Connect] Message from ${senderName || 'Visitor'}`
        : `[Portfolio Connect] Inquiring regarding Jaya Sri M`
    );
    const body = encodeURIComponent(composeFinalMessage());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  // Action: Open in WhatsApp
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(composeFinalMessage());
    window.open(`https://wa.me/917418191969?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section site-section reveal-on-scroll">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={16} />
            <span>Let’s Connect</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Feel free to reach out for entry-level commerce or HR opportunities, professional conversations, or to share feedback.
          </p>
        </div>

        <div className="contact-layout-grid">
          
          {/* Left Column: Direct Clickable Contact Channels */}
          <div className="contact-channels-column reveal-child">
            
            {/* Email Card */}
            <div className="contact-channel-card glass-panel interactive-card">
              <div className="channel-icon-wrap">
                <Mail size={22} className="text-peach" />
              </div>

              <div className="channel-info">
                <span className="channel-label">Email Address</span>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="channel-value channel-link"
                  title="Click to compose email"
                >
                  {contact.email}
                </a>
                <span className="channel-meta">Direct response within 24 hours</span>
              </div>

              <div className="channel-action-btns">
                <a
                  href={`mailto:${contact.email}`}
                  className="channel-icon-btn"
                  title="Open mail application"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  className="channel-icon-btn"
                  onClick={() => handleCopy(contact.email, 'email')}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? <Check size={16} className="text-teal" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-channel-card glass-panel interactive-card">
              <div className="channel-icon-wrap">
                <Phone size={22} className="text-teal" />
              </div>

              <div className="channel-info">
                <span className="channel-label">Phone & WhatsApp (+91 India)</span>
                <a 
                  href={contact.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-value channel-link"
                  title="Click to open WhatsApp chat"
                >
                  {contact.phoneFormatted}
                </a>
                <span className="channel-meta">WhatsApp direct or mobile call</span>
              </div>

              <div className="channel-action-btns">
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-icon-btn"
                  title="Open WhatsApp chat"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  className="channel-icon-btn"
                  onClick={() => handleCopy(contact.phoneFormatted, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check size={16} className="text-teal" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="social-links-grid">
              
              {/* LinkedIn */}
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card glass-panel interactive-card"
              >
                <div className="social-icon-bubble">
                  <LinkedInIcon size={20} className="text-teal" />
                </div>
                <div className="social-text-wrap">
                  <span className="social-name">LinkedIn Profile</span>
                  <span className="social-handle">jayasri-m-706279441</span>
                </div>
                <ExternalLink size={14} className="social-arrow" />
              </a>

              {/* GitHub */}
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card glass-panel interactive-card"
              >
                <div className="social-icon-bubble">
                  <GitHubIcon size={20} className="text-peach" />
                </div>
                <div className="social-text-wrap">
                  <span className="social-name">GitHub Repository</span>
                  <span className="social-handle">@mjayasri0123</span>
                </div>
                <ExternalLink size={14} className="social-arrow" />
              </a>

            </div>

            {/* Location Notice */}
            <div className="location-card glass-panel-subtle">
              <MapPin size={18} className="text-peach" />
              <div className="location-text">
                <strong>Base Location:</strong> {contact.location}
                <span className="location-note">Available for opportunities in and around Chennai</span>
              </div>
            </div>

          </div>

          {/* Right Column: "Send a Message or Reaction" Interactive Area */}
          <div className="message-form-column reveal-child">
            <div className="message-box-card glass-panel">
              
              <div className="message-card-header">
                <div className="msg-title-wrap">
                  <Sparkles size={18} className="text-peach" />
                  <h3 className="msg-title">Send a Message or Reaction</h3>
                </div>
                <span className="msg-privacy-tag">Direct Draft Mode</span>
              </div>

              <p className="msg-subtitle">
                Compose a draft and send directly through your preferred platform (Email or WhatsApp). No login or external server required.
              </p>

              <form className="interactive-message-form">
                
                {/* Name Input */}
                <div className="form-field">
                  <label htmlFor="sender-name">Your Name or Organization</label>
                  <input
                    id="sender-name"
                    type="text"
                    placeholder="e.g. Talent Acquisition / Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </div>

                {/* Reaction Choices */}
                <div className="form-field">
                  <label>Select a Quick Reaction (Optional):</label>
                  <div className="reactions-pill-list" role="group" aria-label="Reaction options">
                    {reactionOptions.map((item) => {
                      const isSelected = selectedReaction?.emoji === item.emoji;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          className={`reaction-pill ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleSelectReaction(item)}
                          aria-pressed={isSelected}
                        >
                          <span className="reaction-emoji">{item.emoji}</span>
                          <span className="reaction-text">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-field">
                  <div className="label-with-counter">
                    <label htmlFor="message-body">Message Content</label>
                    <span className="char-counter">{messageText.length} chars</span>
                  </div>
                  <textarea
                    id="message-body"
                    rows="4"
                    placeholder="Write your message, inquiry, or question for Jaya Sri here..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                </div>

                {/* Action Buttons */}
                <div className="form-action-buttons">
                  <button
                    type="button"
                    className="glass-btn glass-btn-primary action-btn-full"
                    onClick={handleSendWhatsApp}
                  >
                    <span>Send via WhatsApp (+91)</span>
                    <ExternalLink size={16} />
                  </button>

                  <button
                    type="button"
                    className="glass-btn glass-btn-teal action-btn-full"
                    onClick={handleSendEmail}
                  >
                    <Mail size={16} />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    className="glass-btn glass-btn-secondary"
                    onClick={() => handleCopy(composeFinalMessage(), 'draft')}
                    title="Copy formatted message draft to clipboard"
                  >
                    {copiedType === 'draft' ? (
                      <>
                        <Check size={16} className="text-teal" />
                        <span>Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Privacy and Transparency Disclaimer */}
              <div className="privacy-notice-box glass-panel-subtle">
                <Info size={16} className="text-muted" />
                <p className="privacy-text">
                  <strong>Privacy Note:</strong> This site creates your message as a standard <code>mailto:</code> link or WhatsApp API URL. No messages are stored in a database or tracked by third parties.
                </p>
              </div>

              {/* Backend Integration Guide Dropdown for Developers */}
              <div className="backend-docs-accordion">
                <button
                  type="button"
                  className="backend-docs-trigger"
                  onClick={() => setShowBackendDocs(!showBackendDocs)}
                  aria-expanded={showBackendDocs}
                >
                  <span>Backend Integration Guide (For Developers)</span>
                  {showBackendDocs ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>

                {showBackendDocs && (
                  <div className="backend-docs-content">
                    <p>
                      If automated form submission directly to an inbox is desired in the future, connect a service like <strong>Formspree</strong>, <strong>EmailJS</strong>, or a serverless function:
                    </p>
                    <ol className="backend-steps-list">
                      <li>Create an account on <a href="https://formspree.io" target="_blank" rel="noreferrer">Formspree</a> or <a href="https://www.emailjs.com" target="_blank" rel="noreferrer">EmailJS</a>.</li>
                      <li>Replace the form action handler in <code>ContactSection.jsx</code> with an API fetch call.</li>
                      <li>Store endpoint keys in an environment file (<code>.env</code>) and <strong>never commit secret keys or tokens</strong> to frontend repository code.</li>
                    </ol>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
