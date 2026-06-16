import { useState } from 'react';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.techstack, href: '#techstack' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.dashboards, href: '#dashboards' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const LangButton = ({ className = '' }) => (
    <button
      onClick={toggleLang}
      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-card-border text-text-secondary hover:text-accent hover:border-accent transition-colors text-xs font-bold font-mono ${className}`}
      aria-label={t.nav.toggleLang}
      title={t.nav.toggleLang}
    >
      <Languages size={16} />
      {lang === 'en' ? 'EN' : 'VI'}
    </button>
  );

  return (
    <nav className="fixed w-full z-50 bg-bg/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group h-16 md:h-20 py-2">
              <img
                src={theme === 'dark' ? "/logo-dark.png" : "/logo-light.png"}
                alt="Tri Nguyen Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to text if image is missing
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden font-bold text-xl text-primary items-center gap-2">
                <span className="text-accent">&lt;</span>
                Trí Nguyễn
                <span className="text-accent">/&gt;</span>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <LangButton />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-card border border-transparent hover:border-card-border transition-colors text-text-secondary hover:text-accent"
                aria-label={t.nav.toggleTheme}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LangButton />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-card text-text-secondary hover:text-accent transition-colors"
              aria-label={t.nav.toggleTheme}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-accent p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-card-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
