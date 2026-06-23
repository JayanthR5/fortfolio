import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const highlights = [
    portfolioData.personal.location,
    `CGPA ${portfolioData.personal.cgpa}`,
    "AI / ML + Web Development",
  ];

  return (
    <section
      className="hero"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        alignItems: "center",
        padding: "4rem 1.5rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          maxWidth: "42rem",
          padding: "1.5rem 0",
        }}
      >
        <p
          style={{
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--primary)",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Hi, I am
        </p>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            lineHeight: 0.95,
            margin: "0.45rem 0 0.25rem",
            textWrap: "balance",
          }}
        >
          {portfolioData.personal.name}
        </h1>
        <h2
          style={{
            fontSize: "clamp(1.15rem, 3vw, 1.9rem)",
            margin: 0,
            color: "var(--text-soft)",
            fontWeight: 600,
          }}
        >
          {portfolioData.personal.role}
        </h2>
        <p style={{ marginTop: "1rem", lineHeight: 1.8, maxWidth: "60ch", color: "var(--text-soft)" }}>
          Pre-final year CSE student focused on AI, ML, and practical web applications.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.4rem" }}>
          {highlights.map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid var(--border-strong)",
                borderRadius: "999px",
                padding: "0.45rem 0.85rem",
                fontSize: "0.95rem",
                background: "rgba(255, 255, 255, 0.6)",
                color: "var(--text-soft)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem" }}>
          <a
            href={portfolioData.personal.resume}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              padding: "0.9rem 1.35rem",
              textDecoration: "none",
              fontWeight: 600,
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              color: "#ffffff",
              boxShadow: "0 16px 30px rgba(37, 99, 235, 0.18)",
            }}
          >
            Download Resume
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              padding: "0.9rem 1.35rem",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid var(--border-strong)",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            View GitHub
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              padding: "0.9rem 1.35rem",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid var(--border-strong)",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            LinkedIn
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              padding: "0.9rem 1.35rem",
              textDecoration: "none",
              fontWeight: 600,
              color: "var(--text-soft)",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            Email Me
          </a>
        </div>
      </div>

      <div
        style={{
          justifySelf: "center",
          width: "min(100%, 22rem)",
          aspectRatio: "4 / 5",
          borderRadius: "1.75rem",
          overflow: "hidden",
          boxShadow: "var(--shadow)",
          border: "1px solid var(--border)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
          animation: "softGlow 6s ease-in-out infinite",
        }}
      >
        <img
          src={portfolioData.personal.image}
          alt={`${portfolioData.personal.name} profile picture`}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
    </section>
  );
}