import { motion } from 'framer-motion';
import { snapshotCards } from '../data/portfolio';
import { useInView, useCountUp } from '../hooks';

interface CounterCardProps {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  icon: string;
  delay: number;
  trigger: boolean;
}

function CounterCard({ label, value, suffix, description, icon, delay, trigger }: CounterCardProps) {
  const count = useCountUp(value, 1200, trigger);
  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.round(count).toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="glass-card glow-border p-6 text-center group cursor-default transition-all duration-300"
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">
        {displayValue}{suffix}
      </div>
      <div className="text-white font-semibold text-sm mb-1">{label}</div>
      <div className="text-gray-500 text-xs">{description}</div>
    </motion.div>
  );
}

export default function AnalyticsSnapshot() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id="snapshot"
      className="py-20 px-6"
      aria-labelledby="snapshot-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-20" />

        <div ref={ref} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-accent-cyan text-sm font-mono tracking-widest uppercase mb-3"
          >
            Analytics Snapshot
          </motion.p>
          <motion.h2
            id="snapshot-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            By the Numbers
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {snapshotCards.map((card, i) => (
            <CounterCard
              key={card.label}
              {...card}
              delay={i * 0.08}
              trigger={inView}
            />
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mt-20" />
      </div>
    </section>
  );
}
