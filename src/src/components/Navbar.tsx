import { Link, useRouterState } from "@tanstack/react-router";
import {
  AtSign,
  Heart,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { useCart, useWishlist } from "@/lib/store";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/wishlist", label: "Wishlist" },
  { to: "/cart", label: "Cart" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cartCount = useCart((s) => s.items.reduce((a, i) => a + i.qty, 0));
  const wishCount = useWishlist((s) => s.ids.length);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-black border-b border-gold/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-500 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative p-2.5 rounded-full hover:bg-white/5 transition"
          >
            <Heart className="h-5 w-5" />
            {mounted && wishCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[var(--crimson)] text-[10px] font-semibold flex items-center justify-center text-white">
                {wishCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative p-2.5 rounded-full hover:bg-white/5 transition"
          >
            <ShoppingCart className="h-5 w-5" />
            {mounted && cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold text-[10px] font-semibold flex items-center justify-center text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full hover:bg-white/5"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 top-[68px] bg-black overflow-y-auto"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="min-h-[calc(100vh-68px)] flex flex-col justify-between px-6 pt-12 pb-10"
            >
              <nav className="flex flex-col gap-1">
                {links.map((l) => {
                  const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                  return (
                    <motion.div
                      key={l.to}
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      <Link
                        to={l.to}
                        className={`group flex items-baseline justify-between border-b border-white/10 py-5 ${
                          active ? "text-gold" : "text-foreground"
                        }`}
                      >
                        <span className="font-display text-4xl sm:text-5xl tracking-tight">
                          {l.label}
                        </span>
                        <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                          0{links.indexOf(l) + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
                }}
                className="mt-12 space-y-5 text-sm text-muted-foreground"
              >
                <a
                  href="tel:+2348034593315"
                  className="flex items-center gap-3 hover:text-gold transition"
                >
                  <Phone className="h-4 w-4 text-gold" /> +234 803 459 3315
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span>7 Prince Ola St, Idimu Rd, Egbeda, Lagos</span>
                </div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-gold transition"
                >
                  <AtSign className="h-4 w-4 text-gold" /> @kenavidcouture
                </a>
                <p className="pt-4 text-[10px] tracking-[0.4em] uppercase text-gold/60">
                  Clothes That Matter
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
