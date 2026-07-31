import { getArticleSchema, getFAQSchema } from "@/lib/schema";

export interface AIArticleInput {
  title: string;
  category: string;
  author: string;
  rawContent: string;
  faqs?: { question: string; answer: string }[];
  targetKeyword: string;
  secondaryKeywords: string[];
}

export function processAIArticle(input: AIArticleInput) {
  const slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const now = new Date().toISOString().split("T")[0];

  // Auto-generate Table of Contents from h2 headers
  const headingMatches = input.rawContent.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  const outline = headingMatches.map((h) => h.replace(/<[^>]+>/g, ""));

  const metaDescription = input.rawContent.replace(/<[^>]+>/g, "").slice(0, 155) + "...";

  const articleSchema = getArticleSchema({
    title: input.title,
    description: metaDescription,
    slug,
    datePublished: now,
    image: "https://mehndigo.in/service-bridal.png",
    authorName: input.author || "MehndiGo AI Editorial Team"
  });

  const faqSchema = input.faqs && input.faqs.length > 0 ? getFAQSchema(input.faqs) : null;

  return {
    slug,
    title: input.title,
    h1: input.title,
    metaDescription,
    category: input.category,
    datePublished: now,
    readTime: "5 min read",
    image: "/service-bridal.png",
    targetKeyword: input.targetKeyword,
    secondaryKeywords: input.secondaryKeywords,
    outline,
    contentHtml: input.rawContent,
    articleSchema,
    faqSchema,
    internalLinks: [
      { text: "Book Verified Mehendi Artists", url: "/#contact" },
      { text: "Top Mehendi Artists in Jaipur", url: "/city/jaipur" },
      { text: "Bridal Mehendi Service", url: "/services/bridal-mehendi" }
    ],
    cta: { text: "Book Artist on MehndiGo App", url: "/#download" }
  };
}
