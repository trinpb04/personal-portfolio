import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import certData from '../data/certifications.json';
import { useLanguage } from '../i18n/LanguageContext';

function CertCardItem({ cert, itemIdx, step, peekingOffset, x, lang, t, onClick }) {
  const x1 = -(itemIdx + 1) * step + peekingOffset;
  const x2 = -itemIdx * step + peekingOffset;
  const x3 = -(itemIdx - 2) * step + peekingOffset;
  const x4 = -(itemIdx - 3) * step + peekingOffset;

  // Real-time live opacity & scale interpolation based on current X position of track
  const cardOpacity = useTransform(
    x,
    [x1 - 150, x1, x2, x3, x4, x4 + 150],
    [0.35, 0.35, 1, 1, 0.35, 0.35]
  );

  const cardScale = useTransform(
    x,
    [x1 - 150, x1, x2, x3, x4, x4 + 150],
    [0.96, 0.96, 1, 1, 0.96, 0.96]
  );

  return (
    <motion.div
      onClick={onClick}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
      }}
      className="bento-card p-0 flex flex-col overflow-hidden w-[285px] sm:w-[295px] md:w-[305px] shrink-0 h-[515px] shadow-xl border border-card-border hover:border-accent/40 cursor-pointer transition-colors duration-200 select-none"
    >
      {/* Certificate Image or iframe */}
      {cert.iframe ? (
        <div className="w-full h-40 sm:h-44 overflow-hidden border-b border-card-border relative shrink-0 bg-white">
          <iframe
            src={cert.iframe}
            title={cert.name[lang]}
            className="w-full h-full border-0 pointer-events-none"
            loading="lazy"
          />
        </div>
      ) : cert.image ? (
        <div className={`w-full h-40 sm:h-44 overflow-hidden border-b border-card-border relative group shrink-0 ${cert.fit === 'contain' ? 'bg-white' : ''}`}>
          <img
            src={cert.image}
            alt={cert.name[lang]}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${cert.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
          />
        </div>
      ) : null}

      <div className="p-5 flex flex-col flex-1 justify-between overflow-hidden">
        <div>
          <div className="flex justify-between items-start mb-2.5 gap-2">
            <div>
              <h3 className="text-base font-bold text-primary mb-1 leading-snug">{cert.name[lang]}</h3>
              <p className="text-accent text-xs font-medium mb-2">{cert.issuer}</p>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 bg-bg border border-card-border rounded-lg hover:border-accent hover:text-accent transition-colors shrink-0"
              aria-label={t.certifications.verify}
            >
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono mb-3">
            <span className="px-2 py-0.5 rounded-full bg-bg border border-card-border text-text-secondary">{cert.date}</span>
            <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">{cert.grade}</span>
          </div>

          <div className="pt-2.5 border-t border-card-border">
            <h4 className="text-xs font-semibold text-primary mb-2">{t.certifications.skillsAcquired}</h4>
            <ul className="grid grid-cols-1 gap-1.5">
              {cert.skills[lang].map((skill, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-text-secondary">
                  <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="line-clamp-2 leading-tight">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const catLabel = (key) => t.certifications.categories?.[key] || key;
  const categoryKeys = ['all', ...new Set(certData.map((c) => c.category))];

  const filteredCerts = activeCategory === 'all'
    ? certData
    : certData.filter((c) => c.category === activeCategory);

  // Triple array for seamless infinite track
  const displayedCerts = filteredCerts.length > 1
    ? [...filteredCerts, ...filteredCerts, ...filteredCerts]
    : filteredCerts;

  // Step distance: Card width (305px) + gap (18px) = 323px
  const cardWidth = 305;
  const gap = 18;
  const step = cardWidth + gap;
  const peekingOffset = 110; // Left peeking offset

  // Framer Motion MotionValue for 100% real-time 60fps/120fps X position
  const x = useMotionValue(-filteredCerts.length * step + peekingOffset);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(filteredCerts.length);

  // Reset track position on category change
  useEffect(() => {
    const initialTrackIdx = filteredCerts.length > 1 ? filteredCerts.length : 0;
    const initialX = -initialTrackIdx * step + peekingOffset;
    x.set(initialX);
    setActiveTrackIndex(initialTrackIdx);
    setCurrentIndex(0);
  }, [activeCategory, filteredCerts.length]);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
  };

  // Smooth Momentum Spring Physics Snapping
  const snapToIndex = (targetIdx, velocityX = 0) => {
    let finalIdx = targetIdx;
    const totalLen = filteredCerts.length;
    if (totalLen <= 1) return;

    const minIdx = Math.floor(totalLen * 0.4);
    const maxIdx = Math.floor(totalLen * 2.6);

    // Seamless instant offset adjustment if wrapping
    if (finalIdx < minIdx) {
      finalIdx += totalLen;
      x.set(x.get() - totalLen * step);
    } else if (finalIdx > maxIdx) {
      finalIdx -= totalLen;
      x.set(x.get() + totalLen * step);
    }

    const targetX = -finalIdx * step + peekingOffset;

    // Soft luxurious Apple spring physics with momentum blending
    animate(x, targetX, {
      type: 'spring',
      stiffness: 180,
      damping: 24,
      mass: 0.8,
      velocity: velocityX,
    });

    setActiveTrackIndex(finalIdx);
    const normalized = ((finalIdx % totalLen) + totalLen) % totalLen;
    setCurrentIndex(normalized);
  };

  // Real-time drag end handler with velocity momentum prediction
  const handleDragEnd = (event, info) => {
    const currentX = x.get();
    const rawIndex = (-currentX + peekingOffset) / step;

    // Projected index calculation based on user drag velocity
    const velocityOffset = -info.velocity.x * 0.0012;
    const projectedIndex = Math.round(rawIndex + velocityOffset);

    snapToIndex(projectedIndex, info.velocity.x);
  };

  const handlePrev = () => {
    snapToIndex(activeTrackIndex - 1);
  };

  const handleNext = () => {
    snapToIndex(activeTrackIndex + 1);
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
              <Award className="text-accent" size={32} />
              {t.certifications.title}
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-4"></div>
            {/* Category Slicers */}
            <div className="flex flex-wrap gap-2.5">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === key
                      ? 'bg-accent/20 text-accent border border-accent/50 shadow-sm'
                      : 'bg-card border border-card-border text-text-secondary hover:border-accent/50 hover:text-primary'
                  }`}
                >
                  {key === 'all' ? t.certifications.all : catLabel(key)}
                </button>
              ))}
            </div>
          </div>

          {/* Indicator Counter & Navigation Buttons */}
          {filteredCerts.length > 1 && (
            <div className="flex items-center gap-3 self-start md:self-end">
              <span className="text-sm font-mono text-text-secondary mr-2">
                <span className="text-accent font-bold text-lg">{currentIndex + 1}</span> / {filteredCerts.length}
              </span>
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-card border border-card-border text-primary hover:border-accent hover:text-accent hover:bg-accent/20 transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-card border border-card-border text-primary hover:border-accent hover:text-accent hover:bg-accent/20 transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Next Certificate"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Live Apple Real-Time Drag Showcase Container */}
        <div className="relative w-full py-4 select-none overflow-hidden min-h-[550px]">
          
          {/* Subtle Side Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-bg via-bg/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-bg via-bg/80 to-transparent z-20 pointer-events-none"></div>

          {/* Live Draggable Track with Smooth Elastic Boundaries */}
          <motion.div
            drag="x"
            dragConstraints={{
              left: -displayedCerts.length * step + 600,
              right: peekingOffset + 300,
            }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            style={{ x, width: 'max-content' }}
            className="flex items-center gap-[18px] cursor-grab active:cursor-grabbing"
          >
            {displayedCerts.map((cert, itemIdx) => (
              <CertCardItem
                key={`${cert.id}-${itemIdx}`}
                cert={cert}
                itemIdx={itemIdx}
                step={step}
                peekingOffset={peekingOffset}
                x={x}
                lang={lang}
                t={t}
                onClick={() => {
                  if (itemIdx !== activeTrackIndex && itemIdx !== activeTrackIndex + 1 && itemIdx !== activeTrackIndex + 2) {
                    snapToIndex(itemIdx < activeTrackIndex ? itemIdx : itemIdx - 2);
                  }
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        {filteredCerts.length > 1 && (
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {filteredCerts.map((_, i) => (
              <button
                key={i}
                onClick={() => snapToIndex(filteredCerts.length + i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-accent' : 'w-2 bg-card-border hover:bg-text-secondary/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
