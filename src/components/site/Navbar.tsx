import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Academy" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled && !open
            ? "bg-background/75 backdrop-blur-xl border-b hairline"
            : "bg-transparent",
        )}
      >
        <div className="container-luxe flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Kenavid Monogram — Home">
            <img
              src={logo}
              alt="Kenavid Couture monogram crest logo"
              width={44}
              height={44}
              className={cn(
                "h-10 w-10 md:h-11 md:w-11 object-contain transition-transform duration-500 group-hover:scale-105",
                open && "brightness-0 invert",
              )}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className={cn("font-display text-sm tracking-tight", open && "text-white")}>KENAVID</span>
              <span className={cn("text-[10px] tracking-[0.3em] uppercase", open ? "text-white/60" : "text-muted-foreground")}>
                Monogram
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative text-xs uppercase tracking-[0.22em] font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                activeProps={{
                  className:
                    "text-foreground after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-[oklch(0.78_0.09_80)]",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton message={waMessages.general} variant="solid" size="sm">
              Inquire
            </WhatsAppButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden relative z-[70] h-10 w-10 grid place-items-center border transition-colors",
              open
                ? "border-white text-white bg-transparent"
                : "border-foreground text-foreground",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-[60] bg-foreground text-background overflow-y-auto overflow-x-hidden"
            style={{ height: "100dvh" }}
          >
            <div className="container-luxe min-h-full pt-24 pb-12 flex flex-col">
              <nav className="flex-1 flex flex-col justify-center gap-5 sm:gap-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      className="block font-display text-4xl sm:text-5xl tracking-tight text-background hover:text-[oklch(0.85_0.08_85)] transition-colors break-words"
                      activeProps={{ className: "text-[oklch(0.85_0.08_85)]" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-auto pt-8 border-t border-background/15 flex flex-col gap-4"
              >
                <WhatsAppButton message={waMessages.general} className="w-fit">
                  Inquire on WhatsApp
                </WhatsAppButton>
                <p className="text-[10px] tracking-[0.3em] uppercase text-background/50">
                  Lagos · +234 803 459 3315
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
