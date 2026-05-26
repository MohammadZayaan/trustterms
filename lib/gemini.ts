import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

const modelName =
  process.env.GEMINI_MODEL ||
  "gemini-1.5-flash";

export async function generateAISummary(
  summaryInput: string
): Promise<string | null> {
  try {
    console.log(
      "[AI] Starting Gemini summary generation"
    );

    if (!apiKey) {
      console.warn(
        "[AI] Missing Gemini API key"
      );

      return null;
    }

    console.log("[AI] Using model:", modelName);

    const genAI =
      new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: modelName,
    });

    const prompt = `
You are a privacy policy analyzer.

Explain these risks in very simple English.

Rules:
- Keep response under 80 words
- Be concise
- Sound beginner-friendly
- Mention important dangers clearly

Risks:
${summaryInput}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    const text = response.text();

    console.log(
      "[AI] Raw Gemini response:",
      text
    );

    if (!text || text.trim().length === 0) {
      console.warn(
        "[AI] Empty Gemini response"
      );

      return null;
    }

    return text.trim();
  } catch (error) {
    console.error(
      "[AI ERROR - FULL]",
      JSON.stringify(error, null, 2)
    );

    return null;
  }
}