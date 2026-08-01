import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Publications from "./components/portfolio/Publications";
import Certifications from "./components/portfolio/Certifications";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import { Toaster } from "sonner";


function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Toast Notifications */}
      <Toaster
        richColors
        position="top-right"
        theme="dark"
      />

    </div>
  );
}

export default App;