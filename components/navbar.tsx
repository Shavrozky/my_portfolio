"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { MobileMenu } from "@/components/mobile-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="#home" className="font-space text-base font-bold tracking-tight text-white transition hover:text-cyan-100 sm:text-lg">
          Rizky <span className="text-cyan-300">Suryanata</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.35)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{t(item.translationKey)}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex rounded-full border border-white/10 bg-white/[0.045] p-1">
            {(["id", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                  language === item ? "bg-cyan-200 text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.28)]" : "text-slate-300 hover:text-white"
                }`}
                aria-label={`Switch language to ${item.toUpperCase()}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href="#contact"
            className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            {t("navCta")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>
      </nav>
      <MobileMenu open={open} activeSection={activeSection} onClose={() => setOpen(false)} />
    </motion.header>
  );
}
