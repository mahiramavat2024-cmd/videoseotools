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
    default: "VideoSEOTools - AI SEO Tools for Video Creators",
    template: "%s | VideoSEOTools",
  },

  description:
    "Free AI-powered SEO tools for video creators. Generate YouTube titles, descriptions, tags, hashtags, scripts, hooks, and more to grow your videos faster.",

  keywords: [
    "Video SEO Tools",
    "YouTube SEO Tools",
    "AI SEO Tools",
    "YouTube Title Generator",
    "YouTube Description Generator",
    "YouTube Tags Generator",
    "YouTube Hashtag Generator",
    "AI Video Tools",
    "Content Creator Tools",
    "Video SEO",
    "YouTube SEO",
    "AI Content Generator",
  ],

  authors: [
    {
      name: "VideoSEOTools",
    },
  ],

  creator: "VideoSEOTools",

  publisher: "VideoSEOTools",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "VideoSEOTools - AI SEO Tools for Video Creators",

    description:
      "Generate AI-powered YouTube titles, descriptions, tags, hashtags, scripts and more with free SEO tools.",

    url: "https://videoseotools.com",

    siteName: "VideoSEOTools",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "VideoSEOTools",

    description:
      "Free AI SEO Tools for YouTube & Video Creators.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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