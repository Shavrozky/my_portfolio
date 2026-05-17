import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-space text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}
