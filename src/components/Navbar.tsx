import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Share2 } from "lucide-react";
import { WHATSAPP_SHARE } from "../data/wedding";

const LINKS = [
  { href: "#invite", label: "Invitation" },
  { href: "#couple", label: "The Couple" },
  { href: "#nikah", label: "Nikah" },
  { href: "#Valima", label: "Valima" },
  { href: "#dua", label: "Dua" },
  { href: "#hosts", label: "Hosts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-3 pt-[max(0.6rem,env(safe-area-inset-top))] sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? "glass-ivory shadow-lg shadow-[#0c2e24]/10" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/images/monogram.jpg"
              alt=""
              className="h-9 w-9 rounded-full object-cover ring-1 ring-[#c5a35a]/50"
            />
            <span className={`font-serif text-base tracking-wide ${scrolled ? "text-[#0c2e24]" : "text-[#fbf6ea]"}`}>
              Zain <span style={{ color: "#c5a35a" }}>&amp;</span> Tasmiya
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-xs font-medium uppercase tracking-[0.16em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c5a35a] after:transition-all hover:after:w-full ${
                  scrolled ? "text-[#0c2e24]/75 hover:text-[#0c2e24]" : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className={`relative text-xs font-medium uppercase tracking-[0.16em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c5a35a] after:transition-all hover:after:w-full ${
                  scrolled ? "text-[#0c2e24]/75 hover:text-[#0c2e24]" : "text-white/75 hover:text-white"
                }`}>
            Wedding Invite
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-ivory mt-2 overflow-hidden rounded-2xl p-3 lg:hidden"
            >
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-[#0c2e24]"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
