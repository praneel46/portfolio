import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "Praneel Kulkarni — PK Studio | AI Full Stack Developer",
  description: "Official portfolio of Praneel Kulkarni — AI Full Stack Developer, Computer Science Undergraduate & Tech Enthusiast building modern digital experiences.",
  keywords: [
    "Praneel Kulkarni",
    "PK Studio",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "SmartHostelAI",
    "CHARIS",
    "Furnivo",
    "SDN Simulator",
    "SJBIT"
  ],
  authors: [{ name: "Praneel Kulkarni" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Praneel Kulkarni — PK Studio",
    description: "Creating Experiences, Not Just Websites. Turning Ideas into Intelligent Software.",
    url: "https://praneelkulkarni.vercel.app",
    siteName: "Praneel Kulkarni Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praneel Kulkarni — PK Studio",
    description: "Creating Experiences, Not Just Websites. Turning Ideas into Intelligent Software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050816] text-white antialiased selection:bg-[#6C63FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
