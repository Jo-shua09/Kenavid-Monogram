import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { formatNaira } from "@/lib/products";
import { useWishlist } from "@/lib/store";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const has = useWishlist((s) => s.ids.includes(product.id));
  const toggle = useWishlist((s) => s.toggle);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block overflow-hidden rounded-lg bg-card border border-border/60 hover:border-gold/60 transition-all duration-500"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-gold border border-gold/30">
            {product.category}
          </span>
        </div>
        <div className="p-5 space-y-1.5">
          <h3 className="font-display text-lg leading-tight group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            From <span className="text-foreground">{formatNaira(product.priceFrom)}</span>
          </p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggle(product.id);
        }}
        aria-label="Toggle wishlist"
        className="absolute top-3 right-3 p-2.5 rounded-full bg-background/70 backdrop-blur border border-border hover:border-gold transition"
      >
        <Heart
          className={`h-4 w-4 transition ${has ? "fill-[var(--crimson)] text-[var(--crimson)]" : "text-foreground"}`}
        />
      </button>
    </motion.div>
  );
}
