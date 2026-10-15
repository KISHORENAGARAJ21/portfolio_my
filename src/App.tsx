import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AnalyticsSnapshot from './components/AnalyticsSnapshot';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AnalyticsWorkflow from './components/AnalyticsWorkflow';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Profiles from './components/Profiles';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-gray-200 selection:bg-indigo-500/30 selection:text-cyan-200">
      {/* Background Ambience & Grids */}
      <div className="animated-bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      {/* Main Layout */}
      <Navbar />
      <main>
        <Hero />
        <AnalyticsSnapshot />
        <About />
        <Skills />
        <Projects />
        <AnalyticsWorkflow />
        <Experience />
        <Education />
        <Certifications />
        <Profiles />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
