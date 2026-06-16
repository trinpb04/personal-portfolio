import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ImpactMetrics from './components/ImpactMetrics';
import Techstack from './components/Techstack';
import Experience from './components/Experience';
import Dashboards from './components/Dashboards';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import { Contact } from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { t } = useLanguage();

  // Theme state: remembers the user's last choice (default dark).
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme class to <html> and persist.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-bg text-text-primary transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <AboutMe />
        <ImpactMetrics />
        <Techstack />
        <Experience />
        <Dashboards />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center border-t border-card-border mt-12">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Nguyen Phuoc Bao Tri. {t.footer.rights}
        </p>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
