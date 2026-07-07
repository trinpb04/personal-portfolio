import { useEffect, useRef } from 'react';

// Theme-aware animated background:
//  - dark  -> "Galaxy" starfield (drifting stars + faint nebula)
//  - light -> "Dot Grid" (subtle data-grid of dots)
// Lightweight canvas (no WebGL). Respects prefers-reduced-motion and
// falls back to a static frame on small screens / reduced motion.
export default function SiteBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h, dpr;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animate = !reduce && window.innerWidth > 640;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const isDark = theme === 'dark';

    // ---- DARK: galaxy starfield ----
    const stars = [];
    if (isDark) {
      const count = Math.min(180, Math.floor((w * h) / 9000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.6 + 0.2,
          tw: Math.random() * 0.02 + 0.005,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          ph: Math.random() * Math.PI * 2,
        });
      }
    }

    const drawDark = (t) => {
      ctx.clearRect(0, 0, w, h);
      // faint nebula glow
      const g = ctx.createRadialGradient(w * 0.75, h * 0.25, 0, w * 0.75, h * 0.25, Math.max(w, h) * 0.6);
      g.addColorStop(0, 'rgba(16,185,129,0.06)');
      g.addColorStop(1, 'rgba(3,7,18,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * s.tw + s.ph);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,225,255,${s.a * tw})`;
        ctx.fill();
        if (animate) {
          s.x += s.vx; s.y += s.vy;
          if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
        }
      }
    };

    // ---- LIGHT: dot grid ----
    const gap = 34;
    const drawLight = (t) => {
      ctx.clearRect(0, 0, w, h);
      const drift = animate ? Math.sin(t * 0.0004) * 4 : 0;
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          const d = animate ? 0.5 + 0.5 * Math.sin(t * 0.001 + (x + y) * 0.01) : 0.6;
          ctx.beginPath();
          ctx.arc(x + drift, y, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(38,139,210,${0.10 + d * 0.10})`;
          ctx.fill();
        }
      }
    };

    const loop = (t) => {
      if (isDark) drawDark(t); else drawLight(t);
      if (animate) raf = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
