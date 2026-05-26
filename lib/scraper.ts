import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeWebpage(
  url: string
): Promise<string> {
  try {
    console.log("[SCRAPER] Fetching:", url);

    const response = await axios.get(url, {
      timeout: 15000,

      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; TrustTermsBot/1.0)",
      },

      maxContentLength: 5 * 1024 * 1024,
    });

    const html = response.data;

    const $ = cheerio.load(html);

    $("script").remove();
    $("style").remove();
    $("noscript").remove();
    $("svg").remove();
    $("img").remove();

    const text = $("body").text();

    return text;
  } catch (error) {
    console.error("[SCRAPER ERROR]", error);

    throw new Error(
      "Failed to extract webpage content."
    );
  }
}