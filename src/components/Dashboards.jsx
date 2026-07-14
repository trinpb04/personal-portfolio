import { motion } from 'framer-motion';
import { LayoutDashboard, Lock, Maximize2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// Image paths pair with t.dashboards.items by index.
const images = [
  '/dashboards/on25-dashboard.png',
  '/dashboards/concentrix-dashboard.png',
  '/dashboards/dbt-dag-dashboard.png',
];

export default function Dashboards() {
  const { t } = useLanguage();
  const items = t.dashboards.items;

  return (
    <section id="dashboards" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
            <LayoutDashboard className="text-accent" size={32} />
            {t.dashboards.title}
          </h2>
          <p className="text-text-secondary max-w-2xl">{t.dashboards.subtitle}</p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bento-card p-0 overflow-hidden flex flex-col"
            >
              {/* Dashboard image (click to open full size or url) */}
              <a
                href={item.url || images[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block border-b border-card-border group"
              >
                <img
                  src={images[idx]}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto"
                />
                {/* Confidential badge */}
                {!item.url && (
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm">
                    <Lock size={12} /> {t.dashboards.maskNote}
                  </span>
                )}
                {/* Page-preview badge */}
                {!item.url && (
                  <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm">
                    1 / multi-page
                  </span>
                )}
                {/* Hover hint */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} /> {item.url ? 'View Dashboard' : 'View full'}
                </span>
              </a>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-accent text-xs font-bold tracking-widest uppercase font-mono mb-1">{item.company}</p>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{item.desc}</p>
                <p className="text-[11px] italic text-text-secondary/80 mb-4">{t.dashboards.pageNote}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium border border-card-border bg-bg text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
