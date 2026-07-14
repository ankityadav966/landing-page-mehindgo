"use client";

import { FEATURES } from "@/constants";
import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function Features() {
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
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="features" className="py-20 bg-luxury-cream relative">
      {/* Visual Background Decors */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-luxury-green-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Exquisite Features
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4 leading-tight">
            Designed for Modern Convenience, Crafted with Luxury Standards.
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            MehndiGo matches the beauty of traditional designs with standard-setting modern product features.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, idx) => {
            // Dynamically select the icon
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 bg-white border border-luxury-gold/15 rounded-3xl shadow-luxury hover:shadow-luxury-hover hover:border-luxury-gold/40 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Hover background highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-luxury-cream border border-luxury-gold/20 text-luxury-gold flex items-center justify-center mb-6 group-hover:bg-luxury-green group-hover:text-white group-hover:border-transparent transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg font-bold text-luxury-green mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-luxury-green/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner detail decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-transparent group-hover:border-luxury-gold/20 rounded-br-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
