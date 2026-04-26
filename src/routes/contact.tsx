import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { StaggerText } from "@/components/site/StaggerText";
import { SectionLabel } from "@/components/site/SectionLabel";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waMessages, waLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
import s1 from "@/assets/studio-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kenavid Monogram" },
      {
        name: "description",
        content:
          "Visit our Egbeda atelier or reach us via WhatsApp. Open Mon–Sat, 8am–7pm. Lagos, Nigeria.",
      },
      { property: "og:title", content: "Contact — Kenavid Monogram" },
      {
        property: "og:description",
        content:
          "Reach Kenavid Monogram in Lagos. WhatsApp, phone, and atelier address.",
      },
      { property: "og:image", content: "https://monogramempire.com/logo.png" },
      { name: "twitter:image", content: "https://monogramempire.com/logo.png" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-16 container-luxe">
        <FadeIn>
          <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/60">⊹ Get in Touch</p>
        </FadeIn>
        <StaggerText
          as="h1"
          text="Let's start the conversation."
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl"
        />
        <FadeIn delay={0.6}>
          <p className="mt-8 text-lg text-foreground/65 max-w-2xl leading-relaxed">
            For quotes, commissions, training enrollment, or simply a question —
            WhatsApp is the fastest route. We respond within working hours.
          </p>
        </FadeIn>
      </section>

      <section className="container-luxe pb-24 md:pb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-foreground/10 border hairline">
          {[
            { Icon: MapPin, label: "Atelier", value: "7, Prince Ola Street, Seliat Busstop, Idimu Road, Egbeda, Lagos." },
            { Icon: Clock, label: "Working Hours", value: "Monday — Saturday\n8:00 AM — 7:00 PM" },
            { Icon: Phone, label: "Phone", value: "+234 803 459 3315", href: "tel:+2348034593315" },
            { Icon: MessageCircle, label: "WhatsApp", value: "Tap to start a chat", href: waLink(waMessages.general) },
            { Icon: Mail, label: "Email", value: "hello@kenavidmonogram.com", href: "mailto:hello@kenavidmonogram.com" },
            { Icon: Instagram, label: "Instagram", value: "@kenavidmonogram", href: "https://instagram.com" },
          ].map(({ Icon, label, value, href }, i) => (
            <FadeIn key={label} delay={(i % 2) * 0.08}>
              <a
                href={href ?? "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-background block p-8 md:p-10 h-full group hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                <Icon className="h-5 w-5 text-[oklch(0.7_0.09_80)] group-hover:text-[oklch(0.85_0.08_85)] transition-colors" />
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] opacity-60">{label}</p>
                <p className="mt-3 font-display text-xl md:text-2xl leading-tight whitespace-pre-line">{value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="lg:col-span-5">
          <div className="border hairline overflow-hidden h-full flex flex-col">
            <img src={s1} alt="Kenavid Couture atelier" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <SectionLabel index="⊹">Inquiries</SectionLabel>
              <h3 className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
                Quick links to get a fast response.
              </h3>
              <div className="mt-8 grid gap-3">
                <WhatsAppButton message={waMessages.production} size="md" className="w-full justify-center">Request a Quote</WhatsAppButton>
                <WhatsAppButton message={waMessages.training} variant="outline" size="md" className="w-full justify-center">Book a Training</WhatsAppButton>
                <WhatsAppButton message={waMessages.bulk} variant="outline" size="md" className="w-full justify-center">Bulk Order Inquiry</WhatsAppButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-[var(--pearl)]">
        <div className="container-luxe py-20 md:py-28 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.32em] uppercase text-foreground/60">⊹ Visit</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mx-auto">
              Walk in. We'll put on the kettle.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://maps.google.com/?q=Idimu+Road+Egbeda+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-[oklch(0.78_0.09_80)] hover:text-foreground transition-colors"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
