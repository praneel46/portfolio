"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/praneel46",
      icon: Github,
      hoverColor: "hover:border-[#00E5FF]/40 hover:text-[#00E5FF]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/praneel-kulkarni-52815b214",
      icon: Linkedin,
      hoverColor: "hover:border-[#6C63FF]/40 hover:text-[#6C63FF]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/praneelx_?igsh=ZHAxNjc2YjgyN2t0",
      icon: Instagram,
      hoverColor: "hover:border-[#E1306C]/40 hover:text-[#E1306C]",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Praneel_46",
      icon: Twitter,
      hoverColor: "hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2]",
    },
    {
      name: "Email",
      href: "mailto:praneelkulkarni4646@gmail.com",
      icon: Mail,
      hoverColor: "hover:border-[#A855F7]/40 hover:text-[#A855F7]",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-12 border-b border-white/10">
          
          {/* Left Brand & Credits */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <a
              href="#hero"
              className="group flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-white mb-1"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#A855F7] font-mono text-xs font-black text-black shadow-lg group-hover:scale-105 transition-transform">
                PK
              </span>
              <span>
                PK <span className="text-[#00E5FF]">Studio</span>
              </span>
            </a>

            <p className="text-xs font-mono text-[#94A3B8] tracking-wide">
              Designed &amp; Engineered by <span className="text-white font-semibold">Praneel Kulkarni</span>
            </p>
          </div>

          {/* Social Links with Hover Animations */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const IconComp = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-[#94A3B8] ${s.hoverColor} hover:scale-110 transition-all duration-200`}
                >
                  <IconComp className="w-4.5 h-4.5" />
                </a>
              );
            })}
          </div>

          {/* Back To Top Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 text-xs font-mono text-white transition-all shadow-lg"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00E5FF]" />
          </motion.button>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#94A3B8] gap-4">
          <div>
            &copy; 2026 Praneel Kulkarni. All Rights Reserved.
          </div>

          <div className="text-right text-[11px] text-[#94A3B8]/80">
            PK Studio • High Performance Web &amp; AI Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
