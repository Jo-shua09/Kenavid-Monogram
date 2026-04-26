import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { getProduct, formatNaira, products } from "@/lib/products";
import { useCart, useWishlist, WHATSAPP_NUMBER } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} - Kenavid Couture` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} - Kenavid Couture` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: `${loaderData.product.name} - Kenavid Couture` },
          { name: "twitter:description", content: loaderData.product.description },
          { name: "twitter:image", content: loaderData.product.image },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.product.name,
              image: loaderData.product.image,
              description: loaderData.product.description,
              brand: {
                "@type": "Brand",
                name: "Kenavid Couture",
              },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: loaderData.product.priceFrom,
                highPrice: loaderData.product.priceTo,
                priceCurrency: "NGN",
                availability: "https://schema.org/InStock",
                url: `https://kenavidcouture.com/product/${loaderData.product.id}`,
              },
            }),
          },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="text-center">
        <h1 className="font-display text-3xl">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline">
          Back to Shop
        </Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const wishHas = useWishlist((s) => s.ids.includes(product.id));
  const wishToggle = useWishlist((s) => s.toggle);

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Kenavid Couture, I'd like to enquire about a custom order for "${product.name}". Please share details.`,
  )}`;

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-5 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg bg-card"
          >
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/15" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-7 lg:pt-4"
          >
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-gold">
                {product.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl mt-3 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display text-gradient-gold">
                {formatNaira(product.priceFrom)}
              </span>
              <span className="text-sm text-muted-foreground">
                - {formatNaira(product.priceTo)}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="rounded-lg border border-gold/30 bg-gold/5 p-5 text-sm">
              <p className="text-gold font-medium mb-1">✦ Bespoke / Custom Order</p>
              <p className="text-muted-foreground">
                This piece is made-to-order. Add it to your cart and check out via WhatsApp - our
                atelier will confirm your measurements, fabric and final pricing.
              </p>
            </div>

            <ul className="grid gap-2.5 text-sm">
              {product.details.map((d: string) => (
                <li key={d} className="flex gap-3 items-start">
                  <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{d}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() =>
                  add({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    priceFrom: product.priceFrom,
                  })
                }
                className="group flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm tracking-widest uppercase text-primary-foreground hover:shadow-gold transition-all"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
              <button
                onClick={() => wishToggle(product.id)}
                className={`inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm tracking-widest uppercase transition ${
                  wishHas
                    ? "border-[var(--crimson)] text-[var(--crimson)]"
                    : "border-border hover:border-gold hover:text-gold"
                }`}
              >
                <Heart className={`h-4 w-4 ${wishHas ? "fill-[var(--crimson)]" : ""}`} />
                {wishHas ? "Saved" : "Favorite"}
              </button>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" /> Enquire directly on WhatsApp
            </a>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-28">
            <h2 className="font-display text-3xl mb-8">You may also love</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
