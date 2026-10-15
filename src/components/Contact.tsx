import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks';

export default function Contact() {
  const { ref, inView } = useInView();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    // Simulate sending message locally
    setIsSubmitted(true);
    setTimeout(() => {
      // open mailto client as fallback
      window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message + '\n\nSender Email: ' + formState.email)}`;
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent-cyan text-sm font-mono font-medium tracking-widest uppercase mb-3">
            09 / Contact
          </p>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Interested in hiring a motivated Data Analyst, or want to discuss analytics projects? Feel free to reach out directly.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-white font-bold text-lg mb-2">Direct Contact</h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-white hover:text-cyan-400 text-sm font-medium transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mt-1 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Phone</span>
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-white hover:text-cyan-400 text-sm font-medium transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Location</span>
                  <p className="text-gray-300 text-sm font-medium">{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-cyan-400">
              <h4 className="text-white text-sm font-semibold mb-1">Looking for Immediate Hire</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open to full-time entry-level Data Analyst, Junior Data Analyst, BI Analyst roles or on-site/remote analytics internships.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 glass-card p-8"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-400 mb-2">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-white font-bold text-2xl">Message Prepared!</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Opening your default email client to send your message to{' '}
                  <span className="text-white font-medium">{personal.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="btn-outline text-xs mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Kishore, I came across your portfolio and would like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-sm">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
