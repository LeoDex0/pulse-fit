"use client";

import { Check } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import clsx from "clsx";

const PLANS = [
  {
    name: "Drop-In",
    price: "$25",
    period: "/ class",
    features: ["Any single class", "No commitment", "Gear rental included"],
    highlighted: false,
  },
  {
    name: "Unlimited",
    price: "$129",
    period: "/ month",
    features: [
      "Unlimited classes",
      "All programs included",
      "Free guest pass monthly",
      "Priority class booking",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$229",
    period: "/ month",
    features: [
      "Everything in Unlimited",
      "2x personal training sessions",
      "Custom nutrition check-ins",
      "Recovery room access",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Membership
          </span>
          <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            Pick a plan. Show up.
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
          {PLANS.map((plan) => (
            <StaggerItem
              key={plan.name}
              className={clsx(
                "flex flex-col rounded-2xl border p-8",
                plan.highlighted
                  ? "border-lime bg-charcoal-soft shadow-[0_0_60px_-15px_rgba(195,245,58,0.35)]"
                  : "border-line bg-charcoal-soft",
              )}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-lime px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-charcoal-deep">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl text-white">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-white-dim">{plan.period}</span>
              </p>
              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-white-dim"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={clsx(
                  "mt-8 rounded-full px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide transition-colors",
                  plan.highlighted
                    ? "bg-lime text-charcoal-deep hover:bg-lime-bright"
                    : "border border-white/25 text-white hover:border-lime hover:text-lime",
                )}
              >
                Choose Plan
              </button>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
