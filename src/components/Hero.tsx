import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useTypingEffect } from '../hooks';

// Particle canvas
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['rgba(0,212,255,', 'rgba(99,102,241,', 'rgba(139,92,246,'];

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles"
      aria-hidden="true"
    />
  );
}

// Floating analytics icon
function FloatingIcon({ emoji, delay, x, y }: { emoji: string; delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute text-2xl select-none pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {emoji}
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(personal.typingTitles, 70, 2000);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      <ParticleCanvas />

      {/* Floating icons */}
      <FloatingIcon emoji="📊" delay={0} x="8%" y="25%" />
      <FloatingIcon emoji="🐍" delay={1} x="88%" y="20%" />
      <FloatingIcon emoji="📈" delay={2} x="5%" y="65%" />
      <FloatingIcon emoji="🗄️" delay={0.5} x="91%" y="60%" />
      <FloatingIcon emoji="⚡" delay={1.5} x="15%" y="80%" />
      <FloatingIcon emoji="🎯" delay={2.5} x="82%" y="78%" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Open to work badge */}
        {personal.openToWork && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium mb-8"
            role="status"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Available for Data Analyst Roles
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Typing headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10 flex items-center justify-center gap-1"
          aria-live="polite"
          aria-label={`Role: ${typed}`}
        >
          <span>{typed}</span>
          <span className="cursor-blink" aria-hidden="true" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.headline} — turning complex datasets into clear, actionable insights
          with SQL, Python, and Power BI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href={`mailto:${personal.email}`}
            className="btn-primary"
            aria-label="Contact Kishore via email"
          >
            <Mail size={16} />
            <span>Get in Touch</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View GitHub profile"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View LinkedIn profile"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="btn-outline"
            onClick={e => e.preventDefault()}
            aria-label="Download resume (attach your resume PDF to enable)"
            title="Attach resume.pdf to the /public folder to enable download"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap justify-center gap-8 mb-16 text-sm"
        >
          {[
            { icon: <Phone size={14} />, text: personal.phone },
            { icon: '📍', text: personal.location },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-500">
              <span className="text-gray-600">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col items-center gap-1 mx-auto text-gray-600 hover:text-gray-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
