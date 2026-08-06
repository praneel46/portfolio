/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "rgba(255, 255, 255, 0.05)",
        primary: "#6C63FF",
        secondary: "#00E5FF",
        accent: "#A855F7",
        textPrimary: "#FFFFFF",
        textSecondary: "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        number: ["var(--font-sora)", "sans-serif"],
      },
      animation: {
        "aurora": "aurora 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "border-glow": "borderGlow 4s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(108, 99, 255, 0.5)" },
          "33%": { borderColor: "rgba(0, 229, 255, 0.5)" },
          "66%": { borderColor: "rgba(168, 85, 247, 0.5)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 40px -10px rgba(108, 99, 255, 0.5)",
        "cyan-glow": "0 0 40px -10px rgba(0, 229, 255, 0.4)",
        "purple-glow": "0 0 40px -10px rgba(168, 85, 247, 0.4)",
      },
    },
  },
  plugins: [],
};
