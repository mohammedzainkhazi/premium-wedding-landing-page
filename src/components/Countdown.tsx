import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NIKAH_DATE } from "../data/wedding";

function getLeft() {
  const diff = Math.max(NIKAH_DATE.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label, light }: { value: number; label: string; light?: boolean }) {
  const pad = String(value).padStart(2, "0");
  return (
    <div className="flex min-w-[4.25rem] flex-1 flex-col items-center sm:min-w-[5.5rem]">
      <div
        className={`relative w-full overflow-hidden rounded-2xl px-2 py-3 text-center sm:py-4 ${
          light ? "glass-ivory" : "glass-dark"
        }`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={pad}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`font-display block text-2xl tabular-nums sm:text-4xl ${
              light ? "text-[#0c2e24]" : "text-[#e8d5a3]"
            }`}
          >
            {pad}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className={`mt-2 text-[9px] font-medium uppercase tracking-[0.28em] sm:text-[10px] ${
          light ? "text-[#0c2e24]/55" : "text-white/55"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ light = false }: { light?: boolean }) {
  const [t, setT] = useState(getLeft);

  useEffect(() => {
    const id = setInterval(() => setT(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full max-w-lg items-stretch justify-center gap-2 sm:gap-3">
      <Digit value={t.days} label="Days" light={light} />
      <Digit value={t.hours} label="Hours" light={light} />
      <Digit value={t.minutes} label="Minutes" light={light} />
      <Digit value={t.seconds} label="Seconds" light={light} />
    </div>
  );
}
