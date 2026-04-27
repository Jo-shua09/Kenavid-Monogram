import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroPoster from "@/assets/hero-poster.jpg";
import founderImg from "@/assets/founder.jpg";
import splitProd from "@/assets/split-production.jpg";
import splitAcad from "@/assets/split-academy.jpg";
import m7 from "@/assets/m-7.jpg";
import m1 from "@/assets/m-1.jpg";
import m24 from "@/assets/m-24.jpg";
import m21 from "@/assets/m-21.jpg";
import clientStars from "@/assets/client-machine-stars.jpg";
import clientBasket from "@/assets/client-machine-basket.jpg";
import atelierOperator from "@/assets/atelier-operator.jpg";
import atelierBasketWide from "@/assets/atelier-basket-wide.jpg";
import atelierStarsWide from "@/assets/atelier-stars-wide.jpg";
import { AutoVideo } from "@/components/site/AutoVideo";
import { FadeIn } from "@/components/site/FadeIn";
import { StaggerText } from "@/components/site/StaggerText";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Marquee } from "@/components/site/Marquee";
import { HoverImage } from "@/components/site/HoverImage";
import { waMessages } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenavid Monogram — Premium Embroidery At Its Finest | Lagos" },
      {
        name: "description",
        content:
          "Premium monogram embroidery and machine operation training in Lagos. Precision craftsmanship for brands, designers, and individuals.",
      },
      { property: "og:title", content: "Kenavid Monogram — Embroidery At Its Finest" },
      {
        property: "og:description",
        content:
          "Precision-crafted premium monogram designs and expert machine operation training.",
      },
      { property: "og:image", content: "https://monogramempire.com/logo.png" },
      { name: "twitter:image", content: "https://monogramempire.com/logo.png" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Premium Monograms",
          "Logo Digitization",
          "Bulk Production",
          "Machine Operation Academy",
          "Custom Heritage Designs",
        ]}
      />
      <About />
      <TheSplit />
      <Capabilities />
      <Atelier />
      <Process />
      <Showcase />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-foreground text-background">
      <img
        src={heroPoster}
        alt="Gold crown monogram embroidery on velvet"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/80" />

      <div className="relative container-luxe pb-16 md:pb-24 pt-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] uppercase text-background/70 mb-8"
        >
          ⊹ Lagos · est. 2025 · Monogram Empire
        </motion.p>

        <StaggerText
          as="h1"
          text="Embroidery At Its Finest."
          className="font-display text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.92] tracking-[-0.04em] text-background max-w-[14ch]"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="text-base md:text-lg text-background/80 leading-relaxed max-w-md"
          >
            Precision-crafted premium monogram designs and expert machine operation training — built
            for brands, designers, and individuals who demand more than ordinary stitching.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.9 }}
            className="flex flex-wrap items-start gap-4 md:justify-end"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-[oklch(0.78_0.09_80)] transition-colors"
            >
              Explore Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/training"
              className="group inline-flex items-center gap-2 border border-background text-background px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-background hover:text-foreground transition-colors"
            >
              Join the Academy
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-background/15 pt-10"
        >
          {[
            ["500+", "Pieces Stitched"],
            ["120", "Brands Served"],
            ["40+", "Trained Operators"],
            ["1 Year", "Combined Craft"],
          ].map(([k, v]) => (
            <div key={v}>
              <p className="font-display text-3xl md:text-4xl">{k}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-background/60 mt-2">{v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <FadeIn className="lg:col-span-5">
          <div className="relative">
            <HoverImage
              src={founderImg}
              alt="Victor Atoyebi, founder of Kenavid Monogram"
              ratio="tall"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-foreground text-background px-6 py-4">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Founder</p>
              <p className="font-display text-xl mt-1">Victor Atoyebi</p>
            </div>
          </div>
        </FadeIn>
        <div className="lg:col-span-7">
          <FadeIn>
            <SectionLabel index="01">About the House</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              An atelier built on uncompromising detail.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Founded in 2025 by <strong className="text-foreground">Victor Atoyebi</strong>,
              Kenavid Monogram — Monogram Empire — was born from a refusal to accept average. Every
              stitch placed in our workshop is the product of patient calibration, premium
              materials, and a near-obsessive respect for the finished piece.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-base text-foreground/60 leading-relaxed max-w-2xl">
              We serve fashion houses, corporate clients, hospitality groups, wedding planners, and
              discerning individuals — and we train the next generation of operators through our
              hands-on academy.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 grid sm:grid-cols-3 gap-8 border-t hairline pt-8">
              {[
                ["Est.", "2025"],
                ["Based", "Lagos, NG"],
                ["Discipline", "Monograms"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">{k}</p>
                  <p className="font-display text-2xl mt-2">{v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TheSplit() {
  const cards = [
    {
      img: splitProd,
      label: "01 / Pillar I",
      title: "Production & Custom Designs",
      desc: "Premium monogramming, logo digitization, and bulk production for brands, hospitality, and bespoke clients.",
      to: "/services",
      cta: "View Services",
    },
    {
      img: splitAcad,
      label: "02 / Pillar II",
      title: "Machine Operation Academy",
      desc: "Hands-on training where you learn to operate, calibrate, and master industrial embroidery machines from day one.",
      to: "/training",
      cta: "Enroll Today",
    },
  ] as const;

  return (
    <section className="bg-[var(--pearl)] py-16 md:py-24">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel index="02">Two Pillars</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              One craft. Two disciplines.
            </h2>
          </FadeIn>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.15}>
              <Link to={c.to} className="group block">
                <div className="relative overflow-hidden aspect-[4/5] bg-foreground">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 text-background">
                    <p className="text-[10px] tracking-[0.32em] uppercase opacity-80">{c.label}</p>
                    <div>
                      <h3 className="font-display text-3xl md:text-5xl leading-[1] tracking-tight max-w-[14ch]">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-sm text-background/80 max-w-md">{c.desc}</p>
                      <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b border-background/60 pb-1 group-hover:border-[oklch(0.85_0.08_85)] group-hover:text-[oklch(0.85_0.08_85)] transition-colors">
                        {c.cta} <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      n: "01",
      t: "Custom Monograms",
      d: "Cursive, serif, modern, heraldic — designed and stitched to your exact specification.",
    },
    {
      n: "02",
      t: "Logo Digitization",
      d: "Conversion of logos into stitch-perfect embroidery files for crisp, scalable execution.",
    },
    {
      n: "03",
      t: "Bulk Production",
      d: "Uniforms, hospitality linens, corporate apparel — produced at scale without losing detail.",
    },
    {
      n: "04",
      t: "Heritage & Bridal",
      d: "Wedding handkerchiefs, ceremonial garments, and family-crest commissions.",
    },
    {
      n: "05",
      t: "Brand Collaboration",
      d: "Capsule collections and signature embroidery for fashion houses and designers.",
    },
    {
      n: "06",
      t: "Operator Training",
      d: "Six-week hands-on certification on multi-needle industrial embroidery machines.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <SectionLabel index="03">Capabilities</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                What we do, in detail.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <p className="text-foreground/70 text-lg leading-relaxed">
              From a single monogrammed handkerchief to a thousand uniformed pieces, our process
              scales without diluting the discipline. Below is a curated selection of what we are
              commissioned to do most often.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t hairline">
          {items.map((it, i) => (
            <FadeIn key={it.n} delay={(i % 3) * 0.1}>
              <div className="p-8 md:p-10 border-b border-r hairline group hover:bg-[var(--pearl)] transition-colors h-full">
                <div className="flex items-start justify-between mb-10">
                  <span className="text-xs tracking-[0.22em] text-[oklch(0.7_0.09_80)]">
                    {it.n}
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {it.t}
                </h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Consult",
      d: "We listen. Specs, materials, fabric type, deadlines, intended use — all considered before a needle moves.",
    },
    {
      n: "02",
      t: "Digitize",
      d: "Your design is engineered into a stitch file with the right density, pull compensation, and underlay.",
    },
    {
      n: "03",
      t: "Sample",
      d: "A test piece is run on identical fabric. We adjust until thread tension and finish are immaculate.",
    },
    {
      n: "04",
      t: "Produce",
      d: "Batch is run with continuous quality monitoring on calibrated multi-needle machines.",
    },
    {
      n: "05",
      t: "Finish",
      d: "Hand-trimmed, pressed, inspected. Packed for delivery or pickup with our compliments.",
    },
  ];
  return (
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="container-luxe">
        <div className="max-w-3xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-background/60">
              <span className="text-[oklch(0.85_0.08_85)]">04</span>
              <span className="h-px w-8 bg-background/30" />
              <span>The Process</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Five steps to a perfect piece.
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-background/10">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div className="bg-foreground p-8 h-full min-h-[260px] flex flex-col">
                <span className="text-[oklch(0.85_0.08_85)] text-xs tracking-[0.22em]">{s.n}</span>
                <h3 className="font-display text-3xl mt-8">{s.t}</h3>
                <p className="text-sm text-background/65 mt-4 leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const imgs = [
    { src: m7, alt: "Baroque gold embroidery", ratio: "tall" as const },
    { src: m1, alt: "Cuff monogram", ratio: "tall" as const },
    { src: m24, alt: "Geometric satin stitch", ratio: "tall" as const },
    { src: m21, alt: "Hands at the hoop", ratio: "tall" as const },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <SectionLabel index="05">Selected Work</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                A few stitches we are proud of.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:border-[oklch(0.7_0.09_80)] hover:text-[oklch(0.7_0.09_80)] transition-colors"
            >
              View Full Gallery{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {imgs.map((im, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <HoverImage src={im.src} alt={im.alt} ratio={im.ratio} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[var(--pearl)]">
      <div className="container-luxe py-16 md:py-24 text-center">
        <FadeIn>
          <SectionLabel index="06">⊹</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-5xl mx-auto text-balance">
            Have a piece that deserves more than ordinary?
          </h2>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton message={waMessages.production} size="lg">
              Request a Quote
            </WhatsAppButton>
            <WhatsAppButton message={waMessages.training} variant="outline" size="lg">
              Book a Training
            </WhatsAppButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Atelier() {
  return (
    <section className="bg-[var(--pearl)] py-16 md:py-24 overflow-hidden">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <FadeIn>
              <SectionLabel index="◐">Inside the Atelier</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
                Calibrated machines. Disciplined hands.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="lg:col-span-5">
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Our multi-needle industrial heads run at exacting tension on every fabric — from
              velvet and leather to fine linen — producing repeatable detail at scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          <FadeIn className="md:col-span-8">
            <AutoVideo
              src="/media/atelier-wide.mp4"
              poster="/media/atelier-wide-poster.jpg"
              ratio="wide"
              ariaLabel="Industrial embroidery machine stitching at the Kenavid Monogram atelier"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-4">
            <AutoVideo
              src="/media/atelier-portrait.mp4"
              poster="/media/atelier-portrait-poster.jpg"
              ratio="portrait"
              ariaLabel="Close up of needle work on a custom monogram piece"
            />
          </FadeIn>
          <FadeIn delay={0.12} className="md:col-span-7">
            <HoverImage
              src={atelierBasketWide}
              alt="Branded Kenavid Monogram machine stitching a geometric pattern on canvas"
              ratio="landscape"
            />
          </FadeIn>
          <FadeIn delay={0.18} className="md:col-span-5">
            <HoverImage
              src={atelierOperator}
              alt="Kenavid Monogram operator setting up a multi-needle embroidery machine"
              ratio="landscape"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="md:col-span-6">
            <AutoVideo
              src="/media/production-wide.mp4"
              poster="/media/production-wide-poster.jpg"
              ratio="wide"
              ariaLabel="Live production run of a custom monogram on the Kenavid Monogram machine"
            />
          </FadeIn>
          <FadeIn delay={0.24} className="md:col-span-6">
            <HoverImage
              src={atelierStarsWide}
              alt="Branded Kenavid Monogram machine stitching gold star pattern on brown leather"
              ratio="landscape"
            />
          </FadeIn>
          <FadeIn delay={0.28} className="md:col-span-6">
            <HoverImage
              src={clientBasket}
              alt="Kenavid Monogram machine detail — basket weave on linen"
              ratio="landscape"
            />
          </FadeIn>
          <FadeIn delay={0.3} className="md:col-span-6">
            <HoverImage
              src={clientStars}
              alt="Kenavid Monogram machine detail — star motif on brown leather"
              ratio="landscape"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
