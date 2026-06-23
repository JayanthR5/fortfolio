import { portfolioData } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: "1100px",
        margin: "1.5rem auto 2rem",
        padding: "1.25rem 1.5rem",
        color: "var(--text-soft)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(148, 163, 184, 0.3)",
        }}
      >
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {portfolioData.personal.name}</p>
        <p style={{ margin: 0 }}>Built for AI, ML, and web development opportunities.</p>
      </div>
    </footer>
  );
}
