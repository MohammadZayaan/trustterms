import { MAX_TEXT_LENGTH } from "./constants";

export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/\n+/g, " ")
    .trim()
    .slice(0, MAX_TEXT_LENGTH);
}