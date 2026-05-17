"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="My experience combines hands-on AI system development, product documentation, and digital communication, giving me a practical perspective on building technology that is useful, understandable, and aligned with business operations."
        />
        <div className="relative">
          <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 sm:left-6" />
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative pl-12 sm:pl-20"
              >
                <div className="absolute left-[9px] top-7 size-4 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.75)] sm:left-[17px]" />
                <GlowCard className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{item.period}</p>
                      <h3 className="font-space text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-100/80">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-200">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
