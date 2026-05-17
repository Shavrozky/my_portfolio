import { ArrowLeft, CheckCircle2, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CosmicBackground } from "@/components/cosmic-background";
import { projects } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Muhammad Rizky Suryanata`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const Icon = project.icon;

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-black text-white">
      <CosmicBackground />
      <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-8 shadow-[0_24px_90px_rgba(15,23,42,0.42)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-cyan-400/14 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-fuchsia-400/14 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                    <Icon className="size-7" />
                  </div>
                  <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-100">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
                <h1 className="mt-4 font-space text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>
                <div className="mt-8 rounded-3xl border border-cyan-300/12 bg-cyan-300/[0.055] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Impact</p>
                  <p className="mt-3 leading-7 text-cyan-50/90">{project.impact}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
                <h2 className="font-space text-3xl font-bold text-white">Overview</h2>
                <p className="mt-5 leading-8 text-slate-300">{project.description}</p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
                <h2 className="font-space text-3xl font-bold text-white">Key Features</h2>
                <ul className="mt-5 grid gap-3 text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-7">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
                <h2 className="font-space text-3xl font-bold text-white">Tech / Focus Tags</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.dashboardImage ? (
                <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                  <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1">
                    <h2 className="font-space text-2xl font-bold text-white">Dashboard Preview</h2>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
                      Product UI
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
                    <Image
                      src={project.dashboardImage}
                      alt={`${project.title} dashboard preview`}
                      width={1400}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="h-auto w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,211,238,0.04),transparent_38%,rgba(168,85,247,0.08))]" />
                  </div>
                </div>
              ) : null}

              {project.demoVideo ? (
                <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-3 backdrop-blur-2xl">
                  <div className="mb-3 flex items-center gap-2 px-2 pt-1 text-sm font-bold text-cyan-100">
                    <Radio className="size-4" />
                    Demo Preview
                  </div>
                  <video
                    src={project.demoVideo}
                    className="h-[260px] w-full rounded-[1.4rem] object-cover sm:h-[360px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
