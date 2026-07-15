"use client";

import { Instagram, Download, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { APK_DOWNLOAD_URL } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-luxury-green-dark border-t border-luxury-gold/20 text-luxury-cream pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-green-light/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-luxury-cream/10">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/#home" className="flex items-center gap-2 group focus:outline-none">
              <div className="relative flex items-center justify-center w-14 h-14 overflow-hidden">
                <img src="/logo.jpeg" alt="MehndiGo Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Mehndi<span className="text-luxury-gold">Go</span>
              </span>
            </Link>
            <p className="text-sm text-luxury-cream/70 leading-relaxed mt-2">
              Book professional, verified Mehendi artists at your convenience. Luxury experiences tailored for your special days.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/mehndigoo"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-cream/80 hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold font-medium mb-5 tracking-wide">Popular Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#services" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Bridal Mehendi
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Engagement Designs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Festival Celebrations
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Guest & Corporate Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold font-medium mb-5 tracking-wide">Company & Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#about" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/#refund" className="text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-luxury-gold hover:text-white transition-colors flex items-center gap-1.5 mt-1"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold font-medium mb-5 tracking-wide">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+91925789600"
                  className="flex items-center gap-3 text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-green transition-all duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>+91 92578 96000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mehendigo@gmail.com"
                  className="flex items-center gap-3 text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-green transition-all duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>mehendigo@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-luxury-cream/70">
                  <span className="w-9 h-9 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>Pan India &mdash; Serving 50+ Cities</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-luxury-cream/50 gap-4">
          <p>© {currentYear} MehndiGo Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made with 💖 for Brides across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
