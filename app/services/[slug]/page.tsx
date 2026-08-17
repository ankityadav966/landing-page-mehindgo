import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSignup from "@/components/NewsletterSignup";
import { SERVICES_DATA } from "@/lib/services-data";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { Sparkles, Star, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { ARTISTS } from "@/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug.toLowerCase()];
  if (!service) return {};

  return {
    title: `${service.title} | MehndiGo Services`,
    description: service.metaDescription,
    alternates: { canonical: `https://mehndigo.in/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://mehndigo.in/services/${service.slug}`,
      siteName: "MehndiGo",
      images: [{ url: service.heroImage }]
    }
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug.toLowerCase()];

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: service.h1, url: `/services/${service.slug}` }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: `https://mehndigo.in${b.url}` })));
  const faqSchema = getFAQSchema(service.faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "description": service.description,
    "provider": {
      "@id": "https://mehndigo.in/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "price": service.priceRange,
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Inject Structured Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={breadcrumbs} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-luxury-green via-luxury-green-dark to-black text-white rounded-3xl p-8 md:p-14 overflow-hidden mb-14 shadow-2xl border border-luxury-gold/30">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Professional Mehendi Service
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              {service.h1}
            </h1>

            <p className="text-luxury-cream/80 text-sm md:text-base leading-relaxed mb-6">
              {service.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90 mb-8">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                Starting: <strong className="text-luxury-gold">{service.priceRange}</strong>
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                <Clock className="w-4 h-4 text-luxury-gold" /> Avg. Time: {service.duration}
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                <ShieldCheck className="w-4 h-4 text-luxury-gold" /> 100% Organic Henna
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="px-8 py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold transition-all"
              >
                Book {service.h1}
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Service Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-green">
                Service Overview & Highlights
              </h2>
              <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-luxury-gold/15 rounded-xl text-xs font-semibold text-luxury-green flex items-start gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-luxury-gold/20 shadow-lg">
              <h3 className="font-serif font-bold text-lg text-luxury-green mb-4 border-b border-luxury-gold/15 pb-2">
                Popular Motifs Included
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.popularMotifs.map((motif, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-luxury-cream/60 border border-luxury-gold/20 text-luxury-green font-semibold text-xs rounded-full">
                    ✨ {motif}
                  </span>
                ))}
              </div>
              <Link
                href="/#contact"
                className="w-full py-3.5 bg-luxury-green hover:bg-luxury-green-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md text-center block transition-all"
              >
                Reserve Date & Time
              </Link>
            </div>
          </div>
        </section>

        {/* Top Verified Artists */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-green">
                Featured Stylists for {service.h1}
              </h2>
              <p className="text-xs text-luxury-green/75 mt-1">5-Step background checked artists specialized in this design style.</p>
            </div>
            <Link href="/#artists" className="text-xs font-bold uppercase tracking-wider text-luxury-gold hover:underline flex items-center gap-1">
              View All Artists <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTISTS.map((artist) => (
              <div key={artist.id} className="bg-white rounded-2xl border border-luxury-gold/15 p-5 shadow-sm hover:shadow-lg transition-all group">
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-2 right-2 bg-luxury-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-white" /> {artist.rating}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-luxury-green">{artist.name}</h3>
                <p className="text-xs text-luxury-gold font-semibold mb-2">{artist.speciality}</p>
                <div className="flex justify-between items-center text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                  <span>{artist.experience} exp</span>
                  <span className="font-bold text-luxury-green">{artist.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service FAQs */}
        <section className="mb-16 bg-white p-8 md:p-12 rounded-3xl border border-luxury-gold/20 shadow-md">
          <h2 className="font-serif text-2xl font-bold text-luxury-green mb-6">
            Service FAQs
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
                <h3 className="font-bold text-sm text-luxury-green mb-2">{faq.question}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
