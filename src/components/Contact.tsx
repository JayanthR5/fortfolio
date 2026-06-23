import { portfolioData } from "../data/portfolio";

export default function Contact() {
  return (
    <section style={{ padding: "1.5rem 1.5rem 0" }}>
      <div style={sectionShell}>
        <p style={eyebrow}>Contact</p>
        <h2 style={title}>Let’s build something useful together.</h2>

        <div style={gridStyle}>
          <ContactCard
            label="Email"
            value={portfolioData.personal.email}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
          />
          <ContactCard label="GitHub" value="GitHub Profile" href={portfolioData.personal.github} />
          <ContactCard label="LinkedIn" value="LinkedIn Profile" href={portfolioData.personal.linkedin} />
          <ContactCard label="Resume" value="Download Resume" href={portfolioData.personal.resume} />
        </div>

        <p style={{ margin: "1rem 0 0", color: "var(--text-soft)" }}>
          LinkedIn is available above as a direct profile link. Email opens through Gmail Compose in the browser for better reliability.
        </p>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={cardLink}>
      <span style={cardLabel}>{label}</span>
      <strong>{value}</strong>
    </a>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem",
} as const;

const cardLink = {
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  padding: "1.1rem",
  borderRadius: "1.1rem",
  background: "var(--surface-muted)",
  border: "1px solid var(--border)",
  textDecoration: "none",
  color: "inherit",
} as const;

const cardLabel = {
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "var(--text-soft)",
} as const;
