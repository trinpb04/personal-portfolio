import { motion } from 'framer-motion';
import { Database, LineChart, Code2, Calculator, GraduationCap, TrendingUp, BriefcaseBusiness, Binary } from 'lucide-react';

export default function Techstack() {
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

  const skills = [
    {
      name: "Python",
      icon: <Code2 className="text-accent" size={20} />,
      level: "Starter",
      percent: 30,
      desc: "Pandas, Statsmodels, Scikit-learn. Applied in FGLS regression models and time-series macroeconomic forecasting."
    },
    {
      name: "SQL & Power BI",
      icon: <Database className="text-accent" size={20} />,
      level: "Proficient",
      percent: 80,
      desc: "Data querying, ETL pipelines, and building interactive dashboards to reduce reporting turnaround time by 25%."
    },
    {
      name: "Advanced Excel",
      icon: <Calculator className="text-accent" size={20} />,
      level: "Expert",
      percent: 95,
      desc: "Power Query, Macros, Complex Array Formulas. Used extensively for business valuation (DCF) and scenario analysis."
    }
  ];

  return (
    <section id="techstack" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
            <TrendingUp className="text-accent" size={32} />
            Core Expertise
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
                <h3 className="text-2xl font-bold text-primary mb-2">Business Planning & Analytics</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed max-w-lg">
                  Bridging the gap between raw data and strategic business decisions. Specialized in <strong>Financial Modeling</strong>, <strong>ROI Evaluation</strong>, and identifying key business drivers across <strong>E-commerce</strong>, <strong>F&B (Coffee Shop)</strong>, and <strong>Financial</strong> sectors through variance analysis.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bg border border-card-border rounded-full text-xs font-medium">Financial Modeling</span>
                <span className="px-3 py-1 bg-bg border border-card-border rounded-full text-xs font-medium">DCF Method</span>
                <span className="px-3 py-1 bg-bg border border-card-border rounded-full text-xs font-medium">Variance Analysis</span>
                <span className="px-3 py-1 bg-bg border border-card-border rounded-full text-xs font-medium">KPI Tracking</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div variants={item} className="bento-card group flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-card to-blue-500/5 border border-card-border">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <p className="text-sm text-text-secondary font-medium mb-1">Bachelor of Business (Applied Finance)</p>
              <p className="text-xs text-text-secondary mb-6">UEH - ISB / Western Sydney University</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-text-secondary mb-1">GPA</p>
              <p className="text-4xl font-mono font-bold text-primary">8.4<span className="text-xl text-text-secondary">/10</span></p>
            </div>
          </motion.div>

          {/* Card 3: Technical Skills - Detailed with Progress Bars */}
          <motion.div variants={item} className="bento-card md:col-span-3 overflow-hidden bg-card border border-card-border">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                  <Binary size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Data Analytics <br />& Econometrics</h3>
                <p className="text-sm text-text-secondary">
                  Real-world experience in extracting, cleaning, and visualizing datasets to build econometric models and automate management reporting.
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 gap-5">
                {skills.map((skill, idx) => (
                  <div key={idx} className="p-4 bg-bg rounded-xl border border-card-border hover:border-accent transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-bold text-primary">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-text-secondary">{skill.level}</span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-card-border rounded-full h-1.5 mb-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="bg-accent h-1.5 rounded-full"
                      />
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
