"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";
import Link from "next/link";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Selected Projects"
          description={t("projectsDescription")}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <GlowCard className="h-full p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="grid size-13 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-7" />
                    </div>
                    <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-100">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-space text-2xl font-bold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/80">{project.category}</p>
                  <p className="mt-4 line-clamp-3 min-h-20 leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]" aria-label={`View ${project.title} project detail`}>
                      {t("detailButton")}
                      <ArrowUpRight className="size-4" />
                    </Link>
                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10" aria-label={`Open ${project.title} live demo`}>
                      <Radio className="size-4" />
                      {t("liveDemo")}
                    </a>
                  </div>
                </GlowCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
