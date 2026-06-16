import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Gauge } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList,
} from 'recharts';
import { useLanguage } from '../i18n/LanguageContext';

// Count-up number that animates once when scrolled into view.
function AnimatedCounter({ value, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-mono font-extrabold tabular-nums">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const { t } = useLanguage();
  const m = t.impact;

  // Illustrative ratio behind the "25% faster" claim (hours per reporting cycle).
  const chartData = [
    { name: m.chartBefore, hours: 8, fill: 'var(--text-secondary)' },
    { name: m.chartAfter, hours: 6, fill: 'var(--accent)' },
  ];

  return (
    <section id="impact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-3 font-mono flex items-center gap-2">
            <Gauge size={16} /> {m.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">{m.title}</h3>
          <p className="text-text-secondary max-w-2xl">{m.subtitle}</p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* KPI cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {m.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bento-card flex flex-col justify-between"
              >
                <p className="text-4xl md:text-5xl text-accent mb-3">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <div>
                  <p className="text-sm font-semibold text-primary leading-snug">{metric.label}</p>
                  <p className="text-xs text-text-secondary mt-1">{metric.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-accent" size={18} />
              <p className="text-sm font-semibold text-primary">{m.chartTitle}</p>
            </div>
            <div className="flex-1 min-h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 8, left: -16, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Bar dataKey="hours" radius={[8, 8, 0, 0]} isAnimationActive>
                    <LabelList dataKey="hours" position="top" fill="var(--text-primary)" fontSize={13} formatter={(v) => `${v}h`} />
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-text-secondary font-mono mt-2 text-center">▼ -25%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
