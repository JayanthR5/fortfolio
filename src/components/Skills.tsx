import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Skills</p>
        <h2 style={title}>Tools and technologies I work with regularly.</h2>

        <div style={gridStyle}>
          <SkillCard title="Languages" items={portfolioData.skills.languages} />
          <SkillCard title="Web Technologies" items={portfolioData.skills.webTechnologies} />
          <SkillCard title="Databases" items={portfolioData.skills.database} />
          <SkillCard title="AI / ML" items={portfolioData.skills.ai} />
          <SkillCard title="Tools" items={portfolioData.skills.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article style={cardStyle}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <div style={pillWrap}>
        {items.map((item) => (
          <span key={item} style={pillStyle}>
            {item}
          </span>
        ))}
      </div>
    </article>
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
