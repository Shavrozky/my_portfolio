"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="My education combines management perspective with informatics fundamentals, helping me connect operational problems with practical AI and software solutions."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/70 via-violet-400/35 to-transparent sm:left-7" />
          {education.map((item, index) => (
            <motion.article
              key={`${item.school}-${item.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative pb-12 pl-16 last:pb-0 sm:pl-24"
            >
              <div className="absolute left-0 top-1 grid size-10 place-items-center rounded-2xl border border-cyan-300/25 bg-[#061126]/80 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:size-14">
                <GraduationCap className="size-5 sm:size-7" />
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/[0.045] sm:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200/80">{item.school}</p>
                  <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-100">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-space text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.degree}
                </h3>
                <p className="mt-5 leading-8 text-slate-300">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
