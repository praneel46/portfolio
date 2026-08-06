"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Technical Expertise", href: "#technical-expertise" },
  { name: "Selected Work", href: "#selected-work" },
  { name: "Credentials", href: "#credentials" },
  { name: "Resume", href: "#resume" },
  { name: "Let's Connect", href: "#lets-connect" },
];

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = currentScrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-4 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-nav shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/15"
              : "bg-white/[0.02] border border-white/5 backdrop-blur-md"
          }`}
        >
          {/* Brand Logo - PK Studio */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#A855F7] font-mono text-xs font-black text-black shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:scale-110 transition-transform">
              PK
            </span>
            <span className="tracking-wide">
              PK <span className="text-[#00E5FF]">Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] p-1 border border-white/5 backdrop-blur-xl">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="linearNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C63FF]/30 via-[#00E5FF]/20 to-[#A855F7]/30 border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] px-3.5 py-1.5 border border-white/10 text-xs text-[#94A3B8] hover:text-white transition-all duration-200 group hover:border-[#00E5FF]/40"
              title="Open Command Palette (CTRL + K)"
            >
              <Command className="h-3.5 w-3.5 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-mono text-[11px] bg-white/10 px-1.5 py-0.5 rounded text-white">
                CTRL + K
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-white lg:hidden hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-2 rounded-3xl border border-white/15 bg-[#050816]/95 backdrop-blur-2xl p-5 shadow-2xl lg:hidden max-w-7xl mx-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#94A3B8] hover:bg-white/[0.08] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
