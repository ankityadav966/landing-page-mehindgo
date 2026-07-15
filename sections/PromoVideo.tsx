"use client";

import { useRef, useState, useEffect } from "react";
import { Pause, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-luxury-green relative overflow-hidden">
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
            Watch our artists bring intricate mehndi patterns to life — elegance, skill, and passion in every stroke.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto relative group">
          {/* Outer glow */}
          <div className="absolute -inset-1.5 bg-gold-gradient rounded-[32px] blur opacity-35 group-hover:opacity-60 transition duration-1000" />

          <motion.div
            ref={containerRef}
            whileHover={{ scale: 1.005 }}
            onClick={togglePlay}
            className="relative rounded-[28px] overflow-hidden border border-luxury-gold/30 shadow-2xl bg-black cursor-pointer"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Video — rotated 90deg fix */}
            <video
              ref={videoRef}
              poster="/logo.jpeg"
              playsInline
              loop
              muted
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "56.25%",
                height: "177.78%",
                transform: "translate(-50%, -50%) rotate(-90deg)",
                objectFit: "cover",
              }}
            >
              <source src="/promo-video.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay + Play button — shows when paused */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-luxury-gold/30 rounded-full animate-ping pointer-events-none" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-luxury-green ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Pause button — visible when playing */}
            {isPlaying && (
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Pause video"
                >
                  <Pause className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Bottom badge */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 py-2 px-4 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-xs font-semibold text-white tracking-wide">MehndiGo — Artist in Action</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
