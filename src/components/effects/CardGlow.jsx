import { useEffect } from 'react';

// Mounted once. Adds a mouse-following spotlight glow to every .bento-card
// by writing --mx / --my CSS vars (used by the .bento-card::before in index.css).
export default function CardGlow() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch devices
    const onMove = (e) => {
      const card = e.target.closest('.bento-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
  return null;
}
