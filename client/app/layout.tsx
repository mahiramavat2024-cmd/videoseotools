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

export const metadata: Metadata = {
  metadataBase: new URL("https://videoseotools.com"),

  title: {
    default: "VideoSEOTools - Free AI YouTube SEO Tools",
    template: "%s | VideoSEOTools",
  },

  description:
    "Generate AI-powered YouTube titles, descriptions, tags, hashtags and more with VideoSEOTools.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#08111f] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}