import Image from "next/image";
import Link from "next/link";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PowerfulFeaturesGrid } from "@/components/PowerfulFeaturesGrid";
import { StoreBadges } from "@/components/StoreBadges";

const features = [
  {
    title: "Portion Tracking",
    description:
      "Snap a photo or tap to log portions on your plate — no math, no measuring cups, just simple balance.",
    icon: "🍽️",
    accent: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Exercise Tracking",
    description:
      "Log workouts alongside your meals to build a complete picture of your wellness habits. NEW!",
    icon: "💪",
    accent: "bg-brand-blue-soft text-brand-blue",
    badge: "NEW",
  },
  {
    title: "No Calorie Counting",
    description:
      "Focus on portions and patterns, not numbers. Eat mindfully without the stress of calorie math.",
    icon: "✨",
    accent: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Corporate Wellness",
    description:
      "Empower your team with a simple, sustainable approach to healthy eating and active living.",
    icon: "🏢",
    accent: "bg-brand-blue-soft text-brand-blue",
    href: "/corporate-wellness",
  },
];

const steps = [
  {
    number: "1",
    title: "Snap or tap",
    description:
      "Take a photo of your meal or simply tap to add portions — it takes seconds, not minutes.",
  },
  {
    number: "2",
    title: "Track your plate",
    description:
      "See what's on your plate at a glance. Build awareness without counting every calorie.",
  },
  {
    number: "3",
    title: "Build lasting habits",
    description:
      "Watch your progress over time and develop healthy eating patterns that actually stick.",
  },
];

const testimonials = [
  {
    title: "So easy!",
    author: "JuliePaquette",
    quote:
      "I love this app! It's so easy to use and so user-friendly.",
  },
  {
    title: "Simple Tracking",
    author: "FeldyJones",
    quote: "Love how easy it is!",
  },
  {
    title: "Helps me focus on my eating habits",
    author: "Julia.rose639",
    quote:
      "If you are like me you forget to eat sometimes or forget what you had earlier. I enjoy this app to be part of my cooking and eating ritual.",
  },
  {
    title: "Easiest Food Tracker Ever",
    author: "Baja Tex",
    quote:
      "I Love that I don't have to count calories with this app to keep track of my food intake!",
  },
];

export default function Home() {
  return (
    <>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-soft via-background to-background">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green-soft/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-blue-soft/80 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full bg-brand-green-soft px-4 py-1.5 text-sm font-medium text-brand-green">
                Now with Exercise Tracking
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Track portions, not calories
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Portion Track makes healthy eating simple. Log meal portions with a
                tap, skip the calorie counting, and now track exercise too — all in
                one calm, easy-to-use app.
              </p>
              <StoreBadges className="mt-5" />
              <div className="mt-8 flex items-center gap-8 max-w-md">
                <div>
                  <p className="text-3xl font-semibold">4.8</p>
                  <p className="mt-1 text-xs">App Store rating</p>
                </div>
                <div className="h-10 w-px bg-gray-300" />
                <div>
                  <p className="text-3xl font-semibold">120k+</p>
                  <p className="mt-1 text-xs">Portions logged</p>
                </div>
               
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              {/* <PhoneMockup
                src="/assets/images/Meal Scan Iphone.png"
                alt="Portion Track meal scan on iPhone"
                priority
              /> */}
                <Image
        src="/assets/images/app-dial.jpg"
        alt="App screenshot"
        width={442}
        height={1024}
        className="mx-auto h-auto w-full max-h-[35rem]"
        priority
      />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to eat well
            </h2>
            <p className="mt-4 text-lg text-muted">
              Simple tools for sustainable wellness — no rigid rules, no overwhelming
              data.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const card = (
                <article
                  key={feature.title}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {feature.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-brand-blue px-2.5 py-0.5 text-xs font-semibold text-white">
                      {feature.badge}
                    </span>
                  )}
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${feature.accent}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  {feature.href && (
                    <span className="mt-4 text-sm font-medium text-brand-green group-hover:underline">
                      Learn more →
                    </span>
                  )}
                </article>
              );

              return feature.href ? (
                <Link key={feature.title} href={feature.href} className="block">
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>
        </section>

        {/* Powerful Features Grid Section */}
        <PowerfulFeaturesGrid />

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-muted">
              Three simple steps to better eating habits.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Our Mission */}
        <section
          id="our-mission"
          className="border-y border-border bg-card py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our mission
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We believe healthy eating shouldn&apos;t feel like a chore. Portion
                Track was built for people who want to feel good about what they eat
                — without obsessive calorie counting or complicated rules.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Our goal is to help you build simple, lasting habits around portions
                and movement, so wellness becomes a natural part of your daily
                rhythm.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border border-border">
              <Image
                src="/assets/images/Balanced Plate Image.png"
                alt="Balanced healthy portion meal plate"
                width={800}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by real users
            </h2>
            <p className="mt-4 text-lg text-muted">
              See what people are saying about Portion Track.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-1 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base font-semibold text-foreground">
                  &ldquo;{item.title}&rdquo;
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-brand-green">
                  — {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-brand-green to-brand-blue py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start building better habits today
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Download Portion Track free and discover a simpler way to eat well.
            </p>
            <StoreBadges className="mt-8 justify-center" />
          </div>
        </section>
      </main>

    </>
  );
}
