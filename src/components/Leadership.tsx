"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Leadership() {
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
    <ScrollReveal className="portfolio-section leadership-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Leadership</p>
        <h2 className="section-title">Roles and activities beyond coursework.</h2>

        <motion.div
          style={{ display: "grid", gap: "0.9rem" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.leadership.map((item) => (
            <motion.div key={item} className="section-panel" variants={itemVariants}>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
