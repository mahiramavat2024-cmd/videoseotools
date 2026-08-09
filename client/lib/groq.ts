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
      max_completion_tokens: 800,
      messages: [
        {
          role: "system",
          content:
            "You are an expert YouTube SEO strategist and keyword research specialist.",
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
   TITLE GENERATOR
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
   DESCRIPTION GENERATOR
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
   TAGS GENERATOR
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
   HASHTAG GENERATOR
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
   KEYWORD GENERATOR
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