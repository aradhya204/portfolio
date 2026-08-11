import React, { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  color: string;
}

/**
 * ParticlePortrait renders the image as a particle field with mouse-repel interaction.
 * Falls back to a plain <img> on reduced-motion preference or if canvas fails.
 */
export const ParticlePortrait: React.FC<{ src: string; width?: number; height?: number }> = ({
  src,
  width = 300,
  height = 400,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set intrinsic canvas dimensions
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.crossOrigin = 'anonymous'; // Important for canvas pixel manipulation
    img.src = src;
    
    img.onload = () => {
      setLoaded(true);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d')!;
      offCtx.drawImage(img, 0, 0, width, height);
      const imgData = offCtx.getImageData(0, 0, width, height).data;

      const particles: Particle[] = [];
      const step = Math.max(2, Math.floor((width * height) / 1200));

      for (let i = 0; i < width * height; i += step) {
        const px = i % width;
        const py = Math.floor(i / width);
        const idx = (py * width + px) * 4;
        
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const a = imgData[idx + 3];
        
        if (a < 50) continue;

        const brightness = (r + g + b) / 3;

        // Gradient from Blue (#3B82F6) to Purple (#8B5CF6) based on x-coordinate
        const ratio = px / width;
        const colorR = Math.round(59 + (139 - 59) * ratio); // 139 is hex 8B
        const colorG = Math.round(130 + (92 - 130) * ratio); // 92 is hex 5C
        const colorB = Math.round(246 + (246 - 246) * ratio); // 246 is hex F6

        // Opacity based on brightness to retain the portrait's shading/depth
        const alpha = (brightness / 255) * 0.8 + 0.2; 

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          homeX: px,
          homeY: py,
          color: `rgba(${colorR},${colorG},${colorB},${alpha})`,
        });
      }

      let animId: number;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
          p.x += (p.homeX - p.x) * 0.08;
          p.y += (p.homeY - p.y) * 0.08;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 2, 2);
        }
        animId = requestAnimationFrame(render);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = width / rect.width;
        const scaleY = height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;
        const radius = 70;
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const angle = Math.atan2(dy, dx);
            const force = ((radius - dist) / radius) * 15;
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }
      };

      render();
      canvas.addEventListener('mousemove', onMouseMove);

      return () => {
        cancelAnimationFrame(animId);
        canvas.removeEventListener('mousemove', onMouseMove);
      };
    };

    img.onerror = (err) => {
      console.error("Error loading image for ParticlePortrait", err);
      setLoaded(false);
    };
  }, [src, width, height, reduceMotion]);

  if (reduceMotion) {
    return <img src={src} alt="Portrait" className="w-full h-full object-cover" />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={src} alt="Portrait" className="w-full h-full object-cover absolute inset-0 opacity-40" />
      <canvas
        ref={canvasRef}
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          position: 'absolute',
          inset: 0,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
};
