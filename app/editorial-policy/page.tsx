import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Editorial Policy & Artist Guidelines | MehndiGo",
  description: "Read MehndiGo's editorial guidelines, portfolio verification standards, and organic henna safety commitments.",
  alternates: { canonical: "https://mehndigo.in/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Editorial Policy", url: "/editorial-policy" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Editorial Policy & Community Standards
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>MehndiGo is committed to publishing accurate, expert-reviewed information regarding bridal henna care, stain darkening chemistry, and artist portfolio authenticity.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Artist Portfolio Authenticity</h2>
          <p>Every photo published on artist profiles undergoes digital reverse-image verification and practical skill testing to ensure brides see 100% original work.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Chemical Safety Standards</h2>
          <p>We actively educate our community against the usage of black henna containing toxic PPD (Paraphenylenediamine). All articles and guides are reviewed by certified naturalists.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
