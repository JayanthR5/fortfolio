import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <ScrollReveal className="portfolio-section about-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Building practical AI and web projects with a clear focus on impact.</h2>
        <p style={{ lineHeight: 1.8, maxWidth: "70ch", margin: 0 }}>
          {portfolioData.about.description}
        </p>

        <div className="section-card-grid" style={{ marginTop: "1.5rem" }}>
          <div className="section-card">
            <strong>Education</strong>
            <p style={mutedText}>CSE - Artificial Intelligence and Machine Learning</p>
          </div>
          <div className="section-card">
            <strong>Location</strong>
            <p style={mutedText}>{portfolioData.personal.location}</p>
          </div>
          <div className="section-card">
            <strong>CGPA</strong>
            <p style={mutedText}>{portfolioData.personal.cgpa}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

const mutedText = {
  margin: "0.35rem 0 0",
  color: "var(--text-soft)",
} as const;
