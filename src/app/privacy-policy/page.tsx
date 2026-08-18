import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Portion Track",
  description: "Privacy Policy for the Portion Track mobile app and website.",
};

const sections = [
  {
    title: "Data Collection",
    body: "Portion Track does not require users to create an account or provide a name, email address, or other account information. Food logs, preferences, goals, weight history, and other tracking information are stored locally on your device.\n\nWhen you choose to use the meal photo scanning feature, the selected photo and your selected language are temporarily transmitted for analysis so Portion Track can identify foods and estimate portions. Portion Track does not associate meal photos with your name, email address, account, user ID, or device identifier.\n\nStandard infrastructure providers may process limited technical information, such as IP addresses, timestamps, and request metadata, as part of operating and securing their services.",
  },
  {
    title: "Meal Photo Analysis",
    body: "The meal photo scanning feature is optional. When you choose to scan a meal, the selected image and language are sent to Portion Track's backend for processing and forwarded to a third-party artificial intelligence service to provide the requested food identification and portion analysis.\n\nThe image exists temporarily in Portion Track's serverless function memory while the request is processed. Portion Track does not write the image to its databases, disk storage, or other persistent storage, and does not maintain a library or history of submitted meal photos.\n\nPortion Track does not associate the image with an account, name, email address, user ID, or device identifier.\n\nThe image is processed by third-party service providers involved in delivering the photo analysis feature. These providers may process data in accordance with their applicable service terms, privacy practices, and data-retention settings.\n\nPortion Track does not use meal photos for advertising or marketing and does not sell them. The analysis results are returned to the app for you to review, edit, and choose whether to log.",
  },
  {
    title: "Accounts",
    body: "Portion Track does not require account creation, registration, or sign-in.",
  },
  {
    title: "Service Providers and Data Processing",
    body: "Portion Track uses third-party service providers to operate certain features of the app, including cloud infrastructure and artificial intelligence processing.\n\nWhen you voluntarily use the meal photo scanning feature, the selected image and language are processed by these service providers only as necessary to provide, operate, secure, and support the requested feature.\n\nPortion Track does not sell personal data or use personal data for targeted advertising.",
  },
  {
    title: "Analytics and Tracking",
    body: "Portion Track does not use third-party analytics SDKs, advertising SDKs, cookies, or similar technologies to track users for advertising purposes.",
  },
  {
    title: "Subscriptions and Payments",
    body: "Subscription purchases are processed by Apple through the App Store. Portion Track does not receive or store your payment card or bank account information. Apple may provide Portion Track with subscription and transaction information needed to manage purchases and understand subscription performance.",
  },
  {
    title: "User Control and Data Deletion",
    body: "Food logs, preferences, goals, weight history, and other tracking information stored by Portion Track remain locally on your device. Deleting the app removes this locally stored app data from that device, and Portion Track cannot recover it.\n\nMeal photo scanning is optional. Portion Track does not maintain a library or history of meal photos submitted for analysis.",
  },
  {
    title: "Children's Privacy",
    body: "Portion Track is not intended for children under the age of 13. Portion Track does not knowingly collect personal information directly from children under 13.",
  },
  {
    title: "Your Privacy Rights",
    body: "Depending on where you live, you may have rights under applicable privacy laws. Because Portion Track does not require accounts and stores most user tracking information locally on your device, Portion Track may have limited or no information that can be associated with you or retrieved in response to a request.\n\nIf you have a question about Portion Track's privacy practices or believe you have a privacy right that applies to information processed in connection with the app, you may contact us using the contact information below.",
  },
  {
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated if Portion Track's functionality, service providers, or data practices change. Any updates will be reflected within the app or on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-muted">Portion Track</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              {section.body.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              If you have questions about this privacy policy, you may contact us
              at:
            </p>
            <p className="mt-3 font-semibold text-foreground">Portion Track</p>
            <a
              href="mailto:portiontrack@gmail.com"
              className="mt-1 inline-block text-brand-green hover:underline"
            >
              portiontrack@gmail.com
            </a>
          </section>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-medium text-brand-green hover:underline"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
