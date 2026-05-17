"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function AnimatedButton({ href, children, variant = "primary", className }: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-300",
          variant === "primary"
            ? "bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.32)] hover:shadow-[0_0_44px_rgba(217,70,239,0.35)]"
            : "border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:shadow-[0_0_34px_rgba(34,211,238,0.16)]",
          className
        )}
      >
        {children}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
