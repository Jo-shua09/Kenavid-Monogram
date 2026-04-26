interface Props {
  index?: string;
  children: React.ReactNode;
}
export function SectionLabel({ index, children }: Props) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-foreground/60">
      {index && <span className="text-[oklch(0.7_0.09_80)]">{index}</span>}
      <span className="h-px w-8 bg-foreground/30" />
      <span>{children}</span>
    </div>
  );
}
