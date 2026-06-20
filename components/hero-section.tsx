"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Cpu, Radar, ScanLine } from "lucide-react";
import { useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { identity } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const demoVideos = [
  {
    label: "Mining Violation",
    src: "/videos/output_rain_violation.mp4",
    title: "Mining Traffic Violation Detection",
    badge: "YOLO Model",
  },
  {
    label: "Opposite Direction / Wrong Way",
    src: "/videos/rtsp-edge-local-demo.mp4",
    title: "RTSP Edge Local Monitoring",
    badge: "Edge Stream",
  },
];

export function HeroSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const demo = demoVideos[activeDemo];

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
            <Cpu className="size-4" />
            AI Engineer / Future Systems
          </motion.div>
          <motion.h1 variants={item} className="font-space text-5xl font-bold leading-[0.95] tracking-[-0.075em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {identity.name}
          </motion.h1>
          <motion.div variants={item} className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-cyan-100 sm:text-base">
            {[identity.role, "Fullstack Developer", "Building Digital Intelligence"].map((role) => (
              <span key={role} className="rounded-full border border-white/10 bg-white/[0.065] px-4 py-2 backdrop-blur-xl">
                {role}
              </span>
            ))}
          </motion.div>
          <motion.p variants={item} className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            {identity.tagline}
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {identity.bio}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <AnimatedButton href="#projects">View Projects</AnimatedButton>
            <AnimatedButton href="#contact" variant="ghost">Contact Me</AnimatedButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="relative mx-auto grid min-h-[360px] w-full max-w-[520px] place-items-center overflow-hidden sm:min-h-[390px] sm:overflow-visible lg:min-h-[560px]"
        >
          <div className="absolute inset-8 z-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),rgba(88,28,135,0.08)_42%,transparent_70%)] blur-3xl" />
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 36, ease: "linear" }} className="absolute z-0 hidden size-[94%] rounded-full border border-cyan-200/22 shadow-[0_0_34px_rgba(34,211,238,0.10)] sm:block" />
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 48, ease: "linear" }} className="absolute z-0 hidden h-[54%] w-[112%] rounded-full border border-fuchsia-200/20 shadow-[0_0_34px_rgba(217,70,239,0.09)] sm:block" />
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute z-0 hidden h-[70%] w-[98%] rounded-full border border-white/12 sm:block" />

          <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ y: { repeat: Infinity, duration: 5.8, ease: "easeInOut" } }}
            className="relative z-10 w-full max-w-[430px] overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#020817]/82 p-3 shadow-[0_0_46px_rgba(34,211,238,0.14),0_0_84px_rgba(168,85,247,0.10)] backdrop-blur-2xl sm:max-w-[470px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_95%_100%,rgba(168,85,247,0.12),transparent_34%)]" />
            <div className="pointer-events-none absolute left-4 top-4 z-20 size-8 border-l-2 border-t-2 border-cyan-200/70" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 size-8 border-r-2 border-t-2 border-fuchsia-200/60" />
            <div className="pointer-events-none absolute bottom-4 left-4 z-20 size-8 border-b-2 border-l-2 border-fuchsia-200/50" />
            <div className="pointer-events-none absolute bottom-4 right-4 z-20 size-8 border-b-2 border-r-2 border-cyan-200/60" />

            <div className="relative z-20 mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                <Radar className="size-3.5" />
                Computer Vision Demo
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold text-emerald-100">
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                Live Inference
              </div>
            </div>

            <div className="relative z-20 mb-3 flex flex-wrap gap-2 px-1">
              {demoVideos.map((video, index) => {
                const active = index === activeDemo;

                return (
                  <button
                    key={video.label}
                    type="button"
                    onClick={() => setActiveDemo(index)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                      active
                        ? "border-cyan-300/45 bg-cyan-300/14 text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.16)]"
                        : "border-white/10 bg-white/[0.045] text-white/60 hover:border-white/20 hover:text-white/80"
                    }`}
                  >
                    {video.label}
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 h-[230px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black shadow-inner sm:h-[260px] lg:h-[280px]">
              <AnimatePresence mode="wait">
                <motion.video
                  key={demo.src}
                  initial={{ opacity: 0, scale: 1.025 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="block h-full w-full object-cover opacity-100 saturate-[0.96] contrast-105"
                  src={demo.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="metadata"
                  aria-label={`${demo.title} video demo`}
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,211,238,0.05),transparent_30%,rgba(168,85,247,0.06))]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_10px] opacity-25" />
              <motion.div
                className="pointer-events-none absolute left-0 right-0 top-0 h-14 bg-gradient-to-b from-cyan-200/14 via-cyan-200/5 to-transparent blur-[1px]"
                animate={{ y: ["-20%", "330%"] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
              />
              <div className="absolute left-3 bottom-3 z-20 rounded-full border border-red-300/25 bg-slate-950/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-red-100 backdrop-blur-xl">
                {demo.title}
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-950/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
                <ScanLine className="size-3" />
                {demo.badge}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
