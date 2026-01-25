import React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Home | Premium Real Estate Developer in Dehradun",
  description:
    "Apex Home - Your trusted real estate developer in Dehradun. Explore our premium residential projects including MShivalik. Build your dream home with us.",
  keywords: [
    "real estate",
    "Dehradun",
    "MShivalik",
    "Apex Home",
    "luxury homes",
    "residential projects",
  ],
  authors: [{ name: "Apex Home" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Apex Home | Premium Real Estate Developer",
    description:
      "Build your dream home with Apex Home - Dehradun's trusted real estate developer",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#b5704d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
