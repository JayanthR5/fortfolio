"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
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
    <ScrollReveal className="portfolio-section skills-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Tools and technologies I work with regularly.</h2>

        <motion.div
          className="section-card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillCard title="Languages" items={portfolioData.skills.languages} variants={itemVariants} />
          <SkillCard title="Web Technologies" items={portfolioData.skills.webTechnologies} variants={itemVariants} />
          <SkillCard title="Databases" items={portfolioData.skills.database} variants={itemVariants} />
          <SkillCard title="AI / ML" items={portfolioData.skills.ai} variants={itemVariants} />
          <SkillCard title="Tools" items={portfolioData.skills.tools} variants={itemVariants} />
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

function SkillCard({
  title,
  items,
  variants,
}: {
  title: string;
  items: readonly string[];
  variants: any;
}) {
  return (
    <motion.article className="section-panel" variants={variants}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <div className="skill-pill-wrap" style={{ marginTop: "0.9rem" }}>
        {items.map((item, i) => (
          <motion.span
            key={item}
            className="hero-pill"
            style={{ fontSize: "0.9rem" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
