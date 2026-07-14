"use client";

import { STATS } from "@/constants";
import { useCounter } from "@/hooks/useCounter";
import { motion } from "framer-motion";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-r border-luxury-cream/10 last:border-0 md:border-r md:last:border-0 border-b last:border-b-0 md:border-b-0">
      <span className="font-serif text-4xl sm:text-5xl font-bold text-luxury-gold leading-none mb-3">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm font-medium tracking-wider text-luxury-cream/70 uppercase text-center">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-luxury-green relative py-12 md:py-16 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-green-light/20 via-luxury-green-dark/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-luxury-green-dark/40 backdrop-blur-sm border border-luxury-gold/15 rounded-3xl"
        >
          {STATS.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
