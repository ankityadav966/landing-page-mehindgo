const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  jaipur: { lat: 26.9124, lng: 75.7873 },
  delhi: { lat: 28.6139, lng: 77.2090 },
  mumbai: { lat: 19.0760, lng: 72.8777 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  hyderabad: { lat: 17.3850, lng: 78.4867 },
  pune: { lat: 18.5204, lng: 73.8567 },
  kolkata: { lat: 22.5726, lng: 88.3639 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  chennai: { lat: 13.0827, lng: 80.2707 },
};

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
      "telephone": "+91-9257890600",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "gu", "mr", "pa", "ta", "te", "bn"]
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
  const cityKey = cityName.toLowerCase();
  const coords = CITY_COORDINATES[cityKey] || { lat: 26.9124, lng: 75.7873 };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mehndigo.in/#localbusiness-${cityKey}`,
    "name": `MehndiGo ${cityName} - On Demand Mehendi Artists`,
    "image": "https://mehndigo.in/service-bridal.png",
    "url": city ? `https://mehndigo.in/city/${cityKey}` : "https://mehndigo.in",
    "telephone": "+91-9257890600",
    "priceRange": city ? city.priceRange : "₹1,500 - ₹15,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
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
      "@type": "Organization",
      "name": "MehndiGo",
      "url": "https://mehndigo.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mehndigo.in/logo.jpeg",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mehndigo.in/blog/${article.slug}`
    }
  };
}
