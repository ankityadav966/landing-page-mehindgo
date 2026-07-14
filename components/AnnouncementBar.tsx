"use client";

import { ANNOUNCEMENT_TEXT } from "@/constants";
import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-luxury-green-dark border-b border-luxury-gold/10 text-luxury-cream overflow-hidden py-2 text-xs md:text-sm font-medium tracking-wide relative z-50">
      <div className="flex items-center justify-center gap-3 px-4 text-center">
        <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse shrink-0" />
        <span className="text-luxury-cream/90 flex items-center gap-2 flex-wrap justify-center">
          {ANNOUNCEMENT_TEXT.split("|").map((part, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="opacity-40 text-luxury-gold font-bold">|</span>}
              <span className={index === 0 ? "text-luxury-gold-light" : ""}>{part.trim()}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
