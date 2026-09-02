import type { Metadata } from "next";
import Link from "next/link";
import { StoreBadges } from "@/components/StoreBadges";

export const metadata: Metadata = {
  title: "Our Mission | Portion Track",
  description:
    "Discover healthy eating habits with Portion Track. Learn sustainable eating and balanced portions to create healthier habits that last!",
  openGraph: {
    title: "Our Mission | Portion Track",
    description:
      "The Nutrition App to Build Healthy Eating Habits One Portion at a Time.",
    url: "https://portiontrack.com/our-mission",
    siteName: "Portion Track",
    type: "website",
  },
};

const principles = [
  {
    title: "Privacy Matters",
    description:
      "User privacy is a core value. We collect only the information necessary to provide a great experience and respect our users' trust. No required accounts. No unnecessary personal information. Privacy is a feature—not an afterthought.",
    icon: "🔒",
    accent: "bg-brand-green-soft text-brand-green border-brand-green/20",
    badge: "Privacy-First",
  },
  {
    title: "Every Feature is Core",
    description:
      "Every feature is part of the core Portion Track experience. We will never build premium feature tiers or charge extra to unlock new functionality. Every feature provides meaningful value, strengthens the core experience, and helps users build healthier habits.",
    icon: "⭐️",
    accent: "bg-amber-50 text-amber-600 border-amber-200",
    badge: "Transparent Pricing",
  },
  {
    title: "Portions, Not Calories",
    description:
      "We believe balanced portions create healthier habits without the burden of calorie counting. Small, consistent changes create lasting success, and healthy eating should fit into everyday life—not just a diet.",
    icon: "🥗",
    accent: "bg-brand-green-soft text-brand-green border-brand-green/20",
    badge: "Balanced Eating",
  },
  {
    title: "Simplicity First",
    description:
      "Healthy eating should be easy to understand, simple to follow, and enjoyable. Every feature should reduce friction, minimize unnecessary steps, and make the experience easier—not more complicated.",
    icon: "⚡️",
    accent: "bg-brand-blue-soft text-brand-blue border-brand-blue/20",
    badge: "Zero Friction",
  },
  {
    title: "Progress, Not Perfection",
    description:
      "We encourage better choices—not guilt or judgment. Every meal is an opportunity to move forward. Portion Track supports real people with real schedules, real families, and real meals.",
    icon: "🌱",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badge: "Sustainable Habit",
  },
];

export default function OurMissionPage() {
  return (
    <>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-brand-green-soft/60 via-background to-background py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green">
              <span>🌱</span> Our Mission & Vision
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Building Healthy Eating Habits{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
                One Portion at a Time
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Portion Track helps people build healthier eating habits through
              balanced portions instead of calorie counting. We believe healthy
              eating should be simple, realistic, sustainable, and enjoyable.
            </p>

            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Our Mission Card */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-green/20 bg-card p-8 shadow-sm transition-all hover:shadow-md sm:p-10">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-brand-green-soft/50 blur-2xl pointer-events-none" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-soft text-3xl text-brand-green">
                🎯
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-3 text-lg font-medium text-brand-green">
                Help people build healthier habits, one portion at a time.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Portion Track helps people build healthier eating habits through
                balanced portions instead of calorie counting. We believe healthy
                eating should be simple, realistic, sustainable, and enjoyable.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/20 bg-card p-8 shadow-sm transition-all hover:shadow-md sm:p-10">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-brand-blue-soft/50 blur-2xl pointer-events-none" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-soft text-3xl text-brand-blue">
                🚀
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
                Our Vision
              </h2>
              <p className="mt-3 text-lg font-medium text-brand-blue">
                Empower lifelong healthy habits without calorie counting guilt.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                To empower people around the world to build lifelong healthy eating
                habits without the complexity, guilt, or restrictions of traditional
                diets. We believe everyone deserves access to simple, effective
                nutrition tools at a fair and transparent price.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="bg-gradient-to-b from-background via-brand-blue-soft/30 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="rounded-full bg-brand-blue-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Guiding Values
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Our Core Principles
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The values that guide everything we design and build at Portion Track.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p, idx) => (
                <article
                  key={p.title}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx === 0 || idx === 1 ? "lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl bg-background shadow-xs border border-border">
                        {p.icon}
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${p.accent}`}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue p-8 text-center text-white shadow-xl sm:p-12">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="text-2xl font-extrabold sm:text-4xl">
                Start Building Healthy Eating Habits Today
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                Join thousands of users simplifying their nutrition through balanced
                portions, exercise tracking, and no calorie counting.
              </p>
              <div className="mt-8 flex justify-center">
                <StoreBadges />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-brand-green hover:underline"
            >
              <span>←</span> Back to home
            </Link>
          </div>
        </section>
      </main>
    
    </>
  );
}
