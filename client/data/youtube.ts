import type { Tool } from "@/types/tool";

export const youtubeTools: Tool[] = [
  {
    platform: "youtube",
    slug: "title-generator",
    title: "YouTube Title Generator",
    description:
      "Generate SEO-friendly YouTube titles with AI. Create clear, engaging and relevant title ideas for your videos.",
    placeholder: "Enter your video topic...",
    icon: "🎬",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "title",

    keywords: [
      "youtube title generator",
      "free youtube title generator",
      "youtube title generator ai",
      "youtube seo title generator",
      "ai youtube title generator",
      "youtube title ideas",
      "youtube video title generator",
      "seo friendly youtube titles",
    ],

    relatedTools: [
      "description-generator",
      "keyword-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Keep your main title clear and easy to understand.",
      "Place the main topic or keyword naturally near the beginning when it makes sense.",
      "Create curiosity without misleading viewers.",
      "Avoid unnecessary keyword stuffing.",
      "Write titles for real viewers first and search engines second.",
      "Make sure the title accurately represents the actual video content.",
    ],

    faqs: [
      {
        question: "What is a YouTube Title Generator?",
        answer:
          "A YouTube Title Generator helps creators brainstorm title ideas based on a video topic. It can help create clear, relevant and engaging titles for different types of YouTube content.",
      },
      {
        question: "Is this YouTube Title Generator free?",
        answer:
          "Yes. The VideoSEOTools YouTube Title Generator is currently available as a free tool.",
      },
      {
        question: "How long should a YouTube title be?",
        answer:
          "There is no single perfect title length. A useful title should be concise enough to communicate the topic clearly while giving viewers a reason to click. Keeping important information toward the beginning can also help readability.",
      },
      {
        question: "Should I put keywords in my YouTube title?",
        answer:
          "Use relevant keywords naturally when they accurately describe your video. Avoid forcing keywords into a title if they make it difficult to read or misleading.",
      },
      {
        question: "Can a title generator guarantee more YouTube views?",
        answer:
          "No. A title generator can help with brainstorming and optimization, but it cannot guarantee rankings, clicks or views. Video quality, audience interest, topic selection, thumbnail and viewer satisfaction also matter.",
      },
      {
        question: "What other YouTube SEO tools should I use?",
        answer:
          "After creating a title, you can improve the rest of your video metadata with the YouTube Description Generator, YouTube Keyword Generator, YouTube Tags Generator and YouTube Hashtag Generator.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "description-generator",
    title: "YouTube Description Generator",
    description:
      "Generate SEO-friendly YouTube descriptions with AI. Create structured, readable descriptions that clearly explain your video.",
    placeholder: "Enter your video topic...",
    icon: "📝",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "description",

    keywords: [
      "youtube description generator",
      "free youtube description generator",
      "youtube description generator ai",
      "youtube seo description",
      "youtube video description generator",
      "ai youtube description",
      "seo friendly youtube description",
      "youtube description ideas",
    ],

    relatedTools: [
      "title-generator",
      "keyword-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Explain the main topic of the video clearly in the opening lines.",
      "Use important keywords naturally instead of repeating them excessively.",
      "Make the description useful to viewers rather than writing only for search engines.",
      "Include relevant links, resources or calls to action when appropriate.",
      "Use readable paragraphs and formatting.",
      "Keep the description accurate and consistent with the actual video.",
    ],

    faqs: [
      {
        question: "What is a YouTube Description Generator?",
        answer:
          "A YouTube Description Generator helps creators create structured descriptions based on their video topic. It can help organize important information and naturally include relevant search terms.",
      },
      {
        question: "Is this YouTube Description Generator free?",
        answer:
          "Yes. The VideoSEOTools YouTube Description Generator is currently available as a free tool.",
      },
      {
        question: "Why is a YouTube description important?",
        answer:
          "A useful description gives viewers additional context about a video and helps communicate the topic, resources and important information surrounding the content.",
      },
      {
        question: "How long should a YouTube description be?",
        answer:
          "There is no universal ideal length. The description should contain enough useful information to explain the video, provide relevant links and help viewers understand what they will find in the content.",
      },
      {
        question: "Should I add keywords to my YouTube description?",
        answer:
          "Relevant keywords can be included naturally when they accurately describe the video. Avoid keyword stuffing or adding unrelated search terms.",
      },
      {
        question: "Can an AI description guarantee higher rankings?",
        answer:
          "No. An AI-generated description can help with writing and organization, but it cannot guarantee search rankings, views or audience growth.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "tags-generator",
    title: "YouTube Tags Generator",
    description:
      "Generate relevant YouTube tags with AI. Discover useful tag ideas related to your video topic and content.",
    placeholder: "Enter your video topic...",
    icon: "🏷️",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "tags",

    keywords: [
      "youtube tags",
      "youtube tag generator",
      "free youtube tags generator",
      "youtube seo tags",
      "youtube tags generator ai",
      "youtube video tags",
      "youtube tag ideas",
      "youtube keyword tags",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "keyword-generator",
      "hashtag-generator",
    ],

    tips: [
      "Use tags that are closely related to your actual video.",
      "Combine specific phrases with broader topic terms.",
      "Consider relevant long-tail keyword variations.",
      "Avoid unrelated or misleading tags.",
      "Do not rely on tags alone for YouTube SEO.",
      "Keep your title, description, tags and actual video topic consistent.",
    ],

    faqs: [
      {
        question: "What are YouTube tags?",
        answer:
          "YouTube tags are descriptive terms associated with a video. They can provide additional context about the topic and may be useful for identifying common spelling variations or closely related terms.",
      },
      {
        question: "Do YouTube tags still matter?",
        answer:
          "Tags are generally less important than factors such as the actual video content, title, thumbnail, description, viewer response and overall relevance. They can still provide additional context in some situations.",
      },
      {
        question: "How many YouTube tags should I use?",
        answer:
          "There is no universal number that guarantees better performance. Focus on relevant and accurate tags rather than adding a large number of unrelated terms.",
      },
      {
        question: "Should YouTube tags match my keywords?",
        answer:
          "Relevant tags can overlap with important keywords and topic variations, but they should accurately describe the video rather than being added simply to target unrelated searches.",
      },
      {
        question: "Can YouTube tags guarantee more views?",
        answer:
          "No. Tags alone cannot guarantee more views or higher rankings. They are only one small part of a broader YouTube content and optimization strategy.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "hashtag-generator",
    title: "YouTube Hashtag Generator",
    description:
      "Generate relevant YouTube hashtags with AI. Find topic-specific hashtag ideas for your YouTube videos and content strategy.",
    placeholder: "Enter your video topic...",
    icon: "#️⃣",
    category: "YouTube",
    featured: true,
    premium: false,
    aiType: "hashtags",

    keywords: [
      "youtube hashtags",
      "youtube hashtag generator",
      "free youtube hashtag generator",
      "youtube hashtag ideas",
      "youtube seo hashtags",
      "youtube hashtags generator ai",
      "youtube video hashtags",
      "best hashtags for youtube",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "tags-generator",
      "keyword-generator",
    ],

    tips: [
      "Choose hashtags that are directly related to your video.",
      "Use specific topic hashtags instead of only broad terms.",
      "Avoid irrelevant or misleading hashtags.",
      "Keep your hashtag strategy simple and focused.",
      "Make sure hashtags accurately represent your content.",
      "Use keywords and hashtags as supporting elements rather than replacing useful content.",
    ],

    faqs: [
      {
        question: "What is a YouTube Hashtag Generator?",
        answer:
          "A YouTube Hashtag Generator helps creators discover hashtag ideas related to their video topic. These hashtags can be used as part of a broader content and discovery strategy.",
      },
      {
        question: "How many hashtags should I use on YouTube?",
        answer:
          "There is no magic number that guarantees better performance. Use a small set of highly relevant hashtags instead of adding many unrelated hashtags.",
      },
      {
        question: "Are YouTube hashtags useful for SEO?",
        answer:
          "Relevant hashtags can help categorize or provide additional context for content, but they should be treated as a supporting element rather than the main YouTube SEO strategy.",
      },
      {
        question: "Should YouTube hashtags be related to my video?",
        answer:
          "Yes. Hashtags should accurately describe the subject, topic or context of the video. Irrelevant hashtags can create a poor user experience.",
      },
      {
        question: "Can hashtags guarantee more YouTube views?",
        answer:
          "No. Hashtags cannot guarantee views or rankings. Audience interest, video quality, topic relevance, thumbnail, title and viewer satisfaction are also important.",
      },
    ],
  },

  {
    platform: "youtube",
    slug: "keyword-generator",
    title: "Free YouTube Keyword Generator",
    description:
      "Find powerful YouTube keywords, keyword ideas and SEO search terms for your videos with our free YouTube keyword research tool.",
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
      "youtube search keywords",
      "youtube keyword ideas",
      "long tail youtube keywords",
    ],

    relatedTools: [
      "title-generator",
      "description-generator",
      "tags-generator",
      "hashtag-generator",
    ],

    tips: [
      "Start with a clear and specific video topic.",
      "Think about what your target viewer would actually search for.",
      "Use a mix of broad and long-tail keyword ideas.",
      "Choose keywords that closely match the actual video content.",
      "Use your primary keyword naturally in your title and description.",
      "Consider related terms and different ways viewers may phrase the same search.",
      "Avoid irrelevant keyword stuffing.",
    ],

    faqs: [
      {
        question: "What is a YouTube Keyword Generator?",
        answer:
          "A YouTube Keyword Generator helps creators discover relevant search terms and keyword ideas that can be used when planning and optimizing YouTube videos.",
      },
      {
        question: "Is this YouTube Keyword Generator free?",
        answer:
          "Yes. You can use the VideoSEOTools YouTube Keyword Generator to generate keyword ideas for your videos.",
      },
      {
        question: "What are YouTube SEO keywords?",
        answer:
          "YouTube SEO keywords are search terms related to a video topic that can help creators understand search intent and communicate the subject of their content more clearly.",
      },
      {
        question: "How should I use YouTube keywords?",
        answer:
          "Use relevant keywords naturally when creating your title, description, tags and content plan. The keyword should accurately match what the video is actually about.",
      },
      {
        question: "Can I use long-tail keywords on YouTube?",
        answer:
          "Yes. Long-tail keywords are more specific search phrases and can be useful when they closely match the intent and topic of your video.",
      },
      {
        question: "Where should I put my main YouTube keyword?",
        answer:
          "When relevant, you can naturally use the main topic or keyword in your title and description. The most important goal is to accurately communicate the video's subject rather than repeating the same phrase excessively.",
      },
      {
        question: "Can YouTube keyword research guarantee rankings?",
        answer:
          "No. Keyword research can help with topic planning and optimization, but it cannot guarantee rankings, views or subscribers. Performance also depends on content quality, audience demand and viewer satisfaction.",
      },
    ],
  },
];