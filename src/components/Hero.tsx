import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import Countdown from "./Countdown";
import { Flourish, Crescent } from "./Ornament";
import { NIKAH, mapsSearchUrl } from "../data/wedding";

export default function Hero({ ready = true }: { ready?: boolean }) {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.85, delay: ready ? delay : 0, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-28"
      style={{ backgroundColor: "#071912" }}
    >
      <img
        src="/images/islamic-arch.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071912]/70 via-[#0c2e24]/55 to-[#071912]" />
      <div className="absolute inset-0 opacity-25 pattern-gold mix-blend-overlay" />

      <div
        className="pointer-events-none absolute left-[-20%] top-16 h-72 w-72 rounded-full blur-3xl animate-pulse-soft"
        style={{ background: "radial-gradient(circle, rgba(197,163,90,0.35), transparent 70%)" }}
      />
      <Crescent className="pointer-events-none absolute right-[12%] top-[22%] h-8 w-8 animate-float-y text-[#e8d5a3]/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center">
        <motion.p
          {...fade(0.05)}
          className="font-arabic text-[22px] leading-relaxed text-[#e8d5a3] sm:text-3xl"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>
        <motion.p
          {...fade(0.15)}
          className="mt-3 font-display text-[10px] uppercase tracking-[0.42em] text-[#e8d5a3]/75 sm:text-[11px]"
        >
          In the name of Allah, the Most Beneficent, the Most Merciful
        </motion.p>

        <motion.div {...fade(0.25)}>
          <Flourish className="mt-5 h-7 w-44 text-[#c5a35a]" />
        </motion.div>

        <motion.p
          {...fade(0.32)}
          className="mt-5 font-script text-3xl text-[#e8d5a3] sm:text-4xl"
        >
          Insha Allah
        </motion.p>

        <motion.h1
          {...fade(0.4)}
          className="mt-3 font-serif text-[2.6rem] leading-[1.1] text-[#fbf6ea] sm:text-6xl md:text-7xl"
        >
          K. Mohammed{" "}
          <span className="italic">Zain</span>
          <span className="font-script mx-2 block text-5xl text-gold-shine sm:inline sm:text-7xl">
            &amp;
          </span>
          Mohammadi{" "}
          <span className="italic">Tasmiya</span>
        </motion.h1>

        <motion.p
          {...fade(0.52)}
          className="mt-5 max-w-md font-serif text-base italic text-white/70 sm:text-lg"
        >
          With hearts full of gratitude, our families invite you to bless this
          union with your dua.
        </motion.p>

        <motion.div
          {...fade(0.62)}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/75"
        >
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-[#e8d5a3]" />
            Sunday, 4 Oct 2026 · 12:35 PM
          </span>
          <span className="hidden text-[#e8d5a3]/50 sm:inline">✦</span>
          <a
            href={mapsSearchUrl(NIKAH.mapsQuery)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 underline decoration-[#c5a35a]/40 underline-offset-4 transition-colors hover:text-[#e8d5a3]"
          >
            <MapPin className="h-4 w-4 text-[#e8d5a3]" />
            HMR Palace, Sira
          </a>
        </motion.div>

        <motion.div {...fade(0.72)} className="mt-9 w-full">
          <p className="mb-3 font-display text-[10px] uppercase tracking-[0.32em] text-[#e8d5a3]/70">
            Countdown to Nikah
          </p>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </motion.div>

        <motion.div
          {...fade(0.85)}
          className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#nikah"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#0c2e24] shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ background: "linear-gradient(90deg,#e8d5a3,#c5a35a)" }}
          >
            Nikah details
          </a>
          <a
            href="#Valima"
            className="inline-flex items-center justify-center rounded-full border border-[#e8d5a3]/35 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#fbf6ea] transition-colors hover:bg-white/5"
          >
            Valima details
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-9 w-5 rounded-full border border-white/30 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#e8d5a3]" />
        </div>
      </motion.div>
    </section>
  );
}
