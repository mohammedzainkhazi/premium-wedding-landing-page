import Reveal from "./Reveal";
import { Flourish } from "./Ornament";
import { HOSTS } from "../data/wedding";

export default function Invitation() {
  return (
    <section id="invite" className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: "#fbf6ea" }}>
      <img
        src="/images/rose.jpg"
        alt=""
        className="pointer-events-none absolute -left-8 top-10 hidden w-36 opacity-40 sm:block"
      />
      <img
        src="/images/rose.jpg"
        alt=""
        className="pointer-events-none absolute -right-6 bottom-8 hidden w-28 rotate-180 opacity-30 md:block"
      />

      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#b08d3e]">
            A humble invitation
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#0c2e24] sm:text-5xl">
            With Immense Pleasure
          </h2>
          <Flourish className="mx-auto mt-4 h-7 w-44 text-[#c5a35a]" />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mt-10 rounded-[1.6rem] px-6 py-10 sm:px-12 sm:py-14"
            style={{
              background: "linear-gradient(180deg,#fffdf6,#f4ead6)",
              boxShadow: "0 24px 60px rgba(12,46,36,0.08)",
              border: "1px solid rgba(197,163,90,0.35)",
            }}
          >
            <div className="pointer-events-none absolute inset-3 rounded-[1.2rem] border border-[#c5a35a]/25" />

            <p className="font-serif text-sm italic text-[#0c2e24]/70 sm:text-base">
              In The Name Of Allah The Most Beneficent &amp; The Most Merciful
            </p>

            <p className="mt-8 font-display text-lg leading-snug text-[#0c2e24] sm:text-xl">
              {HOSTS.names}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#b08d3e]">
              {HOSTS.profession}
            </p>
            <p className="mt-2 font-serif text-sm text-[#0c2e24]/60">
              {HOSTS.address}
            </p>

            <p className="mx-auto mt-8 max-w-md font-serif text-base leading-relaxed text-[#1a1410]/80 sm:text-lg">
              Feel immense pleasure in inviting you and your family to bless the
              couple with Dua and grace the auspicious occasion of the Nikah
              Ceremony of our Elder Son
            </p>

            <p className="mt-8 font-script text-4xl text-[#0c2e24] sm:text-5xl">
              K. Mohammed Zain
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#6b2d3c]">
              With
            </p>
            <p className="font-script text-4xl text-[#0c2e24] sm:text-5xl">
              Mohammadi Tasmiya
            </p>

            <p className="mt-8 font-display text-[10px] uppercase tracking-[0.3em] text-[#b08d3e]">
              With best compliments from
            </p>
            <p className="mt-2 font-serif text-lg text-[#0c2e24]">
              Relatives &amp; Friends
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
