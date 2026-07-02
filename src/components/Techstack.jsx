import { motion } from 'framer-motion';
import { Database, LineChart, Code2, Calculator, GraduationCap, TrendingUp, BriefcaseBusiness, Binary } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '../i18n/LanguageContext';

export default function Techstack() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  // Icons for the detailed skill list (text comes from translations).
  const skillMeta = [
    { icon: <Code2 className="text-accent" size={20} /> },
    { icon: <Database className="text-accent" size={20} /> },
    { icon: <Calculator className="text-accent" size={20} /> },
  ];
  const skills = t.techstack.skills.map((s, i) => ({ ...s, ...skillMeta[i] }));

  // Self-assessed proficiency (0-100), paired with t.techstack.radarAxes. Edit freely.
  const radarValues = [50, 70, 85, 95, 75, 90];
  const radarData = t.techstack.radarAxes.map((axis, i) => ({ axis, value: radarValues[i] }));

  return (
    <section id="techstack" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
            <TrendingUp className="text-accent" size={32} />
            {t.techstack.title}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Business Analysis */}
          <motion.div variants={item} className="bento-card md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-card to-bg border border-card-border">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BriefcaseBusiness size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.techstack.card1Title}</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed max-w-lg">
                  {t.techstack.card1Desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.techstack.card1Tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-bg border border-card-border rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div variants={item} className="bento-card group flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-card to-blue-500/5 border border-card-border">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{t.techstack.eduTitle}</h3>
              <p className="text-sm text-text-secondary font-medium mb-1">{t.techstack.eduDegree}</p>
              <p className="text-xs text-text-secondary mb-6">{t.techstack.eduSchool}</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-text-secondary mb-1">{t.techstack.gpaLabel}</p>
              <p className="text-4xl font-mono font-bold text-primary">8.4<span className="text-xl text-text-secondary">/10</span></p>
            </div>
          </motion.div>

          {/* Card 3: Data Analytics — Radar chart + detailed skills */}
          <motion.div variants={item} className="bento-card md:col-span-3 overflow-hidden bg-card border border-card-border">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: intro + radar */}
              <div className="md:w-1/2 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                  <Binary size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.techstack.dataTitle}</h3>
                <p className="text-sm text-text-secondary mb-4">
                  {t.techstack.dataDesc}
                </p>

                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-1">{t.techstack.radarTitle}</p>
                <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData} outerRadius="72%">
                      <PolarGrid stroke="var(--card-border)" />
                      <PolarAngleAxis dataKey="axis" tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
                      <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        dataKey="value"
                        stroke="var(--accent)"
                        fill="var(--accent)"
                        fillOpacity={0.35}
                        isAnimationActive
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right: detailed skill cards */}
              <div className="md:w-1/2 grid grid-cols-1 gap-5 content-center">
                {skills.map((skill, idx) => (
                  <div key={idx} className="p-4 bg-bg rounded-xl border border-card-border hover:border-accent transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-bold text-primary">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">{skill.level}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
