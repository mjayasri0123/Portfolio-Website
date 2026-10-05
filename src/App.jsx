import React, { useState, useEffect } from 'react';
import AtmosphericBackground from './components/AtmosphericBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import AdditionalCoursesSection from './components/AdditionalCoursesSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Theme state: 'dark' (Dark Obsidian Glass) or 'light' (Luminous Opal Glass)
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('jaya_portfolio_theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('jaya_portfolio_theme', currentTheme);
  }, [currentTheme]);

  // Scroll Reveal Observer for graceful section transition animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Animated Atmospheric Lighting (Warm Peach, Muted Teal, Cream) */}
      <AtmosphericBackground />

      {/* Custom Fine Pointer Cursor with Morphing States */}
      <CustomCursor />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar currentTheme={currentTheme} onToggleTheme={toggleTheme} />

      {/* Main Semantic Page Content */}
      <main id="main-content">
        {/* 1. Hero & Introduction with Rotating Strength Captions and Glass Portrait */}
        <HeroSection />

        {/* 2. About & Profile (Core values, languages, interests) */}
        <AboutSection />

        {/* 3. Education Timeline (MBA HR, B.Com, 12th HSC, 10th SSLC) */}
        <EducationSection />

        {/* 4. Skills Grouped Clearly (Productivity & Professional Competencies) */}
        <SkillsSection />

        {/* 5. Additional Courses (Magic Bus, NIIT Foundation, Safal Sales Pro) */}
        <AdditionalCoursesSection />

        {/* 6. Editable Certifications & Achievements Section (Empty State & Data Guide) */}
        <AchievementsSection />

        {/* 7. Contact Channels & Interactive Message/Reaction Drafter */}
        <ContactSection />
      </main>

      {/* Semantic Glass Footer */}
      <Footer />
    </div>
  );
}
