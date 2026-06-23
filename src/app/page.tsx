import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(59, 130, 246, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(14, 165, 233, 0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.12), transparent 30%), linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        color: "var(--text)",
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
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
  );
}