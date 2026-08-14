import {
  generateTitles,
  generateDescription,
  generateTags,
  generateHashtags,
  generateKeywords,
  generateCaptions,
} from "./groq";

export async function generateAI(
  type: string,
  input: string
): Promise<string> {
  switch (type) {
    case "title":
      return await generateTitles(input);

    case "description":
      return await generateDescription(input);

    case "tags":
      return await generateTags(input);

    case "hashtags":
      return await generateHashtags(input);

    case "keyword":
      return await generateKeywords(input);

    case "keywords":
      return await generateKeywords(input);

    case "caption":
      return await generateCaptions(input);

    case "captions":
      return await generateCaptions(input);

    default:
      throw new Error(`Unsupported AI Tool: ${type}`);
  }
}