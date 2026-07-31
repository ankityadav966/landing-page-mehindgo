export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mehndigo.in/#organization",
    "name": "MehndiGo",
    "url": "https://mehndigo.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mehndigo.in/logo.jpeg",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://facebook.com/mehndigo",
      "https://instagram.com/mehndigo_official",
      "https://twitter.com/mehndigo",
      "https://youtube.com/mehndigo"
    ],
    "description": "India's premier on-demand platform connecting verified professional Mehendi artists with brides and event hosts.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mehndigo.in/#website",
    "url": "https://mehndigo.in",
    "name": "MehndiGo",
    "description": "Book Verified Professional Mehendi Artists On Demand Across India.",
    "publisher": {
      "@id": "https://mehndigo.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mehndigo.in/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function getMobileAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MehndiGo App",
    "operatingSystem": "ANDROID, IOS",
    "applicationCategory": "LifestyleApplication",
    "ratingValue": "4.9",
    "ratingCount": "1250",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "downloadUrl": "https://mehndigo.in/apps/mehndigo-release.apk"
  };
}

export function getLocalBusinessSchema(city?: { name: string; priceRange: string; rating: number; reviewCount: number }) {
  const cityName = city ? city.name : "India";
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mehndigo.in/#localbusiness-${cityName.toLowerCase()}`,
    "name": `MehndiGo ${cityName} - On Demand Mehendi Artists`,
    "image": "https://mehndigo.in/service-bridal.png",
    "url": city ? `https://mehndigo.in/city/${cityName.toLowerCase()}` : "https://mehndigo.in",
    "telephone": "+91-9876543210",
    "priceRange": city ? city.priceRange : "₹1,500 - ₹15,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124,
      "longitude": 75.7873
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": city ? city.rating : "4.9",
      "reviewCount": city ? city.reviewCount : "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image.startsWith("http") ? article.image : `https://mehndigo.in${article.image}`,
    "datePublished": article.datePublished,
    "dateModified": article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.authorName || "MehndiGo Editorial Team"
    },
    "publisher": {
      "@id": "https://mehndigo.in/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mehndigo.in/blog/${article.slug}`
    }
  };
}
