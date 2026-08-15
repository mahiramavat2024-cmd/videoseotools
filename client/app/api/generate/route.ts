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

    if (!input?.trim()) {
      return NextResponse.json(
        {
          error: "Input is required.",
        },
        {
          status: 400,
        }
      );
    }

    const text = await generateAI(type, input);

    console.log("AI RESPONSE:");
    console.log(text);

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