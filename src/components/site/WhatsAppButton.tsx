import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface Props {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({
  message,
  children,
  variant = "solid",
  className,
  size = "md",
}: Props) {
  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-sm",
  };
  const base =
    "group relative inline-flex items-center gap-2 uppercase tracking-[0.18em] font-medium transition-all duration-500 overflow-hidden rounded-none";
  const variants = {
    solid:
      "bg-foreground text-background hover:bg-[oklch(0.78_0.09_80)] hover:text-foreground",
    outline:
      "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    ghost:
      "text-foreground hover:text-[oklch(0.7_0.09_80)] underline underline-offset-8 decoration-1",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
