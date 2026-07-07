import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

// Desktop: a draggable ID badge hanging from a lanyard (swings like a pendulum).
// Mobile: a holographic tilt profile card (no heavy 3D — pure framer-motion).
export default function ProfileLanyard() {
  const { t } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop ? <Lanyard t={t} /> : <TiltCard t={t} />;
}

function BadgeInner({ t }) {
  return (
    <div className="w-60 rounded-2xl border border-card-border bg-card shadow-2xl overflow-hidden select-none">
      <div className="h-1.5 bg-gradient-to-r from-accent to-blue-500" />
      <div className="p-5 flex flex-col items-center text-center">
        <img
          src="/avatar/profile.jpg"
          alt="Nguyen Phuoc Bao Tri"
          draggable="false"
          className="w-28 h-28 rounded-xl object-cover border border-card-border mb-3"
        />
        <p className="font-bold text-primary leading-tight">Nguyen Phuoc Bao Tri</p>
        <p className="text-xs text-accent font-mono mt-1">DATA ANALYST</p>
        <p className="text-[10px] text-text-secondary font-mono mt-0.5">{t.about.eyebrow}</p>
        <div className="mt-3 h-6 w-full flex items-end gap-[2px]" aria-hidden="true">
          {Array.from({ length: 34 }).map((_, i) => (
            <span key={i} className="flex-1 bg-text-primary/70" style={{ height: `${(i * 37) % 100}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Lanyard({ t }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-32, 32]);
  const rotateSpring = useSpring(rotate, { stiffness: 120, damping: 12 });

  return (
    <div className="relative flex flex-col items-center justify-start pt-2 h-[30rem] w-full">
      {/* lanyard clip anchor */}
      <div className="w-3 h-3 rounded-full bg-card-border z-10" />
      <motion.div
        style={{ x, rotate: rotateSpring, transformOrigin: '50% 0%' }}
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={{ left: -140, right: 140, top: 0, bottom: 120 }}
        whileDrag={{ cursor: 'grabbing' }}
        className="flex flex-col items-center cursor-grab"
      >
        {/* strap */}
        <div className="w-2 h-24 bg-gradient-to-b from-accent/80 to-blue-500/80" />
        {/* metal clip */}
        <div className="w-6 h-3 rounded-b bg-card-border -mt-0.5 mb-[-2px] z-10" />
        <BadgeInner t={t} />
      </motion.div>
      <p className="absolute bottom-1 text-[10px] text-text-secondary font-mono">← drag me →</p>
    </div>
  );
}

function TiltCard({ t }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  const handleMove = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(touch.clientX - r.left - r.width / 2);
    y.set(touch.clientY - r.top - r.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <div className="flex justify-center" style={{ perspective: 800 }}>
      <motion.div
        style={{ rotateX, rotateY }}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        className="relative"
      >
        <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-blue-500 rounded-3xl blur-2xl opacity-25" />
        <BadgeInner t={t} />
      </motion.div>
    </div>
  );
}
