import { Phone, MessageCircle, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { HOSTS, mapsSearchUrl } from "../data/wedding";

export default function Hosts() {
  const tel = `tel:+91${HOSTS.phone}`;
  const wa = `https://wa.me/91${HOSTS.phone}`;
  const home = mapsSearchUrl(HOSTS.address);

  return (
    <section id="hosts" className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: "#0c2e24" }}>
      <div className="absolute inset-0 opacity-20 pattern-gold mix-blend-soft-light" />
      <div className="relative mx-auto max-w-xl px-5 text-center">
        <Reveal>
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#e8d5a3]">
            From the hosts
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#fbf6ea] sm:text-5xl">
            {HOSTS.names}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#e8d5a3]/70">
            {HOSTS.profession}
          </p>
          <p className="mt-4 font-serif text-base text-white/65">{HOSTS.address}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={tel}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0c2e24]"
              style={{ background: "linear-gradient(90deg,#e8d5a3,#c5a35a)" }}
            >
              <Phone className="h-4 w-4" />
              Call {HOSTS.phoneDisplay}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e8d5a3]/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#fbf6ea]"
            >
              <MessageCircle className="h-4 w-4 text-[#e8d5a3]" />
              WhatsApp
            </a>
          </div>
          <a
            href={home}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-[#e8d5a3]/80 underline decoration-[#e8d5a3]/40 underline-offset-4"
          >
            <MapPin className="h-4 w-4" />
            Open host address in Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  );
}
