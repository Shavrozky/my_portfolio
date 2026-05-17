import type { CSSProperties } from "react";

const meteors = [
  { top: "6%", left: "96%", width: "180px", delay: "0s", duration: "5.5s" },
  { top: "14%", left: "82%", width: "120px", delay: "1.2s", duration: "6s" },
  { top: "25%", left: "100%", width: "220px", delay: "2.5s", duration: "6.8s" },
  { top: "52%", left: "98%", width: "200px", delay: "5.1s", duration: "7s" },
  { top: "70%", left: "88%", width: "140px", delay: "6.4s", duration: "6.2s" },
];

export function ShootingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {meteors.map((meteor, index) => (
        <span
          key={index}
          className="shooting-star"
          style={
            {
              "--meteor-top": meteor.top,
              "--meteor-left": meteor.left,
              "--meteor-width": meteor.width,
              "--meteor-delay": meteor.delay,
              "--meteor-duration": meteor.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
