import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { StaggerText } from "@/components/site/StaggerText";
import { SectionLabel } from "@/components/site/SectionLabel";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { HoverImage } from "@/components/site/HoverImage";
import { waMessages, waLink } from "@/lib/whatsapp";
import m2 from "@/assets/m-2.jpg";
import m6 from "@/assets/m-6.jpg";
import m10 from "@/assets/m-10.jpg";
import m15 from "@/assets/m-15.jpg";
import m22 from "@/assets/m-22.jpg";
import m11 from "@/assets/m-11.jpg";
import m17 from "@/assets/m-17.jpg";
import m25 from "@/assets/m-25.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Production - Kenavid Monogram" },
      {
        name: "description",
        content:
          "Premium monogramming, logo digitization, bulk uniform production and bespoke embroidery commissions in Lagos.",
      },
      { property: "og:title", content: "Services & Production - Kenavid Monogram" },
      {
        property: "og:description",
        content:
          "Premium monogramming, digitization, and bulk embroidery production for fashion, hospitality, and corporate clients.",
      },
      { property: "og:image", content: "https://monogramempire.com/logo.png" },
      { name: "twitter:image", content: "https://monogramempire.com/logo.png" },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    img: m2,
    title: "Bespoke Monograms",
    desc: "Single-piece commissions, family crests, ceremonial garments, and personal monograms in cursive, serif, modern, and heraldic styles.",
    feats: ["Cursive & script", "Serif & block", "Heraldic crests", "Layered & 3D puff"],
  },
  {
    n: "02",
    img: m22,
    title: "Logo Digitization",
    desc: "Conversion of brand marks into stitch-perfect embroidery files. Density, pull, and underlay engineered for the chosen fabric.",
    feats: [
      "Vector cleanup",
      "Stitch path engineering",
      "Multi-fabric tested",
      "DST/PES/EXP files",
    ],
  },
  {
    n: "03",
    img: m15,
    title: "Corporate & Uniform",
    desc: "Polos, dress shirts, work jackets, and hospitality uniforms produced with consistent quality across hundreds of pieces.",
    feats: ["Polo & dress shirts", "Caps & beanies", "Aprons & jackets", "Branded merchandise"],
  },
  {
    n: "04",
    img: m10,
    title: "Premium Apparel",
    desc: "Embroidery for fashion houses, streetwear labels, and bespoke tailors - from intricate back-pieces to discreet inner-label signatures.",
    feats: [
      "Back-piece embroidery",
      "Sleeve & chest",
      "Tailor signatures",
      "Capsule collaborations",
    ],
  },
  {
    n: "05",
    img: m6,
    title: "Leather & Accessories",
    desc: "Wallets, bags, totes, leather goods, and small accessories embroidered with metallic and tonal threads on premium materials.",
    feats: ["Leather wallets", "Tote & duffle bags", "Card holders", "Cufflinks displays"],
  },
  {
    n: "06",
    img: m25,
    title: "Heritage & Bridal",
    desc: "Wedding handkerchiefs, monogrammed pocket squares, christening gowns, and family heirlooms - pieces meant to outlive the moment.",
    feats: ["Wedding hankies", "Pocket squares", "Christening sets", "Anniversary pieces"],
  },
];

function Services() {
  return (
    <>
      <PageHero />

      <section className="container-luxe py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <FadeIn className="lg:col-span-5">
            <SectionLabel index="01">Production</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Six disciplines, one obsession with detail.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether it's a single monogrammed handkerchief for a wedding gift or five hundred
              uniforms for a hospitality launch, we bring the same patient calibration to every job.
              No shortcuts, no excuses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton message={waMessages.production}>Request a Quote</WhatsAppButton>
              <WhatsAppButton message={waMessages.bulk} variant="outline">
                Bulk Order
              </WhatsAppButton>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((s, i) => (
            <FadeIn key={s.n} delay={(i % 2) * 0.1}>
              <article className="group">
                <HoverImage src={s.img} alt={s.title} ratio="landscape" />
                <div className="mt-6 flex items-baseline justify-between">
                  <span className="text-xs tracking-[0.22em] text-[oklch(0.7_0.09_80)]">{s.n}</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                    {s.feats.length} offerings
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
                  {s.title}
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed max-w-lg">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {s.feats.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check className="h-3.5 w-3.5 text-[oklch(0.7_0.09_80)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hello Kenavid Monogram, I'd like to inquire about: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-xs uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:text-[oklch(0.7_0.09_80)] hover:border-[oklch(0.7_0.09_80)] transition-colors"
                >
                  Inquire about {s.title.split(" ")[0]} →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[var(--pearl)] py-16 md:py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <HoverImage src={m11} alt="Premium thread inventory" ratio="square" />
          </FadeIn>
          <div>
            <FadeIn>
              <SectionLabel index="02">Materials</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
                Only premium thread, every time.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                We stock high-tensile polyester, mercerized cotton, and metallic threads sourced
                from established mills. Color matched to brand guidelines and tested on your fabric
                before any production run.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  ["320+", "Thread Colors"],
                  ["12", "Fabric Types Tested"],
                  ["6", "Hooping Sizes"],
                  ["48hr", "Sample Turnaround"],
                ].map(([k, v]) => (
                  <div key={v} className="border-t hairline pt-4">
                    <p className="font-display text-3xl">{k}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mt-2">
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16 md:py-24">
        <FadeIn>
          <SectionLabel index="03">Pricing Approach</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] tracking-tight max-w-3xl">
            Transparent, project-based quotes.
          </h2>
        </FadeIn>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Single Piece",
              p: "From ₦8,000",
              d: "Personal monograms, gifts, single garment commissions.",
              m: waMessages.production,
            },
            {
              t: "Bulk Production",
              p: "Volume Tiered",
              d: "50+ pieces. Per-unit pricing decreases with quantity.",
              m: waMessages.bulk,
            },
            {
              t: "Digitization",
              p: "From ₦15,000",
              d: "Logo conversion to stitch-perfect file. Reusable forever.",
              m: waMessages.digitization,
            },
          ].map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.1}>
              <div className="border hairline p-8 md:p-10 h-full flex flex-col group hover:bg-foreground hover:text-background transition-colors duration-500">
                <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.09_80)]">
                  {c.t}
                </p>
                <p className="mt-8 font-display text-4xl md:text-5xl leading-none">{c.p}</p>
                <p className="mt-6 text-sm opacity-70 leading-relaxed flex-1">{c.d}</p>
                <WhatsAppButton message={c.m} variant="ghost" className="mt-8 self-start">
                  Get a Quote
                </WhatsAppButton>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container-luxe text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.32em] uppercase text-background/60">
              ⊹ Ready to Begin
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl mx-auto">
              Send us a brief. We'll do the rest.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(waMessages.production)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-[oklch(0.85_0.08_85)] transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 bg-foreground text-background overflow-hidden">
      <img src={m17} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
      <div className="container-luxe relative">
        <FadeIn>
          <p className="text-[10px] tracking-[0.4em] uppercase text-background/60">⊹ Production</p>
        </FadeIn>
        <StaggerText
          as="h1"
          text="Premium production, perfectly stitched."
          className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-5xl"
        />
        <FadeIn delay={0.6}>
          <p className="mt-8 text-lg text-background/70 max-w-2xl leading-relaxed">
            From single bespoke commissions to high-volume corporate orders - we handle the full
            spectrum of premium machine embroidery.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
