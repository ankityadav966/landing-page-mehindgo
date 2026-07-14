"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress to reach 100% in 2.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-luxury-green-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Golden/Red ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,57,53,0.15),transparent_60%)] pointer-events-none animate-pulse" />

      {/* Decorative patterns */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center max-w-sm px-6 z-10">
        
        {/* Glow Logo container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-32 h-32 mb-6 overflow-hidden flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <img src="/logo.jpeg" alt="MehndiGo Logo" className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>

        {/* Brand Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white text-center mb-6"
        >
          Mehndi<span className="text-luxury-gold">Go</span>
        </motion.h1>

        {/* Thin Gold Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full bg-gold-gradient"
          />
        </div>

        {/* Loading Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-cream/80 text-center"
        >
          Loading Luxury Henna Experience
        </motion.p>
        
      </div>
    </motion.div>
  );
}
