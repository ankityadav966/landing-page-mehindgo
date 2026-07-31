"use client";

import { Instagram, Download, MapPin, Sparkles, Heart, ShieldCheck } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-luxury-cream/10">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/#home" className="flex items-center gap-2 group focus:outline-none">
              <div className="relative flex items-center justify-center w-14 h-14 overflow-hidden">
                <img src="/logo.jpeg" alt="MehndiGo Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Mehndi<span className="text-luxury-gold">Go</span>
              </span>
            </Link>
            <p className="text-xs text-luxury-cream/70 leading-relaxed mt-1">
              India&apos;s premier on-demand platform connecting verified professional Mehendi artists with brides and event hosts.
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

          {/* Column 2: Popular Services (SEO Links) */}
          <div>
            <h3 className="font-serif text-base text-luxury-gold font-medium mb-4 tracking-wide flex items-center gap-1.5">
              <Heart className="w-4 h-4" /> Top Services
            </h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li><Link href="/services/bridal-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Bridal Mehendi</Link></li>
              <li><Link href="/services/arabic-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Arabic Mehendi Art</Link></li>
              <li><Link href="/services/engagement-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Engagement Henna</Link></li>
              <li><Link href="/services/wedding-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Wedding Guest Packs</Link></li>
              <li><Link href="/services/festival-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Festival Henna</Link></li>
              <li><Link href="/services/home-mehendi-service" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Doorstep Home Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Cities (SEO Links) */}
          <div>
            <h3 className="font-serif text-base text-luxury-gold font-medium mb-4 tracking-wide flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Top Cities
            </h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li><Link href="/city/jaipur" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Mehendi Artist in Jaipur</Link></li>
              <li><Link href="/city/delhi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Mehendi Artist in Delhi NCR</Link></li>
              <li><Link href="/city/mumbai" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Mehendi Artist in Mumbai</Link></li>
              <li><Link href="/city/bangalore" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Mehendi Artist in Bangalore</Link></li>
              <li><Link href="/city/hyderabad" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Mehendi Artist in Hyderabad</Link></li>
            </ul>
          </div>

          {/* Column 4: Knowledge Hub & Blog */}
          <div>
            <h3 className="font-serif text-base text-luxury-gold font-medium mb-4 tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Knowledge Hub
            </h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li><Link href="/blog" className="font-semibold text-luxury-gold hover:text-white transition-colors">All Henna Guides & Blog</Link></li>
              <li><Link href="/blog/category/bridal-mehendi" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Bridal Designs 2026</Link></li>
              <li><Link href="/blog/category/mehendi-care" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Dark Stain Secrets</Link></li>
              <li><Link href="/blog/category/wedding-tips" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Wedding Planning Tips</Link></li>
              <li><Link href="/about" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 5: Legal & Privacy Trust */}
          <div>
            <h3 className="font-serif text-base text-luxury-gold font-medium mb-4 tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Legal &amp; Privacy
            </h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li><Link href="/privacy" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors font-semibold text-luxury-gold">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Refund Guarantee</Link></li>
              <li><Link href="/cancellation" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Cancellation Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Cookie Policy</Link></li>
              <li><Link href="/community-guidelines" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Community Guidelines</Link></li>
              <li><Link href="/copyright" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Copyright Policy</Link></li>
              <li><Link href="/disclaimer" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Health &amp; Legal Disclaimer</Link></li>
              <li>
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-luxury-gold hover:text-white transition-colors flex items-center gap-1 mt-1"
                >
                  <Download className="w-3.5 h-3.5" /> Download App APK
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-luxury-cream/50 gap-4">
          <p>© {currentYear} MehndiGo Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made with 💖 for Brides & Artists across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
