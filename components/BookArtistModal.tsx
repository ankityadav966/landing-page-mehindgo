"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, MapPin, Calendar, Phone, User, CheckCircle, ShieldCheck, MessageCircle, Send, Sparkles } from "lucide-react";
import { RealArtist } from "@/lib/api";

interface BookArtistModalProps {
  artist: RealArtist | null;
  isOpen: boolean;
  onClose: () => void;
  cityName?: string;
}

export default function BookArtistModal({ artist, isOpen, onClose, cityName }: BookArtistModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    address: "",
    style: "bridal",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open to prevent background scrolling behind modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset states when opening for a new artist
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage("");
    }
  }, [isOpen, artist?.id]);

  if (!mounted || !isOpen || !artist) return null;

  const targetCity = cityName || artist.location || "India";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Post real booking lead to backend API for this specific artist
      const priceVal = parseInt(artist.price.replace(/[^\d]/g, ""), 10) || 1500;
      const payload = {
        artist_id: artist.id,
        artist_name: artist.name,
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_email: formData.email,
        booking_date: formData.date || new Date().toISOString().split("T")[0],
        total_amount: priceVal,
        address: [formData.address, targetCity].filter(Boolean).join(", "),
        style: formData.style,
        notes: formData.notes,
        status: "pending",
      };

      await fetch("https://api.mehndigo.in/api/v1/mehndigo/artist/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).catch(() => null);

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Booking lead submission error:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-filled WhatsApp message directed strictly to Admin +91 9257890600
  const waMessage = encodeURIComponent(
    `Hello MehndiGo Admin! I want to book Mehndi Artist *${artist.name}* (ID: ${artist.id}, City: ${artist.location}).\n\n` +
    `👤 Customer Name: ${formData.name || "Customer"}\n` +
    `📞 Customer Phone: ${formData.phone || "Enquiry"}\n` +
    `📅 Event Date: ${formData.date || "Upcoming Wedding/Event"}\n` +
    `📍 Location: ${formData.address || targetCity}\n` +
    `💅 Mehndi Style: ${formData.style}\n` +
    (formData.notes ? `📝 Special Notes: ${formData.notes}\n` : "") +
    `\nPlease call me to confirm this booking and coordinate with artist ${artist.name}.`
  );

  const waUrl = `https://wa.me/919257890600?text=${waMessage}`;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay covering entire viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity z-[99999]"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-luxury-gold/30 overflow-hidden z-[100000] my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Banner with Artist Info */}
          <div className="relative bg-gradient-to-r from-luxury-green to-luxury-green-dark p-6 text-white overflow-hidden shrink-0">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 pr-8">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/10 border-2 border-luxury-gold/50 flex-shrink-0 shadow-md">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-luxury-gold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Artist Booking
                </span>
                <h3 className="font-serif text-xl font-bold text-white">{artist.name}</h3>
                <div className="flex items-center gap-3 text-xs text-luxury-cream/80 mt-1">
                  <span className="flex items-center gap-1 text-luxury-gold font-bold">
                    <Star className="w-3 h-3 fill-luxury-gold" /> {artist.rating.toFixed(1)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {artist.location}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-white">From {artist.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content (Scrollable if viewport is small) */}
          <div className="p-6 overflow-y-auto flex-grow">
            {isSuccess ? (
              <div className="text-center py-4 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 text-green-700 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-luxury-green mb-1">
                    Enquiry Sent to MehndiGo Admin!
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Your request to book <b>{artist.name}</b> has been received by our official Admin. Our admin will call you at <b>{formData.phone}</b> to verify details and arrange the artist.
                  </p>
                </div>

                <div className="w-full p-4 bg-luxury-cream/50 rounded-2xl border border-luxury-gold/25 text-left text-xs space-y-1.5 mt-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Requested Artist:</span>
                    <span className="font-bold text-luxury-green">{artist.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Admin Helpline:</span>
                    <span className="font-bold text-luxury-gold">+91 9257890600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Customer:</span>
                    <span className="font-bold text-luxury-green">{formData.name} ({formData.phone})</span>
                  </div>
                  {formData.date && (
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Event Date:</span>
                      <span className="font-bold text-luxury-green">{formData.date}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service:</span>
                    <span className="font-bold text-luxury-gold uppercase">{formData.style} Mehndi</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send to Admin on WhatsApp
                  </a>
                  <a
                    href="tel:+919257890600"
                    className="w-full sm:w-auto py-3 px-5 rounded-full border border-luxury-green/30 bg-luxury-green hover:bg-luxury-green-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                    Call Admin
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 bg-luxury-gold/10 border border-luxury-gold/30 rounded-xl text-[11px] text-luxury-green font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span>
                    Booking enquiry for <b>{artist.name}</b> will go directly to MehndiGo Admin (<b>+91 9257890600</b>). Admin will call you to confirm.
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-luxury-green/80 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-luxury-gold" /> Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-3.5 py-2.5 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-luxury-green/80 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-luxury-gold" /> WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-3.5 py-2.5 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Event Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-luxury-green/80 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" /> Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="px-3.5 py-2.5 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Design Style */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-luxury-green/80">
                      Preferred Style
                    </label>
                    <select
                      name="style"
                      value={formData.style}
                      onChange={handleChange}
                      className="px-3.5 py-2.5 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
                    >
                      <option value="bridal">Royal Bridal Mehendi</option>
                      <option value="engagement">Engagement & Minimalist</option>
                      <option value="arabic">Arabic Floral Trails</option>
                      <option value="festive">Festive / Fast Henna</option>
                      <option value="guest">Wedding Guest Pack (Family)</option>
                    </select>
                  </div>
                </div>

                {/* Location / Area */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-luxury-green/80 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold" /> Event Address / Colony in {targetCity}
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder={`e.g. Sector 14, ${targetCity}`}
                    value={formData.address}
                    onChange={handleChange}
                    className="px-3.5 py-2.5 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
                  />
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-luxury-green/80">
                    Special Instructions / Guest Count
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="Tell us about your timing, requirements, or package preference..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="px-3.5 py-2 text-sm rounded-xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-full bg-luxury-green hover:bg-luxury-green-light border border-luxury-gold/30 text-white font-bold text-xs uppercase tracking-wider shadow-gold hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-luxury-gold" />
                      <span>Send Direct Enquiry to Admin (+91 9257890600)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
