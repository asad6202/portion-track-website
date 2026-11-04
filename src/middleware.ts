import { NextRequest, NextResponse } from "next/server";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  detectStoreFromUserAgent,
  isAppSmartLinkPath,
} from "@/lib/appStoreLink";

/**
 * Permanent smart link: /app (any case, trailing slash OK).
 * - iOS → 302 App Store
 * - Android → 302 Play
 * - Other → continue to branded /app page (no client-side hop)
 *
 * No cookies, no third-party trackers — only a server redirect from UA.
 */
export function middleware(request: NextRequest) {
  if (!isAppSmartLinkPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Canonicalize path for caching/logging without changing the public printed URL contract.
  const store = detectStoreFromUserAgent(request.headers.get("user-agent"));

  if (store === "ios") {
    return NextResponse.redirect(APP_STORE_URL, 302);
  }
  if (store === "android") {
    return NextResponse.redirect(PLAY_STORE_URL, 302);
  }

  // Desktop / unknown: serve the /app page (folder is lowercase; rewrite odd casings).
  if (request.nextUrl.pathname !== "/app" && request.nextUrl.pathname !== "/app/") {
    const url = request.nextUrl.clone();
    url.pathname = "/app";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all non-static paths so /App and /APP still hit middleware
     * (Next route folders are case-sensitive on Linux/Vercel).
     */
    "/((?!_next/static|_next/image|favicon.ico|badges/|assets/|.*\\..*).*)",
  ],
};
