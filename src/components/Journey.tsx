import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { NIKAH, Valima, mapsSearchUrl } from "../data/wedding";

export default function Journey() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: "#fffdf6" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#b08d3e]">
            Two cities · One celebration
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#0c2e24] sm:text-4xl">
            From Sira to Davanagere
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-[#0c2e24]/65">
            Nikah in the bride’s hometown on Sunday afternoon. Valima in the
            groom’s hometown on Monday evening. Open Maps for either venue from
            wherever you are travelling.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 grid gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <a
              href={mapsSearchUrl(NIKAH.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#c5a35a]/30 bg-[#fbf6ea] p-6 text-center transition-transform hover:-translate-y-1"
            >
              <p className="font-script text-3xl text-[#0c2e24]">Nikah</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b08d3e]">Sunday</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#0c2e24]/70">
                <MapPin className="h-4 w-4 text-[#6b2d3c]" />
                Sira · HMR Palace
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0c2e24] underline decoration-[#c5a35a] underline-offset-4">
                Open Maps
              </p>
            </a>

            <div className="hidden flex-col items-center sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#c5a35a]" />
              <span className="h-16 w-px bg-gradient-to-b from-[#c5a35a] to-[#6b2d3c] sm:h-px sm:w-16 sm:bg-gradient-to-r" />
              <span className="h-2 w-2 rounded-full bg-[#6b2d3c]" />
            </div>

            <a
              href={mapsSearchUrl(Valima.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#c5a35a]/30 bg-[#0c2e24] p-6 text-center text-[#fbf6ea] transition-transform hover:-translate-y-1"
            >
              <p className="font-script text-3xl">Valima</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#e8d5a3]">Monday</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#e8d5a3]" />
                Davanagere · Imam Ahmed Raza Hall
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8d5a3] underline decoration-[#e8d5a3]/50 underline-offset-4">
                Open Maps
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
