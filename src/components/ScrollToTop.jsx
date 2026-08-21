import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
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
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-accent text-[var(--on-accent)] shadow-lg shadow-accent/30 hover:bg-[var(--accent-hover)] hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
