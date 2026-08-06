import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { type, input } = await req.json();

    if (!input?.trim()) {
        return NextResponse.json(
            { error: "Input is required" },
            { status: 400 }
        );
    }

    const text = await generateAI(type, input);

    const results = text
        .split("\n")
        .map((item) => item.replace(/^\d+[\).\-\s]*/, "").trim())
        .filter(Boolean);

    return NextResponse.json({
        results,
    });

  } catch (error) {
    console.error(error);

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