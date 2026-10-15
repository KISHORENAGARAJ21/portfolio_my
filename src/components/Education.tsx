import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { useInView } from '../hooks';

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-28 px-6" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            06 / Education
          </p>
          <h2 id="education-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Background
          </h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className="relative pl-8">
          <div className="timeline-line rounded-full" aria-hidden="true" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-10 top-6 w-4 h-4 rounded-full border-2 border-purple-400 bg-[#050811] z-10"
                aria-hidden="true"
              />

              <article className="glass-card p-8 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-sm font-medium">
                      📅 {edu.period}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25">
                      <span className="text-cyan-300 font-bold text-base">
                        {edu.score}
                      </span>
                      <span className="text-gray-500 text-xs">/ {edu.scoreType === 'CGPA' ? '10' : '100%'}</span>
                      <span className="text-gray-500 text-xs">{edu.scoreType}</span>
                    </div>
                  </div>
                </div>

                {edu.relevant && (
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide font-medium mb-2">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map(course => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
