"use client";

import { motion } from "framer-motion";
import { FileText, Eye, Download, User, Briefcase, GraduationCap, Sparkles } from "lucide-react";

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export default function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  return (
    <section id="resume" className="relative py-28 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 px-3.5 py-1.5 rounded-full border border-[#00E5FF]/30 mb-4"
          >
            05 // RESUME
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Professional <span className="text-gradient-cyan">Resume</span> &amp; <span className="text-gradient-purple">Profile</span>.
          </motion.h2>
        </div>

        {/* Resume Showcase Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-14 relative overflow-hidden border border-white/15 glass-shimmer"
        >
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#6C63FF]/20 to-[#00E5FF]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF]">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                    Praneel Kulkarni — Resume
                    <Sparkles className="w-4 h-4 text-[#A855F7]" />
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    Software Developer • Backend &amp; CS Fundamentals
                  </p>
                </div>
              </div>

              <p className="text-base text-[#94A3B8] font-light leading-relaxed">
                Software Developer with a backend focus in Java, Spring Boot, REST APIs, and DSA. Highlights work experience at InAmigos, featured projects (SmartHostelAI &amp; Furnivo), and a 9.33 CGPA at SJBIT.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3 text-xs font-mono text-[#E2E8F0] bg-white/[0.04] p-3.5 rounded-2xl border border-white/10">
                  <User className="w-4 h-4 text-[#00E5FF]" />
                  <span>Backend Developer</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#E2E8F0] bg-white/[0.04] p-3.5 rounded-2xl border border-white/10">
                  <GraduationCap className="w-4 h-4 text-[#A855F7]" />
                  <span>SJBIT B.E. IS &apos;28</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#E2E8F0] bg-white/[0.04] p-3.5 rounded-2xl border border-white/10">
                  <Briefcase className="w-4 h-4 text-[#6C63FF]" />
                  <span>Spring Boot &amp; Java</span>
                </div>
              </div>
            </div>

            {/* Right Card Preview & Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-center lg:items-end">
              
              {/* Document Visual Preview Card */}
              <div
                onClick={onOpenResumeModal}
                className="w-full max-w-xs aspect-[1/1.2] rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-black p-5 cursor-pointer group hover:border-[#00E5FF]/50 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[10px] text-[#00E5FF] font-bold">RESUME PREVIEW</span>
                  <Eye className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-2 py-4 opacity-40 group-hover:opacity-70 transition-opacity">
                  <div className="h-3 w-3/4 bg-white/40 rounded" />
                  <div className="h-2 w-full bg-white/20 rounded" />
                  <div className="h-2 w-5/6 bg-white/20 rounded" />
                  <div className="h-2 w-2/3 bg-white/20 rounded" />
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white">
                  <span>Click to Expand</span>
                  <span className="text-[#00E5FF] group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <button
                  onClick={onOpenResumeModal}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] text-black font-heading font-bold text-xs shadow-lg hover:scale-105 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                <a
                  href="/assets/resume.pdf"
                  download="Praneel_Kulkarni_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 text-white font-heading font-semibold text-xs hover:border-[#00E5FF]/40 transition-all"
                >
                  <Download className="w-4 h-4 text-[#00E5FF]" />
                  <span>Download Resume</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
