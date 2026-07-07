import { useEffect, useRef, useState } from 'react';
import Galaxy from './Galaxy';
import DotField from './DotField';

// Theme-aware animated background:
//  - dark  -> "Galaxy" starfield (ReactBits Galaxy via ogl)
//  - light -> "Dot Grid" (subtle data-grid of dots in 2d canvas)
// Respects prefers-reduced-motion and
// falls back to a static frame on small screens / reduced motion.
export default function SiteBackground({ theme }) {
  const canvasRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const isDark = theme === 'dark';

  // (Dot grid animation is now handled internally by DotField)

  if (isDark) {
    return (
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-auto">
        <Galaxy disableAnimation={reduceMotion} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-auto">
      <DotField
        sparkle={!reduceMotion}
        waveAmplitude={reduceMotion ? 0 : 5}
        dotRadius={1.8}
        dotSpacing={22}
        cursorRadius={500}
        cursorForce={0.15}
        glowColor="#EEE8D5" 
        gradientFrom="rgba(147, 161, 161, 0.6)"
        gradientTo="rgba(88, 110, 117, 0.4)"
      />
    </div>
  );
}
