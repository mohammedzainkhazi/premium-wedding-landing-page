import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "../data/wedding";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#f4ead6" }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#b08d3e]">
            For our guests
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#0c2e24] sm:text-5xl">
            A few helpful notes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className="overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: isOpen ? "#c5a35a" : "rgba(12,46,36,0.1)",
                    background: isOpen ? "#fffdf6" : "#fbf6ea",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base text-[#0c2e24] sm:text-lg">
                      {item.q}
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                      <ChevronDown className="h-5 w-5 text-[#c5a35a]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-[#0c2e24]/65">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
