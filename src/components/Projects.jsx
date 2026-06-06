import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Star, GitFork, ExternalLink } from 'lucide-react';
import projectData from '../data/projects.json';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from projects
  const categories = ['All', ...new Set(projectData.map(p => p.category))];

  // Filter projects
  const filteredProjects = activeCategory === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Highlighted Projects
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        {/* Category Slicers */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent/20 text-accent border border-accent/50'
                  : 'bg-card border border-card-border text-text-secondary hover:border-accent/50 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-card-border rounded-xl p-6 flex flex-col hover:border-accent/50 transition-colors group"
              >
                {/* Header: Icon, Stars, Forks */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-accent">
                    <Database size={24} />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary font-mono">
                    <div className="flex items-center gap-1">
                      <Star size={14} /> {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} /> {project.forks}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-4">
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-primary flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      {project.title}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-xl font-bold text-primary flex items-center gap-2">
                      {project.title}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-text-secondary">&lt;/&gt; TECH STACK</span>
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
