"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, CheckCircle, AlertTriangle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  style: z.string().min(1, "Please select a preferred design style"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-luxury-cream-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-luxury-green mb-4">
            Connect with MehndiGo
          </h2>
          <p className="text-sm sm:text-base text-luxury-green/70">
            Reach out to book a wedding pack, partner with us, or ask a question. We reply within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left panel: Info & Map mock */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white border border-luxury-gold/15 p-8 rounded-3xl shadow-sm flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-luxury-green">
                Contact Details
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-luxury-green/50 uppercase font-semibold block tracking-wider mb-1">Call/WhatsApp</span>
                    <a href="tel:+919876543210" className="text-sm font-bold text-luxury-green hover:text-luxury-gold transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-luxury-green/50 uppercase font-semibold block tracking-wider mb-1">Email Us</span>
                    <a href="mailto:hello@mehndigo.in" className="text-sm font-bold text-luxury-green hover:text-luxury-gold transition-colors">hello@mehndigo.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-luxury-green/50 uppercase font-semibold block tracking-wider mb-1">Office Address</span>
                    <p className="text-sm font-bold text-luxury-green leading-relaxed">Level 4, Luxury Spaces, MG Road, Gurugram, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="relative h-[220px] rounded-3xl overflow-hidden border border-luxury-gold/20 shadow-sm bg-luxury-cream-dark">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                alt="Map Background Location Mock"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm border border-luxury-gold/20 px-4 py-2.5 rounded-2xl shadow-luxury flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs font-bold text-luxury-green">Gurugram Central Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: React Hook Form */}
          <div className="lg:col-span-7 bg-white border border-luxury-gold/15 p-8 sm:p-10 rounded-[32px] shadow-luxury flex flex-col justify-between">
            <h3 className="font-serif text-xl font-bold text-luxury-green mb-6">
              Send an Enquiry
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium">Thank you! Your enquiry has been received. We will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="name" className="text-xs font-semibold text-luxury-green/70">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Aishwarya Rai"
                  {...register("name")}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-luxury-cream/25 focus:outline-none focus:bg-white transition-colors ${
                    errors.name ? "border-red-300 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-luxury-green/70">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. name@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-luxury-cream/25 focus:outline-none focus:bg-white transition-colors ${
                    errors.email ? "border-red-300 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold text-luxury-green/70">
                  Phone Number (Indian)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  {...register("phone")}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-luxury-cream/25 focus:outline-none focus:bg-white transition-colors ${
                    errors.phone ? "border-red-300 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                  }`}
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Style Preference */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="style" className="text-xs font-semibold text-luxury-green/70">
                  Preferred Design Style
                </label>
                <select
                  id="style"
                  {...register("style")}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-luxury-gold/20 bg-luxury-cream/25 focus:outline-none focus:bg-white transition-colors"
                >
                  <option value="">Select a style...</option>
                  <option value="bridal">Royal Bridal Mehendi</option>
                  <option value="engagement">Engagement Minimalist</option>
                  <option value="arabic">Modern Flow Arabic</option>
                  <option value="guest">Guest / Team Booking</option>
                  <option value="other">General Enquiry</option>
                </select>
                {errors.style && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.style.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold text-luxury-green/70">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your event, dates, guest counts, and special requests..."
                  {...register("message")}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-luxury-cream/25 focus:outline-none focus:bg-white transition-colors resize-none ${
                    errors.message ? "border-red-300 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-luxury-green hover:bg-luxury-green-light border border-luxury-gold/20 text-white font-semibold tracking-wide shadow-luxury hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                >
                  {isSubmitting ? "Sending Details..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
