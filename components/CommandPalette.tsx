"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code, FolderGit2, Award, FileText, Mail, Copy, ExternalLink, Instagram, Twitter } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ElementType;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResumeModal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotice(label);
    setTimeout(() => {
      setCopiedNotice(null);
      onClose();
    }, 1500);
  };

  const commands: CommandItem[] = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: Home,
      action: () => navigateTo("hero"),
    },
    {
      id: "nav-about",
      title: "Go to About & Education",
      category: "Navigation",
      icon: User,
      action: () => navigateTo("about"),
    },
    {
      id: "nav-technical-expertise",
      title: "Go to Technical Expertise (Skills Bento)",
      category: "Navigation",
      icon: Code,
      action: () => navigateTo("technical-expertise"),
    },
    {
      id: "nav-projects",
      title: "Go to Selected Work (Projects)",
      category: "Navigation",
      icon: FolderGit2,
      action: () => navigateTo("selected-work"),
    },
    {
      id: "nav-credentials",
      title: "Go to Credentials & Certificates",
      category: "Navigation",
      icon: Award,
      action: () => navigateTo("credentials"),
    },
    {
      id: "nav-resume",
      title: "Go to Resume Section",
      category: "Navigation",
      icon: FileText,
      action: () => navigateTo("resume"),
    },
    {
      id: "nav-connect",
      title: "Go to Let's Connect",
      category: "Navigation",
      icon: Mail,
      action: () => navigateTo("lets-connect"),
    },
    {
      id: "action-view-resume",
      title: "Open Fullscreen Resume Preview Modal",
      category: "Actions",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      id: "action-copy-email",
      title: "Copy Email (praneelkulkarni4646@gmail.com)",
      category: "Actions",
      icon: Copy,
      action: () => copyToClipboard("praneelkulkarni4646@gmail.com", "Email"),
    },
    {
      id: "action-copy-phone",
      title: "Copy Phone Number (8660276040)",
      category: "Actions",
      icon: Copy,
      action: () => copyToClipboard("8660276040", "Phone"),
    },
    {
      id: "social-github",
      title: "Open GitHub Profile (praneel46)",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/praneel46", "_blank");
        onClose();
      },
    },
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        window.open("https://www.linkedin.com/in/praneel-kulkarni-52815b214", "_blank");
        onClose();
      },
    },
    {
      id: "social-instagram",
      title: "Open Instagram Profile (@praneelx_)",
      category: "Social",
      icon: Instagram,
      action: () => {
        window.open("https://www.instagram.com/praneelx_?igsh=ZHAxNjc2YjgyN2t0", "_blank");
        onClose();
      },
    },
    {
      id: "social-twitter",
      title: "Open X (Twitter) Profile (@Praneel_46)",
      category: "Social",
      icon: Twitter,
      action: () => {
        window.open("https://x.com/Praneel_46", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl glass-card border border-white/20 shadow-2xl bg-[#050816] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
              <Search className="w-5 h-5 text-[#00E5FF] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="w-full bg-transparent text-sm text-white placeholder-[#94A3B8] outline-none font-mono"
                autoFocus
              />
              <span className="font-mono text-[10px] text-[#94A3B8] bg-white/10 px-2 py-1 rounded">
                ESC
              </span>
            </div>

            {copiedNotice && (
              <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] font-mono text-xs text-center border-b border-[#00E5FF]/20">
                Copied {copiedNotice} to clipboard!
              </div>
            )}

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-[#94A3B8]">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd) => {
                  const IconComp = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.08] text-left group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#00E5FF] group-hover:bg-[#6C63FF]/20 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-white group-hover:text-[#00E5FF] transition-colors">
                          {cmd.title}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] text-[#94A3B8] uppercase">
                        {cmd.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
              <span>Navigation &amp; Quick Actions</span>
              <span>PK Studio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
