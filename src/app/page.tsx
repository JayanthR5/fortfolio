import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import MouseGlow from "../components/MouseGlow";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <MouseGlow />
      <main className="portfolio-page">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
        <Footer />
      </main>
    </>
  );
}