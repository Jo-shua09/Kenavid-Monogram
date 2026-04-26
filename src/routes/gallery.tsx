import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/site/FadeIn";
import { StaggerText } from "@/components/site/StaggerText";
import { SectionLabel } from "@/components/site/SectionLabel";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { gallery } from "@/lib/gallery";
import { waMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Kenavid Monogram" },
      {
        name: "description",
        content:
          "A curated archive of premium monogram embroidery - apparel, accessories, heritage pieces, and atelier work.",
      },
      { property: "og:title", content: "Gallery - Kenavid Monogram" },
      {
        property: "og:description",
        content:
          "Selected monogram and embroidery work from the Kenavid Monogram atelier in Lagos.",
      },
      { property: "og:image", content: "https://monogramempire.com/logo.png" },
      { name: "twitter:image", content: "https://monogramempire.com/logo.png" },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Apparel", "Accessories", "Heritage", "Atelier", "Corporate"] as const;

function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active],
  );

  return (
    <>
      <section className="pt-40 md:pt-48 pb-12 container-luxe">
        <FadeIn>
          <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/60">⊹ The Archive</p>
        </FadeIn>
        <StaggerText
          as="h1"
          text="Selected work. Honest stitches."
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl"
        />
        <FadeIn delay={0.6}>
          <p className="mt-8 text-lg text-foreground/65 max-w-2xl leading-relaxed">
            A growing archive of pieces produced in our Lagos atelier - from single bespoke
            commissions to brand collaborations and academy work.
          </p>
        </FadeIn>
      </section>

      <section className="container-luxe sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur-md border-y hairline py-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-4 py-2 text-[11px] uppercase tracking-[0.22em] border transition-colors",
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent border-foreground/15 text-foreground/70 hover:border-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            {filtered.length} pieces
          </span>
        </div>
      </section>

      <section className="container-luxe py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 [grid-auto-flow:dense]">
          <AnimatePresence mode="popLayout">
            {filtered.map((g, i) => (
              <motion.figure
                key={g.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: (i % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative overflow-hidden bg-muted",
                  g.span === "tall" && "row-span-2 aspect-[3/5]",
                  g.span === "wide" && "col-span-2 aspect-[16/10]",
                  !g.span && "aspect-[4/5]",
                )}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-foreground/85 to-transparent text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[oklch(0.85_0.08_85)]">
                    {g.category}
                  </p>
                  <p className="mt-1 text-xs leading-snug">{g.alt}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-[var(--pearl)] py-24 md:py-32">
        <div className="container-luxe text-center">
          <FadeIn>
            <SectionLabel index="⊹">Commission a Piece</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mx-auto">
              See something you like? Let's make yours.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <WhatsAppButton message={waMessages.production} size="lg">
                Request a Quote
              </WhatsAppButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
