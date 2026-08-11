import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

// Simple mobile detection helper (could be moved to a utils file later)
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  color: string;
}

/**
 * ParticlePortrait renders a canvas that displays the given image as a field of particles.
 * Particles animate from random positions to their home positions forming the portrait.
 * Mouse movement repels nearby particles for a subtle interactive effect.
 * On reduced‑motion or mobile devices the component falls back to a static image.
 */
export const ParticlePortrait: React.FC<{ src: string; width?: number; height?: number }> = ({
  src,
  width = 300,
  height = 400,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      // Off‑screen canvas to sample pixel data
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d')!;
      offCtx.drawImage(img, 0, 0, width, height);
      const imgData = offCtx.getImageData(0, 0, width, height).data;

      const particles: Particle[] = [];
      // Determine particle count based on canvas size (cap for performance)
      const maxParticles = Math.min(1500, Math.max(300, Math.floor((width * height) / 2000)));
      const step = Math.max(1, Math.floor((width * height) / maxParticles));

      // Sample pixels at regular intervals
      for (let i = 0; i < width * height; i += step) {
        const x = i % width;
        const y = Math.floor(i / width);
        const idx = (y * width + x) * 4;
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const a = imgData[idx + 3];
        if (a < 50) continue; // skip transparent pixels
        const color = `rgb(${r},${g},${b})`;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          color,
        });
      }

      let animationId: number;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
          if (!reduceMotion) {
            // Simple spring‑like lerp towards the home position
            p.x += (p.homeX - p.x) * 0.07;
            p.y += (p.homeY - p.y) * 0.07;
          } else {
            p.x = p.homeX;
            p.y = p.homeY;
          }
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 1.5, 1.5);
        });
        animationId = requestAnimationFrame(render);
      };

      // Mouse repulsion effect (disabled when reduced motion)
      const handleMouseMove = (e: MouseEvent) => {
        if (reduceMotion) return;
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const radius = 80;
        particles.forEach(p => {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const angle = Math.atan2(dy, dx);
            const force = (radius - dist) * 0.2;
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        });
      };

      render();
      canvas.addEventListener('mousemove', handleMouseMove);

      // Cleanup on unmount
      return () => {
        cancelAnimationFrame(animationId);
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    };
  }, [src, width, height, reduceMotion]);

  // Fallback for mobile or reduced‑motion preference
  if (isMobile() || reduceMotion) {
    return (
      <img
        src={src}
        alt="Portrait"
        className="w-full h-full object-cover"
        style={{ width, height }}
      />
    );
  }

  return <canvas ref={canvasRef} className="block max-w-full h-auto" />;
};
