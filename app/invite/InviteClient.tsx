"use client";

import { motion } from "framer-motion";
import { Gift, Copy, CheckCircle, Download, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface InviteClientProps {
  refCode: string;
}

export default function InviteClient({ refCode }: InviteClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const playStoreUrl = `market://details?id=com.sonuy123.mehendigoo&referrer=utm_source%3Dmehndigo_invite%26utm_medium%3Ddeeplink%26utm_content%3Dref%3D${refCode}`;
  const appSchemeUrl = `mehendigoo://invite?ref=${refCode}`;

  const handleDownloadClick = () => {
    // Try to open the app via custom scheme
    window.location.href = appSchemeUrl;
    
    // Fallback to Play Store after a short delay if app doesn't open
    setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto bg-white/80 backdrop-blur-xl border border-rose-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-rose-50"
        >
          <Gift className="w-10 h-10 text-rose-600" />
        </motion.div>

        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-3">
          You're Invited!
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed font-inter">
          Join MehndiGo and get a <span className="font-semibold text-rose-600">₹100 Welcome Discount</span> on your first home Mehndi booking. Discover top-rated artists near you.
        </p>

        <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100/50 mb-8 relative group">
          <p className="text-xs font-semibold text-rose-500 uppercase tracking-widest mb-2">
            Your Referral Code
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-inter font-black tracking-[0.2em] text-rose-700">
              {refCode}
            </span>
          </div>
          
          <button 
            onClick={handleCopy}
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white border border-rose-200 hover:border-rose-300 hover:bg-rose-50 rounded-xl text-rose-600 font-medium transition-all active:scale-[0.98]"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-600">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleDownloadClick}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-rose-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            <span>Download App to Claim</span>
          </button>
          
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5 mt-4">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            Join 10,000+ happy customers
          </p>
        </div>
      </div>
    </motion.div>
  );
}
