"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileText, Download, Github, Linkedin, Mail, Sparkles, ChevronDown, Instagram, Twitter } from "lucide-react";

interface HeroProps {
  onOpenResumeModal: () => void;
}

const titles = [
  "AI Full Stack Developer",
  "Software Developer",
  "Tech Enthusiast",
  "Problem Solver",
];

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Mouse Parallax for Profile Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-4 md:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl w-full z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Keynote Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-glass mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF]"></span>
              </span>
              <span className="text-xs font-mono tracking-wide text-[#94A3B8]">
                Available for Opportunities &amp; Collaborations
              </span>
            </motion.div>

            {/* Sub-heading Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#00E5FF] mb-2 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#A855F7]" />
              Praneel Kulkarni
            </motion.h2>

            {/* Title Cycler */}
            <div className="h-10 sm:h-12 overflow-hidden mb-6">
              <motion.div
                key={currentTitleIndex}
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -35, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-mono text-xl sm:text-2xl font-medium text-[#A855F7]"
              >
                &gt; {titles[currentTitleIndex]}
              </motion.div>
            </div>

            {/* Main Heading with Animated Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.06] mb-8"
            >
              Creating <span className="text-gradient-animated">Experiences</span>, <br className="hidden sm:inline" />
              Not Just <span className="text-gradient-purple">Websites.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl font-light leading-relaxed mb-10"
            >
              Turning Ideas into Intelligent Software. Crafting high-performance web applications, AI integrations, and intuitive digital experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#selected-work"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] font-heading font-bold text-sm text-black shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 backdrop-blur-xl font-heading font-semibold text-sm text-white hover:border-[#6C63FF]/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-[#00E5FF]" />
                <span>View Resume</span>
              </button>

              <a
                href="/assets/resume.pdf"
                download="Praneel_Kulkarni_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 font-heading font-medium text-xs text-[#94A3B8] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <Download className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons Bar (GitHub, LinkedIn, Instagram, X/Twitter, Email) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-3 mt-10 pt-6 border-t border-white/5 w-full"
            >
              <span className="text-xs font-mono text-[#94A3B8] mr-1">CONNECT //</span>
              
              <a
                href="https://github.com/praneel46"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-[#00E5FF] hover:scale-110 transition-all duration-200"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/praneel-kulkarni-52815b214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#6C63FF]/40 text-[#94A3B8] hover:text-[#6C63FF] hover:scale-110 transition-all duration-200"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/praneelx_?igsh=ZHAxNjc2YjgyN2t0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E1306C]/40 text-[#94A3B8] hover:text-[#E1306C] hover:scale-110 transition-all duration-200"
                title="Instagram Profile"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://x.com/Praneel_46"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#1DA1F2]/40 text-[#94A3B8] hover:text-[#1DA1F2] hover:scale-110 transition-all duration-200"
                title="X (Twitter) Profile"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="mailto:praneelkulkarni4646@gmail.com"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#A855F7]/40 text-[#94A3B8] hover:text-[#A855F7] hover:scale-110 transition-all duration-200"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: 3D Profile Card (Photo in ALWAYS Original Color) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group w-full max-w-sm cursor-pointer"
            >
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] opacity-60 blur-2xl group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

              <div className="relative rounded-3xl bg-[#050816]/95 border border-white/20 p-6 backdrop-blur-2xl shadow-2xl overflow-hidden glass-shimmer">
                
                {/* Profile Image Container - ALWAYS Original Color */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-5 group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="/assets/profile.jpg"
                    alt="Praneel Kulkarni"
                    className="h-full w-full object-cover object-center transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60 pointer-events-none" />

                  <div className="absolute top-3 right-3 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 border border-white/15 font-mono text-[10px] text-[#00E5FF]">
                    SJBIT CS &apos;28
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      Praneel Kulkarni
                    </h3>
                    <span className="font-number font-bold text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-1 rounded-full border border-[#00E5FF]/30">
                      CGPA 9.33
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#94A3B8]">
                    Computer Science &amp; Engineering Student
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-center pt-3 border-t border-white/10">
                    <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
                      <div className="font-number text-lg font-bold text-[#6C63FF]">4+</div>
                      <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-mono">Projects</div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
                      <div className="font-number text-lg font-bold text-[#A855F7]">6+</div>
                      <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-mono">Certificates</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center gap-1.5 pt-8 z-10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#00E5FF]" />
      </motion.div>
    </section>
  );
}
