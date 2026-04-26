import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, formatNaira, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop - Kenavid Couture" },
      {
        name: "description",
        content:
          "Browse the Kenavid Couture collection - agbada, kaftan, casual wear and signature monogram designs.",
      },
      { property: "og:title", content: "Shop - Kenavid Couture" },
      { property: "og:description", content: "Browse the bespoke menswear collection." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Shop - Kenavid Couture",
          description:
            "Browse the Kenavid Couture collection - agbada, kaftan, casual wear and signature monogram designs.",
          url: "https://kenavidcouture.com/shop",
        }),
      },
    ],
  }),
  component: ShopPage,
});

type SortKey = "featured" | "name-asc" | "name-desc" | "price-asc" | "price-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name: A → Z" },
  { value: "name-desc", label: "Name: Z → A" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

const PRICE_MIN = Math.min(...products.map((p) => p.priceFrom));
const PRICE_MAX = Math.max(...products.map((p) => p.priceFrom));

function ShopPage() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX);
  const [minPrice, setMinPrice] = useState<number>(PRICE_MIN);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (filter !== "All") list = list.filter((p) => p.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      );
    }
    list = list.filter((p) => p.priceFrom >= minPrice && p.priceFrom <= maxPrice);

    switch (sort) {
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        list.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price-desc":
        list.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
    }
    return list;
  }, [filter, query, sort, minPrice, maxPrice]);

  const resetAll = () => {
    setFilter("All");
    setQuery("");
    setSort("featured");
    setMinPrice(PRICE_MIN);
    setMaxPrice(PRICE_MAX);
  };

  const activeCount =
    (filter !== "All" ? 1 : 0) +
    (query.trim() ? 1 : 0) +
    (minPrice !== PRICE_MIN || maxPrice !== PRICE_MAX ? 1 : 0);

  return (
    <div className="pt-32 pb-20 container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="text-xs tracking-[0.4em] uppercase text-gold">Atelier Collection</span>
        <h1 className="font-display text-5xl sm:text-7xl mt-4 leading-none">
          The <em className="text-gradient-gold not-italic">Wardrobe.</em>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
          Each piece is made-to-order. Pricing reflects a starting range - your final quote is based
          on fabric, embellishment & timeline.
        </p>
      </motion.div>

      {/* TOP BAR */}
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pieces…"
            className="w-full rounded-full border border-border bg-card/40 pl-11 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
            {activeCount > 0 && (
              <span className="ml-1 h-5 w-5 rounded-full bg-gold text-primary-foreground text-[10px] flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none rounded-full border border-border bg-card/40 pl-4 pr-10 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-gold transition cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-background">
                  {o.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold">
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <AnimatePresence>
          {(filtersOpen || true) && (
            <motion.aside
              initial={false}
              className={`${filtersOpen ? "block" : "hidden"} lg:block space-y-8 lg:sticky lg:top-28 lg:self-start`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-gold">Categories</h3>
                  {activeCount > 0 && (
                    <button
                      onClick={resetAll}
                      className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-gold transition inline-flex items-center gap-1"
                    >
                      <X className="h-3 w-3" /> Reset
                    </button>
                  )}
                </div>
                <ul className="space-y-1">
                  {categories.map((c) => {
                    const count =
                      c === "All"
                        ? products.length
                        : products.filter((p) => p.category === c).length;
                    const active = filter === c;
                    return (
                      <li key={c}>
                        <button
                          onClick={() => setFilter(c)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-md text-sm transition ${
                            active
                              ? "bg-gold/10 text-gold border border-gold/30"
                              : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span>{c}</span>
                          <span className="text-[10px] tabular-nums opacity-70">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Min</span>
                    <span className="text-foreground tabular-nums">{formatNaira(minPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={10000}
                    value={minPrice}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setMinPrice(Math.min(v, maxPrice));
                    }}
                    className="w-full accent-[var(--gold)]"
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Max</span>
                    <span className="text-foreground tabular-nums">{formatNaira(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={10000}
                    value={maxPrice}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setMaxPrice(Math.max(v, minPrice));
                    }}
                    className="w-full accent-[var(--gold)]"
                  />
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* GRID */}
        <div>
          <p className="mb-6 text-xs tracking-widest uppercase text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            {filter !== "All" && (
              <>
                {" "}
                in <span className="text-gold">{filter}</span>
              </>
            )}
          </p>
          {filtered.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">No pieces match your filters.</p>
              <button
                onClick={resetAll}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs tracking-widest uppercase text-primary-foreground hover:shadow-gold transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
