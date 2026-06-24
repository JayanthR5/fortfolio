"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <ScrollReveal className="portfolio-section experience-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Hands-on work that blends AI strategy and implementation.</h2>

        <div style={{ display: "grid", gap: "1rem" }}>
          {portfolioData.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="section-panel">
              <div style={entryHeader}>
                <div>
                  <h3 style={{ margin: 0 }}>{item.role}</h3>
                  <p style={mutedText}>{item.company}</p>
                </div>
                <span className="hero-pill" style={{ fontSize: "0.88rem" }}>{item.duration}</span>
              </div>
              <p style={{ margin: "0.9rem 0 0", lineHeight: 1.7 }}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

const entryHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "start",
  flexWrap: "wrap",
} as const;

const mutedText = {
  margin: "0.35rem 0 0",
  color: "var(--text-soft)",
} as const;
