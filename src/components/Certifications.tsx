import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useInView } from '../hooks';

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-28 px-6" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            07 / Certifications
          </p>
          <h2 id="certifications-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials
          </h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card glow-border p-6 flex flex-col group cursor-default"
              aria-labelledby={`cert-${i}-name`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                {cert.icon}
              </div>

              {/* Status badge */}
              <span
                className={`self-start badge mb-3 ${
                  cert.status === 'Completed'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                }`}
              >
                {cert.status === 'Completed' ? '✓ Completed' : '⏳ In Progress'}
              </span>

              <h3
                id={`cert-${i}-name`}
                className="text-white font-semibold text-sm mb-2 flex-1 leading-snug"
              >
                {cert.name}
              </h3>

              <p className="text-gray-500 text-xs mb-4">{cert.provider}</p>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-cyan-400 transition-colors"
                  aria-label={`Verify ${cert.name} certificate`}
                >
                  <ExternalLink size={12} />
                  Verify Credential
                </a>
              ) : (
                <span className="text-xs text-gray-700 italic">
                  {cert.status === 'In Progress' ? 'Credential pending completion' : 'Certificate earned'}
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
