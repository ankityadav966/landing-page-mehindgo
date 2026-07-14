"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import FeaturedArtists from "@/sections/FeaturedArtists";
import PopularServices from "@/sections/PopularServices";
import GallerySection from "@/sections/GallerySection";
import ReviewsSection from "@/sections/ReviewsSection";
import PromoVideo from "@/sections/PromoVideo";
import PricingSection from "@/sections/PricingSection";
import BecomeArtist from "@/sections/BecomeArtist";
import DownloadApp from "@/sections/DownloadApp";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loading screen for 3 seconds to allow assets to preload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnnouncementBar />
          <Navbar />
          <main className="relative flex flex-col w-full">
            <Hero />
            <TrustedBy />
            <Stats />
            <Features />
            <HowItWorks />
            <WhyChoose />
            <FeaturedArtists />
            <PopularServices />
            <GallerySection />
            <ReviewsSection />
            <PromoVideo />
            <PricingSection />
            <BecomeArtist />
            <DownloadApp />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
