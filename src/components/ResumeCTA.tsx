import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks';

export default function ResumeCTA() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-6" aria-label="Resume Download and Overview">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl glass-card border border-indigo-500/20 p-8 sm:p-12 text-center"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
              <FileText size={14} /> Resume & Curriculum Vitae
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Looking for a Fresher <span className="gradient-text">Data Analyst</span>?
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Available for immediate joining in entry-level Data Analyst, BI Analyst, or Analytics Intern roles. Equipped with SQL, Python, Power BI, Excel, and statistical modeling skills.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" />
                <span>B.E. AI & Data Science (8.2 CGPA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" />
                <span>Glowlogics Solution Intern</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" />
                <span>Google & HackerRank Certified</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personal.email}?subject=Job Opportunity - Data Analyst Role`}
                className="btn-primary py-3 px-6 text-sm"
              >
                Contact for Opportunities
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline py-3 px-6 text-sm"
              >
                <Download size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
