import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <Send className="text-accent" size={32} />
            {t.contact.title}
          </h2>
          <p className="text-text-secondary">{t.contact.subtitle}</p>
        </div>

        <div className="bento-card max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-bg rounded-xl border border-card-border hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary font-medium">{t.contact.emailLabel}</p>
                <a href="mailto:nguyenphuocbaotri.128@gmail.com" className="text-primary font-medium hover:text-accent transition-colors break-all">
                  nguyenphuocbaotri.128@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-bg rounded-xl border border-card-border hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary font-medium">{t.contact.phoneLabel}</p>
                <a href="tel:+84938113132" className="text-primary font-medium hover:text-green-500 transition-colors">
                  (+84) 938 113 132
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-bg rounded-xl border border-card-border hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary font-medium">{t.contact.locationLabel}</p>
                <p className="text-primary font-medium">{t.contact.locationValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-accent text-white rounded-full shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
