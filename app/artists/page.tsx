import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSignup from "@/components/NewsletterSignup";
import StickyAppBanner from "@/components/StickyAppBanner";
import { fetchRealArtists } from "@/lib/api";
import AllArtistsDirectory from "./AllArtistsDirectory";

export const metadata: Metadata = {
  title: "All Verified Mehendi Artists in India | Portfolios, Pricing & Reviews | MehndiGo",
  description: "Browse 1,000+ verified professional Mehendi artists across Jaipur, Mumbai, Delhi NCR, Roorkee & top Indian cities. View real portfolios, customer ratings, starting prices, and book direct doorstep service.",
  alternates: { canonical: "https://mehndigo.in/artists" },
  openGraph: {
    title: "Explore All Verified Mehendi Artists | MehndiGo",
    description: "Browse verified bridal and festival henna artists. 100% organic henna and doorstep booking.",
    url: "https://mehndigo.in/artists",
    siteName: "MehndiGo",
    images: [{ url: "https://mehndigo.in/service-bridal.png" }],
  },
};

export default async function ArtistsPage() {
  const artists = await fetchRealArtists();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Artists Directory", url: "/artists" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-cream/20 text-foreground">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Breadcrumb items={breadcrumbs} />

        {/* Directory Header Banner */}
        <section className="relative bg-gradient-to-r from-luxury-green via-luxury-green-dark to-black text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden mb-12 shadow-2xl border border-luxury-gold/30">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-xs font-bold uppercase tracking-wider mb-4">
              Verified Artist Network
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Explore All Mehendi Artists
            </h1>

            <p className="text-luxury-cream/80 text-sm md:text-base leading-relaxed mb-6">
              Connect with India's top verified Mehndi masters. Compare starting rates, authentic portfolios, customer reviews, and reserve your wedding date directly.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                ✨ 100% Organic Henna Cones
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                🛡️ 5-Step Background Checked
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                🚗 Doorstep Service Across India
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Artists Directory with Search & Filters */}
        <AllArtistsDirectory initialArtists={artists} />
      </main>

      <NewsletterSignup />
      <Footer />
      <StickyAppBanner />
    </div>
  );
}
