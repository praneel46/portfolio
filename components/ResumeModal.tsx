"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[88vh] glass-card p-6 flex flex-col border border-white/20 shadow-2xl bg-[#050816]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Control Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#6C63FF]/20 text-[#00E5FF]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                    Praneel Kulkarni — Resume
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    Official Curriculum Vitae • PDF Document
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/assets/resume.pdf"
                  download="Praneel_Kulkarni_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] font-heading text-xs font-bold text-black hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close Resume Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Resume PDF Viewer */}
            <div className="flex-1 w-full overflow-hidden rounded-xl bg-black border border-white/10 shadow-inner">
              <iframe
                src="/assets/resume.pdf"
                className="w-full h-full border-none"
                title="Praneel Kulkarni Resume PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
