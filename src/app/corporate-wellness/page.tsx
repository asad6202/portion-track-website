import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Corporate Wellness | Portion Track",
  description:
    "Bring simple portion tracking and exercise logging to your workplace wellness program.",
};

const benefits = [
  {
    title: "Privacy-first",
    description:
      "Portion Track is a privacy-first nutrition app — no accounts required and no sharing of personal data.",
    icon: "🔒",
    accent: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Simple portion tracking",
    description:
      "Helps employees build healthier eating habits through simple portion tracking, not complicated logging.",
    icon: "🍽️",
    accent: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Designed for real life",
    description:
      "Built for real life—not dieting. Supports wellness, energy, and long-term healthy habits without calorie counting.",
    icon: "✨",
    accent: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Wellness & energy",
    description:
      "Supports wellness, energy, and long-term healthy habits without calorie counting or sharing personal data.",
    icon: "📈",
    accent: "bg-brand-blue-soft text-brand-blue",
  },
];

export default function CorporateWellnessPage() {
  return (
    <>
      <main>
        <section className="bg-gradient-to-b from-brand-blue-soft to-background py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Corporate Wellness
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Portion Track is a privacy-first nutrition app that helps
                employees build healthier eating habits through simple portion
                tracking. Designed for real life—not dieting—Portion Track
                supports wellness, energy, and long-term healthy habits without
                calorie counting or sharing personal data.
              </p>
              <a
                href="mailto:portiontrack@gmail.com?subject=Corporate%20Wellness%20Inquiry"
                className="mt-8 inline-flex items-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-light"
              >
                Get in touch
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/images/Corporate wellness image 3.png"
                alt="Corporate wellness with Portion Track"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Portion Track is a privacy-first nutrition app that helps employees
              build healthier eating habits through simple portion tracking.
              Designed for real life—not dieting—Portion Track supports wellness,
              energy, and long-term healthy habits without calorie counting or
              sharing personal data.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${benefit.accent}`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-green to-brand-blue p-8 text-center sm:p-10">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Ready to bring Portion Track to your team?
            </h3>
            <p className="mt-3 text-white/90">
              Contact us to learn more about corporate wellness programs.
            </p>
            <a
              href="mailto:portiontrack@gmail.com?subject=Corporate%20Wellness%20Inquiry"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green shadow-sm transition-colors hover:bg-brand-green-soft"
            >
              portiontrack@gmail.com
            </a>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block text-sm font-medium text-brand-green hover:underline"
          >
            ← Back to home
          </Link>
        </section>
      </main>
    </>
  );
}
