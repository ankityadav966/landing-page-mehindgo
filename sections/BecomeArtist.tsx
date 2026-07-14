"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Wallet, Flame, ArrowUpRight, Award } from "lucide-react";

export default function BecomeArtist() {
  const benefits = [
    {
      title: "Flexible Working Hours",
      description: "Take bookings only when you want. You are completely in charge of your calendar.",
      icon: Flame,
    },
    {
      title: "Consistent Customer Inflow",
      description: "No more waiting for seasonal calls. Get booking requests throughout the year.",
      icon: Award,
    },
    {
      title: "Instant Wallet Withdrawals",
      description: "Get paid immediately after the booking is completed. Direct bank transfers.",
      icon: Wallet,
    },
  ];

  return (
    <section id="become-artist" className="py-20 bg-luxury-cream-dark/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Info & Statistics */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block">
              For Mehendi Professionals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green leading-tight">
              Grow Your Henna Business <br />
              <span className="text-gold-gradient font-serif">Earn on Your Terms.</span>
            </h2>
            <p className="text-sm sm:text-base text-luxury-green/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join India's premium network of Mehendi artists. Get access to verified high-budget wedding orders, manage your bookings in-app, and secure guaranteed payments.
            </p>

            {/* Benefits Column Grid */}
            <div className="flex flex-col gap-5 mt-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start text-left max-w-lg mx-auto lg:mx-0">
                    <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/25 text-luxury-gold-dark flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-luxury-green mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-luxury-green/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Call to Action Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full max-w-[400px] bg-white border border-luxury-gold/25 p-8 rounded-[32px] shadow-luxury-hover relative ring-1 ring-luxury-gold/10"
            >
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold text-luxury-gold-dark uppercase tracking-widest block mb-2">
                  Partner Program
                </span>
                <p className="font-serif text-2xl font-bold text-luxury-green mb-1">
                  Start Earning Today
                </p>
                <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-luxury-green/5 border border-luxury-green/10 text-xs font-bold text-luxury-green mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                  Free Background Verification
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="flex flex-col gap-4 mb-8">
                <p className="text-xs font-semibold text-luxury-green/50 uppercase tracking-wider">
                  Registration Checklist
                </p>
                {[
                  "Government ID Proof (Aadhaar/PAN)",
                  "Portfolio of 10+ Original Designs",
                  "Own Mehendi Application Kit",
                  "Basic Speed & Quality Test Pass",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-luxury-green/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide text-white bg-luxury-green hover:bg-luxury-green-light rounded-full shadow-luxury hover:shadow-gold transition-all duration-300 focus:outline-none"
              >
                Join as Artist
                <ArrowUpRight className="w-4 h-4 text-luxury-gold" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
