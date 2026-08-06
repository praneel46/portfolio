"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, FileText, ExternalLink, Copy, Check, Sparkles, Instagram, Twitter } from "lucide-react";

interface ContactProps {
  onOpenResumeModal: () => void;
}

export default function Contact({ onOpenResumeModal }: ContactProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const connectCards = [
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      value: "linkedin.com/in/praneel-kulkarni-52815b214",
      link: "https://www.linkedin.com/in/praneel-kulkarni-52815b214",
      icon: Linkedin,
      color: "from-[#0A66C2]/30 via-[#6C63FF]/20 to-transparent",
      accent: "text-[#0A66C2] border-[#0A66C2]/30 bg-[#0A66C2]/15",
      actionType: "link",
    },
    {
      id: "github",
      title: "GitHub Repositories",
      value: "github.com/praneel46",
      link: "https://github.com/praneel46",
      icon: Github,
      color: "from-[#6C63FF]/30 via-[#00E5FF]/20 to-transparent",
      accent: "text-white border-white/30 bg-white/10",
      actionType: "link",
    },
    {
      id: "instagram",
      title: "Instagram",
      value: "@praneelx_",
      link: "https://www.instagram.com/praneelx_?igsh=ZHAxNjc2YjgyN2t0",
      icon: Instagram,
      color: "from-[#E1306C]/30 via-[#A855F7]/20 to-transparent",
      accent: "text-[#E1306C] border-[#E1306C]/30 bg-[#E1306C]/15",
      actionType: "link",
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      value: "@Praneel_46",
      link: "https://x.com/Praneel_46",
      icon: Twitter,
      color: "from-[#1DA1F2]/30 via-[#00E5FF]/20 to-transparent",
      accent: "text-[#1DA1F2] border-[#1DA1F2]/30 bg-[#1DA1F2]/15",
      actionType: "link",
    },
    {
      id: "email",
      title: "Direct Email",
      value: "praneelkulkarni4646@gmail.com",
      link: "mailto:praneelkulkarni4646@gmail.com",
      icon: Mail,
      color: "from-[#A855F7]/30 via-[#6C63FF]/20 to-transparent",
      accent: "text-[#A855F7] border-[#A855F7]/30 bg-[#A855F7]/15",
      actionType: "copy",
      copyText: "praneelkulkarni4646@gmail.com",
    },
    {
      id: "phone",
      title: "Phone Contact",
      value: "+91 8660276040",
      link: "tel:+918660276040",
      icon: Phone,
      color: "from-[#00E5FF]/30 via-[#6C63FF]/20 to-transparent",
      accent: "text-[#00E5FF] border-[#00E5FF]/30 bg-[#00E5FF]/15",
      actionType: "copy",
      copyText: "8660276040",
    },
    {
      id: "resume-card",
      title: "Resume Document",
      value: "Praneel_Kulkarni_Resume.pdf",
      icon: FileText,
      color: "from-[#6C63FF]/30 via-[#A855F7]/20 to-transparent",
      accent: "text-[#6C63FF] border-[#6C63FF]/30 bg-[#6C63FF]/15",
      actionType: "modal",
    },
  ];

  return (
    <section id="lets-connect" className="relative py-28 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 px-3.5 py-1.5 rounded-full border border-[#00E5FF]/30 mb-4"
          >
            06 // LET&apos;S CONNECT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Let&apos;s build something <span className="text-gradient-cyan">impactful</span> together.
          </motion.h2>

          <p className="text-base sm:text-lg text-[#94A3B8] font-light max-w-2xl">
            Whether you have an exciting software engineering project, AI integration opportunity, or simply want to connect, reach out directly through any of the channels below.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectCards.map((card, index) => {
            const IconComponent = card.icon;
            const isCopied = copiedItem === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-7 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 glass-shimmer"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${card.accent} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-mono text-xs text-[#94A3B8] truncate mb-6">
                    {card.value}
                  </p>
                </div>

                {/* Action Controls */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  {card.actionType === "link" && card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-xs font-mono font-semibold text-[#00E5FF] hover:underline"
                    >
                      <span>Open Link</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}

                  {card.actionType === "copy" && card.copyText && (
                    <button
                      onClick={() => handleCopy(card.copyText!, card.id)}
                      className="flex items-center gap-2 text-xs font-mono font-semibold text-[#A855F7] hover:text-white transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                          <span className="text-[#00E5FF]">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Click to Copy</span>
                        </>
                      )}
                    </button>
                  )}

                  {card.actionType === "modal" && (
                    <button
                      onClick={onOpenResumeModal}
                      className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6C63FF] hover:text-white transition-colors"
                    >
                      <span>Preview Resume</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center py-10 px-6 rounded-3xl bg-gradient-to-r from-[#6C63FF]/15 via-[#00E5FF]/10 to-[#A855F7]/15 border border-white/10"
        >
          <Sparkles className="w-8 h-8 text-[#00E5FF] mx-auto mb-3 animate-pulse" />
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Let&apos;s build something impactful together.
          </h3>
          <p className="text-xs font-mono text-[#94A3B8]">
            Praneel Kulkarni — AI Full Stack Developer • PK Studio
          </p>
        </motion.div>

      </div>
    </section>
  );
}
