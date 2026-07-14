"use client";

import { SERVICES } from "@/constants";
import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

export default function PopularServices() {
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
    <section id="services" className="py-20 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            Our Popular Services
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            From traditional heavy bridal sets to minimalist contemporary patterns, we offer design styles for every milestone.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES.map((service, idx) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Heart;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group bg-white border border-luxury-gold/15 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:border-luxury-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative w-full h-[200px] overflow-hidden bg-luxury-cream-dark">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Icon badge inside the image */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-bold text-luxury-green mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-luxury-green/70 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  {/* Book action */}
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-luxury-gold-dark uppercase hover:text-luxury-green transition-colors duration-300"
                  >
                    Select Service & Book
                    <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
