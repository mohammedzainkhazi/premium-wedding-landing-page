import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { Flourish } from "./Ornament";

export default function Envelope({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(onOpened, 520);
  };

  return (
      <motion.div
        key="envelope"
        initial={{ opacity: 1 }}
        exit={{ y: "-110%", opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0c2e24" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30 pattern-gold mix-blend-soft-light"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl animate-pulse-soft"
          style={{ background: "radial-gradient(circle, rgba(197,163,90,0.4), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full blur-3xl animate-pulse-soft"
          style={{
            background: "radial-gradient(circle, rgba(107,45,60,0.45), transparent 70%)",
            animationDelay: "1.4s",
          }}
        />

        <motion.button
          type="button"
          onClick={handleOpen}
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={
            open
              ? { opacity: 0, y: -40, scale: 1.06 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: open ? 0.8 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-4 flex w-full max-w-sm flex-col items-center rounded-[2rem] px-6 py-10 text-center sm:max-w-md sm:px-10 sm:py-14"
          style={{
            background: "linear-gradient(180deg, rgba(251,246,234,0.08), rgba(251,246,234,0.02))",
            border: "1px solid rgba(232,213,163,0.28)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        >
          <p
            className="font-arabic text-2xl leading-relaxed text-[#e8d5a3] sm:text-3xl"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="mt-3 font-display text-[10px] uppercase tracking-[0.42em] text-[#e8d5a3]/70">
            Insha Allah
          </p>
          <Flourish className="mt-5 h-6 w-40 text-[#c5a35a]" />

          <div className="relative mt-6">
            <div className="animate-seal absolute inset-0 rounded-full" />
            <img
              src="/images/monogram.jpg"
              alt="Z & T"
              className="relative h-36 w-36 rounded-full object-cover shadow-xl ring-2 ring-[#c5a35a]/50 sm:h-44 sm:w-44"
            />
          </div>

          <h1 className="mt-6 font-serif text-3xl text-[#fbf6ea] sm:text-4xl">
            Zain <span className="font-script text-gold-shine text-4xl sm:text-5xl">&amp;</span> Tasmiya
          </h1>
          <p className="mt-2 font-serif italic text-[#e8d5a3]/80">
            Mehfil-E-Nikah · 4 October 2026
          </p>

          <span
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0c2e24]"
            style={{ background: "linear-gradient(90deg,#e8d5a3,#c5a35a)" }}
          >
            {open ? "Opening…" : "Tap to open invitation"}
          </span>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#e8d5a3]/45">
            <Music className="h-3 w-3" />
            Best experienced with sound
          </span>
        </motion.button>
      </motion.div>
  );
}
