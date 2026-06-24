"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 30,
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 300ms ease",
      }}
    >
      <div
        style={{
          width: "6rem",
          height: "6rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}
