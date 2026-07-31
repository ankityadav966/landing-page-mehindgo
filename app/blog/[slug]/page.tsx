import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSignup from "@/components/NewsletterSignup";
import { FEATURED_POSTS } from "@/lib/blog-data";
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { Calendar, Clock, User, ArrowLeft, HelpCircle, Download, CheckCircle2 } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = FEATURED_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | MehndiGo Journal`,
    description: post.metaDescription,
    alternates: { canonical: `https://mehndigo.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://mehndigo.in/blog/${post.slug}`,
      siteName: "MehndiGo",
      images: [{ url: post.image }],
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = FEATURED_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    datePublished: post.datePublished,
    image: post.image,
    authorName: post.author
  });

  const breadcrumbs = [
    { name: "Blog", url: "/blog" },
    { name: post.category, url: `/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: `https://mehndigo.in${b.url}` })));
  const faqSchema = post.faqs ? getFAQSchema(post.faqs) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Inject JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={breadcrumbs} />

        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-dark mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-block bg-luxury-gold/15 text-luxury-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {post.category}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-green leading-tight mb-4">
            {post.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-neutral-500 pb-6 border-b border-luxury-gold/15">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-luxury-gold" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-luxury-gold" /> {post.datePublished}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-luxury-gold" /> {post.readTime}</span>
          </div>
        </header>

        {/* Main Image */}
        <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden mb-10 shadow-xl border border-luxury-gold/20">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Main Body */}
          <article className="lg:col-span-8 space-y-6 text-luxury-green/90 leading-relaxed">
            
            {/* Outline box */}
            {post.outline && post.outline.length > 0 && (
              <div className="p-6 bg-luxury-cream/50 border border-luxury-gold/25 rounded-2xl mb-8">
                <h3 className="font-serif font-bold text-luxury-green text-base mb-3">Table of Contents</h3>
                <ul className="space-y-1.5 text-xs text-luxury-green/80">
                  {post.outline.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Render */}
            <div
              className="prose prose-luxury max-w-none text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Article FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t border-luxury-gold/15">
                <h3 className="font-serif font-bold text-2xl text-luxury-green mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-luxury-gold" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="p-5 bg-white border border-luxury-gold/15 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-sm text-luxury-green mb-2">{faq.question}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Internal Links */}
            {post.internalLinks && post.internalLinks.length > 0 && (
              <div className="mt-8 p-5 bg-white border border-luxury-gold/20 rounded-2xl">
                <h4 className="font-bold text-xs uppercase tracking-wider text-luxury-gold mb-3">Related Booking Resources</h4>
                <div className="flex flex-wrap gap-3">
                  {post.internalLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      className="text-xs font-semibold text-luxury-green hover:text-luxury-gold underline underline-offset-4"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>

          {/* Sidebar Widget */}
          <aside className="lg:col-span-4 space-y-6">
            {/* App Conversion Card */}
            <div className="p-6 bg-gradient-to-b from-luxury-green to-luxury-green-dark text-white rounded-3xl border border-luxury-gold/30 shadow-xl sticky top-28">
              <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold bg-white/10 px-2.5 py-1 rounded-full inline-block mb-3">
                MehndiGo Official App
              </span>
              <h3 className="font-serif font-bold text-xl mb-3">Book Verified Artists in 2 Minutes</h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Download the MehndiGo app to view artist portfolios, check real-time availability, and lock in your wedding date with 100% money-back guarantee.
              </p>

              <ul className="space-y-2 text-xs text-white/90 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-luxury-gold" /> 1,000+ Verified Stylists</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-luxury-gold" /> 100% Organic Henna</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-luxury-gold" /> Live ETA Tracking</li>
              </ul>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" /> Download APK
              </a>
            </div>
          </aside>
        </div>
      </main>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
