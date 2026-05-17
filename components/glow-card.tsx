import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.08] hover:shadow-[0_28px_90px_rgba(34,211,238,0.15)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-20 -top-24 size-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 size-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
