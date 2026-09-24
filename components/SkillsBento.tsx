"use client";

import { motion } from "framer-motion";
import { Brain, Server, Sparkles, Cloud, Monitor, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  accent: string;
  colSpan: string;
  isAiCategory?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Skills",
    subtitle: "Programming, problem solving & fundamentals",
    icon: Brain,
    skills: ["Java and oop", "Python (Basics)", "C", "DSA", "MySQL", "DBMS"],
    color: "from-[#6C63FF]/20 via-[#A855F7]/20 to-transparent",
    accent: "text-[#6C63FF] border-[#6C63FF]/30 bg-[#6C63FF]/10",
    colSpan: "lg:col-span-7",
  },
  {
    title: "Backend Development",
    subtitle: "Building APIs & backend applications",
    icon: Server,
    skills: ["Spring", "Spring Boot", "REST APIs", "JWT Authentication", "Backend Development"],
    color: "from-[#00E5FF]/20 via-[#6C63FF]/20 to-transparent",
    accent: "text-[#00E5FF] border-[#00E5FF]/30 bg-[#00E5FF]/10",
    colSpan: "lg:col-span-5",
  },
  {
    title: "AI & Integration",
    subtitle: "Exploring intelligent applications",
    icon: Sparkles,
    skills: ["Spring AI", "AI Integration", "LLM APIs", "AI-powered Applications"],
    color: "from-[#A855F7]/30 via-[#6C63FF]/30 to-[#00E5FF]/20",
    accent: "text-[#A855F7] border-[#A855F7]/40 bg-[#A855F7]/15",
    colSpan: "lg:col-span-5",
    isAiCategory: true,
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Deployment, containers & developer tools",
    icon: Cloud,
    skills: ["Docker", "AWS", "Git", "GitHub", "CI/CD", "Deployment"],
    color: "from-[#00E5FF]/20 via-[#A855F7]/20 to-transparent",
    accent: "text-[#00E5FF] border-[#00E5FF]/30 bg-[#00E5FF]/10",
    colSpan: "lg:col-span-7",
  },
  {
    title: "Frontend Development",
    subtitle: "Building modern web interfaces",
    icon: Monitor,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-[#6C63FF]/20 via-[#00E5FF]/20 to-transparent",
    accent: "text-[#6C63FF] border-[#6C63FF]/30 bg-[#6C63FF]/10",
    colSpan: "lg:col-span-12",
  },
];

export default function SkillsBento() {
  return (
    <section id="technical-expertise" className="relative py-28 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#A855F7] uppercase tracking-widest bg-[#A855F7]/10 px-3.5 py-1.5 rounded-full border border-[#A855F7]/30 mb-4"
          >
            02 // CURRENTLY BUILDING WITH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Currently <span className="text-gradient-purple">Building With</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-3 font-mono"
          >
            Technologies, frameworks, and core concepts I am actively learning, practicing, and applying in software projects.
          </motion.p>
        </div>

        {/* Bento Grid Layout (5 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {skillCategories.map((cat, index) => {
            const IconComponent = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass-card ${cat.colSpan} p-8 relative overflow-hidden group border transition-all duration-300 ${
                  cat.isAiCategory
                    ? "border-[#A855F7]/40 shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-gradient-to-br from-[#050816] via-white/[0.04] to-[#050816]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`}
                />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${cat.accent} shadow-md group-hover:rotate-6 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#94A3B8] font-mono">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <Cpu className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10 pt-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-medium backdrop-blur-md transition-all duration-200 cursor-default border ${
                        cat.isAiCategory
                          ? "bg-[#A855F7]/10 text-white border-[#A855F7]/30 hover:bg-[#A855F7]/25 hover:border-[#A855F7]/60"
                          : "bg-white/[0.04] text-[#E2E8F0] border-white/10 hover:bg-white/[0.08] hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
