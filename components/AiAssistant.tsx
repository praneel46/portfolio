"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Minus, Maximize2, Minimize2, Move } from "lucide-react";

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
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const getAiResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("project") || q.includes("build") || q.includes("work")) {
      return "Praneel has developed 4 major projects:\n1. SmartHostelAI — Enterprise AI-powered hostel management system with 100-room live allocation, QR gate passes, & Docker deployment (Render live demo).\n2. CHARIS — AI-powered career guidance platform for student trajectory mapping (Next.js & Vercel live demo).\n3. Furnivo — Premium luxury furniture e-commerce platform with Zustand state & Framer Motion (Vercel live demo).\n4. SDN Simulator — Interactive visual Software-Defined Networking simulator for learning network topology & flows (Render live demo).";
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language")) {
      return "Praneel's skills & building stack include:\n• Core Skills: Java and oop, Python (Basics), C, DSA, MySQL, DBMS\n• Backend Development: Spring, Spring Boot, REST APIs, JWT Authentication\n• AI & Integration: Spring AI, AI Integration, LLM APIs, AI-powered Applications\n• Cloud & DevOps: Docker, AWS, Git, GitHub, CI/CD, Deployment\n• Frontend Development: HTML, CSS, JavaScript, React";
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
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#A855F7] text-black font-heading font-bold text-xs shadow-[0_0_25px_rgba(108,99,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] transition-all duration-300"
      >
        <Bot className="w-5 h-5" />
        <span className="hidden sm:inline">AI Portfolio Assistant</span>
        {isMinimized && (
          <span className="h-2 w-2 rounded-full bg-black animate-ping" />
        )}
      </motion.button>

      {/* Draggable Desktop AI Assistant Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.05}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 glass-card border border-white/20 shadow-2xl bg-[#050816] flex flex-col overflow-hidden transition-all duration-200 ${
              isMaximized
                ? "inset-4 sm:inset-10 w-auto h-auto rounded-3xl"
                : "bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[440px] h-[540px] max-h-[80vh] rounded-3xl"
            }`}
          >
            {/* Draggable Desktop Title Bar Header */}
            <div className="p-3.5 bg-white/[0.05] border-b border-white/10 flex items-center justify-between cursor-grab active:cursor-grabbing select-none">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 mr-2">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer block"
                    title="Close"
                  />
                  <span
                    onClick={() => setIsMinimized(true)}
                    className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer block"
                    title="Minimize"
                  />
                  <span
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer block"
                    title="Maximize"
                  />
                </div>

                <div className="p-1.5 rounded-lg bg-[#00E5FF]/15 text-[#00E5FF]">
                  <Bot className="w-4 h-4" />
                </div>

                <div>
                  <h4 className="font-heading text-xs font-bold text-white flex items-center gap-1.5">
                    Praneel&apos;s AI Assistant
                    <Sparkles className="w-3 h-3 text-[#A855F7]" />
                  </h4>
                  <span className="text-[9px] font-mono text-[#00E5FF] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" /> Movable Desktop App
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white"
                  title="Minimize"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white hidden sm:block"
                  title={isMaximized ? "Restore" : "Maximize"}
                >
                  {isMaximized ? (
                    <Minimize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white"
                  title="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-body text-xs leading-relaxed">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-black font-medium rounded-br-none shadow-md"
                        : "bg-white/[0.05] border border-white/10 text-white rounded-bl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Question Chips */}
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

            {/* Input Footer */}
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
