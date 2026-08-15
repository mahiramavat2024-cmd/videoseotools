import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, input } = body;

    console.log("=================================");
    console.log("AI GENERATION REQUEST");
    console.log("Type:", type);
    console.log("Input:", input);
    console.log("=================================");

    /* =========================
       VALIDATION
    ========================= */

    if (!type) {
      return NextResponse.json(
        {
          error: "AI tool type is missing.",
        },
        {
          status: 400,
        }
      );
    }

    if (!input || typeof input !== "string" || !input.trim()) {
      return NextResponse.json(
        {
          error: "Input is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* =========================
       AI GENERATION
    ========================= */

    const text = await generateAI(type, input);

    console.log("AI RESPONSE:");
    console.log(text);

    /* =========================
       EMPTY RESPONSE CHECK
    ========================= */

    if (!text || !text.trim()) {
      return NextResponse.json(
        {
          error: "AI returned an empty response.",
        },
        {
          status: 500,
        }
      );
    }

    /* =========================
       FULL TEXT TOOLS
    ========================= */

    if (type === "script") {
      console.log("FINAL SCRIPT RESPONSE:");

      return NextResponse.json({
        script: text.trim(),
      });
    }

    if (type === "visual-plan") {
      console.log("FINAL VISUAL PLAN RESPONSE:");

      return NextResponse.json({
        visualPlan: text.trim(),
      });
    }

    /* =========================
       SCRIPT SEO TITLES
    ========================= */

    if (type === "script-titles") {
      console.log("FINAL SCRIPT SEO TITLES RESPONSE:");

      return NextResponse.json({
        scriptTitles: text.trim(),
      });
    }

    /* =========================
       EXISTING AI TOOLS
    ========================= */

    const results = text
      .split("\n")
      .map((item) =>
        item
          .replace(/^\s*\d+[\).\-\s]*/, "")
          .replace(/^[-•*]\s*/, "")
          .trim()
      )
      .filter(Boolean);

    console.log("FINAL RESULTS:");
    console.log(results);

    return NextResponse.json({
      results,
    });
  } catch (error) {
    console.error("=================================");
    console.error("AI GENERATION ERROR");
    console.error(error);
    console.error("=================================");

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "AI Generation Failed",
      },
      {
        status: 500,
      }
    );
  }
}