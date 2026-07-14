"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PasswordInput } from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import SocialLogin from "./SocialLogin";
import Link from "next/link";

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "One uppercase letter required")
    .regex(/[a-z]/, "One lowercase letter required")
    .regex(/[0-9]/, "One number required")
    .regex(/[^A-Za-z0-9]/, "One special character required"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the Terms & Privacy Policy"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const watchPassword = watch("password", "");

  const onSubmit = async (data: RegisterSchema) => {
    setLoading(true);
    setApiError(null);

    // Mock API registry delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate error state if email is taken
    if (data.email === "taken@domain.com") {
      setLoading(false);
      setApiError("Email is already registered. Enter any other email address to succeed.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(false);
    setSuccess(true);

    // Mock redirect to login
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <motion.div
      animate={shake ? { x: [0, -10, 10, -10, 10, -5, 5, 0] } : {}}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/90 backdrop-blur-md border border-luxury-gold/15 rounded-3xl p-8 shadow-luxury relative overflow-hidden"
    >
      {/* Success State Overlay */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="w-16 h-16 rounded-full bg-luxury-green/10 flex items-center justify-center text-luxury-green mb-4"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.div>
            <h3 className="font-serif text-xl font-bold text-luxury-green mb-2">Account Created!</h3>
            <p className="text-xs text-luxury-green/75">
              Registration successful. Redirecting to login...
            </p>
            <div className="w-12 h-1 bg-luxury-gold/20 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8 }}
                className="h-full bg-luxury-gold"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="mb-6 select-none">
        <h2 className="font-serif text-2xl font-bold text-luxury-green mb-1">Create Your Account</h2>
        <p className="text-xs text-luxury-green/60">
          Join MehndiGo and discover India&apos;s best Mehndi artists.
        </p>
      </div>

      {/* Animated Shake Error Banner */}
      {apiError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-[#E53935]/5 border border-[#E53935]/20 rounded-xl flex items-start gap-2.5 text-xs text-[#E53935] font-semibold"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{apiError}</span>
        </motion.div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Full Name Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-luxury-green/80 select-none">
            Full Name
          </label>
          <div className="relative flex items-center">
            <User className="absolute left-3.5 w-4.5 h-4.5 text-luxury-green/30" />
            <input
              type="text"
              placeholder="e.g. Rhea Deshmukh"
              className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans text-luxury-green placeholder-luxury-green/30 outline-none transition-all duration-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/25 ${
                errors.fullName ? "border-[#E53935] focus:border-[#E53935] focus:ring-[#E53935]/15" : "border-luxury-gold/15"
              }`}
              {...register("fullName")}
            />
          </div>
          {errors.fullName && (
            <span className="text-[11px] text-[#E53935] font-semibold tracking-wide mt-0.5">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-luxury-green/80 select-none">
            Email Address
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 w-4.5 h-4.5 text-luxury-green/30" />
            <input
              type="email"
              placeholder="e.g. name@domain.com"
              className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans text-luxury-green placeholder-luxury-green/30 outline-none transition-all duration-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/25 ${
                errors.email ? "border-[#E53935] focus:border-[#E53935] focus:ring-[#E53935]/15" : "border-luxury-gold/15"
              }`}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <span className="text-[11px] text-[#E53935] font-semibold tracking-wide mt-0.5">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Mobile Number Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-luxury-green/80 select-none">
            Mobile Number
          </label>
          <div className="relative flex items-center">
            <Phone className="absolute left-3.5 w-4.5 h-4.5 text-luxury-green/30" />
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans text-luxury-green placeholder-luxury-green/30 outline-none transition-all duration-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/25 ${
                errors.mobileNumber ? "border-[#E53935] focus:border-[#E53935] focus:ring-[#E53935]/15" : "border-luxury-gold/15"
              }`}
              {...register("mobileNumber")}
            />
          </div>
          {errors.mobileNumber && (
            <span className="text-[11px] text-[#E53935] font-semibold tracking-wide mt-0.5">
              {errors.mobileNumber.message}
            </span>
          )}
        </div>

        {/* Password input */}
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />

        {/* Password Strength Indicators */}
        {watchPassword && <PasswordStrength password={watchPassword} />}

        {/* Confirm Password input */}
        <PasswordInput
          label="Confirm Password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        {/* Terms Checkbox */}
        <div className="flex flex-col gap-1 select-none">
          <label className="flex items-start gap-2 text-xs text-luxury-green/75 font-semibold cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 mt-0.5 border-luxury-gold/25 text-luxury-green rounded-md focus:ring-luxury-gold/25 focus:ring-offset-0 accent-luxury-green shrink-0"
              {...register("agreeToTerms")}
            />
            <span>
              I agree to the{" "}
              <a href="/privacy" className="text-luxury-gold hover:text-luxury-gold-dark font-bold hover:underline">
                Terms & Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <span className="text-[11px] text-[#E53935] font-semibold tracking-wide mt-0.5">
              {errors.agreeToTerms.message}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-luxury-green hover:bg-luxury-green-light disabled:bg-luxury-green/50 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-luxury-gold/10 hover:shadow-gold transition-all duration-300 focus:outline-none cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              Registering...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Section Divider */}
      <div className="relative my-6 flex items-center justify-center text-[10px] font-bold text-luxury-green/30 uppercase tracking-widest select-none">
        <div className="absolute inset-x-0 h-[1px] bg-luxury-gold/10" />
        <span className="bg-[#FAF9F6] px-3 relative z-10">Or</span>
      </div>

      {/* Social options */}
      <SocialLogin />

      {/* Footer Navigation link */}
      <p className="text-center text-xs text-luxury-green/60 mt-6 select-none">
        Already have an account?{" "}
        <Link href="/login" className="text-luxury-gold hover:text-luxury-gold-dark font-bold hover:underline">
          Login
        </Link>
      </p>
    </motion.div>
  );
}
