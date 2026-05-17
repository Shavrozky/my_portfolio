"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Music2, Pause, Play, Volume2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicPopup() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.42;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
        window.removeEventListener("pointerdown", playAudio);
        window.removeEventListener("keydown", playAudio);
        window.removeEventListener("scroll", playAudio);
      } catch {
        setIsPlaying(false);
        setNeedsInteraction(true);
      }
    };

    void playAudio();

    const retryTimer = window.setTimeout(() => {
      void playAudio();
    }, 700);

    window.addEventListener("pointerdown", playAudio, { once: true });
    window.addEventListener("keydown", playAudio, { once: true });
    window.addEventListener("scroll", playAudio, { once: true });

    return () => {
      window.clearTimeout(retryTimer);
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("keydown", playAudio);
      window.removeEventListener("scroll", playAudio);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      setNeedsInteraction(false);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/good-days.m4a" loop preload="auto" autoPlay playsInline />
      <AnimatePresence>
        {visible ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-5 left-4 right-4 z-[60] mx-auto max-w-md rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-4 shadow-[0_24px_80px_rgba(34,211,238,0.18)] backdrop-blur-2xl sm:left-auto sm:right-6 sm:mx-0"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(217,70,239,0.16),transparent_36%)]" />
            <div className="flex items-center gap-4">
              <div className="relative grid size-14 shrink-0 place-items-center rounded-2xl border border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100">
                <Music2 className="size-7" />
                <span className="absolute -right-1 -top-1 size-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Now Playing
                </p>
                <h2 className="truncate font-space text-lg font-bold text-white">Good Days</h2>
                <p className="truncate text-sm font-semibold text-slate-300">SZA</p>
                {needsInteraction ? (
                  <p className="mt-1 text-xs text-fuchsia-100">Tap play to start audio.</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={toggleAudio}
                className="grid size-11 shrink-0 place-items-center rounded-full bg-cyan-300 text-slate-950 transition hover:scale-105 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:text-white"
                aria-label="Close music popup"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3 text-cyan-100">
              <Volume2 className="size-4" />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400"
                  animate={{ x: isPlaying ? ["-35%", "0%", "-35%"] : "-35%" }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                  style={{ width: "72%" }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
