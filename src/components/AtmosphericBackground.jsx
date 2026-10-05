import React, { useEffect, useRef } from 'react';
import './AtmosphericBackground.css';

/**
 * Interactive & Responsive Atmospheric Background
 * - Tracks user mouse position with smooth RAF interpolation
 * - Magnetic 3D parallax shifts on ambient orbs (Peach, Teal, Cream)
 * - Luminous cursor spotlight layer creating a dynamic ambient aura beneath content
 * - Automatically respects reduced-motion preferences
 */
export default function AtmosphericBackground() {
  const spotlightRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const orb4Ref = useRef(null);
  const orb5Ref = useRef(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateParallax = () => {
      // Smooth lerp easing for responsive liquid motion
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const normX = (currentX / window.innerWidth) - 0.5; // -0.5 to 0.5
      const normY = (currentY / window.innerHeight) - 0.5;

      // Update cursor spotlight aura
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      // Parallax shifts on atmospheric orbs
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${normX * 65}px, ${normY * 65}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${normX * -75}px, ${normY * -75}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${normX * 50}px, ${normY * -50}px, 0)`;
      }
      if (orb4Ref.current) {
        orb4Ref.current.style.transform = `translate3d(${normX * -60}px, ${normY * 45}px, 0)`;
      }
      if (orb5Ref.current) {
        orb5Ref.current.style.transform = `translate3d(${normX * 35}px, ${normY * 35}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="atmospheric-container" aria-hidden="true">
      {/* Interactive Cursor Spotlight Aura */}
      <div ref={spotlightRef} className="interactive-cursor-spotlight" />

      {/* Dynamic blurred color orbs with magnetic parallax */}
      <div ref={orb1Ref} className="ambient-orb orb-peach-1" />
      <div ref={orb2Ref} className="ambient-orb orb-teal-1" />
      <div ref={orb3Ref} className="ambient-orb orb-peach-2" />
      <div ref={orb4Ref} className="ambient-orb orb-teal-2" />
      <div ref={orb5Ref} className="ambient-orb orb-cream" />

      {/* Subtle depth grid to enhance glass refraction feel */}
      <div className="atmospheric-grid" />

      {/* Soft vignette overlay */}
      <div className="atmospheric-vignette" />
    </div>
  );
}
