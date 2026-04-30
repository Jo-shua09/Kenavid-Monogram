import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: "portrait" | "square" | "landscape" | "tall";
}

export function HoverImage({ src, alt, className, imgClassName, ratio = "portrait" }: Props) {
  const ratios = {
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    tall: "aspect-[3/4]",
  };
  return (
    <div className={cn("relative overflow-hidden bg-muted", ratios[ratio], className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.06]",
          imgClassName,
        )}
      />
    </div>
  );
}
