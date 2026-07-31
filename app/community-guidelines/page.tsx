import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Community Guidelines & Artist Code | MehndiGo",
  description: "Review MehndiGo's community standards, artist code of conduct, and hygiene commitments for bridal and festival bookings.",
  alternates: { canonical: "https://mehndigo.in/community-guidelines" }
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Community Guidelines", url: "/community-guidelines" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Community Guidelines &amp; Code of Conduct
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>MehndiGo is committed to creating a respectful, safe, and professional environment for both customers and Mehendi artists.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Artist Professional Standards</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Punctuality:</strong> Artists must arrive at the scheduled address on time.</li>
            <li><strong>Hygiene &amp; Safety:</strong> Artists must use sanitized tools, clean aprons, and 100% natural organic henna cones.</li>
            <li><strong>Portfolio Authenticity:</strong> Artists must only upload original designs executed by themselves.</li>
          </ul>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Customer Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Safe Environment:</strong> Provide a clean, well-lit, and comfortable seating area for the artist.</li>
            <li><strong>Respectful Conduct:</strong> Maintain courteous behavior towards artists and support personnel.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
