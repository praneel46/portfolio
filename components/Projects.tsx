"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  features?: string[];
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  gradient: string;
  badge: string;
  mockupTag: string;
}

const projects: Project[] = [
  {
    id: "smarthostel-ai",
    title: "SmartHostelAI",
    subtitle: "Enterprise AI-Powered Hostel Management System",
    features: [
      "AI-powered hostel management & 100-room live allocation",
      "Role-based dashboards for students, wardens, & admins",
      "Automated QR-based gate pass generation & validation",
      "Real-time complaint tracking & operational analytics",
      "RESTful API architecture deployed via Docker on Render",
    ],
    liveUrl: "https://smarthostel-ai.onrender.com/",
    githubUrl: "https://github.com/praneel46/SmartHostel-Ai",
    tech: ["Python", "Flask", "SQLite", "Bootstrap", "Docker", "Render", "REST APIs"],
    gradient: "from-[#6C63FF]/30 via-[#00E5FF]/20 to-transparent",
    badge: "FULL STACK & AI",
    mockupTag: "Enterprise Dashboard",
  },
  {
    id: "charis",
    title: "CHARIS",
    subtitle: "AI Career Guidance Platform",
    description: "AI-powered career guidance platform designed to help students discover personalized career paths through an intuitive, interactive, and modern user experience.",
    features: [
      "Intelligent career trajectory mapping for students",
      "Personalized skill gap analysis & learning paths",
      "Modern Gen-Z Apple-style glassmorphism interface",
      "Fast response Next.js AI pipeline integration",
    ],
    liveUrl: "https://charis-teal.vercel.app/",
    githubUrl: "https://github.com/praneel46/CHARIS",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    gradient: "from-[#00E5FF]/30 via-[#A855F7]/20 to-transparent",
    badge: "AI PLATFORM",
    mockupTag: "Career AI Engine",
  },
  {
    id: "furnivo",
    title: "Furnivo",
    subtitle: "Premium E-Commerce Shopping Experience",
    features: [
      "Modern furniture e-commerce platform with luxury aesthetics",
      "Interactive product catalog, wishlist, & shopping cart",
      "Multi-parametric real-time product filtering & sorting",
      "Global state management powered by Zustand",
      "Fluid page transitions & micro-interactions with Framer Motion",
    ],
    liveUrl: "https://furnivoliving.vercel.app/",
    githubUrl: "https://github.com/praneel46/furnivoliving",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Framer Motion"],
    gradient: "from-[#A855F7]/30 via-[#6C63FF]/20 to-transparent",
    badge: "E-COMMERCE",
    mockupTag: "Interactive Store",
  },
  {
    id: "sdn-simulator",
    title: "SDN Simulator",
    subtitle: "Interactive Software-Defined Networking Tool",
    description: "Interactive Software Defined Networking Simulator built for learning complex computer networking concepts visually with real-time dynamic topology rendering.",
    features: [
      "Visual topology construction for network packets & nodes",
      "Simulated packet flow analysis & openflow protocol tracing",
      "Educational visual feedback loop for networking concepts",
      "Lightweight web application built with Flask & REST endpoints",
    ],
    liveUrl: "https://sdn-simulator.onrender.com/",
    githubUrl: "https://github.com/praneel46/SDN-Simulator",
    tech: ["Python", "Flask", "Networking", "JavaScript", "Render", "REST APIs"],
    gradient: "from-[#00E5FF]/30 via-[#6C63FF]/20 to-transparent",
    badge: "NETWORKING SIM",
    mockupTag: "Visual Simulator",
  },
];

export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="selected-work" className="relative py-28 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 px-3.5 py-1.5 rounded-full border border-[#00E5FF]/30 mb-4"
          >
            03 // SELECTED WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Featured <span className="text-gradient-cyan">Projects</span>.
          </motion.h2>
        </div>

        {/* Project Stack */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                className="group glass-card p-8 md:p-14 relative overflow-hidden border border-white/12 hover:border-white/30 transition-all duration-500 glass-shimmer"
              >
                {/* Dynamic Spotlight Glow */}
                <div
                  className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-3xl"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 255, 0.08), transparent 80%)`,
                  }}
                />

                {/* Background Ambient Glow */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                  
                  {/* Content Info */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Badge & Project Number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30">
                        {project.badge}
                      </span>
                      <span className="font-mono text-xs text-[#94A3B8]">
                        PROJECT 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-mono text-[#A855F7] mb-6">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    {project.description && (
                      <p className="text-base text-[#94A3B8] font-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                    )}

                    {/* Features List */}
                    {project.features && (
                      <div className="space-y-3 mb-8">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05 }}
                          className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#94A3B8] hover:text-white hover:border-white/20 transition-colors"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links & CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] text-black font-heading font-bold text-xs shadow-[0_0_20px_rgba(108,99,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 text-white font-heading font-semibold text-xs hover:border-[#6C63FF]/40 transition-all duration-300 cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-[#00E5FF]" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                  {/* Product Display Screen */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] p-4 backdrop-blur-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                      
                      {/* Browser Control Bar */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="font-mono text-[11px] text-[#94A3B8] truncate max-w-[200px]">
                          {project.liveUrl.replace("https://", "")}
                        </span>
                        <div className="w-12" />
                      </div>

                      {/* Screen Showcase Box */}
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#050816] border border-white/5 flex flex-col items-center justify-center p-6 text-center group/screen">
                        
                        <div className="absolute h-48 w-48 rounded-full bg-[#00E5FF]/10 blur-3xl group-hover/screen:bg-[#00E5FF]/25 transition-all duration-500" />

                        <ExternalLink className="w-10 h-10 text-[#00E5FF] mb-3 group-hover/screen:rotate-12 transition-transform duration-300" />

                        <h4 className="font-heading text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h4>

                        <span className="font-mono text-xs text-[#94A3B8] mb-5">
                          [{project.mockupTag}]
                        </span>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-black font-heading text-xs font-bold hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg"
                        >
                          Launch Demo <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
