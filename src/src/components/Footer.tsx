import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MessageCircle, Phone, MapPin, AtSign } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/store";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="container mx-auto px-5 lg:px-8 py-12 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <Logo />
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Kenavid Couture - clothes that matter. Bespoke male fashion crafted with mastery,
            intention and timeless elegance.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-gold tracking-widest uppercase text-xs">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-gold">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-gold">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-gold tracking-widest uppercase text-xs">Atelier</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> 7 Prince Ola Street, Seliat
              busstop, Idimu road, Egbeda, Lagos
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-gold" /> +234 803 459 3315
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-gold">
                <AtSign className="h-4 w-4 text-gold" /> @kenavidcouture
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kenavid Couture. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Clothes That Matter</p>
        </div>
      </div>
    </footer>
  );
}
