"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Star, Users, Download, Search, Bell } from "lucide-react";
import Image from "next/image";
import { APK_DOWNLOAD_URL } from "@/constants";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-luxury-cream overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-luxury-green-light/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle traditional shape outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-luxury-gold/5 rounded-full pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Wedding Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-green/5 border border-luxury-gold/15 text-luxury-gold mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest leading-none">
                India's Premiere Booking Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-luxury-green leading-[1.1] mb-6"
            >
              Verified Mehendi Artists <span className="text-luxury-gold italic">At Your Doorstep</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-luxury-green/80 leading-relaxed mb-8 max-w-xl"
            >
              Connect with verified luxury Mehndi artists. Secure booking, custom style packages, and premium organic henna for your special wedding day.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold tracking-wide text-white rounded-full bg-luxury-green hover:bg-luxury-green-light border border-luxury-gold/20 shadow-luxury hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 mr-2"
              >
                Become an Artist
              </a>
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold tracking-wide text-luxury-green rounded-full bg-white hover:bg-neutral-50 border border-luxury-green/25 hover:border-luxury-gold shadow-luxury hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download className="w-5 h-5 text-luxury-gold" />
                Download APK
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Panel & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Smartphone Device Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto border-[12px] border-luxury-green-dark bg-luxury-green-dark rounded-[2.5rem] h-[500px] w-[250px] sm:h-[580px] sm:w-[290px] shadow-2xl overflow-hidden border-luxury-gold/15"
            >
              {/* Speaker Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-luxury-green-dark rounded-b-xl z-20 flex justify-center items-center">
                <div className="w-12 h-1 bg-neutral-950 rounded-full mb-1" />
              </div>

              {/* Screen Display Content (Interactive HTML Mock of Mobile Home Screen) */}
              <div className="w-full h-full bg-[#FAFAF9] relative flex flex-col pt-6 pb-4 px-3 overflow-hidden select-none font-sans text-xs">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[9px] font-bold text-luxury-green/80 px-1 mb-2">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-2 bg-luxury-green/80 rounded-sm inline-block" />
                  </div>
                </div>

                {/* Mobile App Header */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-[9px] text-luxury-green/50 block font-medium">LOCATION</span>
                    <span className="text-[10px] font-bold text-luxury-gold flex items-center gap-0.5">
                      South Delhi, Delhi <span className="text-[7px]">▼</span>
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-luxury-cream border border-luxury-gold/15 flex items-center justify-center text-luxury-gold">
                    <Bell className="w-3 h-3" />
                  </div>
                </div>

                {/* Search box */}
                <div className="bg-white border border-luxury-gold/10 shadow-sm rounded-xl py-1.5 px-2.5 flex items-center gap-2 mb-3 text-luxury-green/40">
                  <Search className="w-3 h-3 text-luxury-gold" />
                  <span className="text-[9px]">Search artists, styles...</span>
                </div>

                {/* Categories */}
                <div className="mb-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-[9px] text-luxury-green uppercase tracking-wider">Categories</span>
                    <span className="text-[8px] text-luxury-gold font-bold">See All</span>
                  </div>
                  <div className="flex gap-1.5 overflow-x-hidden">
                    {["Bridal", "Arabic", "Mandala", "Fusion"].map((cat, idx) => (
                      <span
                        key={cat}
                        className={`px-2.5 py-1 rounded-lg border text-[8px] font-bold tracking-wide whitespace-nowrap ${
                          idx === 0
                            ? "bg-luxury-green text-white border-transparent shadow-sm"
                            : "bg-white text-luxury-green/70 border-luxury-gold/10"
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Artists list */}
                <div className="flex-grow flex flex-col gap-2 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[9px] text-luxury-green uppercase tracking-wider">Top Artists</span>
                    <span className="text-[8px] text-luxury-gold font-bold">Filters</span>
                  </div>

                  {/* Artist Item 1 */}
                  <div className="bg-white border border-luxury-gold/10 rounded-xl p-2 flex gap-2.5 shadow-sm hover:border-luxury-gold/20 transition-all">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-luxury-cream">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                        alt="Aanya Sharma"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <h5 className="font-bold text-luxury-green text-[10px] truncate leading-tight">Aanya Sharma</h5>
                        <span className="flex items-center gap-0.5 text-[8px] font-bold text-luxury-gold shrink-0">
                          ★ 4.9
                        </span>
                      </div>
                      <p className="text-[8px] text-luxury-gold-dark font-medium truncate mb-1">Royal Bridal & Arabic Fusion</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-luxury-green text-[9px]">₹3,500 <span className="text-[7px] font-normal text-luxury-green/50">onwards</span></span>
                        <span className="px-2 py-0.5 bg-luxury-green text-white text-[7px] font-bold rounded">Book</span>
                      </div>
                    </div>
                  </div>

                  {/* Artist Item 2 */}
                  <div className="bg-white border border-luxury-gold/10 rounded-xl p-2 flex gap-2.5 shadow-sm">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-luxury-cream">
                      <Image
                        src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150"
                        alt="Priya Patel"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <h5 className="font-bold text-luxury-green text-[10px] truncate leading-tight">Priya Patel</h5>
                        <span className="flex items-center gap-0.5 text-[8px] font-bold text-luxury-gold shrink-0">
                          ★ 4.8
                        </span>
                      </div>
                      <p className="text-[8px] text-luxury-gold-dark font-medium truncate mb-1">Intricate Indo-Arabic & Mandala</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-luxury-green text-[9px]">₹2,800 <span className="text-[7px] font-normal text-luxury-green/50">onwards</span></span>
                        <span className="px-2 py-0.5 bg-luxury-green text-white text-[7px] font-bold rounded">Book</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Home Bar */}
              <div className="absolute bottom-1.5 inset-x-0 h-1 w-24 bg-luxury-gold/60 rounded-full mx-auto z-20" />
            </motion.div>

            {/* Floating Card 1: Ratings */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 sm:left-4 bg-white/90 backdrop-blur-md border border-luxury-gold/20 p-4 rounded-2xl shadow-luxury flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <Star className="w-5 h-5 fill-luxury-gold" />
              </div>
              <div>
                <p className="text-xs text-luxury-green/60 font-semibold tracking-wide">TOP RATED</p>
                <p className="text-sm font-serif font-bold text-luxury-green">4.9★ (4.8k+ Reviews)</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Happy Brides */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-md border border-luxury-gold/20 p-4 rounded-2xl shadow-luxury flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-luxury-green-light/10 flex items-center justify-center text-luxury-green-light">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-luxury-green/60 font-semibold tracking-wide">TRUSTED BY</p>
                <p className="text-sm font-serif font-bold text-luxury-green">5,000+ Happy Brides</p>
              </div>
            </motion.div>

            {/* Floating Card 3: Verification Check */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-md border border-luxury-gold/20 py-2.5 px-4 rounded-full shadow-luxury flex items-center gap-2 z-10 hidden sm:flex"
            >
              <ShieldCheck className="w-4.5 h-4.5 text-luxury-gold" />
              <span className="text-xs font-semibold text-luxury-green tracking-wide">100% Certified Artists</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
