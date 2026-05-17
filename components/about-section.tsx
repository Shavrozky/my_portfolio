"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const focusTags = [
  "Computer Vision",
  "LLM Systems",
  "Mining Tech",
  "Operational AI",
];

const systemSpecs = [
  { label: "Role", value: "AI Engineer" },
  { label: "Mode", value: "Production Builder" },
  { label: "Focus", value: "Computer Vision + LLM Systems" },
  { label: "Domain", value: "Mining Tech & Safety Operations" },
  { label: "Stack", value: "Python, FastAPI, Next.js, YOLO, RAG" },
  { label: "Signal", value: "Reliable, Adaptive, Collaborative" },
  { label: "Status", value: "Online" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.4)] backdrop-blur-2xl sm:p-10"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-cyan-400/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-24 size-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
            <div className="relative z-10">
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                Personal Operating System
              </p>
              <h2 className="font-space text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Surya <span className="text-cyan-300">OS</span>
              </h2>
              <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-100/80">
                AI Engineer Operating System
              </p>
              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-300">
                <p className="text-slate-200">
                  Saya merancang dan membangun sistem AI yang menghubungkan teknologi dengan kebutuhan operasional nyata.
                </p>
                <p>
                  Melalui project seperti MLenz, MIA, dan Mzone, saya berfokus pada computer vision, LLM workflow, safety monitoring, dan sistem operasional yang siap digunakan di lingkungan industri.
                </p>
                <p>
                  Bagi saya, sistem AI yang baik bukan hanya terlihat canggih dalam demo, tetapi juga harus andal, mudah dipahami, terintegrasi dengan workflow, dan benar-benar membantu proses kerja nyata.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {focusTags.map((area) => (
                  <span key={area} className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm font-bold text-cyan-100">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-8 right-4 size-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-[#020817]/82 p-3 shadow-[0_0_58px_rgba(34,211,238,0.15),0_0_84px_rgba(168,85,247,0.10)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_9px] opacity-30" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src="/surya.jpg"
                  alt="Muhammad Rizky Suryanata"
                  width={720}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="h-[360px] w-full object-cover object-center sm:h-[440px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 backdrop-blur-xl">
                  <span className="mr-2 inline-block size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                  Online
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">SURYA OS v1.0</p>
                  <h3 className="mt-2 font-space text-2xl font-bold text-white">Muhammad Rizky Suryanata</h3>
                </div>
              </div>

              <div className="relative mt-3 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400"
                    animate={{ x: ["-20%", "25%", "-20%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </div>
                <div className="grid gap-3 font-mono text-xs sm:text-sm">
                  {systemSpecs.map((item) => (
                    <div key={item.label} className="grid grid-cols-[88px_1fr] gap-3 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                      <span className="font-bold uppercase tracking-[0.16em] text-cyan-300/80">{item.label}</span>
                      <span className="text-slate-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
