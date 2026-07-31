import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BLOG_CATEGORIES, FEATURED_POSTS } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catObj = BLOG_CATEGORIES.find((c) => c.slug === category);
  if (!catObj) return {};

  return {
    title: `${catObj.name} Articles & Henna Designs | MehndiGo`,
    description: catObj.description,
    alternates: { canonical: `https://mehndigo.in/blog/category/${category}` }
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const catObj = BLOG_CATEGORIES.find((c) => c.slug === category);

  if (!catObj) {
    notFound();
  }

  const posts = FEATURED_POSTS.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === category);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Blog", url: "/blog" }, { name: catObj.name, url: `/blog/category/${category}` }]} />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Category Overview
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-green mb-4">
            {catObj.name}
          </h1>
          <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
            {catObj.description}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-luxury-gold/15 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-dark mt-2">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white border border-luxury-gold/15 rounded-3xl max-w-md mx-auto mb-16">
            <p className="text-sm font-semibold text-luxury-green mb-4">More {catObj.name} guides coming soon!</p>
            <Link href="/blog" className="px-6 py-2.5 bg-luxury-gold text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold inline-block">
              Back to All Articles
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
