"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, Download, Star, CheckCircle, Clock } from "lucide-react";
import { APK_DOWNLOAD_URL, PLAY_STORE_URL } from "@/constants";

export default function DownloadApp() {
  return (
    <section className="py-20 bg-luxury-green relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-green-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Download text + Store badges */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block">
              MehndiGo Mobile App
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Manage Bookings on <br />
              <span className="text-gold-gradient font-serif">Your Fingertips.</span>
            </h2>
            <p className="text-sm sm:text-base text-luxury-cream/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Download the MehndiGo app to track your bookings, chat directly with verified artists, manage security deposits, and receive post-care notifications for the best henna stain.
            </p>

            {/* Badges row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-2.5 bg-luxury-green-dark border border-luxury-gold/25 rounded-2xl hover:border-luxury-gold transition-colors duration-300 w-52 text-left"
              >
                <Smartphone className="w-6 h-6 text-luxury-gold" />
                <div>
                  <span className="text-[10px] text-luxury-cream/50 uppercase font-semibold block leading-none mb-1">GET IT ON</span>
                  <span className="text-sm text-white font-bold block leading-none">Google Play</span>
                </div>
              </a>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-2.5 bg-luxury-gold text-white border border-luxury-gold rounded-2xl hover:bg-luxury-gold-dark transition-all duration-300 w-52 text-left shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-6 h-6 text-white" />
                <div>
                  <span className="text-[10px] text-white/70 uppercase font-semibold block leading-none mb-1">DIRECT INSTALL</span>
                  <span className="text-sm font-bold block leading-none">Download App</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Inspiring Artist Content */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[280px] h-[550px] bg-luxury-green-dark border-4 border-luxury-gold/30 rounded-[48px] shadow-2xl p-3 flex flex-col justify-between overflow-hidden"
            >
              {/* Speaker notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-luxury-green-dark rounded-b-2xl border-b border-x border-luxury-gold/20 flex items-center justify-center z-20">
                <div className="w-12 h-1 bg-luxury-gold/30 rounded-full" />
              </div>

              {/* App Screen */}
              <div className="w-full h-full bg-luxury-cream rounded-[38px] overflow-hidden flex flex-col p-5 relative gap-3">
                
                {/* Header */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[10px] font-bold text-luxury-green">MehndiGo</span>
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                </div>

                {/* Mehndi art preview card */}
                <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "140px" }}>
                  <img
                    src="/service-bridal.png"
                    alt="Mehndi Art"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                    <span className="text-[9px] font-bold text-white">✨ Bridal Mehendi Design</span>
                  </div>
                </div>

                {/* Artist stats */}
                <div className="bg-white border border-luxury-gold/20 rounded-2xl p-3 flex flex-col gap-2 shadow-sm">
                  <span className="text-[9px] font-bold text-luxury-green uppercase tracking-wide">Today's Earnings</span>
                  <span className="font-serif text-lg font-bold text-luxury-green">₹4,200</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                    <span className="text-[9px] font-bold text-luxury-gold">4.9 Rating</span>
                    <span className="text-[9px] text-luxury-green/50 ml-1">· 3 bookings today</span>
                  </div>
                </div>

                {/* Upcoming booking */}
                <div className="bg-luxury-green rounded-2xl p-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-luxury-gold" />
                    <span className="text-[9px] font-bold text-luxury-gold uppercase">Next Booking</span>
                  </div>
                  <span className="text-[10px] font-bold text-white">Priya Sharma — Bridal</span>
                  <span className="text-[9px] text-luxury-cream/60">Today, 4:00 PM · Bandra, Mumbai</span>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-luxury-gold" />
                    <span className="text-[9px] text-luxury-cream/80 font-semibold">₹3,500 confirmed</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
