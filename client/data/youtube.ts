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
      "keyword-generator",
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
      "keyword-generator",
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
      "keyword-generator",
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
      "keyword-generator",
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

  /* =========================================================
     YOUTUBE KEYWORD GENERATOR
  ========================================================= */

  {
    platform: "youtube",
    slug: "keyword-generator",
    title: "Free YouTube Keyword Generator",
    description:
      "Find powerful YouTube keywords, keyword ideas, and SEO search terms for your videos with our free YouTube keyword research tool.",
    placeholder: "Enter your YouTube video topic...",
    icon: "🔑",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "keyword",

    keywords: [
      "youtube keyword generator",
      "free youtube keyword generator",
      "youtube keyword research tool",
      "youtube seo keywords",
      "youtube keywords",
      "keyword ideas for youtube",
      "youtube video keywords",
      "youtube keyword research",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Start with a clear and specific video topic.",
      "Use a mix of broad and long-tail keywords.",
      "Choose keywords that closely match your video content.",
      "Use your primary keyword naturally in your title and description.",
      "Avoid irrelevant keyword stuffing.",
    ],

    faqs: [
      {
        question: "What is a YouTube Keyword Generator?",
        answer:
          "A YouTube Keyword Generator helps creators discover relevant search terms and keyword ideas that can be used to optimize YouTube videos.",
      },
      {
        question: "Is this YouTube Keyword Generator free?",
        answer:
          "Yes. You can use the VideoSEOTools YouTube Keyword Generator to generate keyword ideas for your videos.",
      },
      {
        question: "What are YouTube SEO keywords?",
        answer:
          "YouTube SEO keywords are search terms related to your video topic that can help YouTube understand and match your content with relevant searches.",
      },
      {
        question: "How should I use YouTube keywords?",
        answer:
          "Use relevant keywords naturally in your video title, description, tags, and overall content strategy without keyword stuffing.",
      },
      {
        question: "Can I use long-tail keywords on YouTube?",
        answer:
          "Yes. Long-tail keywords can be useful because they are more specific and can closely match the search intent behind a video.",
      },
    ],
  },
];