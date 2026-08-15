import {
  generateTitles,
  generateDescription,
  generateTags,
  generateHashtags,
  generateKeywords,
  generateCaptions,
  generateScript,
  generateVisualPlan,
  generateScriptTitles,
} from "./groq";

export async function generateAI(
  type: string,
  input: string
): Promise<string> {
  switch (type) {
    /* =========================
       YOUTUBE TITLE
    ========================= */

    case "title":
      return await generateTitles(input);

    /* =========================
       YOUTUBE DESCRIPTION
    ========================= */

    case "description":
      return await generateDescription(input);

    /* =========================
       YOUTUBE TAGS
    ========================= */

    case "tags":
      return await generateTags(input);

    /* =========================
       YOUTUBE HASHTAGS
    ========================= */

    case "hashtags":
      return await generateHashtags(input);

    /* =========================
       YOUTUBE KEYWORDS
    ========================= */

    case "keyword":
      return await generateKeywords(input);

    case "keywords":
      return await generateKeywords(input);

    /* =========================
       INSTAGRAM CAPTIONS
    ========================= */

    case "caption":
      return await generateCaptions(input);

    case "captions":
      return await generateCaptions(input);

    /* =========================
       YOUTUBE SCRIPT
    ========================= */

    case "script":
      return await generateScript(input);

    /* =========================
       AI VISUAL PLAN
    ========================= */

    case "visual-plan":
      return await generateVisualPlan(input);

    /* =========================
       SCRIPT SEO TITLES
    ========================= */

    case "script-titles":
      return await generateScriptTitles(input);

    /* =========================
       UNSUPPORTED TOOL
    ========================= */

    default:
      throw new Error(`Unsupported AI Tool: ${type}`);
  }
}