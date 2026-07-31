import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Legal & Health Disclaimer | MehndiGo",
  description: "Read MehndiGo's legal disclaimer regarding henna application, skin patch testing, and service availability.",
  alternates: { canonical: "https://mehndigo.in/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Disclaimer", url: "/disclaimer" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Legal &amp; Health Disclaimer
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>The information provided on MehndiGo website and mobile application is for general informational and booking purposes only.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Skin Allergy Disclaimer</h2>
          <p>While MehndiGo mandates that all artists use 100% natural, chemical-free organic henna cones, skin sensitivity varies between individuals. We recommend requesting a small skin patch test prior to full bridal application if you have sensitive skin.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Stain Color Variation</h2>
          <p>Henna stain depth (color intensity) depends on individual skin chemistry, body heat, and aftercare (avoiding soap water for 24 hours). MehndiGo provides natural darkening guidelines but does not guarantee identical stain shades on all skin types.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
