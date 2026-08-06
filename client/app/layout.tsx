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
  metadataBase: new URL("https://vidnova.ai"),

  title: {
    default: "VidNova - AI YouTube SEO Tools",
    template: "%s | VidNova",
  },

  description:
    "Generate AI-powered YouTube titles, descriptions, tags and hashtags instantly. Free SEO tools for creators.",

  keywords: [
    "YouTube Title Generator",
    "YouTube Description Generator",
    "YouTube Tags Generator",
    "YouTube Hashtag Generator",
    "AI YouTube Tools",
    "YouTube SEO",
    "VidNova",
    "AI Content Generator",
  ],

  authors: [
    {
      name: "VidNova",
    },
  ],

  creator: "VidNova",

  publisher: "VidNova",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "VidNova - AI YouTube SEO Tools",
    description:
      "Generate SEO optimized YouTube titles, descriptions, tags and hashtags using AI.",

    url: "https://vidnova.ai",

    siteName: "VidNova",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "VidNova",

    description:
      "Free AI YouTube SEO Tools for Content Creators.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#08111f] text-white">
        {children}
      </body>
    </html>
  );
}