import { portfolioData } from "../data/portfolio";

export default function Experience() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Experience</p>
        <h2 style={title}>Hands-on work that blends AI strategy and implementation.</h2>

        <div style={stackStyle}>
          {portfolioData.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} style={entryStyle}>
              <div style={entryHeader}>
                <div>
                  <h3 style={{ margin: 0 }}>{item.role}</h3>
                  <p style={mutedText}>{item.company}</p>
                </div>
                <span style={tagStyle}>{item.duration}</span>
              </div>
              <p style={{ margin: "0.9rem 0 0", lineHeight: 1.7 }}>{item.description}</p>
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

const stackStyle = {
  display: "grid",
  gap: "1rem",
} as const;

const entryStyle = {
  padding: "1.2rem",
  borderRadius: "1.2rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
} as const;

const entryHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "start",
  flexWrap: "wrap",
} as const;

const tagStyle = {
  padding: "0.45rem 0.8rem",
  borderRadius: "999px",
  background: "rgba(219, 234, 254, 0.85)",
  color: "var(--text)",
  fontSize: "0.9rem",
  fontWeight: 600,
} as const;

const mutedText = {
  margin: "0.35rem 0 0",
  color: "var(--text-soft)",
} as const;
