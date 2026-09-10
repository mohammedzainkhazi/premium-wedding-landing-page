import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { DUA, QURAN, BLESSING } from "../data/wedding";
import { Flourish } from "./Ornament";

export default function Dua() {
  return (
    <section
      id="dua"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#071912" }}
    >
      <img
        src="/images/islamic-arch.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[#071912]/80" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#e8d5a3]">
            {QURAN.ref}
          </p>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-arabic mt-8 text-2xl leading-[2] text-[#e8d5a3] sm:text-4xl"
          dir="rtl"
          lang="ar"
        >
          {QURAN.arabic}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-white/75 sm:text-xl"
        >
          “{QURAN.translation}”
        </motion.p>

        <Flourish className="mx-auto mt-12 h-7 w-48 text-[#c5a35a]" />

        <Reveal delay={0.1} className="mt-12">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#e8d5a3]">
            {DUA.heading}
          </p>
          <h2 className="mt-5 font-serif text-2xl leading-snug text-[#fbf6ea] sm:text-4xl">
            {DUA.text}
          </h2>
          <p className="font-script mt-4 text-3xl text-[#e8d5a3]">{DUA.ameen}</p>
          <p className="mx-auto mt-8 max-w-md font-serif text-sm italic text-white/50">
            {BLESSING}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
