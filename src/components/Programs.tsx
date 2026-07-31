"use client";

import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import { Reveal } from "./Reveal";

export default function Programs() {
  return (
    <section id="programs" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Programs
          </span>
          <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            Pick your fight.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-charcoal-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-soft via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-3xl text-white">
                      {program.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-charcoal-deep">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white-dim">
                    {program.description}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-lime">
                    <Clock className="h-3.5 w-3.5" />
                    {program.duration}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
