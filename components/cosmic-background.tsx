"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShootingStars } from "@/components/shooting-stars";

export function CosmicBackground() {
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#01030a]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,28,135,0.16),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(8,145,178,0.11),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(112,26,117,0.10),transparent_34%),linear-gradient(135deg,#01030a_0%,#061126_48%,#0a0614_100%)]" />
      <motion.div style={{ y: ySlow }} className="stars-layer stars-layer-one z-0" />
      <motion.div style={{ y: yFast }} className="stars-layer stars-layer-two z-0" />
      <div className="absolute -left-36 top-20 z-0 size-[34rem] rounded-full bg-cyan-950/25 blur-3xl animate-float" />
      <div className="absolute -right-36 bottom-10 z-0 size-[40rem] rounded-full bg-fuchsia-950/25 blur-3xl animate-float-delayed" />
      <div className="absolute left-1/3 top-1/2 z-0 size-[30rem] rounded-full bg-violet-950/20 blur-3xl animate-pulse-slow" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <ShootingStars />
      <div className="absolute inset-0 z-[2] bg-black/50" />
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.28)_35%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}
