"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    sender: "bot",
    text: "Hi 👋 I'm Praneel's AI Portfolio Assistant. Ask me anything about Praneel's projects, technical skills, education, certifications, or how to get in touch!",
  },
];

const sampleQuestions = [
  "What projects has Praneel built?",
  "What are Praneel's top skills?",
  "Tell me about his education & CGPA",
  "What certificates does he hold?",
  "How can I contact Praneel?",
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const getAiResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("project") || q.includes("build") || q.includes("work")) {
      return "Praneel has developed 4 major projects:\n1. SmartHostelAI — Enterprise AI-powered hostel management system with 100-room live allocation, QR gate passes, & Docker deployment (Render live demo).\n2. CHARIS — AI-powered career guidance platform for student trajectory mapping (Next.js & Vercel live demo).\n3. Furnivo — Premium luxury furniture e-commerce platform with Zustand state & Framer Motion (Vercel live demo).\n4. SDN Simulator — Interactive visual Software-Defined Networking simulator for learning network topology & flows (Render live demo).";
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language")) {
      return "Praneel's technical stack includes:\n• Programming: Java, Python, TypeScript, JavaScript, C++, C\n• Frontend: React, Next.js 15, Tailwind CSS, Framer Motion, Bootstrap\n• Backend: Flask, REST APIs\n• Database: SQLite\n• Tools: Git, GitHub, Docker, Render, Vercel\n• AI Workflows: Google Antigravity, Claude, ChatGPT, Cursor, Gemini, Codex, Lovable.";
    }

    if (q.includes("education") || q.includes("cgpa") || q.includes("college") || q.includes("university") || q.includes("degree") || q.includes("study")) {
      return "Praneel is pursuing his Bachelor of Engineering in Computer Science & Engineering at SJBIT Institute of Technology, Bengaluru (Expected Graduation: 2028). He currently maintains a top academic CGPA of 9.33 / 10.";
    }

    if (q.includes("certif") || q.includes("credential") || q.includes("honor") || q.includes("cisco") || q.includes("workshop")) {
      return "Praneel holds 6 verified credentials:\n1. Cisco Networking Academy — Cyber Threat Management\n2. SJBIT — TECHNO QUEST Coordinator Appreciation\n3. The NYERA — Technical Workshop Certificate\n4. CodeRed — Cybersecurity for Businesses (Fundamental Edition)\n5. Internshala — AI Web Development Internship Selection at InAmigos Foundation\n6. Clapingo — AI Tools Mastery Workshop.";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("linkedin") || q.includes("instagram") || q.includes("twitter") || q.includes("reach")) {
      return "You can reach Praneel directly via:\n• Email: praneelkulkarni4646@gmail.com\n• Phone: +91 8660276040\n• LinkedIn: linkedin.com/in/praneel-kulkarni-52815b214\n• GitHub: github.com/praneel46\n• Instagram: instagram.com/praneelx_\n• X (Twitter): x.com/Praneel_46";
    }

    if (q.includes("who") || q.includes("about") || q.includes("praneel")) {
      return "Praneel Kulkarni is an AI Full Stack Developer and Computer Science undergraduate at SJBIT. He is passionate about building modern digital experiences through clean code, AI integrations, and intuitive UI/UX design at PK Studio.";
    }

    return "I'm Praneel's AI Assistant! I can help you explore his 4 featured projects (SmartHostelAI, CHARIS, Furnivo, SDN Simulator), technical skills, education at SJBIT (9.33 CGPA), 6 verified credentials, or contact details. Click any prompt below!";
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = { sender: "user", text };
    const replyText = getAiResponse(text);
    const botMsg: Message = { sender: "bot", text: replyText };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    if (!textToSend) setInputValue("");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] text-black font-heading font-bold text-xs shadow-[0_0_25px_rgba(108,99,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] transition-all duration-300"
      >
        <Bot className="w-5 h-5" />
        <span className="hidden sm:inline">AI Portfolio Assistant</span>
      </motion.button>

      {/* Chat Assistant Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-22 right-6 z-50 w-full max-w-sm sm:max-w-md h-[520px] glass-card border border-white/20 shadow-2xl bg-[#050816] flex flex-col overflow-hidden rounded-3xl"
          >
            {/* Widget Header */}
            <div className="p-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white flex items-center gap-1.5">
                    Praneel&apos;s AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                  </h4>
                  <span className="text-[10px] font-mono text-[#00E5FF] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" /> Online &amp; Ready
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-body text-xs leading-relaxed">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-black font-medium rounded-br-none"
                        : "bg-white/[0.05] border border-white/10 text-white rounded-bl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Question Chips */}
            <div className="px-3 py-2 bg-white/[0.02] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {sampleQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[10px] font-mono text-[#00E5FF] border border-white/10 transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-[#050816] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-[#94A3B8] outline-none focus:border-[#00E5FF]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-black hover:scale-105 transition-transform"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
