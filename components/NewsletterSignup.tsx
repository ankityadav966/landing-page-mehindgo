"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Shield } from "lucide-react";
import { trackFormSubmit } from "@/lib/analytics";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    trackFormSubmit("newsletter_lead_guide");
    setSubmitted(true);
  };

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-br from-luxury-green via-luxury-green-dark to-black text-white relative overflow-hidden border-t border-b border-luxury-gold/20">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Free Bride&apos;s Henna Guide
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Get Our Free 2026 Bridal Mehendi &amp; Dark Stain Playbook
        </h2>

        <p className="text-luxury-cream/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Subscribe to receive our exclusive 15-page guide on choosing bridal motifs, natural stain-darkening secrets, and special ₹500 discount vouchers for your wedding booking.
        </p>

        {submitted ? (
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-luxury-gold/40 inline-flex items-center gap-3 text-luxury-gold animate-in fade-in max-w-md mx-auto">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            <div className="text-left text-sm text-white">
              <p className="font-bold text-luxury-gold">Check your inbox!</p>
              <p className="text-xs text-white/80">We have sent your free Henna Care Guide and ₹500 voucher code.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold/70" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-luxury-gold/30 text-white placeholder-white/50 focus:outline-none focus:border-luxury-gold text-sm backdrop-blur-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold whitespace-nowrap"
            >
              Get Free Guide
            </button>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-luxury-gold" /> No Spam Guarantee</span>
          <span>•</span>
          <span>100% Free PDF</span>
        </div>
      </div>
    </section>
  );
}
