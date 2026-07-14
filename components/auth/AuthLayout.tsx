"use client";

import React from "react";
import AuthBanner from "./AuthBanner";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-[#FDFCFB] relative w-full overflow-x-hidden">
      {/* Left Column: Branding Stats Panel */}
      <div className="hidden lg:block lg:col-span-5 h-full min-h-screen sticky top-0">
        <AuthBanner />
      </div>

      {/* Right Column: Card form container */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center p-6 md:p-12 relative min-h-screen">
        {/* Background Ambient Decorative Circles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Children Form Card Wrapper */}
        <div className="w-full max-w-[480px] relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
