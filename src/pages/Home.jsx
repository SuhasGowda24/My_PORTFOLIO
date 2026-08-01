import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';
import Publications from '../components/portfolio/Publications';
import Certifications from '../components/portfolio/Certifications';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}