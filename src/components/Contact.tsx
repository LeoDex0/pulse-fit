"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal-soft py-24 sm:py-32">
      <div
        aria-hidden
        className="animate-pulse-slow pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-lime/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Get Started
          </span>
          <h2 className="mt-3 max-w-md font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            Your first class is on us.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white-dim">
            Book a free trial class and meet the coaching team before you
            commit to anything.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:hello@pulsefit.com"
              className="flex items-center gap-3 text-sm text-white-dim transition-colors hover:text-lime"
            >
              <Mail className="h-4 w-4 text-lime" />
              hello@pulsefit.com
            </a>
            <a
              href="tel:+13105550123"
              className="flex items-center gap-3 text-sm text-white-dim transition-colors hover:text-lime"
            >
              <Phone className="h-4 w-4 text-lime" />
              +1 (310) 555-0123
            </a>
            <span className="flex items-center gap-3 text-sm text-white-dim">
              <MapPin className="h-4 w-4 text-lime" />
              442 Industry Row, Los Angeles, CA
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-5 rounded-2xl border border-line bg-charcoal p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white-dim">
                  Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white-dim/40 focus:border-lime"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white-dim">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="jane@email.com"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white-dim/40 focus:border-lime"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-white-dim">
                Interested In
              </span>
              <input
                type="text"
                placeholder="Strength, HIIT, boxing..."
                className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white-dim/40 focus:border-lime"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-charcoal-deep transition-colors hover:bg-lime-bright"
            >
              {sent ? "Request Sent" : "Book Free Trial"}
              {!sent && <ArrowRight className="h-4 w-4" strokeWidth={3} />}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
