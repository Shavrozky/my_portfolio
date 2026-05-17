"use client";

import { motion } from "framer-motion";
import { Copy, Terminal } from "lucide-react";
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/lib/language-context";

type TerminalLine = {
  type: "system" | "command" | "output" | "error" | "success";
  content: string;
};

const bootLines: TerminalLine[] = [
  { type: "system", content: "Booting Surya OS..." },
  { type: "system", content: "Loading AI profile... done" },
  { type: "system", content: "Initializing mission data... done" },
  { type: "success", content: "Ready. Type 'help' to begin." },
];

const suggestions = ["help", "whoami", "skills", "projects", "mlenz", "mia", "mzone", "stack", "contact"];

const commandResponses: Record<string, TerminalLine[]> = {
  help: [
    { type: "output", content: "Available commands:" },
    { type: "output", content: "whoami       Show profile summary" },
    { type: "output", content: "skills       Show technical focus areas" },
    { type: "output", content: "projects     Show selected missions" },
    { type: "output", content: "mlenz        Open MLenz mission brief" },
    { type: "output", content: "mia          Open MIA mission brief" },
    { type: "output", content: "mzone        Open Mzone mission brief" },
    { type: "output", content: "stack        Show current tech stack" },
    { type: "output", content: "experience   Show professional journey" },
    { type: "output", content: "contact      Show contact channels" },
    { type: "output", content: "clear        Clear terminal" },
  ],
  whoami: [
    { type: "success", content: "Muhammad Rizky Suryanata" },
    {
      type: "output",
      content:
        "AI Engineer who designs and builds practical AI-powered systems for real-world operations. Focused on Computer Vision, LLM Systems, Mining Tech, Safety Monitoring, and Fullstack AI Applications.",
    },
  ],
  skills: [
    { type: "output", content: "Core Focus:" },
    { type: "output", content: "- Computer Vision" },
    { type: "output", content: "- LLM Systems" },
    { type: "output", content: "- AI Products" },
    { type: "output", content: "- Operational Monitoring" },
    { type: "output", content: "- Fullstack Web Applications" },
    { type: "output", content: "- Cloud Deployment" },
  ],
  projects: [
    { type: "output", content: "Selected Missions:" },
    { type: "output", content: "[01] MLenz  - AI-powered mining camera analytics" },
    { type: "output", content: "[02] MIA    - Internal AI assistant and knowledge retrieval" },
    { type: "output", content: "[03] Mzone  - Safety response and operational monitoring platform" },
  ],
  mlenz: [
    { type: "success", content: "Mission: MLenz" },
    { type: "output", content: "Category: AI-Powered Mining Analytics / Computer Vision System" },
    {
      type: "output",
      content:
        "MLenz helps mining teams transform camera feeds into operational intelligence through object detection, PPE detection, OCR, violation monitoring, event logging, and AI camera analytics.",
    },
  ],
  mia: [
    { type: "success", content: "Mission: MIA" },
    { type: "output", content: "Category: AI Assistant Platform / LLM System" },
    {
      type: "output",
      content:
        "MIA is an internal AI assistant platform focused on knowledge access, workflow support, conversational interaction, retrieval workflows, and language model-powered assistance.",
    },
  ],
  mzone: [
    { type: "success", content: "Mission: Mzone" },
    { type: "output", content: "Category: Safety Response Platform / Operational Monitoring System" },
    {
      type: "output",
      content:
        "Mzone is a centralized SOS call center and safety response system for mining operations, designed to manage incident reporting, alert handling, escalation, and emergency coordination.",
    },
  ],
  stack: [
    { type: "output", content: "Frontend: React, Next.js, TypeScript, Tailwind CSS" },
    { type: "output", content: "Backend: FastAPI, Node.js, Express, Elysia" },
    { type: "output", content: "AI/ML: Python, YOLO, OCR, LLM, RAG" },
    { type: "output", content: "Data/Infra: PostgreSQL, SQLite, REST API, MQTT, MinIO" },
    { type: "output", content: "Deployment: Docker, Vercel, Cloud Run, VPS, Nginx" },
  ],
  experience: [
    { type: "output", content: "AI Engineer       PT Minergo Visi Maxima    May 2025 - Present" },
    { type: "output", content: "Technical Writer  PT Minergo Visi Maxima    Feb 2025 - May 2025" },
    { type: "output", content: "Digital Marketing PT Banti Tekno Investama  Nov 2020 - Jan 2024" },
  ],
  contact: [
    { type: "output", content: "Contact Channels:" },
    { type: "output", content: "Email    : hello@example.com" },
    { type: "output", content: "GitHub   : github.com" },
    { type: "output", content: "LinkedIn : linkedin.com" },
    { type: "success", content: "Open for collaboration, AI projects, and production-ready system development." },
  ],
  "sudo hire-surya": [{ type: "success", content: "Access granted. Collaboration channel unlocked." }],
  "unlock agarero": [{ type: "success", content: "Agarero mode activated. Building quietly. Shipping seriously." }],
};

export function InteractiveTerminal() {
  const { language } = useLanguage();
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>(bootLines);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const subtitle = useMemo(
    () =>
      language === "id"
        ? "Jelajahi profil, skill, dan project saya melalui command interface sederhana yang terinspirasi dari AI mission control."
        : "Explore my profile, skills, and selected missions through an AI-inspired command interface.",
    [language]
  );

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines([]);
      setInput("");
      setCommandHistory((history) => [...history, command]);
      setHistoryIndex(null);
      return;
    }

    const response = commandResponses[command] ?? [
      {
        type: "error" as const,
        content: `Command not found: ${command}. Type 'help' to see available commands.`,
      },
    ];

    setLines((current) => [...current, { type: "command", content: `surya@portfolio:~$ ${rawCommand}` }, ...response]);
    setCommandHistory((history) => [...history, command]);
    setHistoryIndex(null);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeCommand(input);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex = historyIndex === null ? commandHistory.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInput("");
        return;
      }
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }
  };

  const copyContact = async () => {
    await navigator.clipboard.writeText("Email: hello@example.com\nGitHub: github.com\nLinkedIn: linkedin.com");
    setLines((current) => [...current, { type: "success", content: "Contact channels copied to clipboard." }]);
  };

  return (
    <section id="console" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="AI Ops Console" title="Interactive Console" description={subtitle} />
        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#020817]/82 shadow-[0_0_70px_rgba(34,211,238,0.12),0_0_90px_rgba(168,85,247,0.10)] backdrop-blur-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_95%_100%,rgba(168,85,247,0.12),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_9px] opacity-30" />
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-rose-400/90" />
                <span className="size-3 rounded-full bg-amber-300/90" />
                <span className="size-3 rounded-full bg-emerald-300/90" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-sm">
                <Terminal className="size-4" />
                SURYA OS / AI OPS CONSOLE
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-100">ONLINE</span>
              <span className="hidden sm:inline">response: 24ms</span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  void copyContact();
                }}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-slate-200 transition hover:border-cyan-300/35 hover:text-white"
              >
                <Copy className="size-3.5" />
                Copy Contact
              </button>
            </div>
          </div>

          <div ref={outputRef} className="relative z-10 h-[420px] overflow-y-auto px-4 py-5 font-mono text-sm leading-7 sm:h-[520px] sm:px-6">
            {lines.map((line, index) => (
              <motion.div
                key={`${line.content}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className={
                  line.type === "command"
                    ? "text-cyan-200"
                    : line.type === "error"
                      ? "text-rose-300"
                      : line.type === "success"
                        ? "text-emerald-200"
                        : line.type === "system"
                          ? "text-violet-200/90"
                          : "text-slate-300"
                }
              >
                {line.content}
              </motion.div>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <span className="font-mono text-cyan-200">surya@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                className="min-w-0 flex-1 bg-transparent font-mono text-white outline-none placeholder:text-slate-500"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
              <span className="terminal-cursor h-5 w-2 bg-cyan-200" />
            </div>
          </div>
        </motion.div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => executeCommand(suggestion)}
              className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 font-mono text-xs font-bold text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
