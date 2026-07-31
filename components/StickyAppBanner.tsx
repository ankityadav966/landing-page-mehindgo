"use client";

import { useState, useEffect } from "react";
import { Download, Star, X, Smartphone, ShieldCheck } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/constants";
import { trackAppDownload, trackBookingClick } from "@/lib/analytics";

export default function StickyAppBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl z-50 bg-luxury-green/95 backdrop-blur-md text-white border border-luxury-gold/30 p-3.5 md:p-4 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5">
      {/* Left Icon & Text */}
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1 border border-luxury-gold/40 flex-shrink-0 shadow-md">
          <img src="/logo.jpeg" alt="MehndiGo Mobile App Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-bold text-sm tracking-wide text-white">MehndiGo App</span>
            <span className="flex items-center text-[10px] font-semibold bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/30 px-1.5 py-0.5 rounded-full">
              <Star className="w-2.5 h-2.5 fill-luxury-gold mr-0.5" /> 4.9★
            </span>
          </div>
          <p className="text-[11px] text-white/80 line-clamp-1 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-luxury-gold flex-shrink-0" />
            1,000+ Verified Artists • 100% Organic Henna
          </p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAppDownload("sticky_banner")}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white bg-luxury-gold hover:bg-luxury-gold-dark rounded-xl shadow-gold transition-transform hover:scale-105"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Get App</span>
          <span className="sm:hidden">APK</span>
        </a>

        <a
          href="#contact"
          onClick={() => trackBookingClick("sticky_banner_book")}
          className="hidden md:flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider text-luxury-green bg-white hover:bg-neutral-100 rounded-xl transition-all"
        >
          <Smartphone className="w-3.5 h-3.5 text-luxury-gold" />
          Book Now
        </a>

        <button
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss banner"
          className="p-1 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
