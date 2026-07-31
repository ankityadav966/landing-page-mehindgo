import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cancellation Policy | MehndiGo",
  description: "Review MehndiGo's flexible booking cancellation terms for brides, festival hosts, and Mehendi artists.",
  alternates: { canonical: "https://mehndigo.in/cancellation" }
};

export default function CancellationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Cancellation Policy", url: "/cancellation" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Cancellation Policy
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>We understand that wedding dates and event schedules can change. Our cancellation rules are designed to be fair to both customers and artists.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Customer Cancellation Rules</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>More than 48 hours before event:</strong> 100% advance deposit refund.</li>
            <li><strong>24 to 48 hours before event:</strong> 50% deposit refund or free date reschedule.</li>
            <li><strong>Less than 24 hours before event:</strong> Advance deposit is retained to compensate the reserved artist.</li>
          </ul>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Rescheduling Options</h2>
          <p>You can reschedule your booking free of charge up to 24 hours before your slot via the MehndiGo app or by contacting our concierge desk.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
