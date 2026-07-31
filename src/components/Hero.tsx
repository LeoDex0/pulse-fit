"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Flame } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MARQUEE_ITEMS = ["Strength", "HIIT", "Boxing", "Mobility", "Results"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) lenis?.scrollTo(el as HTMLElement, { offset: -30, duration: 1.2 });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal-deep"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-16">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80"
          alt="Athlete lifting weights in a dark gym"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55 grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.75)_0%,rgba(5,5,5,0.35)_40%,rgba(5,5,5,0.9)_100%)]" />
      <div
        aria-hidden
        className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-lime/20 blur-[100px]"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-24 sm:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-lime/40 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-lime"
        >
          <Flame className="h-3.5 w-3.5" />
          Downtown&apos;s #1 Rated Gym
        </motion.div>

        <h1 className="font-display text-[4.5rem] leading-[0.85] text-white sm:text-[8rem] lg:text-[10rem]">
          {["TRAIN", "HARDER."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE }}
              className={clsxLine(i)}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          className="mt-6 max-w-md text-balance text-base text-white-dim sm:text-lg"
        >
          Strength, conditioning and boxing programs built by coaches who
          actually track your progress. No fluff, no fads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#pricing")}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-charcoal-deep transition-colors hover:bg-lime-bright"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#programs")}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-lime hover:text-lime"
          >
            See Programs
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="relative z-10 border-t border-line bg-charcoal-deep/70 py-4 backdrop-blur-sm">
        <div className="no-scrollbar flex w-full overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-8 font-display text-2xl tracking-wide text-white-dim"
                >
                  {item}
                  <span className="h-2 w-2 rounded-full bg-lime" />
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function clsxLine(i: number) {
  return i === 1 ? "block text-lime" : "block";
}
