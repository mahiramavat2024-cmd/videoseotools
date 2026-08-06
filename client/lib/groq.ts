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
      temperature: 1,
      max_completion_tokens: 800,
      messages: [
        {
          role: "system",
          content: "You are an expert YouTube SEO copywriter.",
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

export async function generateTitles(topic: string): Promise<string> {
  return askGroq(`${TITLE_PROMPT}

TOPIC:
${topic}`);
}

export async function generateDescription(topic: string): Promise<string> {
  return askGroq(`${DESCRIPTION_PROMPT}

VIDEO TOPIC:
${topic}`);
}

export async function generateTags(topic: string): Promise<string> {
  return askGroq(`${TAGS_PROMPT}

TOPIC:
${topic}`);
}

export async function generateHashtags(topic: string): Promise<string> {
  return askGroq(`${HASHTAGS_PROMPT}

TOPIC:
${topic}`);
}