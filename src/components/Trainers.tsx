"use client";

import Image from "next/image";
import { TRAINERS } from "@/data/trainers";
import { Reveal } from "./Reveal";

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Coaching Team
          </span>
          <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            Coaches who track results.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3">
          {TRAINERS.map((trainer, i) => (
            <Reveal key={trainer.name} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-sm font-semibold text-lime">
                    {trainer.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
