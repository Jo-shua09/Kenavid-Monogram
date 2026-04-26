import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while the preloader is active
    document.body.style.overflow = "hidden";

    // Give the preloader enough time to show the elegant animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scrolling
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Logo Reveal */}
            <motion.img
              src={logo}
              alt="Kenavid Monogram Crest"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-20 md:w-24 md:h-24 object-contain brightness-0 invert mb-2"
            />

            {/* Brand Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-gold">
                KENAVID
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold/50 mt-2">
                Monogram Empire
              </span>
            </motion.div>

            {/* Luxury Progress Line */}
            <div className="mt-4 w-48 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full bg-[oklch(0.78_0.09_80)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
