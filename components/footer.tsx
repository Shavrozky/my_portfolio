import Link from "next/link";
import { identity, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 {identity.name}. Built for real-world AI systems.</p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="font-semibold transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
