import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart, buildWhatsAppCheckoutUrl } from "@/lib/store";
import { formatNaira } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart - Kenavid Couture" },
      { name: "description", content: "Review your selections and check out via WhatsApp." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const subtotal = useCart((s) => s.items.reduce((sum, i) => sum + i.priceFrom * i.qty, 0));
  const clear = useCart((s) => s.clear);

  const checkout = () => {
    if (items.length === 0) return;
    window.open(buildWhatsAppCheckoutUrl(items), "_blank");
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mb-12"
      >
        <span className="text-xs tracking-[0.4em] uppercase text-gold">Your Selections</span>
        <h1 className="font-display text-5xl sm:text-7xl mt-2 leading-none">
          The <em className="text-gradient-gold not-italic">Cart.</em>
        </h1>
      </motion.div>

      {items.length === 0 ? (
        <div className="py-16 text-center">
          <ShoppingBag className="h-12 w-12 text-gold mx-auto mb-6 opacity-60" />
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition"
          >
            Discover Pieces
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((it) => (
                <motion.div
                  key={it.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-5 p-4 rounded-lg border border-border/60 bg-card/40"
                >
                  <Link to="/product/$id" params={{ id: it.id }} className="shrink-0">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="h-28 w-24 object-cover rounded-md"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <Link
                        to="/product/$id"
                        params={{ id: it.id }}
                        className="font-display text-lg hover:text-gold line-clamp-1"
                      >
                        {it.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        From {formatNaira(it.priceFrom)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-border rounded-full">
                        <button
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="p-2 hover:text-gold"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-sm w-8 text-center">{it.qty}</span>
                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="p-2 hover:text-gold"
                          aria-label="Increase"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(it.id)}
                        className="text-muted-foreground hover:text-[var(--crimson)] p-2"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <button
              onClick={clear}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-[var(--crimson)] mt-2"
            >
              Clear cart
            </button>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-lg border border-gold/30 bg-card/60 space-y-5">
              <h3 className="font-display text-xl">Order Summary</h3>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated subtotal</span>
                <span className="font-display text-gold">{formatNaira(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Final pricing depends on fabric, embellishment & timeline. Our atelier confirms your
                quote on WhatsApp.
              </p>
              <button
                onClick={checkout}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Checkout via WhatsApp
              </button>
              <Link
                to="/shop"
                className="block text-center text-xs tracking-widest uppercase text-muted-foreground hover:text-gold"
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
