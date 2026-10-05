import { useEffect, useRef, useState } from 'react';

/**
 * Custom Animated Cursor with Organic Dynamic Trails & Click Ripples
 * - Default cursor is hidden via CSS for fine pointers
 * - 9-particle luminous comet trail with peach-to-teal gradient decay
 * - Contextual adaptations over links, buttons, inputs, and text
 * - Interactive click burst ripples
 * - Auto-disabled on touch or reduced motion
 */
const TRAIL_LENGTH = 8;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const ripplesRef = useRef([]);

  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'text' | 'hidden'
  const [isEnabled, setIsEnabled] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEligibility = () => {
      setIsEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    checkEligibility();

    finePointerQuery.addEventListener('change', checkEligibility);
    reducedMotionQuery.addEventListener('change', checkEligibility);

    return () => {
      finePointerQuery.removeEventListener('change', checkEligibility);
      reducedMotionQuery.removeEventListener('change', checkEligibility);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    // Array of trailing coordinates for the comet effect
    const trailPositions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: -100,
      y: -100
    }));

    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Main render loop with chained lerp physics
    const render = () => {
      // Ring follows mouse with smooth inertia
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      // Trail particles follow previous particle in the chain
      let prevX = mouseX;
      let prevY = mouseY;

      trailPositions.forEach((pos, index) => {
        // Dynamic lerp: front particles track faster, back particles glide
        const factor = 0.38 - index * 0.025;
        pos.x += (prevX - pos.x) * Math.max(factor, 0.15);
        pos.y += (prevY - pos.y) * Math.max(factor, 0.15);

        const el = trailRefs.current[index];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        }

        prevX = pos.x;
        prevY = pos.y;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-card, .photo-toggle-btn');
      const textElement = target.closest('p, h1, h2, h3, h4, h5, h6, li, blockquote');

      if (interactive) {
        setCursorState('hover');
      } else if (textElement) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    // Click burst ripple effect
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const handleMouseLeave = () => setCursorState('hidden');
    const handleMouseEnter = () => setCursorState('default');

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled]);

  if (!isEnabled || cursorState === 'hidden') return null;

  // Trail colors transition: Rose Pink -> Regal Gold -> Royal Blue -> Platinum Silver
  const getParticleColor = (index) => {
    const ratio = index / (TRAIL_LENGTH - 1);
    if (cursorState === 'hover') {
      return ratio < 0.5
        ? `rgba(245, 158, 11, ${0.9 - ratio * 0.4})` // Regal Gold
        : `rgba(37, 99, 235, ${0.8 - (ratio - 0.5) * 0.5})`; // Royal Blue
    }
    if (ratio < 0.33) {
      return `rgba(244, 63, 94, ${0.9 - ratio * 0.5})`; // Rose Pink
    } else if (ratio < 0.66) {
      return `rgba(245, 158, 11, ${0.85 - (ratio - 0.33) * 0.4})`; // Metallic Gold
    } else {
      return `rgba(37, 99, 235, ${0.75 - (ratio - 0.66) * 0.5})`; // Royal Blue
    }
  };

  return (
    <>
      {/* Dynamic Trail Particles */}
      <div className="cursor-trail-layer" aria-hidden="true">
        {Array.from({ length: TRAIL_LENGTH }).map((_, index) => {
          const size = Math.max(7 - index * 0.65, 2.5);
          const opacity = 1 - index / TRAIL_LENGTH;
          return (
            <div
              key={index}
              ref={(el) => (trailRefs.current[index] = el)}
              className="cursor-trail-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: getParticleColor(index),
                color: getParticleColor(index),
                opacity: opacity * 0.85,
                transition: 'background-color 0.2s ease'
              }}
            />
          );
        })}
      </div>

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-click-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main Cursor Lead Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${cursorState === 'hover' ? 'cursor-hover' : ''}`}
        aria-hidden="true"
      />

      {/* Outer Smooth Aura Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${cursorState === 'hover' ? 'cursor-hover' : ''} ${cursorState === 'text' ? 'cursor-text' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
