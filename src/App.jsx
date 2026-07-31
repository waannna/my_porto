import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FadeInSection from './components/FadeInSection'; 

function App() {
  return (
    <div className="bg-[#fbf9f5] text-black min-h-screen overflow-x-clip font-serif selection:bg-black selection:text-white">
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