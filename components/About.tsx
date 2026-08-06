"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, Code, CheckCircle2, BookOpen, Sparkles } from "lucide-react";

const metrics = [
  {
    label: "CGPA",
    value: "9.33",
    subtext: "Academic Distinction at SJBIT",
    icon: GraduationCap,
    color: "from-[#6C63FF] to-[#00E5FF]",
  },
  {
    label: "Featured Projects",
    value: "4",
    subtext: "AI & Full-Stack Applications",
    icon: Code,
    color: "from-[#00E5FF] to-[#A855F7]",
  },
  {
    label: "Credentials",
    value: "6+",
    subtext: "Verified Certifications & Workshops",
    icon: Award,
    color: "from-[#A855F7] to-[#6C63FF]",
  },
  {
    label: "AI Workflows",
    value: "100%",
    subtext: "Next-Gen AI Powered Dev",
    icon: Cpu,
    color: "from-[#6C63FF] to-[#00E5FF]",
  },
];

const bioText = "I'm Praneel Kulkarni, a Computer Science undergraduate passionate about building modern digital experiences through clean code and intuitive design. I enjoy creating AI-powered applications and scalable web solutions while continuously exploring emerging technologies. My goal is to build software that is both impactful and user-centric.";

export default function About() {
  const bioWords = bioText.split(" ");

  return (
    <section id="about" className="relative py-28 px-4 md:px-8 z-10">
      
      {/* Floating Accent Background Shapes */}
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-[#6C63FF]/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute right-10 bottom-20 h-52 w-52 rounded-full bg-[#00E5FF]/10 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 px-3.5 py-1.5 rounded-full border border-[#00E5FF]/30 mb-4"
          >
            01 // ABOUT ME
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Engineering with <span className="text-gradient-cyan">Purpose</span> &amp; <span className="text-gradient-purple">Precision</span>.
          </motion.h2>
        </div>

        {/* Bio Card & Metrics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Container (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 md:p-12 flex flex-col justify-between relative overflow-hidden glass-shimmer"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]" />
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider flex items-center gap-1.5">
                  BIOGRAPHY &amp; PHILOSOPHY <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                </span>
              </div>

              {/* Word-by-Word Animated Paragraph */}
              <div className="font-body text-lg sm:text-xl text-[#E2E8F0] font-light leading-relaxed mb-8 flex flex-wrap gap-x-1.5 gap-y-1">
                {bioWords.map((word, wIdx) => (
                  <motion.span
                    key={wIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: wIdx * 0.015 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Clean Architecture &amp; UI</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>AI-Powered Full Stack Dev</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <span>Continuous Tech Exploration</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>User-Centric Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Staggered Metric Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {metrics.map((metric, index) => {
              const IconComp = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card p-6 flex flex-col justify-between group border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${metric.color} text-black shadow-lg group-hover:rotate-6 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="font-number text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
                      {metric.value}
                    </div>
                    <div className="font-heading text-sm font-semibold text-white mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-[#94A3B8]">
                      {metric.subtext}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Integrated Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass-card p-8 md:p-10 border border-white/10 relative overflow-hidden glass-shimmer"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-[#6C63FF]/15 border border-[#6C63FF]/30 text-[#00E5FF] shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono text-xs text-[#A855F7] uppercase tracking-wider">
                    EDUCATION &amp; ACADEMICS
                  </span>
                  <span className="text-xs font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-0.5 rounded-full border border-[#00E5FF]/30">
                    EXPECTED 2028
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
                  SJBIT Institute of Technology
                </h3>

                <p className="text-base text-[#94A3B8]">
                  Bachelor of Engineering in <span className="text-white font-medium">Computer Science &amp; Engineering</span>
                </p>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex items-center gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <div className="text-left lg:text-right">
                <div className="text-xs text-[#94A3B8] font-mono uppercase">Cumulative GPA</div>
                <div className="font-number text-3xl sm:text-4xl font-extrabold text-gradient-cyan">
                  9.33 <span className="text-xs font-sans text-[#94A3B8] font-normal">/ 10</span>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden sm:block" />

              <div className="text-left lg:text-right">
                <div className="text-xs text-[#94A3B8] font-mono uppercase">Location</div>
                <div className="font-heading text-base font-semibold text-white">
                  Bengaluru, India
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
