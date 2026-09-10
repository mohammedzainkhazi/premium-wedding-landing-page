import { CalendarPlus, Clock, MapPinned, Navigation, Utensils } from "lucide-react";
import Reveal from "./Reveal";
import { Flourish } from "./Ornament";
import {
  NIKAH,
  Valima,
  mapsSearchUrl,
  mapsDirUrl,
  icsFor,
} from "../data/wedding";

type EventData = typeof NIKAH;

function EventCard({
  event,
  accent,
  image,
}: {
  event: EventData;
  accent: string;
  image: string;
}) {
  const maps = mapsSearchUrl(event.mapsQuery);
  const dir = mapsDirUrl(event.mapsQuery);
  const ics = icsFor(
    event.title,
    `${event.venue}, ${event.venueDetail}`,
    event.calendarStart,
    event.calendarEnd,
    event.note
  );

  return (
    <article
      id={event.id}
      className="scroll-mt-24 overflow-hidden rounded-[1.8rem] border border-[#c5a35a]/25 bg-[#fffdf6] shadow-[0_20px_50px_rgba(12,46,36,0.08)]"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071912] via-[#071912]/40 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <p className="font-arabic text-lg text-[#e8d5a3]" dir="rtl" lang="ar">
            {event.arabicLabel}
          </p>
          <h3 className="font-script text-4xl text-[#fbf6ea] sm:text-5xl">{event.short}</h3>
        </div>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <p className="font-display text-[11px] uppercase tracking-[0.28em]" style={{ color: accent }}>
          {event.title}
        </p>
        <p className="mt-2 font-serif text-2xl text-[#0c2e24]">
          {event.day}, {event.dateDisplay}
        </p>
        <p className="mt-1 font-serif italic text-[#0c2e24]/55">{event.hijri}</p>

        <dl className="mt-6 space-y-3 text-sm text-[#0c2e24]/80">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a35a]" />
            <div>
              <dt className="sr-only">Time</dt>
              <dd className="font-medium">{event.time}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a35a]" />
            <div>
              <dt className="sr-only">Venue</dt>
              <dd className="font-medium">{event.venue}</dd>
              <dd className="text-[#0c2e24]/55">{event.venueDetail}</dd>
              <dd className="text-[#0c2e24]/55">{event.city}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Utensils className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a35a]" />
            <dd>{event.note}</dd>
          </div>
        </dl>

        <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <a
            href={maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#fbf6ea] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#0c2e24" }}
          >
            <MapPinned className="h-4 w-4 text-[#e8d5a3]" />
            Open in Google Maps
          </a>
          <a
            href={dir}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0c2e24]/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c2e24] transition-colors hover:bg-[#0c2e24]/5"
          >
            <Navigation className="h-4 w-4 text-[#6b2d3c]" />
            Get directions
          </a>
        </div>
        <a
          href={ics}
          download={`${event.short}.ics`}
          className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-medium text-[#0c2e24]/70 hover:text-[#0c2e24]"
        >
          <CalendarPlus className="h-4 w-4" />
          Save {event.short} to calendar
        </a>
      </div>
    </article>
  );
}

export default function Events() {
  return (
    <section className="relative py-20 sm:py-28" style={{ backgroundColor: "#f4ead6" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.38em] text-[#b08d3e]">
            Save these dates
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#0c2e24] sm:text-5xl">
            Nikah &amp; Valima
          </h2>
          <Flourish className="mx-auto mt-4 h-7 w-44 text-[#c5a35a]" />
          <p className="mt-4 font-serif text-base text-[#0c2e24]/65 sm:text-lg">
            Two sacred gatherings — a Nikah in Sira, and a Valima the next evening in Davanagere.
            Tap a venue to open it in Google Maps.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <EventCard
              event={NIKAH}
              accent="#6b2d3c"
              image="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <EventCard
              event={Valima}
              accent="#1a4d40"
              image="https://images.pexels.com/photos/8818657/pexels-photo-8818657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
