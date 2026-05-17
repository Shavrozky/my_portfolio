"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onClose: () => void;
};

export function MobileMenu({ open, activeSection, onClose }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.22 }}
          className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl md:hidden"
        >
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-space text-sm font-bold text-cyan-200">Navigation</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 p-2 text-slate-200"
              aria-label="Close navigation"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? "bg-cyan-300/12 text-cyan-200" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {t(item.translationKey)}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 flex rounded-full border border-white/10 bg-white/[0.045] p-1">
            {(["id", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-black transition ${
                  language === item ? "bg-cyan-200 text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.28)]" : "text-slate-300"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
