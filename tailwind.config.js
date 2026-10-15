/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#050811',
          secondary: '#080d1a',
          card: '#0d1427',
          glass: 'rgba(13,20,39,0.6)',
        },
        accent: {
          cyan: '#00d4ff',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          teal: '#06b6d4',
          indigo: '#6366f1',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
          muted: '#64748b',
        },
        border: {
          DEFAULT: 'rgba(99,102,241,0.15)',
          hover: 'rgba(99,102,241,0.4)',
          glow: 'rgba(0,212,255,0.3)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #050811 0%, #080d1a 50%, #050811 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,212,255,0.15), 0 0 60px rgba(0,212,255,0.05)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.15), 0 0 60px rgba(139,92,246,0.05)',
        'glow-blue': '0 0 20px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.05)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
