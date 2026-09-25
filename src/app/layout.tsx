import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gagandeep | Developer",
  description:
    "Premium interactive portfolio of Gagandeep, a MERN Stack Developer focused on modern interfaces, APIs, performance, and workflow-driven products.",
  openGraph: {
    title: "Gagandeep | Developer",
    description:
      "Premium interactive portfolio of Gagandeep, featuring experience, skills, projects, and contact details.",
    url: siteUrl,
    siteName: "Gagandeep Portfolio",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Gagandeep portfolio preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagandeep | Developer",
    description:
      "Premium interactive portfolio of Gagandeep, featuring experience, skills, projects, and contact details.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-[#050505] font-[family-name:var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
