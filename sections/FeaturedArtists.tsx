"use client";

import { ARTISTS } from "@/constants";
import { motion, Variants } from "framer-motion";
import { Star, MapPin, Briefcase, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function FeaturedArtists() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="artists" className="py-20 bg-luxury-cream-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
              Handpicked Masters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4 leading-tight">
              Featured Mehendi Artists
            </h2>
            <p className="text-sm sm:text-base text-luxury-green/70">
              Browse top-tier local artists with verified customer ratings and detailed style portfolios.
            </p>
          </div>
          <div className="flex justify-center shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-white rounded-full bg-luxury-green hover:bg-luxury-green-light border border-luxury-gold/20 shadow-luxury hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore All Artists
            </a>
          </div>
        </div>

        {/* Artist Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ARTISTS.map((artist) => (
            <motion.div
              key={artist.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white border border-luxury-gold/15 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:border-luxury-gold/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Photo Area */}
              <div className="relative w-full h-[260px] bg-luxury-cream overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 260px"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {artist.verified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-green/90 backdrop-blur-sm border border-luxury-gold/20 text-[10px] font-bold text-white uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                      Verified
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-luxury-gold/25 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
                  <span className="text-xs font-bold text-luxury-green">{artist.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-luxury-green/50">({artist.reviews})</span>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-luxury-green mb-1 group-hover:text-luxury-gold transition-colors duration-300">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-semibold text-luxury-gold-dark uppercase tracking-wider mb-3">
                    {artist.speciality}
                  </p>
                  
                  {/* Metadata fields */}
                  <div className="flex flex-col gap-2 border-t border-luxury-gold/10 pt-3">
                    <div className="flex items-center gap-2 text-xs text-luxury-green/70">
                      <Briefcase className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>{artist.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-luxury-green/70">
                      <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                      <span className="truncate">{artist.location}</span>
                    </div>
                  </div>
                </div>

                {/* Footer and CTA */}
                <div className="mt-auto pt-3 border-t border-luxury-gold/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-luxury-green/50 uppercase font-semibold block tracking-wider leading-none mb-1">
                      Starting From
                    </span>
                    <span className="text-base font-serif font-bold text-luxury-green">
                      {artist.price}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-luxury-green hover:bg-luxury-green-light rounded-full border border-luxury-gold/10 hover:shadow-gold transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
