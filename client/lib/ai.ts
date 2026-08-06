import {
  generateTitles,
  generateDescription,
  generateTags,
  generateHashtags,
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

    default:
      throw new Error(`Unsupported AI Tool: ${type}`);
  }
}