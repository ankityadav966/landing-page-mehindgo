import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Refund Policy | MehndiGo Deposit & Backup Guarantee",
  description: "Learn about MehndiGo's 100% deposit refund policy, backup artist guarantee, and customer protection guidelines.",
  alternates: { canonical: "https://mehndigo.in/refund" }
};

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Refund Policy", url: "/refund" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Refund Policy & Deposit Guarantee
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>At MehndiGo, customer satisfaction and peace of mind during wedding events is our top priority. We offer a transparent 100% Refund Guarantee under specific conditions.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Full 100% Refund Scenarios</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>If an Artist fails to show up and a backup artist cannot be dispatched in time.</li>
            <li>If a cancellation is requested by the user at least 48 hours prior to the event date.</li>
            <li>If the artist cancels the booking from their end due to an unforeseen emergency.</li>
          </ul>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Processing Timeline</h2>
          <p>Approved refunds are credited back to your original payment method or MehndiGo app wallet within 3 to 5 business days.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
