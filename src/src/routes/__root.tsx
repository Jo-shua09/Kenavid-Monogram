import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import "../styles.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/icon.jpg";

function GlobalLoader({ isInitial }: { isInitial?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: isInitial ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Outer delicate spinning rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-transparent border-t-gold/80 border-r-gold/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-transparent border-b-gold/60 border-l-gold/20"
          />
          {/* Central Logo with breathing animation */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <img src={logo} alt="Kenavid Couture" className="h-full w-full object-cover" />
          </motion.div>
        </div>

        {/* Brand Text & Sleek Progress Line */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-[11px] tracking-[0.5em] text-gold uppercase pl-1">
            Kenavid
          </span>
          <div className="h-[1px] w-16 bg-gold/20 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 bg-gold"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-5">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl text-gradient-gold">404</p>
        <h1 className="mt-4 text-2xl font-display">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for has wandered off the runway.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => {
    return {
      meta: [
        // Dynamic meta overrides for nested routes can be placed here in the future
      ],
    };
  },
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <AnimatePresence>
          {(initialLoading || isNavigating) && <GlobalLoader isInitial={initialLoading} />}
        </AnimatePresence>
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
