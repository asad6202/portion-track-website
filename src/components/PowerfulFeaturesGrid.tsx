"use client";

import Image from "next/image";
import { useState } from "react";

export function PowerfulFeaturesGrid() {
  const [proteinTarget, setProteinTarget] = useState(3);
  const [carbsTarget, setCarbsTarget] = useState(2);
  const [fatsTarget, setFatsTarget] = useState(2);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background via-slate-50/80 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
            Powerful Features to Help You Succeed
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Simple, intuitive tools to track your portions, build lasting habits, and reach your goals.
          </p>
        </div>

        {/* 3x2 Grid Box Container */}
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {/* --- Card 1: Meal Scanning & Instant Analysis --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex items-center justify-center">
                {/* Scanner Frame */}
                <div className="relative w-44 h-44 rounded-2xl bg-slate-800 p-2 shadow-lg flex flex-col justify-between overflow-hidden">
                  <Image
                    src="/assets/images/Meal Scan Output Iphone.png"
                    alt="Meal Scanning"
                    fill
                    className="object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Camera Reticle corner overlays */}
                  <div className="absolute inset-3 border-2 border-white/60 rounded-lg border-dashed pointer-events-none" />
                  
                  {/* Scan Badge Overlay */}
                  <div className="absolute top-2 right-2 bg-rose-600 text-white p-1.5 rounded-full shadow-md animate-pulse">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                </div>

                {/* Left Floating Portion Pill */}
                <div className="absolute -left-2 top-4 bg-white/95 backdrop-blur-xs rounded-xl p-2 shadow-md border border-slate-100 text-[11px] space-y-1 z-10 w-28">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                    <span>Protein: <strong className="text-slate-900">2</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Veggies: <strong className="text-slate-900">2</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>Carbs: <strong className="text-slate-900">1</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Fats: <strong className="text-slate-900">1</strong></span>
                  </div>
                </div>

                {/* Right Floating Balanced Meal Banner */}
                <div className="absolute -right-1 bottom-4 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 shadow-md border border-slate-100 text-[11px] font-semibold text-slate-800 z-10">
                  <span className="text-emerald-600 font-bold block">✓ Balanced Meal!</span>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden flex">
                    <div className="w-1/3 bg-emerald-500" />
                    <div className="w-1/3 bg-amber-400" />
                    <div className="w-1/3 bg-rose-500" />
                  </div>
                </div>
              </div>
              
              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Meal Scanning & Instant Analysis
              </h3>
            </div>

            {/* --- Card 2: Healthy Portion Guidance --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex items-center justify-center">
                {/* Plate Illustration */}
                <div className="relative w-44 h-44 rounded-full border-2 border-slate-100 bg-white shadow-lg p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 bg-slate-200">
                    <div className="bg-emerald-500 flex flex-col items-center justify-center text-white text-xs font-bold shadow-xs">
                      <span>Veggies</span>
                      <span className="text-[10px] opacity-80">🥦 🥗</span>
                    </div>
                    <div className="bg-rose-600 flex flex-col items-center justify-center text-white text-xs font-bold shadow-xs">
                      <span>Protein</span>
                      <span className="text-[10px] opacity-80">🥩 🍗</span>
                    </div>
                    <div className="bg-amber-400 flex flex-col items-center justify-center text-white text-xs font-bold shadow-xs">
                      <span>Fats</span>
                      <span className="text-[10px] opacity-80">🥑 🫒</span>
                    </div>
                    <div className="bg-indigo-600 flex flex-col items-center justify-center text-white text-xs font-bold shadow-xs">
                      <span>Carbs</span>
                      <span className="text-[10px] opacity-80">🍚 🥔</span>
                    </div>
                  </div>

                  {/* Top Right Green Checkmark Badge */}
                  <div className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full p-2 shadow-md border-2 border-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Healthy Portion Guidance
              </h3>
            </div>

            {/* --- Card 3: Custom Portion Targets --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex flex-col justify-center gap-4">
                {/* Protein Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span className="text-rose-700">Protein</span>
                    <span>{proteinTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={proteinTarget}
                    onChange={(e) => setProteinTarget(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>

                {/* Carbs Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span className="text-indigo-700">Carbs</span>
                    <span>{carbsTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={carbsTarget}
                    onChange={(e) => setCarbsTarget(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>

                {/* Fats Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span className="text-amber-700">Fats</span>
                    <span>{fatsTarget} Portions</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={fatsTarget}
                    onChange={(e) => setFatsTarget(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Custom Portion Targets
              </h3>
            </div>
          </div>

          {/* Row Divider */}
          <div className="border-t border-border/60" />

          <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {/* --- Card 4: Weight Tracking & Charts --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex items-center justify-center gap-3">
                {/* Weighing Scale Icon */}
                <div className="w-24 h-28 bg-slate-700 rounded-2xl p-2.5 text-white flex flex-col items-center shadow-md">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-500 bg-white text-slate-900 flex items-center justify-center font-extrabold text-xs">
                    72.5
                  </div>
                  <span className="text-[10px] mt-2 text-slate-300 uppercase tracking-widest font-semibold">kg / lbs</span>
                </div>

                {/* Phone Chart Graphic */}
                <div className="w-28 h-36 bg-slate-900 rounded-2xl p-2 shadow-lg flex flex-col justify-between border border-slate-700">
                  <span className="text-[10px] font-bold text-emerald-400">Weight Trend</span>
                  <div className="w-full flex-1 flex items-end justify-between gap-1 pt-4 pb-1 px-1">
                    <div className="w-3 bg-emerald-500 rounded-t h-[80%]" />
                    <div className="w-3 bg-emerald-500 rounded-t h-[70%]" />
                    <div className="w-3 bg-emerald-500 rounded-t h-[60%]" />
                    <div className="w-3 bg-emerald-400 rounded-t h-[45%]" />
                    <div className="w-3 bg-emerald-300 rounded-t h-[35%]" />
                  </div>
                  <span className="text-[9px] text-slate-400 text-center">-3.2 lbs total</span>
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Weight Tracking & Charts
              </h3>
            </div>

            {/* --- Card 5: Progress History & Trends --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex items-center justify-center gap-3">
                {/* Clipboard */}
                <div className="relative w-32 h-40 bg-amber-50 rounded-xl border-2 border-amber-200 p-3 shadow-md flex flex-col justify-between">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-700 rounded-b-md" />
                  <span className="text-xs font-bold text-slate-800 mt-2">Daily Progress</span>
                  
                  {/* Mini Bar Chart */}
                  <div className="space-y-1.5">
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-emerald-500" />
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-rose-500" />
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-amber-500" />
                    </div>
                  </div>

                  <div className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5 text-center">
                    Goal Achieved 🎉
                  </div>
                </div>

                {/* Mini Calendar Card with Checkmark */}
                <div className="w-24 h-28 bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden flex flex-col">
                  <div className="bg-rose-600 text-white text-[10px] font-bold py-1 text-center uppercase tracking-wider">
                    AUGUST
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
                      ✓
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-foreground">
                Progress History & Trends
              </h3>
            </div>

            {/* --- Card 6: Daily Reminders --- */}
            <div className="group flex flex-col items-center justify-between p-6 sm:p-8 hover:bg-slate-50/50 transition-colors">
              <div className="relative w-full max-w-[280px] h-52 flex items-center justify-center gap-3">
                {/* Alarm Clock */}
                <div className="relative w-24 h-24 rounded-full border-4 border-rose-600 bg-white shadow-md flex items-center justify-center">
                  {/* Twin Bells */}
                  <div className="absolute -top-3 -left-1 w-6 h-6 rounded-full bg-rose-700 border-2 border-white" />
                  <div className="absolute -top-3 -right-1 w-6 h-6 rounded-full bg-rose-700 border-2 border-white" />
                  {/* Clock Hands */}
                  <div className="w-1 h-6 bg-slate-800 rounded-full origin-bottom transform -rotate-45" />
                  <div className="w-1.5 h-4 bg-rose-600 rounded-full origin-bottom transform rotate-45 absolute" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 z-10" />
                </div>

                {/* Phone Notification Badge */}
                <div className="w-28 h-36 bg-slate-900 rounded-2xl p-2.5 shadow-lg flex flex-col justify-center border border-slate-800">
                  <div className="bg-rose-600 text-white rounded-xl p-2 text-center shadow-md animate-bounce">
                    <span className="block text-[10px] font-bold">🔔 Dinner Time!</span>
                    <span className="block text-[8px] opacity-90 mt-0.5">Time to log your portion</span>
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
