import { BLOCKED_HOSTS } from "./constants";

export function validateUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (
      !["http:", "https:"].includes(parsed.protocol)
    ) {
      return false;
    }

    if (
      BLOCKED_HOSTS.includes(parsed.hostname)
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}