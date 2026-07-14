"use client";

import { HOW_IT_WORKS } from "@/constants";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function HowItWorks() {
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-luxury-cream-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Simple & Elegant Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            How MehndiGo Works
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            Booking a professional artist has never been this easy. Follow our simple path to make your occasion memorable.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-luxury-gold/20 hidden lg:block" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {HOW_IT_WORKS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center justify-between relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left/Right Card Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
                    className="w-full lg:w-[45%] bg-white border border-luxury-gold/15 p-8 rounded-3xl shadow-luxury hover:shadow-luxury-hover hover:border-luxury-gold/30 transition-all duration-300 relative"
                  >
                    <span className="font-serif text-4xl sm:text-5xl font-black text-luxury-gold/15 absolute top-4 right-6 select-none">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-luxury-green mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-luxury-gold/10 text-luxury-gold-dark text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-sm text-luxury-green/70 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Desktop Middle Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                      className="w-8 h-8 rounded-full border-2 border-luxury-gold bg-luxury-cream flex items-center justify-center text-luxury-gold-dark shadow-gold font-serif text-xs font-bold"
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Spacer Panel */}
                  <div className="w-full lg:w-[45%] hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
