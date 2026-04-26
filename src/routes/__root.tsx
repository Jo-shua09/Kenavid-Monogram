import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
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
      { name: "keywords", content: "monogram embroidery Lagos, custom embroidery Nigeria, logo digitization, embroidery machine training, Kenavid Couture, industrial embroidery, bulk uniform embroidery" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#121212" },
      { property: "og:site_name", content: "Kenavid Monogram" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "canonical", href: "https://monogramempire.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kenavid Monogram",
          alternateName: "Monogram Empire",
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
            addressCountry: "NG",
          },
          openingHours: "Mo-Sa 08:00-19:00",
          priceRange: "₦₦₦",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
