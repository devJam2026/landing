import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "DEVJAM | Engineering Labs for Curious Minds",
  description: "Learn. Build. Share. Grow. DevJam is an engineering lab for modern builders. Discover interactive labs, deep-dive notes, real-world projects, and practical roadmaps across AI Engineering, Frontend, System Design, and DevOps.",
  keywords: "AI Engineering, Frontend Engineering, System Design, DevOps, CI/CD, React Visualizer, Tokenizer Visualizer, Software Architecture, Distributed Systems, Interactive Labs",
  authors: [{ name: "DevJam team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devjam.in",
    title: "DEVJAM | Engineering Labs for Curious Minds",
    description: "DevJam is an engineering learning platform focused on AI, Frontend, System Design, and DevOps through interactive labs and building real-world projects.",
    siteName: "DEVJAM",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVJAM | Engineering Labs for Curious Minds",
    description: "DevJam is an engineering learning platform focused on AI, Frontend, System Design, and DevOps through interactive labs.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#030712] text-[#f3f4f6] antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
