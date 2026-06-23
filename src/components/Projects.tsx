import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Projects</p>
        <h2 style={title}>Selected builds and experiments.</h2>

        <div style={gridStyle}>
          {portfolioData.projects.map((project) => (
            <article key={project.title} style={cardStyle}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              <p style={{ margin: "0.75rem 0", lineHeight: 1.7 }}>{project.description}</p>
              <div style={pillWrap}>
                {project.tech.map((tech) => (
                  <span key={tech} style={pillStyle}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={linkRow}>
                <a href={project.github} target="_blank" rel="noreferrer" style={linkStyle}>
                  Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" style={linkStyle}>
                  Demo
                </a>
              </div>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1rem",
} as const;

const cardStyle = {
  padding: "1.2rem",
  borderRadius: "1.2rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
} as const;

const pillWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.65rem",
  marginTop: "0.9rem",
} as const;

const pillStyle = {
  padding: "0.5rem 0.8rem",
  borderRadius: "999px",
  background: "rgba(219, 234, 254, 0.85)",
  color: "var(--text)",
  fontSize: "0.92rem",
} as const;

const linkRow = {
  display: "flex",
  gap: "0.75rem",
  marginTop: "1rem",
} as const;

const linkStyle = {
  textDecoration: "none",
  fontWeight: 600,
  color: "var(--secondary)",
} as const;