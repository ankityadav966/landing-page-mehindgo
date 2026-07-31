import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BLOG_CATEGORIES, FEATURED_POSTS, BLOG_CONTENT_STRATEGY_MATRIX } from "@/lib/blog-data";
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Bridal Mehendi Blog & Henna Care Tips | MehndiGo",
  description: "Explore expert advice on bridal Mehendi designs, natural stain darkening secrets, wedding planning tips, and verified artist insights.",
  alternates: { canonical: "https://mehndigo.in/blog" },
  openGraph: {
    title: "Bridal Mehendi Blog & Henna Care Tips | MehndiGo",
    description: "Expert guide on bridal henna designs, natural dark stain tricks, and wedding tips.",
    url: "https://mehndigo.in/blog",
    siteName: "MehndiGo"
  }
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> MehndiGo Editorial & Knowledge Hub
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-green mb-4">
            Bridal Henna Trends, Care Guides & Tips
          </h1>
          <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
            Your definitive source for royal Mehendi inspirations, natural stain chemistry secrets, and professional artist advice.
          </p>
        </div>

        {/* Categories Pills */}
        <section className="mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-4 text-center md:text-left">
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="p-3 bg-white hover:bg-luxury-cream border border-luxury-gold/15 rounded-xl text-center text-xs font-bold text-luxury-green hover:text-luxury-gold transition-all duration-300 shadow-sm flex flex-col items-center justify-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">✨</span>
                <span className="line-clamp-1">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-luxury-green mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-luxury-gold" /> Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_POSTS.map((post) => (
              <article key={post.id} className="bg-white border border-luxury-gold/15 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-luxury-green/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-luxury-gold" /> {post.datePublished}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-luxury-gold" /> {post.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-luxury-green group-hover:text-luxury-gold transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                      {post.metaDescription}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-dark mt-2"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 150-Post Future Content Roadmap Preview */}
        <section className="mb-16 bg-luxury-cream/40 border border-luxury-gold/20 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-luxury-green flex items-center gap-2">
                <Layers className="w-6 h-6 text-luxury-gold" /> 150-Post Content Library Roadmap
              </h2>
              <p className="text-xs text-luxury-green/70 mt-1">Structured SEO articles scheduled across all 8 core categories.</p>
            </div>
            <span className="text-xs font-bold bg-luxury-gold text-white px-3 py-1 rounded-full">150 Topics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
            {BLOG_CONTENT_STRATEGY_MATRIX.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all text-xs">
                <div className="flex items-center justify-between text-[10px] text-luxury-gold font-bold mb-1">
                  <span>#{item.index} • {item.category}</span>
                </div>
                <h4 className="font-semibold text-luxury-green line-clamp-2">{item.title}</h4>
                <p className="text-[11px] text-neutral-500 line-clamp-1 mt-1 font-mono">Keyword: {item.targetKeyword}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
