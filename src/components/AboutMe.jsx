import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ShinyText from './effects/ShinyText';

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-32 pb-16 md:min-h-[92vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] gap-10 lg:gap-16 items-center">

          {/* ---------------- Left: copy + actions ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0"
          >
            <div className="status-badge mb-6">
              <span className="pulse-dot" />
              {t.about.statusBadge}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent shrink-0" />
              <h2 className="eyebrow">{t.about.eyebrow}</h2>
            </div>

            <h1 className="hero-title mb-6 break-words">
              <span className="block text-primary">Nguyen Phuoc</span>
              <ShinyText className="block">Bao Tri</ShinyText>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary mb-9 max-w-xl leading-relaxed">
              {t.about.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <a href="#projects" className="btn-primary">
                {t.about.exploreWork} <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/trinpb04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon /> {t.about.sourceCode}
              </a>
              <a
                href="https://www.linkedin.com/in/trinpb04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon /> {t.about.linkedin}
              </a>
            </div>

            <div className="flex items-center gap-3 text-text-secondary">
              <MapPin size={18} className="text-accent shrink-0" />
              <span className="font-mono text-xs sm:text-sm tracking-wide">{t.about.location}</span>
            </div>
          </motion.div>

          {/* ---------------- Right: profile card ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-56 sm:w-72 lg:w-full lg:max-w-[340px]">
              <div
                className="absolute -inset-4 rounded-[32px] blur-3xl opacity-40 pointer-events-none"
                style={{ background: 'var(--accent-gradient)' }}
              />
              <img
                src="/avatar/profile.jpg"
                alt="Nguyen Phuoc Bao Tri"
                className="profile-frame relative w-full aspect-[4/5] object-cover border border-card-border shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
