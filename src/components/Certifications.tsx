import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Certifications</p>
        <h2 style={title}>Credentials and learning milestones.</h2>

        <div style={gridStyle}>
          {portfolioData.certifications.map((certification) => (
            <article key={certification} style={cardStyle}>
              <p style={{ margin: 0, lineHeight: 1.65 }}>{certification}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionShell = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "2rem",
  borderRadius: "1.75rem",
  background: "var(--surface)",
  border: "1px solid var(--border)",
  boxShadow: "var(--shadow)",
  backdropFilter: "blur(14px)",
} as const;

const eyebrow = {
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  margin: 0,
} as const;

const title = {
  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
  margin: "0.4rem 0 1.25rem",
} as const;

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
} as const;

const cardStyle = {
  padding: "1.2rem",
  borderRadius: "1.2rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
} as const;
