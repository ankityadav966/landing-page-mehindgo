import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Copyright & Content Policy | MehndiGo",
  description: "Review MehndiGo's copyright policy, IP protection guidelines, and DMCA takedown procedures.",
  alternates: { canonical: "https://mehndigo.in/copyright" }
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Copyright Policy", url: "/copyright" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Copyright &amp; Intellectual Property Policy
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>All content published on MehndiGo, including text, graphics, logos, icons, software, and design assets, is the property of MehndiGo Technologies Private Limited or its content suppliers and is protected by Indian and international copyright laws.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. Artist Intellectual Property</h2>
          <p>Artists retain copyright ownership of their original henna portfolio photos uploaded to the platform. By uploading, artists grant MehndiGo a non-exclusive license to display and market these designs.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. IP Takedown Notices</h2>
          <p>If you believe your copyright work has been uploaded without authorization, please notify our legal team at <a href="mailto:copyright@mehndigo.in" className="text-luxury-gold hover:underline">copyright@mehndigo.in</a> with proof of ownership.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
