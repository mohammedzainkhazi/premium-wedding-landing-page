import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { GROOM, BRIDE } from "../data/wedding";
import { EightStar } from "./Ornament";

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#0c2e24" }}
    >
      <div className="absolute inset-0 opacity-20 pattern-gold mix-blend-soft-light" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#e8d5a3]">
            Two families · One niyyah
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#fbf6ea] sm:text-5xl">
            The Bride &amp; The Groom
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <Reveal>
            <article className="h-full rounded-[1.8rem] border border-[#e8d5a3]/20 bg-white/[0.04] p-7 text-center sm:p-10">
              <p className="font-display text-[10px] uppercase tracking-[0.32em] text-[#e8d5a3]">
                The Groom
              </p>
              <h3 className="mt-3 font-script text-4xl text-[#fbf6ea] sm:text-5xl">
                {GROOM.name}
              </h3>
              <p className="mt-2 text-sm text-[#e8d5a3]">{GROOM.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                {GROOM.relation}
              </p>
              <div className="gold-line mx-auto my-6 w-24" />
              <p className="font-serif text-sm leading-relaxed text-white/65">
                {GROOM.paternal}
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-white/65">
                {GROOM.maternal}
              </p>
            </article>
          </Reveal>

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden flex-col items-center justify-center md:flex"
          >
            <EightStar className="h-8 w-8 text-[#c5a35a]" />
            <span className="font-script mt-1 text-4xl text-[#e8d5a3]">&amp;</span>
          </motion.div>

          <Reveal delay={0.12}>
            <article className="h-full rounded-[1.8rem] border border-[#e8d5a3]/20 bg-white/[0.04] p-7 text-center sm:p-10">
              <p className="font-display text-[10px] uppercase tracking-[0.32em] text-[#e8d5a3]">
                The Bride
              </p>
              <h3 className="mt-3 font-script text-4xl text-[#fbf6ea] sm:text-5xl">
                {BRIDE.name}
              </h3>
              <p className="mt-2 text-sm text-[#e8d5a3]">{BRIDE.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                Our beloved daughter
              </p>
              <div className="gold-line mx-auto my-6 w-24" />
              <p className="font-serif text-sm leading-relaxed text-white/65">
                {BRIDE.father}
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-white/65">
                {BRIDE.place}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
