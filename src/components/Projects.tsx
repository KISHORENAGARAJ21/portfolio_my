import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks';
import type { Project } from '../types';

// Mini chart placeholder for project card visual
function ProjectVisual({ category }: { category: string }) {
  const isBI = category.includes('Business');
  const isPython = category.includes('Python');

  return (
    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#0a1228] to-[#080d1a] border border-white/5 flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />

      {/* Decorative bars */}
      {isBI && (
        <div className="flex items-end gap-2 px-6 w-full h-full pb-5 pt-5">
          {[65, 40, 85, 55, 72, 45, 90, 60].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/60 to-cyan-400/60"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      {isPython && (
        <div className="flex flex-col gap-2 px-6 w-full py-4">
          {[
            { label: 'Churned', val: 68, color: 'from-purple-500/70 to-indigo-500/70' },
            { label: 'Retained', val: 90, color: 'from-cyan-500/70 to-blue-500/70' },
            { label: 'At Risk', val: 45, color: 'from-pink-500/60 to-purple-500/60' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-gray-600 text-[10px] w-12 text-right">{row.label}</span>
              <div className="flex-1 h-3 rounded-full bg-white/5">
                <motion.div
                  className={`h-3 rounded-full bg-gradient-to-r ${row.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${row.val}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.7 }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
        {category}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView(0.1);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card glow-border overflow-hidden flex flex-col group"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Visual */}
      <div className="p-4 pb-0">
        <ProjectVisual category={project.category} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category & tools */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="badge border-cyan-500/30 text-cyan-400 bg-cyan-500/10">
            {project.category}
          </span>
        </div>

        <h3
          id={`project-${project.id}-title`}
          className="text-white font-bold text-xl mb-3 group-hover:gradient-text transition-all"
        >
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.map(tool => (
            <span
              key={tool}
              className="px-2 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Expand/collapse details */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-300 transition-colors mb-4 self-start"
          aria-expanded={expanded}
          aria-controls={`project-${project.id}-details`}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Show less' : 'Case study details'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id={`project-${project.id}-details`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 mb-4 border-t border-white/5 pt-4">
                {/* Business Problem */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Business Problem
                  </h4>
                  <p className="text-gray-400 text-sm">{project.businessProblem}</p>
                </div>

                {/* Dataset */}
                {project.dataset && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Dataset
                    </h4>
                    <p className="text-gray-400 text-sm">{project.dataset}</p>
                  </div>
                )}

                {/* Process */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Process
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.process.map((step, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="px-2 py-1 rounded text-xs bg-white/5 text-gray-400 border border-white/5">
                          {step}
                        </span>
                        {i < project.process.length - 1 && (
                          <span className="text-indigo-500 text-xs">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Insights */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Key Insights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keyInsights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">✦</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/15">
                  <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-1">
                    Outcome
                  </h4>
                  <p className="text-gray-400 text-sm">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4 flex-1 justify-center"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            03 / Projects
          </p>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Analytics Projects
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            End-to-end analytics case studies — from raw data to business insights.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
