"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
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
    <ScrollReveal className="portfolio-section contact-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's build something useful together.</h2>

        <motion.div
          className="section-card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactCard
            label="Email"
            value={portfolioData.personal.email}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
            variants={itemVariants}
          />
          <ContactCard label="GitHub" value="GitHub Profile" href={portfolioData.personal.github} variants={itemVariants} />
          <ContactCard label="LinkedIn" value="LinkedIn Profile" href={portfolioData.personal.linkedin} variants={itemVariants} />
          <ContactCard label="Resume" value="Download Resume" href={portfolioData.personal.resume} variants={itemVariants} />
        </motion.div>

        <p style={{ margin: "1rem 0 0", color: "var(--text-soft)" }}>
          LinkedIn is available above as a direct profile link. Email opens through Gmail Compose in the browser for better reliability.
        </p>
      </div>
    </ScrollReveal>
  );
}

function ContactCard({ label, value, href, variants }: { label: string; value: string; href: string; variants: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="contact-card"
      variants={variants}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="section-eyebrow" style={{ letterSpacing: "0.14em", fontSize: "0.72rem" }}>{label}</span>
      <strong>{value}</strong>
    </motion.a>
  );
}
