import type { Tool } from "@/types/tool";

export const youtubeTools: Tool[] = [
  {
    platform: "youtube",
    slug: "title-generator",
    title: "YouTube Title Generator",
    description: "Generate SEO-friendly YouTube titles with AI.",
    placeholder: "Enter your video topic...",
    icon: "🎬",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "title",

    keywords: [
      "youtube title generator",
      "youtube seo title",
      "ai youtube title",
    ],

    relatedTools: [
      "description-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Keep your title under 60 characters.",
      "Use your main keyword near the beginning.",
      "Create curiosity naturally.",
      "Avoid misleading clickbait.",
      "Write for humans first.",
    ],

    faqs: [
      {
        question: "What is a good YouTube title?",
        answer:
          "A good title is keyword-rich, readable, and encourages viewers to click.",
      },
      {
        question: "How long should a YouTube title be?",
        answer: "Around 50–60 characters usually performs well.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "description-generator",
    title: "YouTube Description Generator",
    description: "Generate SEO-friendly YouTube descriptions with AI.",
    placeholder: "Enter your video topic...",
    icon: "📝",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "description",

    keywords: [
      "youtube description generator",
      "youtube seo description",
      "ai youtube description",
    ],

    relatedTools: [
      "title-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Use your main keyword naturally.",
      "Write an engaging introduction.",
      "Include a call-to-action.",
      "Add hashtags at the end.",
      "Keep the description readable.",
    ],

    faqs: [
      {
        question: "What is a good YouTube description?",
        answer:
          "A good description clearly explains the video while naturally including important keywords.",
      },
      {
        question: "How long should a YouTube description be?",
        answer: "Around 150–300 words is a good starting point for SEO.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "tags-generator",
    title: "YouTube Tags Generator",
    description: "Generate relevant YouTube tags with AI.",
    placeholder: "Enter your video topic...",
    icon: "🏷️",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "tags",

    keywords: [
      "youtube tags",
      "youtube tag generator",
      "youtube seo tags",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "hashtag-generator",
    ],

    tips: [
      "Use relevant keywords.",
      "Mix broad and long-tail tags.",
      "Avoid unrelated tags.",
    ],

    faqs: [
      {
        question: "Do YouTube tags still matter?",
        answer:
          "They have a smaller impact than titles and descriptions, but they can still help YouTube understand your content.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "hashtag-generator",
    title: "YouTube Hashtag Generator",
    description: "Generate trending YouTube hashtags with AI.",
    placeholder: "Enter your video topic...",
    icon: "#️⃣",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "hashtags",

    keywords: [
      "youtube hashtags",
      "youtube hashtag generator",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "tags-generator",
    ],

    tips: [
      "Use 3–5 relevant hashtags.",
      "Keep hashtags closely related to your topic.",
    ],

    faqs: [
      {
        question: "How many hashtags should I use?",
        answer: "Using 3–5 relevant hashtags is usually sufficient.",
      },
    ],
  },
];