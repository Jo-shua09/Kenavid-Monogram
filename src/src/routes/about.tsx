import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Kenavid Couture" },
      {
        name: "description",
        content:
          "Founded in 2021 by Victor Atoyebi, Kenavid Couture crafts bespoke male fashion in Lagos with mastery and intention.",
      },
      { property: "og:title", content: "About - Kenavid Couture" },
      { property: "og:description", content: "The story behind Kenavid Couture." },
      { property: "og:image", content: founder },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "Kenavid Couture",
            founder: {
              "@type": "Person",
              name: "Victor Atoyebi",
            },
            url: "https://kenavidcouture.com/about",
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Our Story</span>
          <h1 className="font-display text-5xl sm:text-7xl mt-2 leading-none">
            The house of <em className="text-gradient-gold not-italic">Kenavid.</em>
          </h1>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 mt-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-[1/1] rounded-lg overflow-hidden"
          >
            <img
              src={founder}
              alt="Victor Atoyebi"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <p className="font-display text-xl text-gold">Victor Atoyebi</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Founder & Creative Director
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Kenavid Couture was founded in <span className="text-gold">2021</span> by Victor
              Atoyebi - a Lagos-based designer with an obsession for the craft of bespoke menswear
              and the cultural weight that fine clothing carries.
            </p>
            <p>
              What began as a single sewing machine in a small studio has grown into a couture house
              dressing leaders, grooms and creatives across Africa and beyond. We do not chase
              trends - we chase technique, intention, and the quiet confidence that only a well-made
              garment can give a man.
            </p>
            <p>
              Every piece that leaves our atelier is hand-finished, fitted to the body, and signed
              with our promise: <em className="text-gold">clothes that matter</em>.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-24">
          {[
            {
              label: "Mission",
              body: "To craft bespoke menswear that empowers men to show up - with confidence, character and undeniable presence.",
            },
            {
              label: "Vision",
              body: "To become Africa's most respected couture house for men - celebrated globally for technique, heritage and detail.",
            },
            {
              label: "Values",
              body: "Craft over speed. Detail over decoration. Client over collection. Heritage over hype.",
            },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-lg border border-border/60 bg-card/40 hover:border-gold/40 transition"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{b.label}</p>
              <p className="text-foreground/85 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
