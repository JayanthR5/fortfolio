import { portfolioData } from "../data/portfolio";

export default function Leadership() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Leadership</p>
        <h2 style={title}>Roles and activities beyond coursework.</h2>

        <div style={stackStyle}>
          {portfolioData.leadership.map((item) => (
            <div key={item} style={itemStyle}>
              {item}
            </div>
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
  gap: "0.9rem",
} as const;

const itemStyle = {
  padding: "1rem 1.1rem",
  borderRadius: "1rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
} as const;
