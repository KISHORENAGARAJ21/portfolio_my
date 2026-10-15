import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import { useInView } from '../hooks';
import type { SkillItem } from '../types';

const LEVEL_CONFIG = {
  Familiar: { label: 'Familiar', width: '30%', color: 'from-teal-400 to-cyan-300' },
  'Working Knowledge': { label: 'Working Knowledge', width: '55%', color: 'from-blue-400 to-cyan-400' },
  Intermediate: { label: 'Intermediate', width: '75%', color: 'from-indigo-400 to-blue-400' },
  Experienced: { label: 'Experienced', width: '90%', color: 'from-purple-400 to-indigo-400' },
};

function SkillBadge({ skill, visible }: { skill: SkillItem; visible: boolean }) {
  const cfg = LEVEL_CONFIG[skill.level];
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      className="glass-card p-4 group cursor-default transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span
          className={`badge text-xs border-indigo-500/30 text-indigo-300 bg-indigo-500/10`}
          title={`Proficiency: ${cfg.label}`}
        >
          {cfg.label}
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${cfg.color}`}
          initial={{ width: 0 }}
          animate={{ width: visible ? cfg.width : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];
  const filtered = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            02 / Technical Skills
          </p>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Toolkit
          </h2>
          <div className="section-line" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                  : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-8"
            >
              {filtered.map(cat => (
                <motion.div key={cat.category} variants={itemVariants}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="text-white font-semibold text-lg">{cat.category}</h3>
                    <div className={`flex-1 h-px bg-gradient-to-r ${cat.color} opacity-20`} />
                    <span className="text-gray-600 text-xs">{cat.skills.length} skills</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cat.skills.map(skill => (
                      <SkillBadge key={skill.name} skill={skill} visible={inView} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
