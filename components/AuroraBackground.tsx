"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050816]">
      {/* Aurora Ambient Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#6C63FF]/30 via-[#A855F7]/25 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -90, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#00E5FF]/25 via-[#6C63FF]/20 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -70, 80, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute left-1/3 bottom-0 h-[450px] w-[450px] rounded-full bg-gradient-to-t from-[#A855F7]/20 via-[#00E5FF]/20 to-transparent blur-[130px]"
      />

      {/* Interactive Mouse Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-70"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(108, 99, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Background Grid Layer */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay absolute inset-0 opacity-50" />
    </div>
  );
}
