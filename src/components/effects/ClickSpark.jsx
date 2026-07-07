import { useEffect, useRef } from 'react';

// Emits a burst of little accent-colored spark lines on every click.
export default function ClickSpark({ color = '#10B981', count = 9, size = 16, duration = 420 }) {
  const canvasRef = useRef(null);
  const sparks = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onClick = (e) => {
      const now = performance.now();
      for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count;
        sparks.current.push({ x: e.clientX, y: e.clientY, angle, start: now });
      }
    };
    window.addEventListener('click', onClick);

    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const loop = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.current = sparks.current.filter((s) => now - s.start < duration);
      for (const s of sparks.current) {
        const p = (now - s.start) / duration;
        const dist = ease(p) * size;
        const x1 = s.x + Math.cos(s.angle) * dist;
        const y1 = s.y + Math.sin(s.angle) * dist;
        const x2 = s.x + Math.cos(s.angle) * (dist + size * 0.5);
        const y2 = s.y + Math.sin(s.angle) * (dist + size * 0.5);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1 - p;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', onClick);
    };
  }, [color, count, size, duration]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] w-full h-full pointer-events-none"
    />
  );
}
