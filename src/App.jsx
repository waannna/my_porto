import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Chronology from './components/Chronology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FadeInSection from './components/FadeInSection'; 
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const sectionMap = {
        '1': 'home',
        '2': 'about',
        '3': 'skills',
        '4': 'timeline',
        '5': 'projects',
        '6': 'contact',
      };

      const targetId = sectionMap[e.key];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#fbf9f5] text-black min-h-screen overflow-x-clip font-serif selection:bg-black selection:text-white">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            border: '2px solid #000',
            borderRadius: '0px',
            background: '#ffffff',
            color: '#000000',
            fontFamily: 'monospace',
            fontSize: '12px',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          },
        }}
      />
      <Navbar />
      
      <main>
        <FadeInSection>
          <Home />
        </FadeInSection>

        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Chronology />
        </FadeInSection>

        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;