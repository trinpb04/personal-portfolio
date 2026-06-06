import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Business Planning and Analysis",
      company: "ON25 Corporation",
      period: "October 2025 - Present",
      highlights: [
        "Building and maintaining integrated financial models to drive annual budgeting, monthly rolling forecasts, and scenario-based planning.",
        "Executing variance and gap analysis to identify key business drivers and evaluating ROI for strategic investments.",
        "Streamlined management reporting using Python, Power BI, and Advanced Excel, reducing reporting turnaround time by 25% and enhancing data integrity.",
        "Working directly with the CEO and other departments to translate complex financial metrics into actionable business insights."
      ],
      keyStat: "Reduced reporting turnaround time by 25%"
    },
    {
      id: 2,
      role: "Trainee Relationship Manager",
      company: "Military Commercial Joint Stock Bank (MB Bank)",
      period: "August 2024 - August 2025",
      highlights: [
        "Performed detailed financial statement analysis to assess clients' profitability, liquidity, and capital structure to support data-driven credit decisions.",
        "Conducted business performance reviews and sector benchmarking to evaluate SMEs' market positioning.",
        "Built financial models to estimate clients' repayment capacity, debt service coverage ratios (DSCR), and sensitivity to interest rate changes."
      ],
      keyStat: "Financial Statement Analysis & Credit Decisions"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-accent" size={32} />
            Career Journey
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-card-border ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-accent rounded-full -left-[13px] top-1 border-4 border-bg shadow-[0_0_10px_var(--accent-glow)]"></div>
              
              <div className="bento-card relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-bg border border-card-border rounded-full text-xs text-text-secondary font-mono">
                    {exp.period}
                  </span>
                </div>
                
                {/* Highlight banner */}
                <div className="mb-6 p-3 bg-accent/10 border-l-2 border-accent text-sm font-medium text-primary rounded-r-lg">
                  💡 {exp.keyStat}
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-3">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
