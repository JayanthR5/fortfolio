"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({ children, className, direction = "up" }: ScrollRevealProps) {
  const getInitialVariants = () => {
    switch (direction) {
      case "left":
        return { x: -60, opacity: 0 };
      case "right":
        return { x: 60, opacity: 0 };
      case "up":
      default:
        return { y: 60, opacity: 0 };
    }
  };

  const animateVariants = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={getInitialVariants()}
      whileInView={animateVariants}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
