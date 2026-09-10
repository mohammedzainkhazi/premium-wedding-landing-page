import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

/**
 * Hidden host element for the YouTube audio player.
 * Kept in the DOM (required by the API) but visually removed.
 */
export function AudioHost({ elementId = "yt-audio" }: { elementId?: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        width: 1,
        height: 1,
        left: -9999,
        top: -9999,
        opacity: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div id={elementId} />
    </div>
  );
}

const BARS = [0, 1, 2, 3];

interface MusicToggleProps {
  playing: boolean;
  onToggle: () => void;
  visible: boolean;
  autoPlay?: boolean;
}

export default function MusicToggle({
  playing,
  onToggle,
  visible,
  autoPlay = false,
}: MusicToggleProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={onToggle}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.92 }}
          aria-label={playing ? "Pause background music" : "Play background music"}
          aria-pressed={playing}
          className="fixed bottom-[5.5rem] right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full shadow-xl sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
          style={{
            background: "linear-gradient(145deg,#123d32,#071912)",
            border: "1px solid rgba(232,213,163,0.35)",
            boxShadow: "0 10px 30px rgba(7,25,18,0.45)",
          }}
        >
          {/* pulsing ring while playing */}
          {playing && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid rgba(232,213,163,0.5)" }}
              animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          )}

          {playing ? (
            <span className="flex items-end gap-[3px]" aria-hidden>
              {BARS.map((b) => (
                <motion.span
                  key={b}
                  className="w-[3px] rounded-full"
                  style={{ backgroundColor: "#e8d5a3" }}
                  animate={{ height: [6, 16, 9, 18, 7] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: b * 0.14,
                  }}
                />
              ))}
            </span>
          ) : (
            <motion.span
              className="relative flex items-center justify-center"
              aria-hidden
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={
                autoPlay && !playing
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              <VolumeX className="h-5 w-5" style={{ color: "#e8d5a3" }} />
            </motion.span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
