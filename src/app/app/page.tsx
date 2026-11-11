import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { StoreBadges } from "@/components/StoreBadges";
import { AppSmartRedirect } from "@/components/AppSmartRedirect";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStoreLink";

export const metadata: Metadata = {
  title: "Get Portion Track",
  description: "Download Portion Track on the App Store or Google Play.",
  alternates: {
    canonical: "https://portiontrack.com/app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Inline UA redirect for static `out/` hosts (no middleware). */
const SMART_REDIRECT_SCRIPT = `
(function () {
  var ua = navigator.userAgent || "";
  var ios = /iPhone|iPod|iPad/i.test(ua) || (/Macintosh/i.test(ua) && /Mobile/i.test(ua));
  var android = /Android/i.test(ua);
  if (ios) location.replace(${JSON.stringify(APP_STORE_URL)});
  else if (android) location.replace(${JSON.stringify(PLAY_STORE_URL)});
})();
`;

/**
 * Permanent /app smart link landing.
 * Mobile: immediate client redirect (static export). Desktop: branded store buttons.
 */
export default function AppSmartLinkPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <Script id="app-smart-redirect" strategy="beforeInteractive">
        {SMART_REDIRECT_SCRIPT}
      </Script>
      <AppSmartRedirect />
      <div className="flex max-w-md flex-col items-center text-center">
        <Image
          src="/assets/images/portiontrack_logo_wordmark.png"
          alt="PortionTrack"
          width={220}
          height={205}
          className="mb-6 h-28 w-auto"
          priority
        />
        <h1 className="sr-only">PortionTrack</h1>
        <p className="mb-8 text-base leading-relaxed text-zinc-600">
          Track portions, not calories. Choose your store to download the app.
        </p>
        <StoreBadges className="justify-center" />
        <p className="mt-8 text-sm text-zinc-500">
          <a href={APP_STORE_URL} className="underline underline-offset-2 hover:text-zinc-800">
            App Store
          </a>
          {" · "}
          <a href={PLAY_STORE_URL} className="underline underline-offset-2 hover:text-zinc-800">
            Google Play
          </a>
        </p>
      </div>
    </main>
  );
}
