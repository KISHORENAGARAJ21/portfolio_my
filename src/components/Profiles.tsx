import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { profiles } from '../data/portfolio';
import { useInView } from '../hooks';

export default function Profiles() {
  const { ref, inView } = useInView();

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github size={28} className="text-white" />;
      case 'linkedin':
        return <Linkedin size={28} className="text-[#0077b5]" />;
      default:
        return <ExternalLink size={28} className="text-cyan-400" />;
    }
  };

  return (
    <section id="profiles" className="py-24 px-6" aria-labelledby="profiles-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            08 / Online Presence
          </p>
          <h2 id="profiles-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Analytics & Coding Profiles
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Explore my code repositories, data analysis scripts, and professional connections.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card glow-border p-6 flex items-start gap-5 group cursor-pointer"
              aria-label={`Visit my ${profile.platform} profile`}
            >
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {getIcon(profile.platform)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                    {profile.platform}
                  </h3>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  {profile.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-indigo-400 font-medium group-hover:text-cyan-400">
                  View Profile &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
