import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookie & Tracking Policy | MehndiGo",
  description: "Learn how MehndiGo uses cookies, local storage, analytics, and session tokens to deliver a secure, personalized booking experience.",
  alternates: { canonical: "https://mehndigo.in/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Cookie Policy", url: "/cookie-policy" }]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-green mb-6">
          Cookie &amp; Tracking Technologies Policy
        </h1>

        <div className="prose prose-luxury max-w-none text-sm text-luxury-green/80 space-y-4 leading-relaxed bg-white p-8 rounded-3xl border border-luxury-gold/15 shadow-sm">
          <p>MehndiGo Technologies Private Limited (&quot;MehndiGo&quot;) uses cookies, local storage identifiers, and tracking technologies to optimize application speed, verify user sessions, and analyze traffic patterns.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your browser or device by websites you visit. They allow us to recognize your device, remember preferences, and ensure secure authentication.</p>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for secure login sessions, CSRF token validation, and checkout flows.</li>
            <li><strong>Analytics Cookies:</strong> Used by Google Analytics 4 and Microsoft Clarity to understand user navigation and improve performance.</li>
            <li><strong>Functional Cookies:</strong> Remember your preferred language selection and selected location city.</li>
          </ul>

          <h2 className="font-serif font-bold text-lg text-luxury-green mt-6 mb-2">3. Managing Cookie Preferences</h2>
          <p>You can adjust or block cookies at any time via your web browser settings. Note that disabling essential cookies may impact your ability to log in or book an artist.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
