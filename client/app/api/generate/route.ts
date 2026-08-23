import { NextResponse } from "next/server";

/* =========================================================
   NEXT.JS CONFIG
========================================================= */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* =========================================================
   TYPES
========================================================= */

type GenerateRequest = {
  type?: string;
  input?: string;
  topic?: string;
  prompt?: string;
  content?: string;
};

type GroqResponse = {
  id?: string;
  object?: string;
  created?: number;
  model?: string;

  choices?: Array<{
    index?: number;

    message?: {
      role?: string;
      content?: string | null;
    };

    finish_reason?: string;
  }>;

  error?: {
    message?: string;
    type?: string;
    code?: string;
  };
};

/* =========================================================
   GROQ CONFIG
========================================================= */

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

const GROQ_MODEL =
  process.env.GROQ_MODEL || "openai/gpt-oss-120b";

/* =========================================================
   SUPPORTED GENERATION TYPES
========================================================= */

const SUPPORTED_TYPES = new Set([
  "title",
  "description",
  "tags",
  "hashtags",
  "hashtag",
  "keyword",
  "keywords",
  "script",
  "caption",
  "visual-plan",
  "script-titles",
]);

/* =========================================================
   NORMALIZE GENERATION TYPE
========================================================= */

function normalizeType(value: string): string {
  const type = value.trim().toLowerCase();

  /*
   * Frontend aliases
   *
   * keywords -> keyword
   * hashtag  -> hashtags
   */

  if (type === "keywords") {
    return "keyword";
  }

  if (type === "hashtag") {
    return "hashtags";
  }

  return type;
}

/* =========================================================
   BUILD AI PROMPT
========================================================= */

function buildPrompt(
  type: string,
  input: string
): string {
  switch (type) {
    /* =====================================================
       YOUTUBE TITLE
    ===================================================== */

    case "title":
      return `
You are an expert YouTube title strategist.

Create 10 strong YouTube title ideas for this topic:

"${input}"

Requirements:
- Clear and engaging
- SEO-friendly
- Relevant to the topic
- Use natural keywords
- Avoid misleading clickbait
- Avoid excessive capitalization
- Keep titles reasonably concise
- Make every title meaningfully different
- Do not make false claims
- Return ONLY a numbered list of 10 titles
`;

    /* =====================================================
       YOUTUBE DESCRIPTION
    ===================================================== */

    case "description":
      return `
You are an expert YouTube SEO content writer.

Write a useful YouTube description for this video topic:

"${input}"

Requirements:
- Explain the video clearly
- Use relevant keywords naturally
- Make it useful for viewers
- Include a natural call to action
- Do not keyword stuff
- Do not make false claims
- Use readable paragraphs
- Make it suitable for YouTube
- Return ONLY the finished description
`;

    /* =====================================================
       YOUTUBE TAGS
    ===================================================== */

    case "tags":
      return `
You are a YouTube SEO keyword specialist.

Generate relevant YouTube tags for:

"${input}"

Requirements:
- Generate 20 relevant tags
- Mix broad and specific keywords
- Include useful long-tail variations
- Match the video topic
- Match likely search intent
- Do not use unrelated keywords
- Do not repeat the same tag
- Return ONLY a comma-separated list
`;

    /* =====================================================
       YOUTUBE HASHTAGS
    ===================================================== */

    case "hashtags":
      return `
You are a YouTube content optimization specialist.

Generate relevant YouTube hashtags for:

"${input}"

Requirements:
- Generate 10 relevant hashtags
- Keep them closely related to the topic
- Avoid unrelated hashtags
- Avoid misleading hashtags
- Avoid duplicate hashtags
- Use clean hashtag formatting
- Every hashtag should begin with #
- Return ONLY the hashtags
`;

    /* =====================================================
       YOUTUBE KEYWORDS
    ===================================================== */

    case "keyword":
      return `
You are an expert YouTube keyword research specialist.

Generate useful YouTube keyword ideas for:

"${input}"

Requirements:
- Generate exactly 20 keyword ideas
- Include broad keywords
- Include specific long-tail keywords
- Match search intent
- Match the actual video topic
- Include natural search phrases
- Avoid unrelated keywords
- Avoid duplicate keywords
- Do not add numbering
- Do not add explanations
- Return ONE keyword per line
`;

    /* =====================================================
       YOUTUBE SCRIPT
    ===================================================== */

    case "script":
      return `
You are an experienced YouTube script writer.

Create an engaging YouTube script based on:

"${input}"

Requirements:
- Start with a strong hook
- Use natural spoken language
- Keep the script relevant to the topic
- Include a clear beginning, middle and ending
- Use smooth transitions
- Keep the information practical and useful
- Avoid fake claims
- Do not guarantee views, subscribers or viral results
- Make it suitable for YouTube narration
- Follow requested duration, language, content type and tone if provided
- Use headings when useful
- Return ONLY the finished script
`;

    /* =====================================================
       SOCIAL MEDIA CAPTION
    ===================================================== */

    case "caption":
      return `
Create a short and engaging social media caption based on:

"${input}"

Requirements:
- Natural
- Relevant
- Easy to read
- Engaging
- Include a simple call to action
- Do not make false claims
- Avoid unnecessary hashtags
- Return ONLY the caption
`;

    /* =====================================================
       VISUAL PLAN
    ===================================================== */

    case "visual-plan":
      return `
Create a detailed visual production plan for the following YouTube script:

"${input}"

For each major section, suggest:

1. Scene / section
2. Visual footage
3. B-roll
4. Camera shots
5. Graphics or on-screen text
6. Transitions
7. Relevant visual effects
8. Sound/music suggestions when appropriate

Keep the suggestions practical for a professional video editor.

Make the visual plan easy to follow during editing.

Return ONLY the visual production plan.
`;

    /* =====================================================
       SCRIPT SEO TITLES
    ===================================================== */

    case "script-titles":
      return `
Create 10 SEO-friendly YouTube titles based on this script:

"${input}"

Requirements:
- Relevant to the actual script
- Engaging but not misleading
- Natural keywords
- Good search intent
- Avoid fake claims
- Make each title meaningfully different
- Return ONLY a numbered list of 10 titles
`;

    /* =====================================================
       FALLBACK
    ===================================================== */

    default:
      return `
You are an AI assistant for YouTube creators.

Create useful content based on:

"${input}"

Requirements:
- Be relevant
- Be practical
- Be clear
- Avoid false claims
- Avoid unnecessary repetition
- Return only the requested content
`;
  }
}

/* =========================================================
   GET
========================================================= */

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message:
        "VideoSEOTools AI Generate API is working.",

      method: "POST",

      model: GROQ_MODEL,

      endpoint: "/api/generate",

      supportedTypes: [
        "title",
        "description",
        "tags",
        "hashtags",
        "hashtag",
        "keyword",
        "keywords",
        "script",
        "caption",
        "visual-plan",
        "script-titles",
      ],
    },
    {
      status: 200,
    }
  );
}

/* =========================================================
   POST
========================================================= */

export async function POST(req: Request) {
  try {
    /* =======================================================
       1. CHECK API KEY
    ======================================================= */

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error(
        "[VideoSEOTools] GROQ_API_KEY is missing."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "AI service is not configured. GROQ_API_KEY is missing.",
          code: "MISSING_GROQ_API_KEY",
        },
        {
          status: 500,
        }
      );
    }

    /* =======================================================
       2. READ REQUEST JSON
    ======================================================= */

    let body: GenerateRequest;

    try {
      body = (await req.json()) as GenerateRequest;
    } catch (error) {
      console.error(
        "[VideoSEOTools] Invalid request JSON:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON request.",
          code: "INVALID_REQUEST_JSON",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       3. GET + NORMALIZE TYPE
    ======================================================= */

    const rawType = String(
      body.type || ""
    )
      .trim()
      .toLowerCase();

    if (!rawType) {
      return NextResponse.json(
        {
          success: false,
          error: "Generation type is required.",
          code: "MISSING_GENERATION_TYPE",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * IMPORTANT:
     *
     * keywords -> keyword
     * hashtag  -> hashtags
     */

    const type = normalizeType(rawType);

    /* =======================================================
       4. VALIDATE TYPE
    ======================================================= */

    if (!SUPPORTED_TYPES.has(rawType)) {
      return NextResponse.json(
        {
          success: false,

          error:
            `Unsupported generation type: ${rawType}`,

          code:
            "UNSUPPORTED_GENERATION_TYPE",

          supportedTypes: [
            "title",
            "description",
            "tags",
            "hashtags",
            "hashtag",
            "keyword",
            "keywords",
            "script",
            "caption",
            "visual-plan",
            "script-titles",
          ],
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       5. GET INPUT
    ======================================================= */

    const input = String(
      body.input ||
        body.topic ||
        body.prompt ||
        body.content ||
        ""
    ).trim();

    /* =======================================================
       6. VALIDATE INPUT
    ======================================================= */

    if (!input) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide a topic or prompt.",
          code: "MISSING_INPUT",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       7. INPUT LENGTH SAFETY
    ======================================================= */

    const MAX_INPUT_LENGTH = 50000;

    if (input.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Input is too long. Please reduce the content and try again.",
          code: "INPUT_TOO_LONG",
        },
        {
          status: 413,
        }
      );
    }

    /* =======================================================
       8. LOG REQUEST
    ======================================================= */

    console.log(
      "[VideoSEOTools] AI Generate Request:",
      {
        rawType,
        normalizedType: type,
        inputLength: input.length,
        model: GROQ_MODEL,
      }
    );

    /* =======================================================
       9. SYSTEM PROMPT
    ======================================================= */

    const systemPrompt = `
You are VideoSEOTools AI.

You help YouTube creators create and optimize content.

Important rules:

- Give useful and practical answers.
- Stay relevant to the user's topic.
- Never guarantee views, subscribers, rankings or revenue.
- Never intentionally create misleading metadata.
- Do not use unrelated keywords.
- Keep generated content natural.
- Follow the requested output format exactly.
- Do not add unnecessary explanations before or after the result.
`;

    /* =======================================================
       10. USER PROMPT
    ======================================================= */

    const userPrompt =
      buildPrompt(type, input);

    /* =======================================================
       11. TOKEN LIMIT
    ======================================================= */

    let maxTokens = 1500;

    switch (type) {
      case "script":
        maxTokens = 6000;
        break;

      case "visual-plan":
        maxTokens = 5000;
        break;

      case "description":
        maxTokens = 1800;
        break;

      case "title":
      case "script-titles":
        maxTokens = 1500;
        break;

      case "tags":
      case "hashtags":
      case "keyword":
        maxTokens = 1500;
        break;

      case "caption":
        maxTokens = 700;
        break;

      default:
        maxTokens = 1500;
    }

    /* =======================================================
       12. ABORT CONTROLLER
    ======================================================= */

    const controller =
      new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 60000);

    /* =======================================================
       13. CALL GROQ
    ======================================================= */

    let groqResponse: Response;

    try {
      groqResponse = await fetch(
        GROQ_API_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${apiKey}`,
          },

          body: JSON.stringify({
            model: GROQ_MODEL,

            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: userPrompt,
              },
            ],

            temperature: 0.7,

            max_tokens: maxTokens,
          }),

          signal: controller.signal,
        }
      );
    } catch (error) {
      clearTimeout(timeout);

      console.error(
        "[VideoSEOTools] Groq fetch error:",
        error
      );

      if (
        error instanceof Error &&
        error.name === "AbortError"
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "AI request timed out. Please try again.",
            code: "AI_REQUEST_TIMEOUT",
          },
          {
            status: 504,
          }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to connect to the AI service. Please try again.",
          code: "AI_CONNECTION_ERROR",
        },
        {
          status: 502,
        }
      );
    }

    clearTimeout(timeout);

    /* =======================================================
       14. READ RAW RESPONSE
    ======================================================= */

    const rawText =
      await groqResponse.text();

    console.log(
      "[VideoSEOTools] Groq HTTP Status:",
      groqResponse.status
    );

    /* =======================================================
       15. EMPTY RESPONSE
    ======================================================= */

    if (
      !rawText ||
      !rawText.trim()
    ) {
      console.error(
        "[VideoSEOTools] Groq returned an empty response."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "AI provider returned an empty response. Please try again.",
          code: "EMPTY_AI_RESPONSE",
        },
        {
          status: 502,
        }
      );
    }

    /* =======================================================
       16. PARSE JSON
    ======================================================= */

    let groqData: GroqResponse;

    try {
      groqData =
        JSON.parse(rawText) as GroqResponse;
    } catch (error) {
      console.error(
        "[VideoSEOTools] Groq returned invalid JSON:",
        rawText
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "AI provider returned an invalid response. Please try again.",
          code: "INVALID_AI_RESPONSE",
        },
        {
          status: 502,
        }
      );
    }

    /* =======================================================
       17. HANDLE GROQ API ERROR
    ======================================================= */

    if (!groqResponse.ok) {
      const providerMessage =
        groqData.error?.message ||
        "AI generation failed.";

      console.error(
        "[VideoSEOTools] Groq API Error:",
        {
          status: groqResponse.status,
          type: groqData.error?.type,
          code: groqData.error?.code,
          message: providerMessage,
        }
      );

      return NextResponse.json(
        {
          success: false,

          error: providerMessage,

          code:
            groqData.error?.code ||
            "GROQ_API_ERROR",
        },
        {
          status:
            groqResponse.status || 502,
        }
      );
    }

    /* =======================================================
       18. EXTRACT AI CONTENT
    ======================================================= */

    const generatedContent =
      groqData.choices?.[0]?.message?.content
        ?.trim() || "";

    /* =======================================================
       19. EMPTY AI CONTENT
    ======================================================= */

    if (!generatedContent) {
      console.error(
        "[VideoSEOTools] No generated content:",
        groqData
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "AI did not return any generated content. Please try again.",
          code: "NO_GENERATED_CONTENT",
        },
        {
          status: 502,
        }
      );
    }

    /* =======================================================
       20. SUCCESS LOG
    ======================================================= */

    console.log(
      "[VideoSEOTools] AI Generation Successful:",
      {
        rawType,
        normalizedType: type,
        model: GROQ_MODEL,
        outputLength:
          generatedContent.length,

        finishReason:
          groqData.choices?.[0]
            ?.finish_reason || null,
      }
    );

    /* =======================================================
       21. COMMON RESPONSE
    ======================================================= */

    const response: Record<
      string,
      unknown
    > = {
      success: true,

      type,

      requestedType: rawType,

      model: GROQ_MODEL,

      result: generatedContent,

      content: generatedContent,

      output: generatedContent,

      text: generatedContent,

      generatedContent,
    };

    /* =======================================================
       22. TYPE-SPECIFIC RESPONSE
    ======================================================= */

    if (type === "script") {
      response.script =
        generatedContent;
    }

    if (type === "visual-plan") {
      response.visualPlan =
        generatedContent;
    }

    if (type === "script-titles") {
      response.scriptTitles =
        generatedContent;
    }

    if (type === "title") {
      response.titles =
        generatedContent;
    }

    if (type === "description") {
      response.description =
        generatedContent;
    }

    if (type === "tags") {
      response.tags =
        generatedContent;
    }

    if (type === "hashtags") {
      response.hashtags =
        generatedContent;
    }

    if (type === "keyword") {
      response.keywords =
        generatedContent;
    }

    if (type === "caption") {
      response.caption =
        generatedContent;
    }

    /* =======================================================
       23. RETURN SUCCESS
    ======================================================= */

    return NextResponse.json(
      response,
      {
        status: 200,
      }
    );
  } catch (error) {
    /* =======================================================
       GLOBAL ERROR
    ======================================================= */

    console.error(
      "[VideoSEOTools] Generate API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while generating content.",

        code:
          "INTERNAL_GENERATION_ERROR",
      },
      {
        status: 500,
      }
    );
  }
}