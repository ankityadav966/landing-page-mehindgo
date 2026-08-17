import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms & Conditions | MehndiGo",
  description: "Read the Terms and Conditions for booking verified Mehendi artists and using the MehndiGo app and website.",
  alternates: { canonical: "https://mehndigo.in/terms" }
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Terms & Conditions", url: "/terms" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Terms & Conditions
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>Welcome to MehndiGo Technologies Private Limited (&quot;MehndiGo&quot;). By accessing our website or downloading our mobile application, you agree to comply with the following Terms and Conditions.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Service Scope</h2>
          <p>MehndiGo acts as an on-demand marketplace connecting customers (&quot;Users&quot;) with independent, verified Mehendi artists (&quot;Artists&quot;). MehndiGo ensures background verification and quality standards.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Booking Deposits & Payments</h2>
          <p>Bookings are secured upon payment of a 10% advance deposit. The remaining 90% is payable directly after service completion either via app wallet or cash.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">3. Organic Henna Guarantee</h2>
          <p>All Artists on MehndiGo are mandated to use 100% natural, chemical-free henna cones containing natural essential oils.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">4. User Responsibilities</h2>
          <p>Users must provide accurate event addresses and ensure a clean, well-lit seating environment for the Artist.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
