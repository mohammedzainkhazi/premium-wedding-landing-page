export const COUPLE = {
  groom: "Zain",
  bride: "Tasmiya",
  groomFull: "K. Mohammed Zain",
  brideFull: "Mohammadi Tasmiya",
  groomTitle: "B.E. Software Engineer",
  brideTitle: "B.E. Software Engineer",
  hashtag: "#ZainWedsTasmiya",
};

export const HOSTS = {
  names: "Mr. K. Mohammed Ziaulla & Mrs. Mubeena",
  profession: "Teachers",
  address: "3rd Main, 12th Cross, Vinobanagar, Davangere",
  phone: "8722430959",
  phoneDisplay: "87224 30959",
};

export const GROOM = {
  name: "K. Mohammed Zain",
  relation: "Elder Son",
  title: "B.E. Software Engineer",
  paternal: "Paternal Grandson of Late Khazi Mohammed Yaqub Saheb, Rtd. Teacher",
  maternal: "Maternal Grandson of Late Syed Obedulla Saheb",
};

export const BRIDE = {
  name: "Mohammadi Tasmiya",
  title: "B.E. Software Engineer",
  father: "D/o M D Khaleel",
  place: "Kharadi Mohalla, Sira, Tumkur Dist.",
};

/** Nikah — Sunday 4 Oct 2026, 12:35 pm IST */
export const NIKAH_DATE = new Date("2026-10-04T12:35:00+05:30");

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsDirUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export const NIKAH = {
  id: "nikah",
  arabicLabel: "حفل النكاح",
  title: "Mehfil-E-Nikah",
  short: "Nikah",
  day: "Sunday",
  dateDisplay: "4th October 2026",
  dateShort: "04 · 10 · 2026",
  hijri: "22nd Rabi us Sani 1448 Hijri",
  time: "12:35 PM",
  note: "Lunch will be served after Nikah",
  venue: "HMR Palace",
  venueDetail: "Opp. Nayara Petrol Pump, Tumkuru Road, Sira",
  city: "Sira, Karnataka",
  mapsQuery: "HMR Palace, Opp Nayara Petrol Pump, Tumkuru Road, Sira, Karnataka",
  calendarStart: "20261004T123500",
  calendarEnd: "20261004T160000",
};

export const Valima = {
  id: "Valima",
  arabicLabel: "وليمة",
  title: "Dawat-E-Valima",
  short: "Valima",
  day: "Monday",
  dateDisplay: "5th October 2026",
  dateShort: "05 · 10 · 2026",
  hijri: "23rd Rabi us Sani 1448 Hijri",
  time: "8:00 PM Onwards",
  note: "An evening of dua, dinner and celebration",
  venue: "Imam Ahmed Raza Function Hall",
  venueDetail: "Inahalli Compound, K.R. Road, Davanagere",
  city: "Davanagere, Karnataka",
  mapsQuery:
    "Imam Ahmed Raza Function Hall, Inahalli Compound, K.R. Road, Davanagere, Karnataka",
  calendarStart: "20261005T200000",
  calendarEnd: "20261006T000000",
};

export const DUA = {
  heading: "Dua For The Couple",
  text: "May ALLAH guide this marriage to the best of Understanding, Happiness, Prosperity, Success & Righteous Path.",
  ameen: "Ameen.",
};

export const QURAN = {
  ref: "Surah Ar-Rum · 30:21",
  arabic:
    "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  translation:
    "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.",
};

/**
 * Background music (audio-only YouTube embed).
 * Source: https://youtube.com/shorts/QjnknPs8IzU
 * Swap `videoId` to change the track.
 */
export const MUSIC = {
  videoId: "QjnknPs8IzU",
  title: "Nikah Nasheed",
};

export const BLESSING =
  "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair";

export const GALLERY = [
  {
    src: "https://images.pexels.com/photos/30860588/pexels-photo-30860588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Ornate mosque arches and hanging lanterns",
    caption: "Under His Light",
  },
  {
    src: "https://images.pexels.com/photos/5776642/pexels-photo-5776642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Intricate henna on hands",
    caption: "In the Details",
  },
  {
    src: "https://images.pexels.com/photos/14719605/pexels-photo-14719605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Islamic archway with geometric patterns",
    caption: "Geometry of Grace",
  },
];

export const FAQS = [
  {
    q: "What time should we arrive for the Nikah?",
    a: "The Nikah begins at 12:35 PM on Sunday, 4th October 2026 at HMR Palace, Sira. Kindly arrive by 12:00 PM so we can be seated together for the ceremony. Lunch will be served after the Nikah.",
  },
  {
    q: "Where is the Valima, and when does it start?",
    a: "Dawat-E-Valima is on Monday, 5th October 2026 from 8:00 PM onwards at Imam Ahmed Raza Function Hall, Inahalli Compound, K.R. Road, Davanagere.",
  },
  {
    q: "The Nikah and Valima are in different cities — how do we plan?",
    a: "Nikah is in Sira (Tumkur Dist.), the bride's hometown. Valima is the next evening in Davanagere, the groom's hometown. Use the Open in Google Maps buttons on each event card for turn-by-turn directions from wherever you are.",
  },
  {
    q: "Who do we contact for help?",
    a: "Please call Mr. K. Mohammed Ziaulla & Mrs. Mubeena on 87224 30959. You may also message on WhatsApp at the same number.",
  },
];

export const WHATSAPP_SHARE = encodeURIComponent(
  `Assalamu Alaikum wa Rahmatullah 🌙\n\nYou are lovingly invited to the Nikah of\n*K. Mohammed Zain* & *Mohammadi Tasmiya*\n\n✦ Mehfil-E-Nikah\nSunday, 4 Oct 2026 · 12:35 PM\nHMR Palace, Tumkuru Road, Sira\n\n✦ Dawat-E-Valima\nMonday, 5 Oct 2026 · 8:00 PM onwards\nImam Ahmed Raza Function Hall, Davanagere\n\nInsha Allah, we hope to be blessed by your dua and presence.`
);

export function icsFor(
  title: string,
  location: string,
  start: string,
  end: string,
  description: string
) {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ZainWedsTasmiya//EN",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
