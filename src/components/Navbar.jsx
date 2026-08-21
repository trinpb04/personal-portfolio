import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('about');
  const { lang, toggleLang, t } = useLanguage();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.techstack, href: '#techstack', id: 'techstack' },
    { name: t.nav.experience, href: '#experience', id: 'experience' },
    { name: t.nav.dashboards, href: '#dashboards', id: 'dashboards' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.certifications, href: '#certifications', id: 'certifications' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const LangButton = ({ className = '' }) => (
    <button
      onClick={toggleLang}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-card-border text-text-secondary hover:text-accent hover:border-accent transition-colors text-xs font-bold font-mono ${className}`}
      aria-label={t.nav.toggleLang}
      title={t.nav.toggleLang}
    >
      <Languages size={15} />
      {lang === 'en' ? 'EN' : 'VI'}
    </button>
  );

  const ThemeButton = ({ withLabel = false }) => (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card/60 text-text-secondary hover:text-accent hover:border-accent transition-colors"
      aria-label={t.nav.toggleTheme}
      title={t.nav.toggleTheme}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {withLabel && (
        <span className="text-[11px] font-extrabold tracking-widest uppercase">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );

  return (
    <nav className="fixed w-full z-50 bg-bg/75 backdrop-blur-xl border-b border-card-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 group h-full py-2.5">
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Tri Nguyen"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden font-display font-extrabold text-lg text-primary items-center gap-1">
              <span className="text-accent">&lt;</span>
              Trí Nguyễn
              <span className="text-accent">/&gt;</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 rounded-md text-[13px] font-bold uppercase tracking-wide font-display transition-colors ${
                  active === link.id
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <LangButton />
            <ThemeButton withLabel />
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <LangButton />
            <ThemeButton />
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
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-card-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide font-display transition-colors ${
                  active === link.id
                    ? 'text-accent bg-accent/10'
                    : 'text-text-secondary hover:text-accent'
                }`}
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
