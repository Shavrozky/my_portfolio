import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hallo, Muhammad Rizky Suryanata | AI Engineer",
  description:
    "A premium futuristic portfolio for Muhammad Rizky Suryanata, AI Engineer focused on computer vision, LLM systems, AI products, operational monitoring, fullstack web applications, and cloud deployment.",
  keywords: [
    "Muhammad Rizky Suryanata",
    "AI Engineer",
    "Computer Vision",
    "LLM Systems",
    "Fullstack Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Muhammad Rizky Suryanata" }],
  openGraph: {
    title: "Muhammad Rizky Suryanata | AI Engineer",
    description: "Building practical AI systems for real-world operations.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
