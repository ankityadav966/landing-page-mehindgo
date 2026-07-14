"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  ShieldCheck,
  Database,
  Camera,
  ImageIcon,
  MapPin,
  Bell,
  Globe,
  HardDrive,
  CreditCard,
  Share2,
  Lock,
  Trash2,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  Building2,
  Info,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// Definitions of sections for Table of Contents
const SECTIONS = [
  { id: "introduction", label: "1. Introduction", icon: FileText },
  { id: "information-we-collect", label: "2. Information We Collect", icon: Database },
  { id: "permissions-used", label: "3. Device Permissions", icon: ShieldCheck },
  { id: "how-we-use-information", label: "4. How We Use Information", icon: CheckCircle2 },
  { id: "payment-security", label: "5. Payment Security", icon: CreditCard },
  { id: "location-usage", label: "6. Location Usage", icon: MapPin },
  { id: "data-sharing", label: "7. Data Sharing", icon: Share2 },
  { id: "data-security", label: "8. Data Security", icon: Lock },
  { id: "data-retention", label: "9. Data Retention & Deletion", icon: Trash2 },
  { id: "user-rights", label: "10. Your Rights", icon: UserCheck },
  { id: "children-privacy", label: "11. Children's Privacy", icon: Baby },
  { id: "international-transfers", label: "12. International Transfers", icon: Globe },
  { id: "policy-changes", label: "13. Policy Updates", icon: RefreshCw },
  { id: "contact-us", label: "14. Contact Us", icon: Mail },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-luxury-cream-dark/30 pt-24 pb-20">
        {/* Luxury Hero Header */}
        <section className="relative overflow-hidden bg-luxury-green-dark text-luxury-cream py-16 md:py-24 border-b border-luxury-gold/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,57,53,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold-light text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
              <ShieldCheck className="w-4 h-4" /> Legal Center
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-luxury-cream/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Learn how MehndiGo collects, uses, and safeguards your personal data. We are committed to transparency, security, and compliant data practices.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-luxury-cream/60">
              <span>Platform: **Android & iOS**</span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/40" />
              <span>Version: **1.0.0**</span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/40" />
              <span>Effective Date: **July 10, 2026**</span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar Table of Contents (Sticky on Desktop) */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 bg-white border border-neutral-border rounded-2xl p-6 shadow-luxury">
                <h3 className="font-serif text-lg font-bold text-luxury-green mb-5 pb-3 border-b border-neutral-border">
                  On this page
                </h3>
                <nav className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin">
                  {SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`flex items-center gap-3 text-left py-2 px-3 rounded-lg text-sm transition-all duration-300 group focus:outline-none ${
                          isActive
                            ? "bg-luxury-gold/5 text-luxury-gold font-semibold border-l-2 border-luxury-gold"
                            : "text-luxury-green-light hover:text-luxury-gold hover:bg-neutral-50"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "scale-110 text-luxury-gold" : "text-luxury-green-light/60 group-hover:text-luxury-gold"}`} />
                        <span className="truncate">{sec.label.split(". ")[1]}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Privacy Policy Main Content */}
            <div className="lg:col-span-3 bg-white border border-neutral-border rounded-3xl p-6 sm:p-10 md:p-12 shadow-luxury">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    1. Introduction
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    Welcome to **MehndiGo** (referred to as &quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Company&quot;). We value your trust and are fully committed to protecting your privacy and personal data. This Privacy Policy details how we collect, use, process, store, and share your information when you use our mobile application (available on Android and iOS platforms) and our website <a href="https://mehndigo.in" className="text-luxury-gold hover:underline inline-flex items-center gap-0.5">https://mehndigo.in <ExternalLink className="w-3.5 h-3.5" /></a> (collectively, the &quot;Platform&quot;).
                  </p>
                  <p>
                    MehndiGo is a premium online marketplace matching customers seeking high-quality, professional Mehndi designs with verified local Mehndi artists (&quot;Artists&quot;). This policy applies to all users of our Platform, including booking customers, registered artists, and casual website visitors.
                  </p>
                  <p>
                    By downloading, registering with, accessing, or using MehndiGo, you explicitly consent to our collection, processing, and sharing of your personal data as outlined in this Privacy Policy. If you do not agree to these terms, please do not use the Platform or provide your details.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Information We Collect */}
              <section id="information-we-collect" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    2. Information We Collect
                  </h2>
                </div>
                <p className="text-luxury-green-light leading-relaxed mb-6 font-sans">
                  We collect only the minimum necessary information to provide a secure, seamless booking experience and verify artist portfolios. This information is classified as follows:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#FAF7F5] border border-luxury-gold/10 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif text-base font-bold text-luxury-green mb-3">A. Provided By You</h4>
                    <ul className="text-sm text-luxury-green-light space-y-2 font-sans list-disc list-inside">
                      <li>Full Name & Gender</li>
                      <li>Mobile Number & Email</li>
                      <li>Profile Photo (optional)</li>
                      <li>Complete Delivery Address</li>
                      <li>Artist portfolio designs</li>
                      <li>Reviews and Ratings</li>
                    </ul>
                  </div>

                  <div className="bg-[#FAF7F5] border border-luxury-gold/10 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif text-base font-bold text-luxury-green mb-3">B. Automatically Collected</h4>
                    <ul className="text-sm text-luxury-green-light space-y-2 font-sans list-disc list-inside">
                      <li>GPS Location (with consent)</li>
                      <li>Device Model & OS Version</li>
                      <li>IP Address & Log files</li>
                      <li>FCM Notification Tokens</li>
                      <li>Usage Analytics & Clickpaths</li>
                      <li>Diagnostic Crash Logs</li>
                    </ul>
                  </div>

                  <div className="bg-[#FAF7F5] border border-luxury-gold/10 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif text-base font-bold text-luxury-green mb-3">C. Third-Party Integrations</h4>
                    <ul className="text-sm text-luxury-green-light space-y-2 font-sans list-disc list-inside">
                      <li>Payment Gateway Status</li>
                      <li>Transaction ID</li>
                      <li>Maps Geocoding data</li>
                      <li>Authorization states</li>
                      <li>*No CVV/Card info is stored*</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-luxury-gold/5 border-l-4 border-luxury-gold p-4 rounded-r-xl">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-luxury-green leading-relaxed font-sans">
                      **Note on Payments:** All processing is conducted securely via our certified gateway partner (**Razorpay**). MehndiGo does not store, process, or transmit banking passwords, credit card numbers, or CVVs on our own servers.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Device Permissions */}
              <section id="permissions-used" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    3. Device Permissions Used
                  </h2>
                </div>
                <p className="text-luxury-green-light leading-relaxed mb-6 font-sans">
                  The MehndiGo application requests the following device permissions to operate core features. You can toggle permission access via your OS settings at any time:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Location */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Location Services (GPS)</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** To locate nearby verified artists, show exact distance estimates, and pre-fill booking addresses.
                      </p>
                    </div>
                  </div>

                  {/* Camera */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Camera Permission</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** Allows artists to take portfolio photos on-the-go and customers to capture reference designs.
                      </p>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Photo Library / Media Access</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** Needed to select, upload, and save profile pictures and portfolio design files.
                      </p>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Push Notifications</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** Delivers real-time booking confirmations, artist chats, secure payment prompts, and arrival alerts.
                      </p>
                    </div>
                  </div>

                  {/* Network */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Internet & Network Access</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** Enables secure socket connections to our servers, map updates, processing, and chat.
                      </p>
                    </div>
                  </div>

                  {/* Storage */}
                  <div className="flex gap-4 p-4 border border-neutral-border rounded-xl hover:border-luxury-gold/30 hover:bg-[#FAF7F5]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-500 shrink-0">
                      <HardDrive className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-luxury-green">Storage Permission</h4>
                      <p className="text-xs text-luxury-green-light mt-1 font-sans">
                        **Purpose:** Caches local configurations, buffers image templates, and stores transaction invoices.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* How We Use Your Information */}
              <section id="how-we-use-information" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    4. How We Use Information
                  </h2>
                </div>
                <p className="text-luxury-green-light leading-relaxed mb-4 font-sans">
                  We process data to fulfill bookings, run security checks, and optimize operations. Specifically, we use information to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-luxury-green-light text-sm font-sans list-none mb-6">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Create, manage, and verify user and artist profiles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Verify artist credentials, business proof, and portfolios.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Process bookings, match availabilities, and calculate routes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Securely execute client payments and artist payouts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Deliver real-time transactional push notifications via FCM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Analyze crash diagnostics to resolve app performance issues.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Resolve disputes, handle refunds, and provide support.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>Monitor threat vectors to prevent logins or booking fraud.</span>
                  </li>
                </ul>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Payment Information */}
              <section id="payment-security" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    5. Payment Information
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    All payment processing is isolated securely from the main MehndiGo Platform database. We integrate with **Razorpay**, a trusted, industry-leading, and PCI-DSS compliant payment gateway, to process cards, UPI, net banking, and digital wallets.
                  </p>
                  <p>
                    We never request, store, or see CVV numbers, PINs, cardholder details, or banking authentication codes. Razorpay processes and records transactions safely, delivering only a success/fail confirmation token and reference transaction ID to our platform so we can authorize and schedule the booking.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Location Information */}
              <section id="location-usage" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    6. Location Information
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    With your active consent, we collect geolocation data to enable localized search, direct booking distance estimations, and visual mapping. Location processing handles three main roles:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>**Nearby Search:** Shows active verified artists operating in your immediate city and neighborhood.</li>
                    <li>**Booking Coordination:** Computes transit times and distance fees for the artist to travel to the service address.</li>
                    <li>**Safety Verification:** Helps us verify coordinates to ensure artists reach correct locations.</li>
                  </ul>
                  <p>
                    We do not perform continuous background location tracking. Geolocation is processed only when the app is active or when an artist is traveling to complete an active booking slot.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Data Sharing */}
              <section id="data-sharing" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    7. Data Sharing
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    We value your trust. **MehndiGo does not sell, rent, or lease your personal information to marketing databases or advertising brokers.**
                  </p>
                  <p>
                    We disclose your data only in the following controlled scenarios to complete services, fulfill regulatory duties, or perform diagnostic tasks:
                  </p>
                  <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-border space-y-4">
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold shrink-0 mt-2" />
                      <div>
                        <strong className="text-luxury-green font-serif">Between Customers and Booked Artists:</strong>
                        <p className="text-sm mt-0.5">When a booking is confirmed, your Name, Contact Number, and Delivery Address are shared with the booked Artist to facilitate on-site service completion.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold shrink-0 mt-2" />
                      <div>
                        <strong className="text-luxury-green font-serif">Third-Party Operations:</strong>
                        <p className="text-sm mt-0.5">We share transactional details with Razorpay (Payments), Firebase and Google Maps (Geo-locating and Auth), and FCM (Notification dispatching).</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold shrink-0 mt-2" />
                      <div>
                        <strong className="text-luxury-green font-serif">Legal Requirements:</strong>
                        <p className="text-sm mt-0.5">We disclose data to government bodies, police investigations, or regulatory compliance bureaus when mandated under applicable laws or court orders.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Data Security */}
              <section id="data-security" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    8. Data Security
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    We protect your information through robust technical, administrative, and logical security systems:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>**Transport Layer Encryption:** All network requests to our API servers require HTTPS encrypted endpoints (SSL/TLS).</li>
                    <li>**Token-Based Auth:** Users authenticate via secure JSON Web Tokens (JWT) to access personal booking logs.</li>
                    <li>**Access Controls:** Database authorization rules restrict user profile visibility to verified support officers only.</li>
                    <li>**Secure Infrastructure:** Databases are hosted on secure firewalled instances with active intrusion detection and automated system backups.</li>
                  </ul>
                  <p>
                    Please remember that no method of online transmission or data storage is 100% secure. We cannot warrant absolute protection but investigate any system anomaly or breach attempt immediately.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Data Retention */}
              <section id="data-retention" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    9. Data Retention & Deletion
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    We retain personal data only as long as your profile account is active or needed to provide Mehndi booking services. 
                  </p>
                  <p>
                    **Account Deletion:** You can request account deletion at any time in the app profile settings or via email to <a href="mailto:support@mehndigo.in" className="text-luxury-gold hover:underline">support@mehndigo.in</a>. Once processed, we delete or anonymize your personal identifying details.
                  </p>
                  <p>
                    **Legal & Regulatory Exclusions:** We reserve the right to retain transactional metadata, receipt invoice logs, and payment histories to comply with state financial auditing, tax reporting, or legal disputes.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* User Rights */}
              <section id="user-rights" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    10. User Rights
                  </h2>
                </div>
                <p className="text-luxury-green-light leading-relaxed mb-6 font-sans">
                  We respect international guidelines (GDPR) and local laws (such as India&apos;s Digital Personal Data Protection Act - DPDP). You are entitled to the following privacy control rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50 border border-neutral-border rounded-xl">
                    <h4 className="font-serif text-sm font-bold text-luxury-green mb-1">Access & Copy</h4>
                    <p className="text-xs text-luxury-green-light font-sans">Request summary exports of your personal details and booking logs collected on our Platform.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 border border-neutral-border rounded-xl">
                    <h4 className="font-serif text-sm font-bold text-luxury-green mb-1">Correction & Updates</h4>
                    <p className="text-xs text-luxury-green-light font-sans">Instantly modify your name, addresses, numbers, and profile photos via settings.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 border border-neutral-border rounded-xl">
                    <h4 className="font-serif text-sm font-bold text-luxury-green mb-1">Erasure (Deletion)</h4>
                    <p className="text-xs text-luxury-green-light font-sans">Request deletion of files or profile databases immediately upon verification.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 border border-neutral-border rounded-xl">
                    <h4 className="font-serif text-sm font-bold text-luxury-green mb-1">Withdraw Permission</h4>
                    <p className="text-xs text-luxury-green-light font-sans">Revoke camera, gallery, location, or push notification flags on device menus at any time.</p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Children's Privacy */}
              <section id="children-privacy" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Baby className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    11. Children&apos;s Privacy
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    MehndiGo is designed and marketed exclusively for individuals aged 18 and older. The Platform is not intended for and does not knowingly collect personal database files from children under 13 years of age.
                  </p>
                  <p>
                    If we realize that an underage profile has registered, we purge all matching account rows and location cache logs immediately. Please email us if you suspect an account is registered by an underage user.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* International Transfers */}
              <section id="international-transfers" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    12. International Data Transfers
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    Our cloud hosting databases are stored on secure endpoints, primarily located in servers within India. If you use the Platform from other regions, your data may be transferred and processed internationally.
                  </p>
                  <p>
                    We deploy appropriate technical, contract, and administrative protocols (e.g. Standard Contractual Clauses) to ensure that your data is kept secure and handled in compliance with this Privacy Policy.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Changes to Privacy Policy */}
              <section id="policy-changes" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    13. Changes to This Privacy Policy
                  </h2>
                </div>
                <div className="text-luxury-green-light space-y-4 leading-relaxed font-sans text-base">
                  <p>
                    We may update this Privacy Policy periodically. If we revise these terms, we will update the &quot;Last Updated&quot; date at the top of the policy. 
                  </p>
                  <p>
                    For any material updates, we will notify you through notice badges in the app, web banners, or an email dispatch prior to the changes taking effect. Continuing to use MehndiGo after an update constitutes consent to the modified policy.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-neutral-border" />

              {/* Contact Us */}
              <section id="contact-us" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-green">
                    14. Contact Us
                  </h2>
                </div>
                <p className="text-luxury-green-light leading-relaxed mb-6 font-sans">
                  If you have any questions, clarifications, feedback, or grievance complaints regarding this Privacy Policy, please reach out to us at:
                </p>

                <div className="bg-[#FAF7F5] border border-luxury-gold/10 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Building2 className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-luxury-green mb-0.5">Company Entity</h4>
                        <p className="text-sm text-luxury-green-light font-sans">MehndiGo Technologies Private Limited</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-luxury-green mb-0.5">Email Support</h4>
                        <p className="text-sm text-luxury-gold font-sans hover:underline">
                          <a href="mailto:support@mehndigo.in">support@mehndigo.in</a>
                        </p>
                        <p className="text-xs text-luxury-green-light font-sans mt-0.5">DPO/Legal: <a href="mailto:privacy@mehndigo.in" className="hover:underline text-luxury-green font-medium">privacy@mehndigo.in</a></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 md:col-span-2">
                      <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-luxury-green mb-0.5">Registered Office Address</h4>
                        <p className="text-sm text-luxury-green-light font-sans leading-relaxed">
                          MehndiGo Technologies Private Limited,<br />
                          Legal &amp; Compliance Department, Office 412,<br />
                          Sector 62, Noida, Uttar Pradesh, 201301, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
