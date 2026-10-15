import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#03060d] py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-white tracking-wide">{personal.name}</span>
            <span className="text-gray-600">·</span>
            <span className="text-cyan-400 text-xs font-mono">{personal.title}</span>
          </div>
          <p className="text-xs text-gray-500">
            Built with React, TypeScript, Tailwind CSS & Framer Motion. Strictly based on verified resume data.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all ml-2"
            aria-label="Scroll back to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
      <div className="text-center mt-8 text-[11px] text-gray-600">
        &copy; {new Date().getFullYear()} Kishore N. All rights reserved.
      </div>
    </footer>
  );
}
