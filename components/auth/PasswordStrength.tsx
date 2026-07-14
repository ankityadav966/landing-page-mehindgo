"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password?: string;
}

export default function PasswordStrength({ password = "" }: PasswordStrengthProps) {
  const checks = [
    { label: "Min. 8 characters", met: password.length >= 8 },
    { label: "One uppercase", met: /[A-Z]/.test(password) },
    { label: "One lowercase", met: /[a-z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
    { label: "One special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  const metCount = checks.filter((c) => c.met).length;

  let strengthLabel = "Weak";
  let strengthColor = "bg-[#E53935]";
  let strengthTextColor = "text-[#E53935]";

  if (metCount >= 5) {
    strengthLabel = "Strong";
    strengthColor = "bg-luxury-green";
    strengthTextColor = "text-luxury-green";
  } else if (metCount >= 3) {
    strengthLabel = "Medium";
    strengthColor = "bg-luxury-gold";
    strengthTextColor = "text-luxury-gold-dark";
  }

  const barWidth = `${(metCount / 5) * 100}%`;

  return (
    <div className="w-full flex flex-col gap-2 mt-1.5 p-3 bg-luxury-cream/40 border border-luxury-gold/10 rounded-xl select-none">
      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
        <span className="text-luxury-green/50">Password Strength</span>
        <span className={`${strengthTextColor} font-extrabold`}>{strengthLabel}</span>
      </div>

      {/* Strength Bar */}
      <div className="w-full h-1 bg-neutral-200/60 rounded-full overflow-hidden">
        <div
          className={`h-full ${strengthColor} transition-all duration-300`}
          style={{ width: barWidth }}
        />
      </div>

      {/* Rules list */}
      <div className="grid grid-cols-2 gap-1.5 mt-1">
        {checks.map((check, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[10px] font-semibold">
            {check.met ? (
              <Check className="w-3.5 h-3.5 text-luxury-green shrink-0 font-extrabold" />
            ) : (
              <X className="w-3.5 h-3.5 text-luxury-green/20 shrink-0" />
            )}
            <span className={check.met ? "text-luxury-green" : "text-luxury-green/45"}>
              {check.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
