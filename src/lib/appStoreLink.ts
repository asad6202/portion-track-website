/** Canonical store URLs for the permanent /app smart link. Update here if stores change. */
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/portion-track/id6756213687";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.amynovoa.portiontracker";

export type StoreTarget = "ios" | "android" | "other";

/**
 * Detect App Store vs Play from User-Agent.
 * Works for Safari/Chrome and common in-app browsers (Instagram, Facebook, TikTok)
 * because those still include iPhone/iPad/Android tokens.
 */
export function detectStoreFromUserAgent(userAgent: string | null | undefined): StoreTarget {
  const ua = userAgent || "";

  // iPadOS 13+ desktop UA still includes Macintosh; also match classic iOS tokens.
  if (/iPhone|iPod|iPad/i.test(ua)) return "ios";
  if (/Macintosh/i.test(ua) && /Mobile/i.test(ua)) return "ios";

  if (/Android/i.test(ua)) return "android";

  return "other";
}

/** True when the path is the permanent /app smart link (any case, optional trailing slash). */
export function isAppSmartLinkPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized.toLowerCase() === "/app";
}
