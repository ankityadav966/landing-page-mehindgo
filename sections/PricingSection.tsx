"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, HelpCircle, Lock } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            No Hidden Charges. Clear Split.
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            We believe in complete transparency. Secure your artist with a minor deposit, and settle the rest only after you are satisfied.
          </p>
        </div>

        {/* Pricing Layout Block */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-luxury-gold/15 rounded-[32px] shadow-luxury overflow-hidden">
          
          {/* Left panel: Price Split Example */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col gap-6">
            <h3 className="font-serif text-2xl font-bold text-luxury-green">
              How the Booking Split Works
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Step 1: Advance */}
              <div className="flex items-center justify-between p-4 bg-luxury-gold/5 rounded-2xl border border-luxury-gold/10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-luxury-gold text-luxury-green text-xs font-bold flex items-center justify-center">
                    10%
                  </span>
                  <div>
                    <span className="text-sm font-bold text-luxury-green block">Advance Booking Fee</span>
                    <span className="text-xs text-luxury-green/60">Pay online to lock date & artist</span>
                  </div>
                </div>
                <span className="font-serif text-lg font-bold text-luxury-gold-dark">Secure Online</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-luxury-gold">↓</div>

              {/* Step 2: Post-service */}
              <div className="flex items-center justify-between p-4 bg-luxury-green/5 rounded-2xl border border-luxury-green/10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-luxury-green text-white text-xs font-bold flex items-center justify-center">
                    90%
                  </span>
                  <div>
                    <span className="text-sm font-bold text-luxury-green block">Remaining Balance</span>
                    <span className="text-xs text-luxury-green/60">Pay after artist completes application</span>
                  </div>
                </div>
                <span className="font-serif text-lg font-bold text-luxury-green-light">Post-Service</span>
              </div>
            </div>

            {/* Quote details */}
            <p className="text-xs text-luxury-green/50 leading-relaxed flex items-start gap-2 pt-2">
              <Lock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
              <span>Payments are fully encrypted. The 10% booking deposit is eligible for full refund if cancelled up to 48 hours prior to the scheduled session.</span>
            </p>
          </div>

          {/* Right panel: Features Checklist */}
          <div className="md:col-span-5 bg-luxury-green-dark p-8 sm:p-10 text-white flex flex-col justify-center h-full relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <h4 className="font-serif text-xl font-bold text-luxury-gold mb-6">
              Included in All Bookings
            </h4>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "100% Certified Safe Henna",
                "Backup Artist Guarantee",
                "Verified Portfolio Checks",
                "Direct Artist Chat Channels",
                "Free Rescheduling Options",
                "Post-Stain Care Guidance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-luxury-gold/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-luxury-gold" />
                  </div>
                  <span className="text-sm font-medium text-luxury-cream/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="w-full text-center py-3 text-sm font-semibold tracking-wide text-luxury-green bg-gold-gradient rounded-full shadow-gold hover:scale-[1.01] transition-transform duration-300 focus:outline-none"
            >
              Book Your Session
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
