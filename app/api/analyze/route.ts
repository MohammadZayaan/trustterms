import { NextRequest, NextResponse } from "next/server";

import { scrapeWebpage } from "@/lib/scraper";
import { cleanText } from "@/lib/textCleaner";
import { analyzePolicyText } from "@/lib/ruleEngine";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const url = body.url?.trim();
    const rawText = body.text?.trim();

    if (!url && !rawText) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide either a URL or raw text.",
        },
        { status: 400 }
      );
    }

    let extractedText = "";

    let sourceType: "url" | "text" = "text";

    if (url) {
      sourceType = "url";

      extractedText =
        await scrapeWebpage(url);
    } else {
      extractedText = rawText;
    }

    const cleanedText =
      cleanText(extractedText);

    const analysis = analyzePolicyText(
      cleanedText,
      sourceType
    );

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("[API ERROR]", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}