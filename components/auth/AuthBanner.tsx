"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, MapPin, Briefcase, Sparkles } from "lucide-react";
import Link from "next/link";

const TESTIMONIALS = [
  {
    quote: "Booking my wedding Mehendi through MehndiGo was the most stress-free decision I made! The artist arrived on time, was extremely polite, and the portrait designs she made of us were breathtaking.",
    name: "Rhea Deshmukh",
    role: "Bride • Bandra, Mumbai",
  },
  {
    quote: "I was extremely concerned about the stain color, but the organic henna used by MehndiGo gave me a deep maroon tone that lasted for more than a week. Incredible service and verified professionalism.",
    name: "Ishita Gupta",
    role: "Sister • Gurugram",
  },
  {
    quote: "We booked guest packages for 40 guests. MehndiGo dispatched 4 extremely fast and professional artists. Everyone loved their speed and intricate patterns. Worth every rupee!",
    name: "Kavya Murthy",
    role: "Bride • Jayanagar, Bengaluru",
  },
];

export default function AuthBanner() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-luxury-green-dark border-r border-luxury-gold/15 flex flex-col justify-between p-12 overflow-hidden select-none">
      {/* Background radial highlight shapes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Top Section: Logo & Slogan */}
      <div className="relative z-10">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden">
            <img src="/logo.jpeg" alt="MehndiGo Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wide text-white">
            Mehndi<span className="text-luxury-gold">Go</span>
          </span>
        </Link>
        <p className="text-xs font-semibold text-luxury-gold-light uppercase tracking-widest mt-3 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
          India&apos;s Premiere Booking Platform
        </p>
      </div>

      {/* 2. Middle Section: Stats Cards */}
      <div className="relative z-10 my-8 flex flex-col items-center justify-center">
        
        {/* Mandala vector background art */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
          <svg className="w-80 h-80 fill-luxury-gold animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />
            <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(30 50 50)" />
            <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(60 50 50)" />
            <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(95 50 50)" />
          </svg>
        </div>

        {/* Floating statistics cards */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative">
          
          {/* Card 1: Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5 shadow-lg"
          >
            <div className="flex gap-0.5 text-luxury-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-luxury-gold" />
              ))}
            </div>
            <span className="text-xl font-bold text-white leading-none mt-1">4.9 ★</span>
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Average Rating</span>
          </motion.div>

          {/* Card 2: Bookings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5 shadow-lg"
          >
            <Users className="w-4 h-4 text-luxury-gold" />
            <span className="text-xl font-bold text-white leading-none mt-1">5,000+</span>
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Happy Brides</span>
          </motion.div>

          {/* Card 3: Artists */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5 shadow-lg"
          >
            <Briefcase className="w-4 h-4 text-luxury-gold" />
            <span className="text-xl font-bold text-white leading-none mt-1">1,000+</span>
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Verified Artists</span>
          </motion.div>

          {/* Card 4: Cities */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5 shadow-lg"
          >
            <MapPin className="w-4 h-4 text-luxury-gold" />
            <span className="text-xl font-bold text-white leading-none mt-1">50+</span>
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Cities Serviced</span>
          </motion.div>

        </div>
      </div>

      {/* 3. Bottom Section: Automated Review Slider */}
      <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md overflow-hidden min-h-[140px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <p className="text-xs sm:text-sm font-sans text-white/90 italic leading-relaxed">
              &ldquo;{TESTIMONIALS[activeIdx].quote}&rdquo;
            </p>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
              <span className="font-bold text-white text-xs">
                {TESTIMONIALS[activeIdx].name}
              </span>
              <span className="text-[10px] text-white/55 font-semibold">
                {TESTIMONIALS[activeIdx].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
