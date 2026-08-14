import Groq from "groq-sdk";

import { TITLE_PROMPT } from "./prompts/title";
import { DESCRIPTION_PROMPT } from "./prompts/description";
import { TAGS_PROMPT } from "./prompts/tags";
import { HASHTAGS_PROMPT } from "./prompts/hashtags";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

async function askGroq(prompt: string): Promise<string> {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      max_completion_tokens: 1200,
      messages: [
        {
          role: "system",
          content:
            "You are an expert social media content strategist, YouTube SEO strategist, Instagram growth specialist, and content writer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0]?.message?.content?.trim() || "";
  } catch (error) {
    console.error("Groq Error:", error);

    throw new Error("Failed to generate AI content.");
  }
}

/* =========================
   YOUTUBE TITLE GENERATOR
========================= */

export async function generateTitles(
  topic: string
): Promise<string> {
  return askGroq(`
${TITLE_PROMPT}

TOPIC:
${topic}
`);
}

/* =========================
   YOUTUBE DESCRIPTION
========================= */

export async function generateDescription(
  topic: string
): Promise<string> {
  return askGroq(`
${DESCRIPTION_PROMPT}

VIDEO TOPIC:
${topic}
`);
}

/* =========================
   YOUTUBE TAGS
========================= */

export async function generateTags(
  topic: string
): Promise<string> {
  return askGroq(`
${TAGS_PROMPT}

TOPIC:
${topic}
`);
}

/* =========================
   YOUTUBE HASHTAGS
========================= */

export async function generateHashtags(
  topic: string
): Promise<string> {
  return askGroq(`
${HASHTAGS_PROMPT}

TOPIC:
${topic}
`);
}

/* =========================
   YOUTUBE KEYWORD GENERATOR
========================= */

export async function generateKeywords(
  topic: string
): Promise<string> {
  const prompt = `
You are an expert YouTube keyword research specialist.

Generate 20 highly relevant YouTube SEO keywords for this video topic:

TOPIC:
${topic}

Requirements:

- Generate exactly 20 keywords.
- Focus on keywords people are likely to search for on YouTube.
- Include both short-tail and long-tail keywords.
- Keep every keyword highly relevant to the topic.
- Include different search intents where appropriate.
- Avoid unrelated keywords.
- Avoid keyword stuffing.
- Do not use hashtags.
- Do not add explanations.
- Return ONLY the keywords.
- Put each keyword on a separate line.
- Number the keywords from 1 to 20.

Example:

1. youtube channel growth
2. how to grow youtube channel
3. youtube growth tips
4. youtube seo tips
5. grow youtube channel fast
`;

  return askGroq(prompt);
}

/* =========================
   INSTAGRAM CAPTION GENERATOR
========================= */

export async function generateCaptions(
  topic: string
): Promise<string> {
  const prompt = `
You are an expert Instagram content strategist and social media copywriter.

Generate 6 highly engaging Instagram captions for this topic:

TOPIC:
${topic}

Requirements:

- Generate exactly 6 different captions.
- Each caption must be unique.
- Make captions natural, engaging and human-sounding.
- Use different writing styles and sentence structures.
- Create curiosity and encourage interaction.
- Some captions can include a question.
- Some captions can include a call-to-action.
- Use emojis naturally where appropriate.
- Do not make every caption follow the same structure.
- Avoid repeating the same phrases.
- Keep captions relevant to the topic.
- Do not create fake facts.
- Do not add explanations outside the captions.
- Return ONLY the 6 captions.
- Number them from 1 to 6.
- Put each caption on a separate line.

Example topic:
Top 5 travel destinations

Example output style:

1. Dreaming of your next adventure? These destinations deserve a spot on your bucket list ✈️🌍

2. From hidden gems to unforgettable views, here are 5 places you need to explore at least once. Which one would you visit first? 👀

3. Your next adventure might be closer than you think 🌎✨ Save this list for your future travels!

4. If you could book a flight anywhere today, where would you go? ✈️ Tell us your dream destination below!

5. Five destinations. Endless memories. Which one is calling your name? 🌴❤️

6. Ready to explore somewhere new? Add these incredible destinations to your travel bucket list 🧳🌍
`;

  return askGroq(prompt);
}