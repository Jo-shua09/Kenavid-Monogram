import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/store";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Kenavid Couture" },
      {
        name: "description",
        content:
          "Visit our Lagos atelier or chat with us directly on WhatsApp to begin your bespoke journey.",
      },
      { property: "og:title", content: "Contact - Kenavid Couture" },
      { property: "og:description", content: "Visit our Lagos atelier or chat on WhatsApp." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kenavid Couture Atelier",
          image: "https://kenavidcouture.com/logo.png",
          telephone: "+2348034593315",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7, Prince Ola Street, Seliat busstop, Idimu road",
            addressLocality: "Egbeda",
            addressRegion: "Lagos",
            addressCountry: "NG",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "19:00",
          },
          url: "https://kenavidcouture.com/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kenavid Couture, I'd like to enquire about a bespoke piece.")}`;
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Visit / Speak</span>
          <h1 className="font-display text-5xl sm:text-7xl mt-2 leading-none">
            Begin your <em className="text-gradient-gold not-italic">bespoke.</em>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Walk into the atelier, ring us, or message directly on WhatsApp - we will guide you from
            measurement to final fitting.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 mt-16">
          {[
            {
              icon: MapPin,
              title: "Atelier",
              body: "7, Prince Ola Street\nSeliat busstop, Idimu road\nEgbeda, Lagos",
            },
            { icon: Clock, title: "Working Hours", body: "Monday - Saturday\n8:00 AM - 7:00 PM" },
            { icon: Phone, title: "Telephone", body: "+234 803 459 3315\n+234 704 985 2224" },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              body: "Tap below to start a chat\nwith our atelier team.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-8 rounded-lg border border-border/60 bg-card/40 hover:border-gold/40 transition group"
            >
              <c.icon className="h-7 w-7 text-gold mb-5 group-hover:scale-110 transition-transform" />
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{c.title}</p>
              <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition-all"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
