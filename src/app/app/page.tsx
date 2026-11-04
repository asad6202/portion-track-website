import type { Metadata } from "next";
import Image from "next/image";
import { StoreBadges } from "@/components/StoreBadges";
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

/**
 * Desktop / unknown-device landing for the permanent /app smart link.
 * Mobile browsers are 302’d in middleware before this page renders.
 */
export default function AppSmartLinkPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex max-w-md flex-col items-center text-center">
        <Image
          src="/assets/images/portiontrack_icon_512.png"
          alt="Portion Track"
          width={96}
          height={96}
          className="mb-6 h-24 w-24 rounded-2xl"
          priority
        />
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Portion Track
        </h1>
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
