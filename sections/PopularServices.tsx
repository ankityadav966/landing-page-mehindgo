"use client";

import { useEffect, useState } from "react";
import { SERVICES } from "@/constants";
import { fetchRealServices, RealService } from "@/lib/api";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PopularServices({ initialServices }: { initialServices?: RealService[] } = {}) {
  const [services, setServices] = useState<RealService[]>(() =>
    initialServices && initialServices.length > 0
      ? initialServices
      : SERVICES.map((s, idx) => ({
          id: idx + 1,
          title: s.title,
          description: s.description,
          price: "₹1,500",
          duration: "1 - 2 Hours",
          image: s.image,
          category: "Bridal Mehndi",
        }))
  );

  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setServices(initialServices);
      return;
    }
    let isMounted = true;
    fetchRealServices()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          // Merge real services with core service categories for rich presentation
          const combined = [...data];
          // Fill up to at least 8 items from default catalog if needed
          SERVICES.forEach((s, idx) => {
            if (!combined.some((c) => c.title.toLowerCase() === s.title.toLowerCase())) {
              combined.push({
                id: 1000 + idx,
                title: s.title,
                description: s.description,
                price: "₹1,200",
                duration: "1 - 2 Hours",
                image: s.image,
                category: s.title,
              });
            }
          });
          setServices(combined.slice(0, 8));
        }
      })
      .catch((err) => {
        console.error("Failed to load live services:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [initialServices]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0.95, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="services" className="py-20 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Verified Studio Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            Our Popular Services
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            Explore live packages crafted and offered by our verified artists across India—from festive celebrations to royal bridal suites.
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
          {services.map((service, idx) => {
            return (
              <motion.div
                key={service.id || idx}
                variants={cardVariants}
                className="group bg-white border border-luxury-gold/15 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:border-luxury-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative w-full h-[200px] overflow-hidden bg-luxury-cream-dark">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized={service.image.startsWith("http") && !service.image.includes("unsplash.com") && !service.image.includes("cloudinary.com")}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Price Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-luxury-gold/30 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-luxury-green">{service.price}</span>
                  </div>

                  {/* Duration Badge */}
                  {service.duration && (
                    <div className="absolute top-3 right-3 bg-luxury-green/85 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-luxury-gold/20">
                      {service.duration}
                    </div>
                  )}
                </div>

                {/* Text Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-gold bg-luxury-green/5 px-2.5 py-0.5 rounded-full border border-luxury-gold/15">
                      {service.category || "Mehndi Service"}
                    </span>
                    {service.artist_name && (
                      <span className="text-[10px] text-luxury-green/60 font-medium truncate max-w-[120px]">
                        by {service.artist_name}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-luxury-green mb-2 group-hover:text-luxury-gold transition-colors duration-300 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-luxury-green/70 leading-relaxed mb-5 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Book action */}
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center justify-between w-full pt-3 border-t border-luxury-gold/10 text-xs font-semibold tracking-wider text-luxury-gold-dark uppercase hover:text-luxury-green transition-colors duration-300"
                  >
                    <span>Book Service</span>
                    <ArrowUpRight className="w-4 h-4" />
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

