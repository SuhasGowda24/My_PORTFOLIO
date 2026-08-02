import { useState } from "react";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Publications from "./components/portfolio/Publications";
import Certifications from "./components/portfolio/Certifications";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import { Toaster } from "sonner";
import { Sidebar, ScrollTop } from "./components/portfolio/Sidebar";
import IntroLoader from "./components/portfolio/IntroLoader";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <Sidebar />
        <ScrollTop />

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

        {/* Toast Notifications */}
        <Toaster richColors position="top-right" theme="dark" />
      </div>
    </>
  );
}

export default App;