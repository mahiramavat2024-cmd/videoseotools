import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateTitles(topic: string) {
  const prompt = `
You are an expert YouTube SEO strategist.

Generate exactly 10 highly clickable YouTube titles.

Topic:
${topic}

Rules:
- Maximum 70 characters.
- SEO optimized.
- High CTR.
- No numbering.
- No markdown.
- Return only titles.
`;

  // Try primary model
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text ?? "";
  } catch (err) {
    console.log("Primary model failed. Trying fallback...");

    // Fallback model
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    return response.text ?? "";
  }
}