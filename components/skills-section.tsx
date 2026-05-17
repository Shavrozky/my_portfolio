"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Skills"
          description="From cinematic interfaces to API services, AI workflows, databases, and deployment pipelines."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
              >
                <GlowCard className="h-full p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-space text-xl font-bold text-white">{group.category}</h3>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.035 } }, hidden: {} }}
                    className="flex flex-wrap gap-3"
                  >
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
                        whileHover={{ y: -4, scale: 1.04 }}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.075] px-4 py-2 text-sm font-bold text-cyan-50 shadow-[0_0_22px_rgba(34,211,238,0.08)] transition-colors hover:border-fuchsia-300/60 hover:bg-fuchsia-300/10"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
