import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Techstack from './components/Techstack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import { Contact } from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Theme state: default to dark (Cyber Data Tech Dark)
  const [theme, setTheme] = useState('dark');

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-bg text-text-primary transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main>
        <AboutMe />
        <Techstack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center border-t border-card-border mt-12">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Nguyen Phuoc Bao Tri. All rights reserved.
        </p>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
