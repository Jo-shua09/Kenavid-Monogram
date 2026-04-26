import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">⊹ 404</p>
        <h1 className="mt-6 font-display text-6xl md:text-7xl tracking-tight">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-[oklch(0.78_0.09_80)] hover:text-foreground transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kenavid Monogram — Premium Embroidery & Machine Training in Lagos" },
      {
        name: "description",
        content:
          "Premium monogram embroidery production and machine operation training in Lagos, Nigeria. Founded by Victor Atoyebi.",
      },
      { name: "author", content: "Kenavid Monogram" },
      {
        name: "keywords",
        content:
          "monogram embroidery Lagos, custom embroidery Nigeria, logo digitization, embroidery machine training, Kenavid Couture, industrial embroidery, bulk uniform embroidery",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#121212" },
      { property: "og:site_name", content: "Kenavid Monogram" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      {
        property: "og:title",
        content: "Kenavid Monogram — Premium Embroidery & Machine Training in Lagos",
      },
      {
        property: "og:description",
        content:
          "Premium monogram embroidery production and machine operation training in Lagos, Nigeria. Founded by Victor Atoyebi.",
      },
      { property: "og:url", content: "https://monogramempire.com/" },
      { property: "og:image", content: "https://monogramempire.com/og-image.jpg" },
      { property: "og:image:alt", content: "Kenavid Monogram Embroidery Production" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Kenavid Monogram — Premium Embroidery & Machine Training in Lagos",
      },
      {
        name: "twitter:description",
        content:
          "Premium monogram embroidery production and machine operation training in Lagos, Nigeria. Founded by Victor Atoyebi.",
      },
      { name: "twitter:image", content: "https://monogramempire.com/og-image.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "canonical", href: "https://monogramempire.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://monogramempire.com/#organization",
              name: "Kenavid Monogram",
              alternateName: "Monogram Empire",
              url: "https://monogramempire.com/",
              image: "https://monogramempire.com/logo.png",
              logo: "https://monogramempire.com/logo.png",
              description:
                "Premium monogram embroidery atelier and machine operation training academy in Lagos.",
              founder: { "@type": "Person", name: "Victor Atoyebi" },
              telephone: "+2348034593315",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7, Prince Ola Street, Seliat Busstop, Idimu Road, Egbeda",
                addressLocality: "Lagos",
                addressRegion: "LA",
                addressCountry: "NG",
              },
              openingHours: "Mo-Sa 08:00-19:00",
              priceRange: "₦₦₦",
            },
            {
              "@type": "WebSite",
              "@id": "https://monogramempire.com/#website",
              url: "https://monogramempire.com/",
              name: "Kenavid Monogram",
              publisher: {
                "@id": "https://monogramempire.com/#organization",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Scripts />
    </>
  );
}
