import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import certData from '../data/certifications.json';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
            <Award className="text-accent" size={32} />
            Certifications
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card flex flex-col p-0 overflow-hidden"
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="w-full h-48 sm:h-64 overflow-hidden border-b border-card-border relative group">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium text-sm text-center px-4">
                      Replace image in<br/><span className="text-accent font-mono">src/data/certifications.json</span>
                    </p>
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{cert.name}</h3>
                    <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                    <div className="flex gap-4 text-xs font-mono text-text-secondary">
                      <span>Issued: {cert.date}</span>
                      <span>Grade: {cert.grade}</span>
                    </div>
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-bg border border-card-border rounded-lg hover:border-accent hover:text-accent transition-colors shrink-0"
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-primary mb-3">Skills Acquired:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {cert.skills.map((skill, i) => (
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
        </div>
      </div>
    </section>
  );
}
