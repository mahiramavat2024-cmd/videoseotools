import type { Tool } from "@/types/tool";

export const instagramTools: Tool[] = [
  {
    platform: "instagram",
    slug: "caption-generator",
    title: "Instagram Caption Generator",
    description:
      "Generate engaging and SEO-friendly Instagram captions with AI.",
    placeholder: "Enter your Instagram post topic...",
    icon: "📸",
    category: "Instagram",
    featured: true,
    premium: false,
    aiType: "instagram-caption",

    keywords: [
      "instagram caption generator",
      "instagram captions",
      "ai instagram caption generator",
      "instagram caption ideas",
    ],

    relatedTools: [
      "hashtag-generator",
      "bio-generator",
      "content-ideas-generator",
    ],

    tips: [
      "Keep your opening line engaging.",
      "Use keywords naturally.",
      "Add a clear call-to-action when appropriate.",
      "Use emojis naturally.",
      "Write captions for your target audience.",
    ],

    faqs: [
      {
        question: "What is an Instagram Caption Generator?",
        answer:
          "An Instagram Caption Generator uses AI to create engaging caption ideas based on your post topic.",
      },
      {
        question: "Can I use these captions for Instagram Reels?",
        answer:
          "Yes. The generated captions can be adapted for Instagram posts, Reels, and other content.",
      },
      {
        question: "Is the Instagram Caption Generator free?",
        answer:
          "Yes. You can use the VideoSEOTools Instagram Caption Generator to create caption ideas for your content.",
      },
    ],
  },
];