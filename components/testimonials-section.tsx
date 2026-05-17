"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="recommendations" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="LinkedIn Recommendations"
          title="Trusted by People I&apos;ve Worked With"
          description="Professional recommendations from colleagues and collaborators, reflecting my work ethic, technical contribution, and ability to collaborate across teams."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial) => (
              <motion.article
                key={`${testimonial.name}-${testimonial.date}`}
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.055] hover:shadow-[0_28px_90px_rgba(34,211,238,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-20 -top-24 size-56 rounded-full bg-cyan-400/14 blur-3xl" />
                  <div className="absolute -bottom-24 -right-20 size-56 rounded-full bg-fuchsia-400/14 blur-3xl" />
                </div>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
                      <Quote className="size-5" />
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100">
                      {testimonial.source}
                    </span>
                  </div>
                  <p className="line-clamp-6 leading-7 text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="font-space text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-slate-300">{testimonial.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-300">
                      <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5">{testimonial.relation}</span>
                      <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/8 px-3 py-1.5 text-fuchsia-100">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {testimonials.length > 3 ? (
          <div className="mt-10 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.10)] transition hover:border-cyan-300/55 hover:bg-cyan-300/15"
            >
              {showAll ? t("recommendationsLess") : t("recommendationsButton")}
              <ChevronDown className={`size-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </motion.button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
