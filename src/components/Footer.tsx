import { Heart } from "lucide-react";
import { COUPLE, NIKAH, Valima } from "../data/wedding";
import { Flourish } from "./Ornament";

export default function Footer() {
  return (
    <footer className="pb-28 pt-16 sm:pb-12" style={{ backgroundColor: "#071912" }}>
      <div className="mx-auto max-w-4xl px-5 text-center">
        <img
          src="/images/monogram.jpg"
          alt="Z & T"
          className="mx-auto h-16 w-16 rounded-full object-cover ring-1 ring-[#c5a35a]/40"
        />
        <p className="mt-5 font-serif text-2xl text-[#fbf6ea]">
          {COUPLE.groom} <span className="font-script text-3xl text-[#e8d5a3]">&amp;</span> {COUPLE.bride}
        </p>
        <Flourish className="mx-auto mt-4 h-6 w-40 text-[#c5a35a]" />
        <p className="mt-4 font-serif italic text-white/50">
          {NIKAH.day} {NIKAH.dateDisplay} · {Valima.day} {Valima.dateDisplay}
        </p>
        <p className="mt-2 font-script text-2xl text-[#e8d5a3]">{COUPLE.hashtag}</p>
        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-white/35">
          Insha Allah · Made with
          <Heart className="h-3 w-3" style={{ color: "#6b2d3c" }} fill="#6b2d3c" />
          for our family &amp; friends
        </p>
      </div>
    </footer>
  );
}
