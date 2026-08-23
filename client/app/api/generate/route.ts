import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

function getPrompt(type: string, input: string): string {
  switch (type) {
    /* =========================================================
       INSTAGRAM
    ========================================================= */

    case "instagram-keyword":
      return `
You are an expert Instagram SEO strategist.

Generate 15 highly relevant Instagram keyword ideas for:

"${input}"

Requirements:
- Focus on Instagram search intent.
- Include short-tail and long-tail keywords.
- Include relevant Reel and post keywords.
- Keep every keyword directly related to the topic.
- Avoid keyword stuffing.
- Return ONLY keywords.
- One keyword per line.
- No numbering.
- No explanations.
`;

    case "instagram-tags":
      return `
You are an Instagram hashtag expert.

Generate 20 highly relevant Instagram hashtags for:

"${input}"

Requirements:
- Mix broad, niche and specific hashtags.
- Keep every hashtag relevant.
- Suitable for Instagram Reels and posts.
- Avoid spammy or unrelated hashtags.
- Return ONLY hashtags.
- One hashtag per line.
- No numbering.
- No explanations.
`;

    case "instagram-caption":
      return `
You are an expert Instagram copywriter.

Create 10 engaging Instagram caption ideas for:

"${input}"

Requirements:
- Suitable for Instagram posts and Reels.
- Natural and conversational.
- Mix emotional, funny, informative, curiosity and CTA styles.
- Keep captions concise.
- Avoid repetitive captions.
- Return ONLY captions.
- One caption per line.
- No numbering.
- No explanations.
`;

    case "instagram-script":
      return `
You are an expert Instagram Reels scriptwriter.

Create 5 short Instagram Reel scripts for:

"${input}"

Each script must contain:

HOOK:
CONTENT:
CTA:

Requirements:
- Strong hook in the first few seconds.
- Designed for short-form video.
- Natural conversational language.
- Easy to record.
- Make every script different.
- Keep each script concise.

Separate each script with a blank line.
`;

    case "instagram-seo-title":
      return `
You are an Instagram SEO and content strategist.

Generate 10 SEO-friendly Instagram title ideas for:

"${input}"

Requirements:
- Naturally include important topic keywords.
- Suitable for Instagram Reels and posts.
- Clear and clickable.
- Avoid misleading clickbait.
- Make every title different.
- Return ONLY titles.
- One title per line.
- No numbering.
- No explanations.
`;

    /* =========================================================
       YOUTUBE
    ========================================================= */

    case "title":
    case "youtube-title":
      return `
Generate 10 SEO-friendly YouTube video title ideas for:

"${input}"

Requirements:
- Clear and engaging.
- Relevant to the topic.
- Natural keyword usage.
- Avoid misleading clickbait.
- Return ONLY titles.
- One title per line.
- No numbering.
`;

    case "keyword":
    case "youtube-keyword":
      return `
Generate 15 relevant YouTube SEO keyword ideas for:

"${input}"

Requirements:
- Mix short-tail and long-tail keywords.
- Focus on search intent.
- Keep every keyword relevant.
- Return ONLY keywords.
- One keyword per line.
- No numbering.
`;

    case "tags":
    case "youtube-tags":
      return `
Generate 20 relevant YouTube video tags for:

"${input}"

Requirements:
- Mix broad and specific tags.
- Include natural keyword variations.
- Avoid unrelated tags.
- Return ONLY tags.
- One tag per line.
`;

    case "hashtags":
    case "youtube-hashtags":
      return `
Generate 15 relevant YouTube hashtags for:

"${input}"

Requirements:
- Relevant to the topic.
- Mix broad and niche hashtags.
- Return ONLY hashtags.
- One hashtag per line.
`;

    case "description":
    case "youtube-description":
      return `
Write an SEO-friendly YouTube video description for:

"${input}"

Requirements:
- Explain the topic clearly.
- Naturally include relevant keywords.
- Make it readable.
- Avoid keyword stuffing.
- Include a natural call to action.
`;

    /* =========================================================
       FACEBOOK
    ========================================================= */

    case "facebook-keyword":
      return `
Generate 15 Facebook SEO keyword ideas for:

"${input}"

Return ONLY one keyword per line.
No numbering.
No explanations.
`;

    case "facebook-tags":
      return `
Generate 20 relevant Facebook hashtags/tags for:

"${input}"

Mix broad, niche and specific tags.

Return ONLY one tag per line.
No numbering.
No explanations.
`;

    case "facebook-caption":
      return `
Create 10 engaging Facebook caption ideas for:

"${input}"

Use a mixture of emotional, informative, funny and CTA-focused styles.

Return ONLY captions, one per line.
No numbering.
`;

    case "facebook-script":
      return `
Create 5 short Facebook video/Reel scripts for:

"${input}"

Each script should contain:

HOOK:
CONTENT:
CTA:

Keep the scripts concise and engaging.
Separate each script with a blank line.
`;

    case "facebook-seo-title":
      return `
Generate 10 SEO-friendly Facebook post/video title ideas for:

"${input}"

Return ONLY titles.
One title per line.
No numbering.
No explanations.
`;

    /* =========================================================
       TIKTOK
    ========================================================= */

    case "tiktok-keyword":
      return `
Generate 15 TikTok SEO keyword ideas for:

"${input}"

Focus on TikTok search intent and discoverability.

Return ONLY keywords.
One keyword per line.
No numbering.
`;

    case "tiktok-tags":
      return `
Generate 20 relevant TikTok hashtags for:

"${input}"

Mix broad, niche and trending-style relevant hashtags.

Return ONLY hashtags.
One per line.
No numbering.
`;

    case "tiktok-caption":
      return `
Create 10 short and engaging TikTok captions for:

"${input}"

Make them natural, catchy and suitable for short-form video.

Return ONLY captions.
One per line.
No numbering.
`;

    case "tiktok-script":
      return `
Create 5 viral-style TikTok video scripts for:

"${input}"

Each script must contain:

HOOK:
CONTENT:
CTA:

Keep them short and easy to record.
Separate each script with a blank line.
`;

    case "tiktok-seo-title":
      return `
Generate 10 SEO-friendly TikTok title ideas for:

"${input}"

Return ONLY titles.
One title per line.
No numbering.
`;

    /* =========================================================
       X / TWITTER
    ========================================================= */

    case "x-keyword":
      return `
Generate 15 relevant X/Twitter keyword ideas for:

"${input}"

Return ONLY keywords.
One keyword per line.
No numbering.
`;

    case "x-tags":
      return `
Generate 20 relevant X/Twitter hashtags for:

"${input}"

Return ONLY hashtags.
One hashtag per line.
No numbering.
`;

    case "x-caption":
      return `
Create 10 engaging X/Twitter post ideas for:

"${input}"

Keep them concise, natural and conversation-friendly.

Return ONLY the posts.
One per line.
No numbering.
`;

    case "x-script":
      return `
Create 5 short X video content scripts for:

"${input}"

Each should contain:

HOOK:
CONTENT:
CTA:

Keep them concise.
Separate each script with a blank line.
`;

    case "x-seo-title":
      return `
Generate 10 SEO-friendly X/Twitter post title ideas for:

"${input}"

Return ONLY titles.
One title per line.
No numbering.
`;

    /* =========================================================
       PINTEREST
    ========================================================= */

    case "pinterest-keyword":
      return `
Generate 15 Pinterest SEO keyword ideas for:

"${input}"

Focus on Pinterest search intent.

Return ONLY keywords.
One keyword per line.
No numbering.
`;

    case "pinterest-tags":
      return `
Generate 20 relevant Pinterest tags/hashtags for:

"${input}"

Return ONLY tags.
One tag per line.
No numbering.
`;

    case "pinterest-caption":
      return `
Create 10 Pinterest SEO-friendly descriptions/captions for:

"${input}"

Make them searchable, natural and useful.

Return ONLY descriptions.
One per line.
No numbering.
`;

    case "pinterest-script":
      return `
Create 5 short Pinterest video/Idea Pin scripts for:

"${input}"

Each script should contain:

HOOK:
CONTENT:
CTA:

Keep each script concise.
Separate each script with a blank line.
`;

    case "pinterest-seo-title":
      return `
Generate 10 SEO-friendly Pinterest title ideas for:

"${input}"

Return ONLY titles.
One title per line.
No numbering.
`;

    /* =========================================================
       DEFAULT
    ========================================================= */

    default:
      return `
Generate useful content ideas for:

"${input}"

Return concise results.
One idea per line.
No numbering.
`;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const type = String(body?.type || "").trim();
    const input = String(body?.input || "").trim();

    if (!type) {
      return NextResponse.json(
        {
          success: false,
          error: "Generator type is required.",
        },
        { status: 400 }
      );
    }

    if (!input) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a topic or prompt.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("GROQ_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "AI service is not configured.",
        },
        { status: 500 }
      );
    }

    const prompt = getPrompt(type, input);

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",

      temperature: 0.8,

      max_completion_tokens: 2048,

      messages: [
        {
          role: "system",
          content:
            "You are VidNova's AI social media and SEO content assistant. Follow the requested output format exactly. Do not add unnecessary explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content =
      completion.choices?.[0]?.message?.content?.trim() || "";

    if (!content) {
      console.error("Groq returned empty content.");

      return NextResponse.json(
        {
          success: false,
          error: "AI returned an empty response.",
        },
        { status: 502 }
      );
    }

    const results = content
      .split(/\n+/)
      .map((item) =>
        item
          .replace(/^\s*[-*•]\s*/, "")
          .replace(/^\s*\d+[\).\s-]+\s*/, "")
          .trim()
      )
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      results,
      type,
      input,
    });
  } catch (error) {
    console.error("AI Generation Error:", error);

    let errorMessage =
      "Something went wrong while generating content.";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}