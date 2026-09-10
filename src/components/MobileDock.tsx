import { Phone, MapPin } from "lucide-react";
import { HOSTS, NIKAH, Valima, mapsSearchUrl } from "../data/wedding";

export default function MobileDock() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c5a35a]/20 bg-[#0c2e24]/95 backdrop-blur-xl sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3">
        <a
          href={`tel:+91${HOSTS.phone}`}
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#e8d5a3]"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={mapsSearchUrl(NIKAH.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-white/10 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#e8d5a3]"
        >
          <MapPin className="h-4 w-4" />
          Nikah map
        </a>
        <a
          href={mapsSearchUrl(Valima.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#e8d5a3]"
        >
          <MapPin className="h-4 w-4" />
          Valima map
        </a>
      </div>
    </nav>
  );
}
