import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Sparkles, Crown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import founder from "@/assets/founder.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenavid Couture - Clothes That Matter" },
      {
        name: "description",
        content:
          "Bespoke male fashion crafted in Lagos. Agbada, kaftan & couture menswear that tells your story.",
      },
      { property: "og:title", content: "Kenavid Couture - Clothes That Matter" },
      { property: "og:description", content: "Bespoke male fashion crafted in Lagos." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kenavid Couture",
          url: "https://kenavidcouture.com",
          description:
            "Bespoke male fashion crafted in Lagos. Agbada, kaftan & couture menswear that tells your story.",
          foundingDate: "2021",
          founder: {
            "@type": "Person",
            name: "Victor Atoyebi",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "7, Prince Ola Street, Seliat busstop, Idimu road",
            addressLocality: "Egbeda, Lagos",
            addressCountry: "NG",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234 803 459 3315",
            contactType: "customer service",
          },
          sameAs: [
            "https://instagram.com/kenavidcouture",
            "https://facebook.com/kenavidcouture",
            "https://twitter.com/kenavidcouture",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kenavid Couture",
          url: "https://kenavidcouture.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://kenavidcouture.com/shop?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-background/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative container mx-auto px-5 lg:px-8 pb-24 pt-20 md:pt-40 grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-gold"
            >
              <span className="h-px w-10 bg-gold" /> Est. 2021 - Lagos
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter"
            >
              Clothes <br />
              <span className="text-gradient-gold italic">That Matter.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Kenavid Couture is a Lagos-born bespoke male fashion house - crafting agbada, kaftan
              and tailored menswear with intention, mastery and timeless elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition-all"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-3.5 text-sm tracking-widest uppercase text-foreground hover:bg-gold/10 hover:border-gold transition"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container mx-auto px-5 lg:px-8 py-16 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Scissors,
            title: "Bespoke Tailoring",
            text: "Every garment cut and stitched to your exact measurements.",
          },
          {
            icon: Crown,
            title: "Heritage Craft",
            text: "Honoring African couture heritage with a modern luxury lens.",
          },
          {
            icon: Sparkles,
            title: "House Embroidery",
            text: "Hand-embroidered details - 40+ hours of artistry per piece.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-8 rounded-lg border border-border/60 bg-card/40 hover:border-gold/40 transition group"
          >
            <p.icon className="h-7 w-7 text-gold mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="container mx-auto px-5 lg:px-8 py-16 pt-8">
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-gold">The Collection</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">Featured Pieces</h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-gold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="container mx-auto px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[1/1] overflow-hidden rounded-lg"
        >
          <img
            src={founder}
            alt="Victor Atoyebi at the atelier"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">The House</span>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            A house built on <em className="text-gradient-gold not-italic">intention.</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2021 by Victor Atoyebi, Kenavid Couture exists to dress men of distinction -
            leaders, grooms, creatives - in garments that speak before they do. Every stitch carries
            our promise: craftsmanship without compromise.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-gold hover:gap-4 transition-all"
          >
            Read Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
