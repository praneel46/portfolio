"use client";

import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsBento from "@/components/SkillsBento";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import ResumeSection from "@/components/ResumeSection";
import ResumeModal from "@/components/ResumeModal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import AiAssistant from "@/components/AiAssistant";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommand = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpenCommand);
    return () => window.removeEventListener("open-command-palette", handleOpenCommand);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white selection:bg-[#6C63FF]/30 selection:text-white">
      {/* Aurora Ambient Background Engine */}
      <AuroraBackground />

      {/* Custom Interactive Magnet Cursor */}
      <CustomCursor />

      {/* Top Scroll Depth Line */}
      <ScrollProgress />

      {/* Glassmorphic Sticky Header Navbar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Page Sections */}
      <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
      <About />
      <SkillsBento />
      <Projects />
      <Certificates />
      <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      <Contact onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (CTRL + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Fullscreen PDF Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating AI Portfolio Assistant */}
      <AiAssistant />
    </main>
  );
}
