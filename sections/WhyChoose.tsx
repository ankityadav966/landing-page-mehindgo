"use client";

import { COMPARISONS } from "@/constants";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Sparkles } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            A New Standard for Henna Booking
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            Compare traditional booking struggles with the transparent, luxury service model of MehndiGo.
          </p>
        </div>

        {/* Side-by-side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Traditional Booking */}
          <motion.div
            initial={{ opacity: 0.95, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-red-100 p-8 rounded-3xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full flex items-center justify-end p-4 text-red-400 select-none font-bold">
              🚫
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-green mb-6 flex items-center gap-2">
              Traditional Booking
            </h3>
            <ul className="flex flex-col gap-4">
              {COMPARISONS.traditional.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-luxury-green/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: MehndiGo */}
          <motion.div
            initial={{ opacity: 0.95, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-luxury-gold/30 p-8 rounded-3xl shadow-luxury-hover relative overflow-hidden ring-1 ring-luxury-gold/20"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/10 rounded-bl-full flex items-center justify-end p-4 text-luxury-gold select-none">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-green mb-6 flex items-center gap-2">
              Booking via <span className="text-gold-gradient font-serif">MehndiGo</span>
            </h3>
            <ul className="flex flex-col gap-4">
              {COMPARISONS.mehndigo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-luxury-green font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
