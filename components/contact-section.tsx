"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { identity, socialLinks } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description={t("contactDescription")}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.65 }} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlowCard className="p-8">
            <h3 className="font-space text-3xl font-bold text-white">Let&apos;s collaborate.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I am open to building AI workflows, dashboards, production-ready web applications, and real-world automation systems.
            </p>
            <div className="mt-8 grid gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-semibold">{link.label === "Email" ? identity.email : link.label}</span>
                  </a>
                );
              })}
            </div>
          </GlowCard>

          <GlowCard className="p-6 sm:p-8">
            <form className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Name
                <input className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-cyan-300/8 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Email
                <input className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-cyan-300/8 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]" type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Message
                <textarea className="min-h-36 resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-cyan-300/8 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]" name="message" placeholder="Tell me about your project" />
              </label>
              <button type="button" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                Send Message
                <Send className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
