"use client";

import { useEffect, useState } from "react";
import { PORTION_TIPS } from "@/data/tips";

export function TipsCarousel() {
  const [index, setIndex] = useState(0);
  const tip = PORTION_TIPS[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PORTION_TIPS.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  function goTo(next: number) {
    const total = PORTION_TIPS.length;
    setIndex(((next % total) + total) % total);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm sm:px-5">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-brand-green-soft hover:text-brand-green"
          aria-label="Previous tip"
        >
          ‹
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg text-white">
            🍃
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
              {tip.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground sm:text-base">
              {tip.body}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-brand-green-soft hover:text-brand-green"
          aria-label="Next tip"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {PORTION_TIPS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-green" : "w-1.5 bg-border hover:bg-muted"
            }`}
            aria-label={`Show tip ${i + 1}`}
            aria-current={i === index ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
}
