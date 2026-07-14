"use client";

import { useState } from "react";
import { Play, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-luxury-green relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-luxury-green-light/35 via-luxury-green/80 to-luxury-green-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Experience the Magic
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
            MehndiGo in Motion
          </h2>
          <p className="text-sm sm:text-base text-luxury-cream/70">
            Take a 1-minute visual tour of how our platform transforms traditional bookings into a luxury experience.
          </p>
        </div>

        {/* Video Thumbnail Wrapper */}
        <div className="max-w-4xl mx-auto relative group">
          {/* Outer Border Glow */}
          <div className="absolute -inset-1.5 bg-gold-gradient rounded-[32px] blur opacity-35 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => setIsPlaying(true)}
            className="relative h-[250px] sm:h-[450px] rounded-[28px] overflow-hidden border border-luxury-gold/30 shadow-2xl cursor-pointer bg-luxury-green-dark"
          >
            {/* Background Thumbnail Image */}
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
              alt="MehndiGo Promo Video Cover"
              className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

            {/* Play Button Trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Rippling circle */}
                <div className="absolute -inset-4 bg-luxury-gold/30 rounded-full animate-ping pointer-events-none" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient text-luxury-green flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-luxury-green ml-1" />
                </div>
              </div>
            </div>

            {/* Float Badge overlay */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 py-2 px-4 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-xs font-semibold text-white tracking-wide">Watch Bridal Stories</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-luxury-gold/25 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mock embedded video - looping royalty free wedding theme */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="MehndiGo Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
