import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y hairline py-6 bg-[var(--pearl)]">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-tight text-foreground/80"
          >
            {t}
            <span className="ml-16 text-[oklch(0.78_0.09_80)]">⊹</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
