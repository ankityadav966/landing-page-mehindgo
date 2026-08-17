"use client";

import { Gift, Share2, Users, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ReferralCTA() {
  const handleReferClick = () => {
    trackEvent("referral_cta_click");
    if (navigator.share) {
      navigator.share({
        title: "MehndiGo - Book Verified Mehendi Artists",
        text: "Use my code MEHNDIGO2026 to get ₹300 off your first Mehendi booking on MehndiGo!",
        url: "https://mehndigo.in"
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText("https://mehndigo.in?ref=MEHNDIGO2026");
      alert("Referral link copied to clipboard!");
    }
  };

  return (
    <section className="w-full py-16 px-6 bg-luxury-cream/40 border-t border-b border-luxury-gold/15">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-luxury-gold/20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side Info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4" /> Earn & Share Rewards
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-green">
            Refer a Friend & Both Get ₹300 Off!
          </h2>

          <p className="text-luxury-green/75 text-sm md:text-base leading-relaxed">
            Love MehndiGo? Invite your friends, family, or fellow brides. When they book their first Mehendi session, you both receive ₹300 in your MehndiGo wallet!
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 max-w-sm mx-auto md:mx-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-luxury-green">
              <Users className="w-4 h-4 text-luxury-gold" /> Unlimited Referrals
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-luxury-green">
              <Gift className="w-4 h-4 text-luxury-gold" /> Instant Wallet Bonus
            </div>
          </div>
        </div>

        {/* Right Side Action */}
        <div className="flex flex-col items-center gap-3 w-full md:w-auto">
          <button
            onClick={handleReferClick}
            className="w-full md:w-auto px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Share2 className="w-4 h-4" /> Share Referral Link
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[11px] text-luxury-green/60">Works for brides, guests, and artists!</span>
        </div>

      </div>
    </section>
  );
}
