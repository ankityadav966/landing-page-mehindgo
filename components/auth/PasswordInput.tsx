"use client";

import React, { useState, forwardRef } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, label = "Password", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-xs font-bold text-luxury-green/80 select-none">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 w-4.5 h-4.5 text-luxury-green/30" />
          <input
            type={showPassword ? "text" : "password"}
            ref={ref}
            className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-10 text-sm font-sans text-luxury-green placeholder-luxury-green/30 outline-none transition-all duration-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/25 ${
              error ? "border-[#E53935] focus:border-[#E53935] focus:ring-[#E53935]/15" : "border-luxury-gold/15"
            }`}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3.5 p-1 rounded-md text-luxury-green/40 hover:text-luxury-green/70 transition-colors focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
          </button>
        </div>
        {error && (
          <span className="text-[11px] text-[#E53935] font-semibold tracking-wide mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
