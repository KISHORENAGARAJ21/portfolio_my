import { motion } from 'framer-motion';
import { about } from '../data/portfolio';
import { useInView } from '../hooks';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
              01 / About
            </p>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who I Am
            </h2>
            <div className="section-line" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-gray-400 leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}

              {/* Data flow visual */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 flex-wrap mt-6"
                aria-label="Data analysis focus areas"
              >
                {['Data', '→', 'Analysis', '→', 'Insights', '→', 'Decisions'].map((item, i) => (
                  <span
                    key={i}
                    className={
                      item === '→'
                        ? 'text-indigo-400 font-light text-lg'
                        : 'px-3 py-1 rounded-lg text-sm font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300'
                    }
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Focus cards */}
            <div className="grid grid-cols-2 gap-4">
              {about.focus.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-5 cursor-default group transition-all duration-300"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career objective callout */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card p-8 border-l-4 border-l-cyan-400"
          >
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-cyan-400">🎯</span> Career Objective
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Detail-oriented and analytical fresher with a strong foundation in statistics, SQL, and data
              visualization, seeking a <strong className="text-white">Data Analyst</strong> role.
              Skilled in transforming raw data into actionable insights using Excel, SQL, Python, and Power BI.
              Strong problem-solving ability with a keen interest in business intelligence and data-driven
              decision making.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
