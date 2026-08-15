import Groq from "groq-sdk";

import { TITLE_PROMPT } from "./prompts/title";
import { DESCRIPTION_PROMPT } from "./prompts/description";
import { TAGS_PROMPT } from "./prompts/tags";
import { HASHTAGS_PROMPT } from "./prompts/hashtags";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

/* =========================
   GROQ AI HELPER
========================= */

async function askGroq(
  prompt: string,
  maxTokens: number = 1200
): Promise<string> {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      max_completion_tokens: maxTokens,
      messages: [
        {
          role: "system",
          content:
            "You are an expert YouTube SEO strategist, professional YouTube scriptwriter, documentary writer, social media strategist, video editor, cinematographer, and visual storytelling specialist.",
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
`;

  return askGroq(prompt);
}

/* =========================
   YOUTUBE SCRIPT GENERATOR
========================= */

export async function generateScript(
  input: string
): Promise<string> {
  const prompt = `
You are an expert YouTube scriptwriter, documentary writer,
video editor and visual storytelling specialist.

Create a complete, engaging and production-ready YouTube video script
based on the video details below.

VIDEO DETAILS:
${input}

==================================================
SCRIPT LENGTH
==================================================

Write enough spoken content to closely match the requested duration.

Target word ranges:

1 Minute:
130–160 words

3 Minutes:
390–480 words

5 Minutes:
650–800 words

10 Minutes:
1,300–1,600 words

15 Minutes:
1,950–2,400 words

20 Minutes:
2,600–3,200 words

Do not use meaningless filler to increase word count.

==================================================
SCRIPT STYLE
==================================================

1. Start with a powerful curiosity-driven hook.
2. Never begin with "Hey guys, welcome back to my channel."
3. Write naturally for voice-over.
4. Keep the language conversational and easy to understand.
5. Maintain curiosity throughout the video.
6. Use storytelling and smooth transitions.
7. Match the requested language.
8. Match the requested content type.
9. Match the requested tone.
10. Keep every section useful and engaging.
11. Avoid unnecessary repetition.
12. Do not invent facts, statistics, quotes, people or events.
13. End with a satisfying conclusion.
14. Include a natural YouTube CTA.

==================================================
B-ROLL / VISUAL DIRECTION
==================================================

For every major section, provide useful B-roll and visual suggestions.

Suggestions can include:

- Stock footage
- Archival footage
- Historical photographs
- Maps
- Documents
- Screen recordings
- Establishing shots
- Close-up shots
- Drone shots
- Re-enactment ideas
- Graphics
- Text overlays
- Animations
- Camera movements
- Sound design suggestions

==================================================
OUTPUT FORMAT
==================================================

[HOOK]

VOICEOVER:
Write the hook.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[INTRODUCTION]

VOICEOVER:
Write the introduction.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[SECTION 1]

VOICEOVER:
Write the first major section.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[SECTION 2]

VOICEOVER:
Write the second major section.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[SECTION 3]

VOICEOVER:
Write the third major section.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[SECTION 4]

VOICEOVER:
Write the fourth major section when appropriate.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[SECTION 5]

VOICEOVER:
Write the fifth major section when appropriate.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2
- Visual suggestion 3

[CONCLUSION]

VOICEOVER:
Write the conclusion.

B-ROLL / VISUALS:
- Visual suggestion 1
- Visual suggestion 2

[CALL TO ACTION]

VOICEOVER:
Write a short and natural YouTube CTA.

B-ROLL / VISUALS:
- End screen suggestion
- Subscribe / next-video visual suggestion

IMPORTANT:

- Return ONLY the completed script.
- Do not explain your process.
- Do not provide analysis.
- Do not use markdown code blocks.
- Keep the required section headings.
- Clearly separate VOICEOVER from B-ROLL / VISUALS.
`;

  return askGroq(prompt, 6000);
}

/* =========================
   AI VISUAL PLAN GENERATOR
========================= */

export async function generateVisualPlan(
  script: string
): Promise<string> {
  const prompt = `
You are an expert YouTube video editor, cinematographer,
documentary visual director and post-production supervisor.

Analyze the YouTube script below and create a professional
scene-by-scene visual production plan.

SCRIPT:
${script}

==================================================
OBJECTIVE
==================================================

Turn the script into a practical editing blueprint.

The plan should help a video editor understand:

- What should appear on screen
- What B-roll to search for
- What AI image/video prompt could be used
- What text should appear on screen
- What visual style should be used
- What sound design could support the scene

==================================================
VISUAL RULES
==================================================

1. Follow the actual story and information in the script.
2. Do not invent visual facts that contradict the script.
3. Prioritize visual variety.
4. Avoid suggesting the exact same B-roll repeatedly.
5. Use archival footage when historical topics require it.
6. Suggest maps when geography is important.
7. Suggest documents, headlines or graphics when useful.
8. Suggest close-ups for important objects.
9. Suggest establishing shots when introducing a location.
10. Suggest text overlays only when they improve understanding.
11. Keep every visual suggestion practical for a YouTube editor.

==================================================
AI B-ROLL PROMPTS
==================================================

For important visual shots, create a detailed AI image/video prompt.

Prompts should describe:

- Subject
- Location
- Time period
- Lighting
- Camera angle
- Camera movement
- Mood
- Cinematic style
- Realism

==================================================
OUTPUT FORMAT
==================================================

[SCENE 01]

VOICEOVER:
Quote or summarize the relevant part of the script.

B-ROLL:
- Main footage suggestion
- Secondary footage suggestion
- Detail shot suggestion

AI VISUAL PROMPT:
Detailed prompt for generating the primary visual.

ON-SCREEN TEXT:
Short text overlay if useful.

CAMERA / EDITING:
Camera movement, transition or editing suggestion.

SOUND DESIGN:
Music, ambience or sound effect suggestion.

--------------------------------------------------

[SCENE 02]

VOICEOVER:
Relevant script section.

B-ROLL:
- Main footage suggestion
- Secondary footage suggestion
- Detail shot suggestion

AI VISUAL PROMPT:
Detailed visual generation prompt.

ON-SCREEN TEXT:
Short text overlay if useful.

CAMERA / EDITING:
Editing suggestion.

SOUND DESIGN:
Sound suggestion.

--------------------------------------------------

Continue creating scenes until the entire script has been covered.

IMPORTANT:

- Cover the complete script.
- Do not skip important sections.
- Keep voiceover references concise.
- Make visual suggestions specific.
- Do not add unsupported facts.
- Return ONLY the visual production plan.
`;

  return askGroq(prompt, 6000);
}

/* =========================
   SCRIPT SEO TITLE GENERATOR
========================= */

export async function generateScriptTitles(
  script: string
): Promise<string> {
  const prompt = `
You are an expert YouTube SEO strategist, title copywriter,
audience-retention specialist and viral content strategist.

Analyze the complete YouTube script below and generate
high-quality YouTube title options.

SCRIPT:
${script}

==================================================
OBJECTIVE
==================================================

Create 5 different YouTube titles that accurately represent
the actual content of the script while maximizing:

- Search relevance
- Curiosity
- Click-through potential
- Clarity
- Emotional appeal
- Audience relevance

==================================================
TITLE REQUIREMENTS
==================================================

Generate exactly 5 titles.

Each title must:

1. Be directly relevant to the script.

2. Clearly communicate the main subject.

3. Create curiosity without misleading the viewer.

4. Avoid fake claims and exaggerated promises.

5. Avoid unnecessary keyword stuffing.

6. Sound natural and human-written.

7. Use important topic keywords naturally.

8. Prefer concise titles that work well on YouTube.

9. Make each title meaningfully different from the others.

10. Do not use the same title structure repeatedly.

==================================================
TITLE STRATEGIES
==================================================

Use different approaches across the 5 titles:

TITLE 1:
SEO-focused and keyword-rich.

TITLE 2:
Curiosity-driven.

TITLE 3:
Emotional / storytelling-focused.

TITLE 4:
Question or mystery-driven.

TITLE 5:
Strong balanced combination of SEO + CTR.

==================================================
SEO SCORE
==================================================

For each title provide:

- SEO Score from 0–100
- CTR Potential: Low / Medium / High
- Primary Keyword
- Short reason explaining why the title works

SEO Score should consider:

- Topic relevance
- Keyword usage
- Search intent
- Clarity
- Specificity
- Natural wording

Do NOT claim that a score guarantees rankings or views.

==================================================
OUTPUT FORMAT
==================================================

[TITLE 1]

TITLE:
Write title here.

SEO SCORE:
00/100

CTR POTENTIAL:
High / Medium / Low

PRIMARY KEYWORD:
keyword

WHY IT WORKS:
Short explanation.

--------------------------------------------------

[TITLE 2]

TITLE:
Write title here.

SEO SCORE:
00/100

CTR POTENTIAL:
High / Medium / Low

PRIMARY KEYWORD:
keyword

WHY IT WORKS:
Short explanation.

--------------------------------------------------

[TITLE 3]

TITLE:
Write title here.

SEO SCORE:
00/100

CTR POTENTIAL:
High / Medium / Low

PRIMARY KEYWORD:
keyword

WHY IT WORKS:
Short explanation.

--------------------------------------------------

[TITLE 4]

TITLE:
Write title here.

SEO SCORE:
00/100

CTR POTENTIAL:
High / Medium / Low

PRIMARY KEYWORD:
keyword

WHY IT WORKS:
Short explanation.

--------------------------------------------------

[TITLE 5]

TITLE:
Write title here.

SEO SCORE:
00/100

CTR POTENTIAL:
High / Medium / Low

PRIMARY KEYWORD:
keyword

WHY IT WORKS:
Short explanation.

==================================================
IMPORTANT
==================================================

- Return exactly 5 title suggestions.
- Do not invent information that is not supported by the script.
- Do not use misleading clickbait.
- Do not guarantee views, rankings or CTR.
- Keep titles suitable for YouTube.
- Return ONLY the requested title analysis.
`;

  return askGroq(prompt, 3000);
}