import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Lanyard from './effects/Lanyard';
import ShinyText from './effects/ShinyText';

export default function AboutMe({ theme }) {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-32 pb-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-3 font-mono">
                {t.about.eyebrow}
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
                Nguyen Phuoc <br />
                <ShinyText>Bao Tri</ShinyText>
              </h1>
              <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
                {t.about.bio}
              </p>

              <div className="flex flex-wrap gap-4 mb-8 items-center">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-sm"
                >
                  {t.about.exploreWork} <ArrowRight size={18} />
                </a>
                <a
                  href="https://github.com/trinpb04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-card border border-card-border rounded-lg hover:border-accent hover:text-accent transition-all shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span className="font-medium underline decoration-text-secondary/30 underline-offset-4">{t.about.sourceCode}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/trinpb04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-card border border-card-border rounded-lg hover:border-accent hover:text-accent transition-all shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="font-medium underline decoration-text-secondary/30 underline-offset-4">{t.about.linkedin}</span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={18} className="text-accent" />
                <span className="font-mono text-sm tracking-wide">{t.about.location}</span>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block w-full h-[600px] md:h-[700px]">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} frontImage="/avatar/profile.jpg" theme={theme} lanyardImage={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
