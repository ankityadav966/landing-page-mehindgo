import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ShieldCheck, Heart, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MehndiGo - India's Premier Mehendi Artist Platform",
  description: "Learn about MehndiGo's mission to empower verified Mehendi artists and provide brides with luxury, stress-free doorstep henna experiences.",
  alternates: { canonical: "https://mehndigo.in/about" }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />

        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4 fill-luxury-gold" /> Our Story & Mission
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-green mb-4">
            Transforming How India Books Mehendi Artists
          </h1>
          <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
            MehndiGo was founded to bring transparency, trust, and luxury standards to traditional henna booking. We bridge the gap between talented micro-artist entrepreneurs and brides planning their dream weddings.
          </p>
        </section>

        {/* Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-luxury-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-luxury-green mb-2">5-Step Artist Vetting</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every artist passes background identity checks, practical speed tests, portfolio verification, and natural henna cone audits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-luxury-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-luxury-green mb-2">100% Organic Henna</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We strictly ban chemical dye cones (PPD/Ammonia). Our artists use fresh triple-sifted Sojat henna infused with essential oils.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-luxury-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-luxury-green mb-2">Backup Guarantee</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              In the rare event of an emergency, our automated dispatch system deploys an equally rated backup artist instantly.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-luxury-green via-luxury-green-dark to-black text-white p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif font-bold text-3xl md:text-4xl text-luxury-gold mb-1">5,000+</p>
              <p className="text-xs text-white/80">Bookings Completed</p>
            </div>
            <div>
              <p className="font-serif font-bold text-3xl md:text-4xl text-luxury-gold mb-1">1,000+</p>
              <p className="text-xs text-white/80">Verified Artists</p>
            </div>
            <div>
              <p className="font-serif font-bold text-3xl md:text-4xl text-luxury-gold mb-1">50+</p>
              <p className="text-xs text-white/80">Cities Covered</p>
            </div>
            <div>
              <p className="font-serif font-bold text-3xl md:text-4xl text-luxury-gold mb-1">4.9★</p>
              <p className="text-xs text-white/80">Customer Rating</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
