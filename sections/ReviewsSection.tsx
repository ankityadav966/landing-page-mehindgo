"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-luxury-cream relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 -right-12 w-64 h-64 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-luxury-green-light/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Brides Love Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            Love Letters from Our Brides
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            Hear directly from the brides and families who experienced the MehndiGo premium service.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-luxury-gold/15 p-8 sm:p-12 rounded-3xl shadow-luxury relative"
            >
              {/* Quote Decorative Icon */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-luxury-gold/10 select-none pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                {/* Photo */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-luxury-gold/40 shadow-sm shrink-0">
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* User details */}
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-lg font-bold text-luxury-green mb-1">
                    {TESTIMONIALS[activeIndex].name}
                  </h3>
                  <p className="text-xs text-luxury-gold-dark font-medium tracking-wide mb-2">
                    {TESTIMONIALS[activeIndex].weddingType} • {TESTIMONIALS[activeIndex].location}
                  </p>
                  <div className="flex justify-center sm:justify-start gap-1">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote copy */}
              <p className="text-base sm:text-lg text-luxury-green/80 italic leading-relaxed text-center sm:text-left">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-luxury-gold/20 hover:border-luxury-gold bg-white text-luxury-green flex items-center justify-center transition-all focus:outline-none hover:-translate-x-0.5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-luxury-gold/20 hover:border-luxury-gold bg-white text-luxury-green flex items-center justify-center transition-all focus:outline-none hover:translate-x-0.5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-luxury-gold w-6" : "bg-luxury-gold/30 hover:bg-luxury-gold/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
