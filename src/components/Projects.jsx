import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Star, GitFork, ExternalLink, FileText, GraduationCap, Rocket } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import projectData from '../data/projects.json';
import { useLanguage } from '../i18n/LanguageContext';

const GITHUB_USERNAME = 'trinpb04';

// Tiny decorative trend line for a project card.
function Sparkline({ values }) {
  const data = values.map((v, i) => ({ i, v }));
  return (
    <div className="h-12 w-full mb-4 -mt-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#sparkFill)"
            isAnimationActive
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Projects() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const catLabel = (key) => t.projects.categories[key] || key;

  // Unique category keys, with a leading "All".
  const categoryKeys = ['All', ...new Set(projectData.map((p) => p.categoryKey))];

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter((p) => p.categoryKey === activeCategory);

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.projects.title}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        {/* Category Slicers */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === key
                  ? 'bg-accent/20 text-accent border border-accent/50'
                  : 'bg-card border border-card-border text-text-secondary hover:border-accent/50 hover:text-primary'
              }`}
            >
              {key === 'All' ? t.projects.all : catLabel(key)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const hasRepo = Boolean(project.githubUrl);
              const hasReport = Boolean(project.reportUrl);
              const hasLive = Boolean(project.liveUrl);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-card-border rounded-xl p-6 flex flex-col hover:border-accent/50 transition-colors group"
                >
                  {/* Header: Icon + (repo stats OR academic badge) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-accent">
                      <Database size={24} />
                    </div>
                    {hasRepo ? (
                      <div className="flex items-center gap-3 text-xs text-text-secondary font-mono">
                        <div className="flex items-center gap-1">
                          <Star size={14} /> {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} /> {project.forks}
                        </div>
                      </div>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-bg border border-card-border text-text-secondary">
                        <GraduationCap size={13} /> {t.projects.academicBadge}
                      </span>
                    )}
                  </div>

                  {/* Title (links to repo when available) */}
                  <div className="mb-4">
                    {hasRepo ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-primary flex items-center gap-2 hover:text-accent transition-colors break-all"
                      >
                        {project.title}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-primary flex items-center gap-2 break-all">
                        {project.title}
                      </span>
                    )}
                  </div>

                  {/* Decorative trend sparkline (only when chart data is present) */}
                  {Array.isArray(project.chart) && <Sparkline values={project.chart} />}

                  <p className="text-sm text-text-secondary mb-4 flex-grow leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Live web app button (shown when a deployed URL exists) */}
                  {hasLive && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2.5 mb-4 w-fit rounded-lg bg-accent text-white font-bold text-sm shadow-sm hover:bg-accent/90 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <Rocket size={16} /> {t.projects.liveDemo}
                      <ExternalLink size={14} className="opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Report link for academic projects (shown only when a link exists) */}
                  {!hasRepo && hasReport && (
                    <a
                      href={project.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline mb-4"
                    >
                      <FileText size={15} /> {t.projects.viewReport}
                    </a>
                  )}

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-text-secondary">&lt;/&gt; {t.projects.techStackLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-md text-xs font-medium border border-card-border ${tech.bg} ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-card mt-10"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mb-1 text-primary hover:text-accent transition-colors w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span className="font-bold">{t.projects.githubTitle}</span>
          </a>
          <p className="text-xs text-text-secondary font-mono mb-4">@{GITHUB_USERNAME} — {t.projects.githubSub}</p>
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/10B981/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME} GitHub contribution graph`}
              className="min-w-[640px] w-full"
              loading="lazy"
              onError={(e) => { e.target.parentElement.parentElement.style.display = 'none'; }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
