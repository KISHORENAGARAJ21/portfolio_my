import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { useInView } from '../hooks';

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            05 / Experience
          </p>
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Internship
          </h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className="relative pl-8">
          {/* Timeline line */}
          <div className="timeline-line rounded-full" aria-hidden="true" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-10 top-6 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#050811] z-10"
                aria-hidden="true"
              />

              <article className="glass-card p-8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <span>{exp.company}</span>
                      <span className="text-gray-600">·</span>
                      <span className="text-gray-400 font-normal">{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium whitespace-nowrap self-start">
                    📅 {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5" aria-label="Responsibilities">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-gray-400 text-sm">
                      <span className="text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true">✦</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2" aria-label="Tools used">
                  {exp.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
