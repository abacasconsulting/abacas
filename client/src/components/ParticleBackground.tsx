import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NUM_PARTICLES = 250;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6; // cover the contact section
    }

    function initParticles() {
      if (!canvas) return;
      particlesRef.current = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.1, // tiny sideways motion
          vy: -0.05 - Math.random() * 0.1, // drifting upward
          size: 1 + Math.random() * 1.5,
          alpha: 0.2 + Math.random() * 0.4,
        });
      }
    }

    function applyMouseForce(p: Particle) {
      const mouse = mouseRef.current;
      if (mouse.x == null || mouse.y == null) return;

      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist2 = dx * dx + dy * dy;
      const radius = 140 * 140; // interaction radius squared

      if (dist2 < radius) {
        const force = (radius - dist2) / radius * 0.15;
        p.vx += (dx / Math.sqrt(dist2 + 1)) * force;
        p.vy += (dy / Math.sqrt(dist2 + 1)) * force;
      }
    }

    function tick() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        // Apply mouse force
        applyMouseForce(p);

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Add damping to velocities
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Restore upward drift
        p.vy += -0.002;

        // Wrap around edges
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        // Draw particle
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    }

    // Set fill style for particles (white with low opacity for visibility on primary bg)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';

    // Add slight blur for softer appearance
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';

    resize();
    initParticles();
    tick();

    // Event listeners
    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    const handlePointerMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resize);
      canvas?.removeEventListener('pointermove', handlePointerMove);
      canvas?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
