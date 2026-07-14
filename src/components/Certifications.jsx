import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import certData from '../data/certifications.json';
import { useLanguage } from '../i18n/LanguageContext';
import Pagination from './Pagination';

export default function Certifications() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const catLabel = (key) => t.certifications.categories?.[key] || key;
  const categoryKeys = ['all', ...new Set(certData.map((c) => c.category))];

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const filteredCerts = activeCategory === 'all'
    ? certData
    : certData.filter((c) => c.category === activeCategory);

  const paginatedCerts = filteredCerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
            <Award className="text-accent" size={32} />
            {t.certifications.title}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        {/* Category Slicers */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === key
                  ? 'bg-accent/20 text-accent border border-accent/50'
                  : 'bg-card border border-card-border text-text-secondary hover:border-accent/50 hover:text-primary'
              }`}
            >
              {key === 'all' ? t.certifications.all : catLabel(key)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bento-card flex flex-col p-0 overflow-hidden"
              >
              {/* Certificate Image */}
              {cert.image && (
                <div className={`w-full h-48 sm:h-64 overflow-hidden border-b border-card-border relative group ${cert.fit === 'contain' ? 'bg-white' : ''}`}>
                  <img
                    src={cert.image}
                    alt={cert.name[lang]}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${cert.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1 leading-snug">{cert.name[lang]}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded-full bg-bg border border-card-border text-text-secondary">{cert.date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">{cert.grade}</span>
                    </div>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-bg border border-card-border rounded-lg hover:border-accent hover:text-accent transition-colors shrink-0"
                    aria-label={t.certifications.verify}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="pt-4 border-t border-card-border">
                  <h4 className="text-sm font-semibold text-primary mb-3">{t.certifications.skillsAcquired}</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {cert.skills[lang].map((skill, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length > 0 && (
          <Pagination
            totalItems={filteredCerts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}
