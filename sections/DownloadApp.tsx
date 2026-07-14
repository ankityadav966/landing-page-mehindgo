"use client";

import { motion } from "framer-motion";
import { Sparkles, QrCode, Smartphone, Download } from "lucide-react";
import Image from "next/image";
import { APK_DOWNLOAD_URL } from "@/constants";

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

            {/* Badges and QR code row */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-center lg:justify-start">
              {/* App badges */}
              <div className="flex flex-col gap-3">
                <a
                  href="#play-store"
                  className="flex items-center gap-3 px-6 py-2.5 bg-luxury-green-dark border border-luxury-gold/25 rounded-2xl hover:border-luxury-gold transition-colors duration-300 w-52 text-left"
                >
                  <Smartphone className="w-6 h-6 text-luxury-gold" />
                  <div>
                    <span className="text-[10px] text-luxury-cream/50 uppercase font-semibold block leading-none mb-1">GET IT ON</span>
                    <span className="text-sm text-white font-bold block leading-none">Google Play</span>
                  </div>
                </a>
                
                <a
                  href="#app-store"
                  className="flex items-center gap-3 px-6 py-2.5 bg-luxury-green-dark border border-luxury-gold/25 rounded-2xl hover:border-luxury-gold transition-colors duration-300 w-52 text-left"
                >
                  <Smartphone className="w-6 h-6 text-luxury-gold" />
                  <div>
                    <span className="text-[10px] text-luxury-cream/50 uppercase font-semibold block leading-none mb-1">DOWNLOAD ON THE</span>
                    <span className="text-sm text-white font-bold block leading-none">App Store</span>
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
                    <span className="text-sm font-bold block leading-none">Download APK</span>
                  </div>
                </a>
              </div>

              {/* QR Code Container */}
              <div className="flex items-center gap-4 p-4 bg-luxury-green-dark/60 backdrop-blur-sm border border-luxury-gold/15 rounded-3xl">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2">
                  <QrCode className="w-full h-full text-luxury-green" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-luxury-gold block uppercase tracking-wider mb-1">Scan to Download</span>
                  <span className="text-xs text-luxury-cream/70 leading-relaxed block w-32">Instant download for iOS & Android devices.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Float */}
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

              {/* App Screen mock */}
              <div className="w-full h-full bg-luxury-cream rounded-[38px] overflow-hidden flex flex-col items-center justify-between p-6 relative">
                {/* Visual elements */}
                <div className="w-full flex justify-between items-center mt-3">
                  <span className="text-[10px] font-bold text-luxury-green/40">MehndiGo</span>
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                </div>

                <div className="w-full text-center flex flex-col items-center gap-3">
                  {/* Circle check */}
                  <div className="w-16 h-16 rounded-full bg-luxury-green text-luxury-gold flex items-center justify-center shadow-gold">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-luxury-green">Artist Booking Confirmed</p>
                    <p className="text-[10px] text-luxury-green/60">Your artist is arriving in 45 mins</p>
                  </div>
                </div>

                {/* Tracking panel mock */}
                <div className="w-full bg-white border border-luxury-gold/20 p-3 rounded-2xl shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-luxury-green">Aanya Sharma (Artist)</span>
                    <span className="text-[8px] bg-luxury-gold/20 text-luxury-gold-dark px-1.5 py-0.5 rounded-full font-bold">4.9★</span>
                  </div>
                  <div className="w-full h-2 bg-luxury-cream rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-luxury-gold rounded-full" />
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
