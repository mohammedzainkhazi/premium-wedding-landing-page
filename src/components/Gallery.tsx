import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { GALLERY } from "../data/wedding";

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#fbf6ea" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#b08d3e]">
            A visual dua
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#0c2e24] sm:text-5xl">
            Colours of a Nikah
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.caption}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 || i === 3 ? "row-span-1 md:min-h-[22rem]" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64 md:h-72"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[#071912] to-transparent p-3 text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
