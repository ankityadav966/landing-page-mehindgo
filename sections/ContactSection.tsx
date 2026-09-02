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
    // Send customer enquiry directly to MehndiGo Admin WhatsApp +91 9257890600
    const text = encodeURIComponent(
      `Hello MehndiGo Admin! I have submitted a booking enquiry on the website:\n\n` +
      `👤 Customer Name: ${data.name}\n` +
      `📞 Customer Phone: ${data.phone}\n` +
      `📧 Email: ${data.email}\n` +
      `💅 Preferred Style: ${data.style}\n` +
      `📝 Details/Event: ${data.message}\n\n` +
      `Please call me on ${data.phone} to coordinate my booking.`
    );
    window.open(`https://wa.me/919257890600?text=${text}`, "_blank");
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
                    <a href="tel:+919257890600" className="text-sm font-bold text-luxury-green hover:text-luxury-gold transition-colors">+91 9257890600</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-luxury-green/50 uppercase font-semibold block tracking-wider mb-1">Email Us</span>
                    <a href="mailto:mehendigo@gmail.com" className="text-sm font-bold text-luxury-green hover:text-luxury-gold transition-colors">mehendigo@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-luxury-green/50 uppercase font-semibold block tracking-wider mb-1">Corporate Headquarters</span>
                    <p className="text-xs font-bold text-luxury-green leading-relaxed">
                      Chanda Tower, 101-103, Gandhi Path Rd, opp. Grand Utsav Garden, near Agarwal Caters, Girnar Colony, Block E, Vaishali Nagar, Jaipur, Rajasthan 302021
                    </p>
                    <a
                      href="https://maps.google.com/?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-luxury-gold hover:underline mt-1.5"
                    >
                      <MapPin className="w-3 h-3" /> View on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Interactive Google Map Embed */}
            <div className="relative h-[280px] rounded-3xl overflow-hidden border border-luxury-gold/20 shadow-sm bg-luxury-cream-dark flex flex-col">
              <iframe
                title="MehndiGo Head Office Location"
                src="https://maps.google.com/maps?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-luxury-gold/20 px-3.5 py-2 rounded-xl shadow-luxury flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <MapPin className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span className="text-[11px] font-bold text-luxury-green truncate">
                    Chanda Tower, Vaishali Nagar, Jaipur
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-luxury-gold hover:underline shrink-0 ml-2"
                >
                  Open Maps ↗
                </a>
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
                  {isSubmitting ? "Sending Details..." : "Send Enquiry to Admin (+91 9257890600)"}
                </button>
                <p className="text-[11px] text-center text-luxury-green/60 mt-2">
                  All enquiries are received directly by the MehndiGo Admin helpline (<b>+91 9257890600</b>). Our admin will call you to arrange the service.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
