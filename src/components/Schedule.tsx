"use client";

import { Reveal } from "./Reveal";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

const ROWS = [
  { time: "6:00 AM", classes: ["Strength", "HIIT", "Strength", "HIIT", "Strength", "Boxing"] },
  { time: "9:00 AM", classes: ["Mobility", "—", "Mobility", "—", "Mobility", "HIIT"] },
  { time: "5:30 PM", classes: ["HIIT", "Boxing", "HIIT", "Boxing", "HIIT", "—"] },
  { time: "7:00 PM", classes: ["Boxing", "Strength", "Boxing", "Strength", "Open Gym", "—"] },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-charcoal-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-lime">
            Class Schedule
          </span>
          <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.95] text-white sm:text-6xl">
            No excuses. Every day.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto sm:mt-20">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="pb-4 pr-4 text-xs font-bold uppercase tracking-[0.1em] text-white-dim">
                    Time
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="pb-4 px-4 text-xs font-bold uppercase tracking-[0.1em] text-white-dim"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.time} className="border-b border-line/60">
                    <td className="py-5 pr-4 font-display text-lg text-lime">
                      {row.time}
                    </td>
                    {row.classes.map((cls, i) => (
                      <td key={i} className="px-4 py-5 text-sm text-white-dim">
                        {cls === "—" ? (
                          <span className="text-white-dim/30">—</span>
                        ) : (
                          <span className="font-semibold text-white">
                            {cls}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
