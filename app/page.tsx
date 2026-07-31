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
import StickyAppBanner from "@/components/StickyAppBanner";
import NewsletterSignup from "@/components/NewsletterSignup";
import ReferralCTA from "@/components/ReferralCTA";
import { getFAQSchema } from "@/lib/schema";
import { FAQS } from "@/constants";

export default function Home() {
  const faqSchema = getFAQSchema(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        <ReferralCTA />
        <FAQSection />
        <NewsletterSignup />
        <ContactSection />
      </main>
      <Footer />
      <StickyAppBanner />
    </>
  );
}
