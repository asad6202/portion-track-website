"use client";

import Image from "next/image";
import { useState } from "react";
import { BalancedPlateDial } from "@/components/BalancedPlateDial";

export function PowerfulFeaturesGrid() {
  const [proteinTarget, setProteinTarget] = useState(3);
  const [carbsTarget, setCarbsTarget] = useState(2);
  const [fatsTarget, setFatsTarget] = useState(2);

  return (
    <section className="bg-gradient-to-b from-background via-brand-green-soft/25 to-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
            Powerful Features to Help You Succeed
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Simple, intuitive tools to track your portions, build lasting habits, and reach your goals.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xl shadow-brand-green/5">
          <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] items-center justify-center">
                <div className="relative flex h-44 w-44 flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-2 shadow-lg">
                  <Image
                    src="/assets/images/Meal Scan Output Iphone.png"
                    alt="Meal Scanning"
                    fill
                    className="rounded-xl object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-3 rounded-lg border-2 border-dashed border-white/60" />
                  <div className="absolute right-2 top-2 rounded-full bg-brand-green p-1.5 text-white shadow-md">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute -left-2 top-4 z-10 w-28 space-y-1 rounded-xl border border-border bg-white/95 p-2 text-[11px] shadow-md backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 font-medium text-muted">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-plate-protein ring-1 ring-foreground/10" />
                    <span>Protein: <strong className="text-foreground">2</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-muted">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-plate-veggies" />
                    <span>Veggies: <strong className="text-foreground">2</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-muted">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-plate-carbs" />
                    <span>Carbs: <strong className="text-foreground">1</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-muted">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-plate-fats" />
                    <span>Fats: <strong className="text-foreground">1</strong></span>
                  </div>
                </div>

                <div className="absolute -right-1 bottom-4 z-10 rounded-xl border border-border bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-md backdrop-blur-xs">
                  <span className="block font-bold text-brand-green">✓ Balanced Meal!</span>
                  <div className="mt-1 flex h-1.5 w-24 overflow-hidden rounded-full bg-border">
                    <div className="w-1/3 bg-plate-veggies" />
                    <div className="w-1/3 bg-plate-protein" />
                    <div className="w-1/3 bg-plate-carbs" />
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Meal Scanning & Instant Analysis
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] items-center justify-center">
                <BalancedPlateDial className="max-w-[220px]" />
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Healthy Portion Guidance
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] flex-col justify-center gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-foreground">
                    <span className="text-brand-green">Protein</span>
                    <span>{proteinTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={proteinTarget}
                    onChange={(e) => setProteinTarget(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer rounded-lg accent-brand-green"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-foreground">
                    <span className="text-plate-carbs">Carbs</span>
                    <span>{carbsTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={carbsTarget}
                    onChange={(e) => setCarbsTarget(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer rounded-lg accent-plate-carbs"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-foreground">
                    <span className="text-brand-blue">Fats</span>
                    <span>{fatsTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={fatsTarget}
                    onChange={(e) => setFatsTarget(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer rounded-lg accent-brand-blue"
                  />
                </div>
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Custom Portion Targets
              </h3>
            </div>
          </div>

          <div className="border-t border-border/60" />

          <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] items-center justify-center gap-3">
                <div className="flex h-28 w-24 flex-col items-center rounded-2xl bg-foreground p-2.5 text-white shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-brand-green bg-white text-xs font-extrabold text-foreground">
                    72.5
                  </div>
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/70">kg / lbs</span>
                </div>
                <div className="flex h-36 w-28 flex-col justify-between rounded-2xl border border-brand-green/30 bg-foreground p-2 shadow-lg">
                  <span className="text-[10px] font-bold text-brand-green-light">Weight Trend</span>
                  <div className="flex flex-1 items-end justify-between gap-1 px-1 pb-1 pt-4">
                    <div className="h-[80%] w-3 rounded-t bg-brand-green" />
                    <div className="h-[70%] w-3 rounded-t bg-brand-green" />
                    <div className="h-[60%] w-3 rounded-t bg-brand-green-light" />
                    <div className="h-[45%] w-3 rounded-t bg-plate-veggies" />
                    <div className="h-[35%] w-3 rounded-t bg-plate-fats" />
                  </div>
                  <span className="text-center text-[9px] text-white/60">-3.2 lbs total</span>
                </div>
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Weight Tracking & Charts
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] items-center justify-center gap-3">
                <div className="relative flex h-40 w-32 flex-col justify-between rounded-xl border-2 border-brand-green/20 bg-brand-green-soft p-3 shadow-md">
                  <div className="absolute -top-3 left-1/2 h-4 w-12 -translate-x-1/2 rounded-b-md bg-foreground" />
                  <span className="mt-2 text-xs font-bold text-foreground">Daily Progress</span>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                      <div className="h-full w-4/5 bg-plate-veggies" />
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                      <div className="h-full w-full bg-plate-protein" />
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                      <div className="h-full w-3/4 bg-plate-carbs" />
                    </div>
                  </div>
                  <div className="rounded bg-white px-1.5 py-0.5 text-center text-[10px] font-semibold text-brand-green">
                    Goal Achieved 🎉
                  </div>
                </div>
                <div className="flex h-28 w-24 flex-col overflow-hidden rounded-xl border border-border bg-white shadow-md">
                  <div className="bg-brand-green py-1 text-center text-[10px] font-bold uppercase tracking-wider text-white">
                    AUGUST
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-soft text-xl font-bold text-brand-green">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Progress History & Trends
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-between p-6 transition-colors hover:bg-brand-green-soft/20 sm:p-8">
              <div className="relative flex h-52 w-full max-w-[280px] items-center justify-center gap-3">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-brand-green bg-white shadow-md">
                  <div className="absolute -left-1 -top-3 h-6 w-6 rounded-full border-2 border-white bg-brand-green-light" />
                  <div className="absolute -right-1 -top-3 h-6 w-6 rounded-full border-2 border-white bg-brand-green-light" />
                  <div className="h-6 w-1 origin-bottom -rotate-45 rounded-full bg-foreground" />
                  <div className="absolute h-4 w-1.5 origin-bottom rotate-45 rounded-full bg-brand-green" />
                  <div className="z-10 h-2.5 w-2.5 rounded-full bg-foreground" />
                </div>
                <div className="flex h-36 w-28 flex-col justify-center rounded-2xl border border-brand-green/20 bg-foreground p-2.5 shadow-lg">
                  <div className="rounded-xl bg-brand-green p-2 text-center text-white shadow-md">
                    <span className="block text-[10px] font-bold">🔔 Dinner Time!</span>
                    <span className="mt-0.5 block text-[8px] opacity-90">Time to log your portion</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Daily Reminders
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
