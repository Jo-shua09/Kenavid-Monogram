import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { waLink, waMessages } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-luxe py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Kenavid Couture monogram crest logo"
              width={88}
              height={88}
              className="h-20 w-20 object-contain mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-[10px] tracking-[0.3em] uppercase text-background/50 mb-6">
              ⊹ Kenavid Monogram
            </p>
            <h3 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
              Crafted with patience. Stitched with intent.
            </h3>
            <p className="mt-8 text-background/60 max-w-md leading-relaxed">
              Embroidery atelier and machine operation academy based in Lagos —
              serving discerning brands, designers, and individuals who value
              precision over speed.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[10px] tracking-[0.3em] uppercase text-background/50 mb-6">
              Navigate
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Production & Services" },
                { to: "/training", label: "Operation Academy" },
                { to: "/gallery", label: "Our Work" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-background/80 hover:text-[oklch(0.85_0.08_85)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-background/50 mb-6">
              Visit
            </p>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.85_0.08_85)]" />
                <span>
                  7, Prince Ola Street, Seliat Busstop,
                  <br />
                  Idimu Road, Egbeda, Lagos
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.85_0.08_85)]" />
                <span>Mon — Sat · 8:00 — 19:00</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.85_0.08_85)]" />
                <a href="tel:+2348034593315" className="hover:text-background">
                  +234 803 459 3315
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.85_0.08_85)]" />
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  WhatsApp Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Kenavid Monogram · Founded by Victor Atoyebi, est. 2025.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-background"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-background"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
