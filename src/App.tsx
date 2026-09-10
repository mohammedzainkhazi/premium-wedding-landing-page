import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DatesStrip from "./components/DatesStrip";
import Invitation from "./components/Invitation";
import Couple from "./components/Couple";
import Events from "./components/Events";
import Journey from "./components/Journey";
import Dua from "./components/Dua";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Hosts from "./components/Hosts";
import Footer from "./components/Footer";
import MobileDock from "./components/MobileDock";
import Petals from "./components/Petals";
import MusicToggle, { AudioHost } from "./components/MusicToggle";
import { useBackgroundMusic } from "./hooks/useBackgroundMusic";
import { MUSIC } from "./data/wedding";

export default function App() {
  const [opened, setOpened] = useState(false);
  const music = useBackgroundMusic(MUSIC.videoId);

  const handleOpen = () => {
    setOpened(true);
    // Started from the user's tap, so browsers allow audio.
    music.play();
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#fbf6ea" }}>
      <AudioHost />

      <AnimatePresence>
        {!opened && <Envelope onOpened={handleOpen} />}
      </AnimatePresence>

      {opened && <Petals />}
      <Navbar />
      <main className="pb-safe sm:pb-0">
        <Hero ready={opened} />
        <DatesStrip />
        <Invitation />
        <Couple />
        <Events />
        <Journey />
        <Dua />
        <FAQ />
        <Hosts />
      </main>
      <Footer />
      <MobileDock />

      <MusicToggle
        visible={opened && !music.blocked}
        playing={music.playing}
        onToggle={music.toggle}
        autoPlay={opened}
      />
    </div>
  );
}
