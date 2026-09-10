import Reveal from "./Reveal";
import { NIKAH, Valima } from "../data/wedding";

export default function DatesStrip() {
  return (
    <section className="relative overflow-hidden py-14" style={{ backgroundColor: "#0c2e24" }}>
      <div className="absolute inset-0 opacity-20 pattern-gold mix-blend-soft-light" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between sm:gap-4">
        <Reveal className="text-center">
          <p className="font-script text-4xl text-[#e8d5a3]">Nikah</p>
          <p className="mt-1 font-display text-5xl text-[#fbf6ea]">{NIKAH.dateShort.split(" · ")[0]}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/55">
            10-2026 · {NIKAH.day}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <img
            src="/images/monogram.jpg"
            alt="Z & T"
            className="h-24 w-24 rounded-full object-cover ring-2 ring-[#c5a35a]/50"
          />
        </Reveal>

        <Reveal delay={0.12} className="text-center">
          <p className="font-script text-4xl text-[#e8d5a3]">Valima</p>
          <p className="mt-1 font-display text-5xl text-[#fbf6ea]">{Valima.dateShort.split(" · ")[0]}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/55">
            10-2026 · {Valima.day}
          </p>
        </Reveal>
      </div>
      <p className="relative mt-8 text-center font-serif italic text-[#e8d5a3]/80">
        Cordially invite you &amp; your family
      </p>
    </section>
  );
}
