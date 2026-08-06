"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, X, Eye, CheckCircle2, ShieldCheck } from "lucide-react";

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "pdf" | "image";
  filePath: string;
  details: string;
  certId?: string;
}

const certificatesList: CertificateItem[] = [
  {
    id: "cisco-cyber-threat",
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "Jun 01, 2026",
    type: "pdf",
    filePath: "/assets/certificates/cisco_cyber_threat.pdf",
    details: "Student level credential verifying proficiency in compliance frameworks, vulnerability assessment, risk management, forensic investigations, and incident response.",
  },
  {
    id: "internshala-inamigos",
    title: "AI Web Development Internship Selection",
    issuer: "Internshala / InAmigos Foundation",
    date: "Aug 03, 2026",
    type: "pdf",
    filePath: "/assets/certificates/internshala_inamigos.pdf",
    details: "Certificate of selection for securing the AI Web Development Internship at InAmigos Foundation.",
    certId: "iofgxufrs5e",
  },
  {
    id: "clapingo-ai-tools",
    title: "AI Tools Mastery Workshop",
    issuer: "Clapingo",
    date: "Jul 29, 2026",
    type: "pdf",
    filePath: "/assets/certificates/clapingo_ai_mastery.pdf",
    details: "Completed workshop on workflow automation using AI tools, prompt engineering, ChatGPT, Gamma AI, and generative productivity tools.",
  },
  {
    id: "codered-cybersecurity",
    title: "Cybersecurity for Businesses — The Fundamental Edition",
    issuer: "CodeRed (Continuous Learning)",
    date: "May 14, 2026",
    type: "image",
    filePath: "/assets/certificates/codered_cybersecurity.png",
    details: "Course completion in foundational business cybersecurity, threat mitigation, and organizational defense.",
    certId: "498214",
  },
  {
    id: "sjbit-techno-quest",
    title: "TECHNO QUEST Event Coordinator Appreciation",
    issuer: "SJBIT Department of Info Science & Engg",
    date: "Apr 02, 2026",
    type: "image",
    filePath: "/assets/certificates/sjbit_techno_quest.jpg",
    details: "Certificate of Appreciation for serving as Coordinator for TECHNO QUEST Inter-collegiate Multi-Round Tech Challenge.",
  },
  {
    id: "nyera-technical-workshop",
    title: "Technical Workshop Participation",
    issuer: "The NYERA",
    date: "2026",
    type: "image",
    filePath: "/assets/certificates/nyera_workshop.jpg",
    details: "Certificate of participation for successful completion and active engagement in technical workshop sessions.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="credentials" className="relative py-28 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#6C63FF] uppercase tracking-widest bg-[#6C63FF]/10 px-3.5 py-1.5 rounded-full border border-[#6C63FF]/30 mb-4"
          >
            04 // CREDENTIALS &amp; CERTIFICATIONS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Verified <span className="text-gradient-purple">Certifications</span> &amp; <span className="text-gradient-cyan">Honors</span>.
          </motion.h2>
        </div>

        {/* Certificates Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300 glass-shimmer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#6C63FF]/15 border border-[#6C63FF]/30 text-[#00E5FF] group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/25 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1.5 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-[#A855F7] mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#94A3B8] font-light leading-relaxed mb-6 line-clamp-3">
                  {cert.details}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">{cert.date}</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/12 transition-colors font-medium"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>View</span>
                  </button>

                  <a
                    href={cert.filePath}
                    download
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-[#94A3B8] hover:text-white border border-white/12 transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-card p-6 md:p-8 flex flex-col border border-white/20 shadow-2xl bg-[#050816]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                    {selectedCert.title}
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    Issued by {selectedCert.issuer} • Date: {selectedCert.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.filePath}
                    download
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] font-heading text-xs font-bold text-black hover:scale-105 transition-transform"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Viewer Body */}
              <div className="flex-1 w-full overflow-hidden rounded-xl bg-black border border-white/10 min-h-[450px]">
                {selectedCert.type === "pdf" ? (
                  <iframe
                    src={selectedCert.filePath}
                    className="w-full h-full min-h-[500px] border-none"
                    title={selectedCert.title}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 bg-black/60">
                    <img
                      src={selectedCert.filePath}
                      alt={selectedCert.title}
                      className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
