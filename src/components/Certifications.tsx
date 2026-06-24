"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ScrollReveal className="portfolio-section certifications-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title">Credentials and learning milestones.</h2>

        <motion.div
          className="section-card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.certifications.map((certification) => (
            <motion.article key={certification} className="section-panel" variants={itemVariants}>
              <p style={{ margin: 0, lineHeight: 1.65, color: "var(--text-soft)" }}>{certification}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
