"use client";

import { TRUSTED_BRANDS } from "@/constants";
import { motion } from "framer-motion";

export default function TrustedBy() {
  return (
    <section className="py-12 bg-luxury-cream-dark/50 border-y border-luxury-gold/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs font-semibold tracking-widest text-luxury-gold-dark uppercase">
          Trusted by Top Wedding Planners & Brands
        </p>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="flex overflow-hidden select-none gap-8 relative w-full mask-gradient">
        {/* Mask Overlay */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-luxury-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-luxury-cream to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex shrink-0 items-center justify-around gap-12 min-w-full"
        >
          {TRUSTED_BRANDS.map((brand, i) => (
            <div key={`brand-1-${i}`} className="flex items-center gap-2">
              <span className="text-2xl">{brand.logo}</span>
              <span className="font-serif text-sm md:text-base font-semibold tracking-wide text-luxury-green/60 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Duplicate for infinite loop */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          aria-hidden
          className="flex shrink-0 items-center justify-around gap-12 min-w-full"
        >
          {TRUSTED_BRANDS.map((brand, i) => (
            <div key={`brand-2-${i}`} className="flex items-center gap-2">
              <span className="text-2xl">{brand.logo}</span>
              <span className="font-serif text-sm md:text-base font-semibold tracking-wide text-luxury-green/60 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
