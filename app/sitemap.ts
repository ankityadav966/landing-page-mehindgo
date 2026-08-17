import { MetadataRoute } from "next";
import { BLOG_CATEGORIES, FEATURED_POSTS } from "@/lib/blog-data";
import { CITIES_DATA } from "@/lib/city-data";
import { SERVICES_DATA } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehndigo.in";
  const now = new Date();

  // Core static & EEAT Legal routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/refund`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/cancellation`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/community-guidelines`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/copyright`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Service Landing Page Routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Blog Category Routes
  const blogCategoryRoutes: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Featured Blog Posts Routes
  const blogPostRoutes: MetadataRoute.Sitemap = FEATURED_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // City Landing Page Routes
  const cityRoutes: MetadataRoute.Sitemap = Object.keys(CITIES_DATA).map((slug) => ({
    url: `${baseUrl}/city/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogCategoryRoutes, ...blogPostRoutes, ...cityRoutes];
}
