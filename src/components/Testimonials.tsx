"use client";

import { Quote } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Dropped 18 lbs and actually kept it off because the coaches adjust the plan instead of just yelling at you to go harder.",
    name: "Priya S.",
    role: "Member since 2024",
  },
  {
    quote:
      "The boxing classes are the best cardio I've ever done, full stop. I look forward to 6am now, which is insane to say.",
    name: "Tomas R.",
    role: "Member since 2023",
  },
  {
    quote:
      "First gym where a coach actually noticed my squat form was off and fixed it before it became an injury.",
    name: "Lena K.",
    role: "Member since 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-charcoal-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Results
          </span>
          <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            Real members. Real numbers.
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-charcoal p-8"
            >
              <div>
                <Quote className="h-6 w-6 text-lime-deep" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-white-dim">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-line pt-5">
                <p className="font-display text-xl text-white">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.1em] text-white-dim/60">
                  {t.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
