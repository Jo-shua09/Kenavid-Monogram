import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist, useCart } from "@/lib/store";
import { products, formatNaira } from "@/lib/products";
import { Heart, Trash2, ShoppingBag, X } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist - Kenavid Couture" },
      { name: "description", content: "Your saved Kenavid Couture pieces." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const remove = useWishlist((s) => s.remove);
  const clear = useWishlist((s) => s.clear);
  const addToCart = useCart((s) => s.add);
  const items = products.filter((p) => ids.includes(p.id));

  return (
    <div className="pt-32 pb-20 container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-end justify-between gap-6 mb-12"
      >
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Saved For Later</span>
          <h1 className="font-display text-5xl sm:text-7xl mt-2 leading-none">
            Your <em className="text-gradient-gold not-italic">Wishlist.</em>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? "piece" : "pieces"} curated
          </p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clear}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-[var(--crimson)] transition"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>
        )}
      </motion.div>

      {items.length === 0 ? (
        <div className="py-16 text-center">
          <Heart className="h-12 w-12 text-gold mx-auto mb-6 opacity-60" />
          <p className="text-muted-foreground">No favorites yet - start curating your wardrobe.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition"
          >
            Browse the Collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-lg border border-border/60 bg-card overflow-hidden hover:border-gold/60 transition"
              >
                <Link to="/product/$id" params={{ id: p.id }} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-gold border border-gold/30">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-display text-lg leading-tight group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      From <span className="text-foreground">{formatNaira(p.priceFrom)}</span>
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => remove(p.id)}
                  aria-label="Remove from wishlist"
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-background/80 backdrop-blur border border-border hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="px-5 pb-5 flex gap-2">
                  <button
                    onClick={() => {
                      addToCart({
                        id: p.id,
                        name: p.name,
                        image: p.image,
                        priceFrom: p.priceFrom,
                      });
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-[11px] tracking-widest uppercase text-primary-foreground hover:shadow-gold transition"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                  </button>
                  <button
                    onClick={() => remove(p.id)}
                    className="inline-flex items-center justify-center rounded-full border border-border w-10 h-10 hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition"
                    aria-label="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
