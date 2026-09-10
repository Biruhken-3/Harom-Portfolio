import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://drharom.example.com"),
  title: "Dr. Harom Gari Wakjira - Surgeon, Educator & Researcher",
  description:
    "Portfolio of Dr. Harom Gari Wakjira - Consultant General Surgeon, Assistant Professor at JUMC, and Plastic, Reconstructive & Hand Surgery Fellow at AAU.",
  keywords: [
    "Harom Gari Wakjira",
    "General Surgeon",
    "Plastic Surgery",
    "Reconstructive Surgery",
    "Microsurgery",
    "Ethiopia",
    "Jimma University",
  ],
  openGraph: {
    title: "Dr. Harom Gari Wakjira - Surgeon, Educator & Researcher",
    description:
      "Consultant General Surgeon, Assistant Professor at JUMC, and Plastic, Reconstructive & Hand Surgery Fellow at AAU.",
    images: ["/hero/hero.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f4c81",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-ink">{children}</body>
    </html>
  );
}

