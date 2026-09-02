"use client";

import { useState } from "react";
import { useScroll } from "@/hooks/useScroll";
import { NAV_LINKS, APK_DOWNLOAD_URL } from "@/constants";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const scrolled = useScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = !pathname || pathname === "/";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 h-[88px] flex items-center ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-luxury-gold/10 shadow-luxury"
            : "bg-transparent"
        }`}
      >
        {/* Centered container with max-width 1440px and horizontal padding 48px */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-4">
          
          {/* Logo on Left (Flex-shrink-0 prevents logo compression) */}
          <div className="flex items-center flex-shrink-0 z-10">
            <a href={isHome ? "#home" : "/"} className="flex items-center gap-2 group focus:outline-none">
              <div className="relative flex items-center justify-center w-14 h-14 overflow-hidden">
                <img src="/logo.jpeg" alt="MehndiGo Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-luxury-green whitespace-nowrap">
                Mehndi<span className="text-luxury-gold">Go</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links (Centered using flex-grow & justify-center to prevent absolute overlaps) */}
          <div className="hidden xl:flex items-center justify-center flex-grow mx-4">
            <div className="flex items-center gap-3.5 xl:gap-7 bg-white/40 backdrop-blur-sm border border-luxury-gold/5 px-5 py-2 rounded-full shadow-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href.startsWith('/') ? link.href : (isHome ? link.href : `/${link.href}`)}
                  className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-luxury-green/80 hover:text-luxury-gold whitespace-nowrap transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-luxury-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions (Right-aligned, adjusts spacing responsively to fit on laptop viewports) */}
          <div className="hidden xl:flex items-center gap-2.5 xl:gap-4.5 flex-shrink-0 z-10">
            {/* 1. Download App: Secondary Button */}
            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 xl:gap-1.5 px-3 xl:px-4 py-1.5 xl:py-2 text-[10px] xl:text-xs font-bold uppercase tracking-wide text-luxury-gold border-2 border-luxury-gold hover:bg-luxury-gold hover:text-white rounded-full transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <Download className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
              Download App
            </a>
            

            {/* 4. Book Artist: Primary CTA (Luxury Red backdrop, shadow-gold) */}
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="relative inline-flex items-center justify-center px-4 xl:px-6 py-2 xl:py-2.5 text-[10px] xl:text-xs font-bold uppercase tracking-wider text-white rounded-full bg-luxury-gold hover:bg-luxury-gold-dark shadow-gold hover:-translate-y-0.5 transition-all duration-300 focus:outline-none whitespace-nowrap"
            >
              Book Artist
            </a>
          </div>

          {/* Tablet & Mobile Right Header Controls */}
          <div className="flex xl:hidden items-center gap-3 z-10">
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-luxury-gold hover:bg-luxury-gold-dark shadow-gold hover:-translate-y-0.5 transition-all duration-300 focus:outline-none whitespace-nowrap"
            >
              Book Artist
            </a>
            
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-full border border-luxury-gold/20 text-luxury-green bg-luxury-cream/50 backdrop-blur-sm hover:bg-luxury-cream transition-colors focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile/Tablet Side Drawer Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="xl:hidden fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
            />

            {/* Side Drawer Panel (Spring Slide-in from Right) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="xl:hidden fixed top-0 right-0 bottom-0 w-full max-w-[300px] h-screen bg-white z-50 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col h-full">
                
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-luxury-gold/10">
                  <span className="font-serif text-xl font-bold text-luxury-green">
                    Mehndi<span className="text-luxury-gold">Go</span>
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-full border border-luxury-gold/15 text-luxury-green hover:bg-neutral-50 focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Actions (near the top of the drawer menu) */}
                <div className="pt-6 flex flex-col gap-4">
                  {/* Download App: Secondary Button */}
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-luxury-gold hover:bg-luxury-gold-dark shadow-gold flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download App (Play Store)
                  </a>


                </div>

                {/* Mobile Menu Navigation Links */}
                <div className="flex-grow overflow-y-auto py-4 flex flex-col gap-2 scrollbar-thin">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href.startsWith('/') ? link.href : (isHome ? link.href : `/${link.href}`)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold text-luxury-green/80 hover:text-luxury-gold py-2.5 border-b border-luxury-gold/5 flex items-center justify-between group transition-colors"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity text-luxury-gold" />
                    </a>
                  ))}
                </div>

                {/* Bottom conversion trigger in mobile drawer */}
                <div className="pt-6 border-t border-luxury-gold/15">
                  <a
                    href={isHome ? "#contact" : "/#contact"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest text-white rounded-full bg-luxury-green border border-luxury-gold/20 bg-gold-gradient shadow-luxury block"
                  >
                    Book Artist Now
                  </a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
