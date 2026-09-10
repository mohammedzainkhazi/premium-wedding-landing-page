import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Plays a YouTube video as audio-only background music.
 * The <iframe> is rendered off-screen (never visible), and we only
 * ever use its audio track via the official YouTube IFrame Player API.
 *
 * Autoplay with sound is blocked by browsers, so playback must be
 * kicked off from a real user gesture (the "tap to open" seal).
 */

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const API_SRC = "https://www.youtube.com/iframe_api";
let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector(`script[src="${API_SRC}"]`)) {
      const tag = document.createElement("script");
      tag.src = API_SRC;
      tag.async = true;
      document.head.appendChild(tag);
    }
  });

  return apiPromise;
}

export function useBackgroundMusic(videoId: string, elementId = "yt-audio") {
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT?.Player) return;
      const host = document.getElementById(elementId);
      if (!host) return;

      playerRef.current = new window.YT.Player(elementId, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
          playlist: videoId, // required for loop on a single video
        },
        events: {
          onReady: () => {
            if (cancelled) return;
            playerRef.current?.setVolume?.(35);
            setReady(true);
          },
          onStateChange: (e: any) => {
            const YT = window.YT;
            if (!YT) return;
            if (e.data === YT.PlayerState.PLAYING) {
              setPlaying(true);
              setBlocked(false);
            }
            if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
            if (e.data === YT.PlayerState.ENDED) {
              playerRef.current?.seekTo?.(0);
              playerRef.current?.playVideo?.();
            }
          },
          onError: () => setBlocked(true),
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, [videoId, elementId]);

  /** Fade volume smoothly so the music never "slams" in. */
  const fadeTo = useCallback((target: number, ms = 1200) => {
    const p = playerRef.current;
    if (!p?.getVolume) return;
    const start = p.getVolume() ?? 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min((now - t0) / ms, 1);
      p.setVolume?.(Math.round(start + (target - start) * k));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const play = useCallback(() => {
    const p = playerRef.current;
    if (!p?.playVideo) return;
    try {
      p.unMute?.();
      p.setVolume?.(0);
      p.playVideo();
      fadeTo(35, 1600);
    } catch {
      setBlocked(true);
    }
  }, [fadeTo]);

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo?.();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) pause();
    else play();
  }, [playing, play, pause]);

  // Pause when the tab is hidden, resume when it comes back.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) playerRef.current?.pauseVideo?.();
      else if (playing) playerRef.current?.playVideo?.();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playing]);

  return { ready, playing, blocked, play, pause, toggle };
}
