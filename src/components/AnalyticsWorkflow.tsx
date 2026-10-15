import { motion } from 'framer-motion';
import { workflowSteps } from '../data/portfolio';
import { useInView } from '../hooks';

export default function AnalyticsWorkflow() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="workflow" className="py-28 px-6" aria-labelledby="workflow-heading">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            04 / Approach
          </p>
          <h2 id="workflow-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Analytics Workflow
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-xl">
            My structured approach to solving data problems — from understanding the business context
            to delivering actionable insights.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 opacity-20 mx-12"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3 border-2 transition-all duration-300 group-hover:scale-110 relative z-10 bg-[#080d1a]"
                  style={{ borderColor: step.color + '50' }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: step.color }}
                  />
                  <span className="relative z-10">{step.icon}</span>
                </div>

                {/* Step number */}
                <span
                  className="font-mono text-[10px] font-bold tracking-widest mb-1 opacity-50"
                  style={{ color: step.color }}
                >
                  {step.step}
                </span>

                {/* Title */}
                <h3
                  className="text-white font-semibold text-sm mb-1"
                  style={{ color: `${step.color}dd` }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed px-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 glass-card p-6 flex flex-wrap gap-6 justify-center"
        >
          {[
            { label: 'Tools Used', items: ['SQL', 'Python', 'Power BI', 'Excel'] },
            { label: 'Libraries', items: ['Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'] },
          ].map(group => (
            <div key={group.label} className="text-center">
              <p className="text-gray-600 text-xs uppercase tracking-wide mb-2">{group.label}</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
