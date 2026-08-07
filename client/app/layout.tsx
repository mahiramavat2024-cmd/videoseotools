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
    "Generate AI-powered YouTube titles, descriptions, tags, hashtags, hooks, scripts, and SEO content with VideoSEOTools. Free SEO tools for YouTube creators.",

  keywords: [
    "Video SEO Tools",
    "YouTube SEO Tools",
    "AI SEO Tools",
    "YouTube Title Generator",
    "YouTube Description Generator",
    "YouTube Tags Generator",
    "YouTube Hashtag Generator",
    "AI Video Tools",
    "YouTube Growth",
    "Content Creator Tools",
    "SEO Generator",
    "Free AI Tools",
  ],

  authors: [
    {
      name: "VideoSEOTools",
      url: "https://videoseotools.com",
    },
  ],

  creator: "VideoSEOTools",
  publisher: "VideoSEOTools",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://videoseotools.com",
  },

  openGraph: {
    title: "VideoSEOTools - Free AI YouTube SEO Tools",

    description:
      "Generate AI-powered YouTube titles, descriptions, tags, hashtags, hooks and scripts for better rankings.",

    url: "https://videoseotools.com",

    siteName: "VideoSEOTools",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VideoSEOTools",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "VideoSEOTools",

    description:
      "Free AI SEO Tools for YouTube Creators.",

    images: ["/og-image.png"],
  },

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}