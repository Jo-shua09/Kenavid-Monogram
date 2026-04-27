import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  ratio?: "portrait" | "square" | "landscape" | "wide";
  ariaLabel: string;
}

const ratios = {
  portrait: "aspect-[9/16]",
  square: "aspect-square",
  landscape: "aspect-[16/10]",
  wide: "aspect-video",
};

export function AutoVideo({
  src,
  poster,
  className,
  videoClassName,
  ratio = "wide",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-foreground", ratios[ratio], className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        className={cn("absolute inset-0 h-full w-full object-cover", videoClassName)}
      />
    </div>
  );
}
