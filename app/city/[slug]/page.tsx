import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSignup from "@/components/NewsletterSignup";
import { CITIES_DATA } from "@/lib/city-data";
import { getLocalBusinessSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { MapPin, Star, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import CityArtistsSection from "@/components/CityArtistsSection";
import { fetchRealArtists } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = CITIES_DATA[slug.toLowerCase()];
  if (!city) return {};

  return {
    title: city.title,
    description: city.metaDescription,
    alternates: { canonical: `https://mehndigo.in/city/${city.slug}` },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url: `https://mehndigo.in/city/${city.slug}`,
      siteName: "MehndiGo",
      images: [{ url: city.heroImage }]
    }
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { slug } = await params;
  const city = CITIES_DATA[slug.toLowerCase()];

  if (!city) {
    notFound();
  }

  const cityArtists = await fetchRealArtists(city.name);

  const localBusinessSchema = getLocalBusinessSchema({
    name: city.name,
    priceRange: city.priceRange,
    rating: city.rating,
    reviewCount: city.reviewCount
  });

  const breadcrumbs = [
    { name: "Cities", url: "/#cities" },
    { name: city.name, url: `/city/${city.slug}` }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: `https://mehndigo.in${b.url}` })));
  const faqSchema = getFAQSchema(city.faqs);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Inject Local Business & Breadcrumb Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={breadcrumbs} />

        {/* City Hero Banner */}
        <section className="relative bg-gradient-to-r from-luxury-green via-luxury-green-dark to-black text-white rounded-3xl p-8 md:p-14 overflow-hidden mb-14 shadow-2xl border border-luxury-gold/30">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" /> Top Mehendi Service in {city.name}, {city.state}
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              {city.h1}
            </h1>

            <p className="text-luxury-cream/80 text-sm md:text-base leading-relaxed mb-6">
              {city.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90 mb-8">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                <Star className="w-4 h-4 text-luxury-gold fill-luxury-gold" /> {city.rating} Rating ({city.reviewCount}+ Reviews)
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                <ShieldCheck className="w-4 h-4 text-luxury-gold" /> {city.artistCount}+ Verified Local Artists
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-luxury-gold/20">
                Price: {city.priceRange}
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="px-8 py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold transition-all"
              >
                Book Artist in {city.name}
              </Link>
              <a
                href="#popular-areas"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all"
              >
                View Localities
              </a>
            </div>
          </div>
        </section>

        {/* About Local Service */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-green">
                Why Book Mehendi Artists in {city.name} via MehndiGo?
              </h2>
              <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
                {city.aboutContent}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {city.whyBookHere.map((point, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-luxury-gold/15 rounded-xl text-xs font-semibold text-luxury-green flex items-start gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-luxury-gold/20 shadow-lg">
              <h3 className="font-serif font-bold text-lg text-luxury-green mb-4 border-b border-luxury-gold/15 pb-2">
                {city.name} Service Summary
              </h3>
              <ul className="space-y-3 text-xs text-luxury-green/80">
                <li className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-semibold">Starting Price:</span>
                  <span className="font-bold text-luxury-gold">{city.priceRange}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-semibold">Doorstep Delivery:</span>
                  <span>100% Guaranteed</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-semibold">Henna Quality:</span>
                  <span>100% Chemical-Free Organic</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="font-semibold">Backup Artist:</span>
                  <span>Included Free</span>
                </li>
              </ul>
              <Link
                href="/#contact"
                className="w-full mt-6 py-3 bg-luxury-green hover:bg-luxury-green-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md text-center block transition-all"
              >
                Instant Date Check
              </Link>
            </div>
          </div>
        </section>

        {/* Localities Covered */}
        <section id="popular-areas" className="mb-16 bg-luxury-cream/40 border border-luxury-gold/20 rounded-3xl p-8">
          <h2 className="font-serif text-2xl font-bold text-luxury-green mb-2">
            Localities Covered in {city.name}
          </h2>
          <p className="text-xs text-luxury-green/75 mb-6">Our artists provide doorstep service in every major colony, sector, and resort in {city.name}.</p>

          <div className="flex flex-wrap gap-2.5">
            {city.popularAreas.map((area, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-luxury-gold/20 text-luxury-green font-semibold text-xs rounded-full shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold" /> {area}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Artists in City */}
        <CityArtistsSection artists={cityArtists} cityName={city.name} />

        {/* City FAQs */}
        <section className="mb-16 bg-white p-8 md:p-12 rounded-3xl border border-luxury-gold/20 shadow-md">
          <h2 className="font-serif text-2xl font-bold text-luxury-green mb-6">
            Frequently Asked Questions for {city.name} Bookings
          </h2>
          <div className="space-y-4">
            {city.faqs.map((faq, idx) => (
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
