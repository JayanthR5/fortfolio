import { portfolioData } from "../data/portfolio";

export default function About() {
  return (
    <section
      className="about"
      style={{
        padding: "1.5rem 1.5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem",
          borderRadius: "1.75rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
          backdropFilter: "blur(14px)",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "0.18em", margin: 0 }}>
          About Me
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", margin: "0.4rem 0 1rem" }}>
          Building practical AI and web projects with a clear focus on impact.
        </h2>
        <p style={{ lineHeight: 1.8, maxWidth: "70ch", margin: 0 }}>
          {portfolioData.about.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <div style={cardStyle}>
            <strong>Education</strong>
            <p style={mutedText}>CSE - Artificial Intelligence and Machine Learning</p>
          </div>
          <div style={cardStyle}>
            <strong>Location</strong>
            <p style={mutedText}>{portfolioData.personal.location}</p>
          </div>
          <div style={cardStyle}>
            <strong>CGPA</strong>
            <p style={mutedText}>{portfolioData.personal.cgpa}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  padding: "1rem",
  borderRadius: "1.1rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
} as const;

const mutedText = {
  margin: "0.35rem 0 0",
  color: "var(--text-soft)",
} as const;
