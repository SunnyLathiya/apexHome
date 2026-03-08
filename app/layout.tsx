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
  title: "Apex Property | Premium Real Estate Developer in Ahmedabad",
  description:
    "Apex Property - Your trusted real estate developer in Ahmedabad. Explore our premium residential projects including Shivyan heights. Build your dream home with us.",
  keywords: [
    "real estate",
    "Ahmedabad",
    "Shivyan heights",
    "Apex Property",
    "luxury homes",
    "residential projects",
  ],
  authors: [{ name: "Apex Property" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/photo_2026-02-21_13-02-58.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/photo_2026-02-21_13-02-58.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/photo_2026-02-21_13-02-58.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/photo_2026-02-21_13-02-58.jpg",
  },
  openGraph: {
    title: "Apex Property | Premium Real Estate Developer",
    description:
      "Build your dream home with Apex Property - Ahmedabad's trusted real estate developer",
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
