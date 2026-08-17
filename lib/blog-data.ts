export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  author: string;
  datePublished: string;
  readTime: string;
  image: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  outline: string[];
  contentHtml: string;
  faqs: { question: string; answer: string }[];
  internalLinks: { text: string; url: string }[];
  cta: { text: string; url: string };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { name: "Bridal Mehendi", slug: "bridal-mehendi", description: "Royal Rajasthani, portrait, and full-hand bridal henna designs.", icon: "Crown" },
  { name: "Arabic Mehendi", slug: "arabic-mehendi", description: "Modern, flowy, spatial floral trails and contemporary patterns.", icon: "Sparkles" },
  { name: "Simple Mehendi", slug: "simple-mehendi", description: "Minimalist, quick, aesthetic hand and finger henna art.", icon: "Feather" },
  { name: "Festival Mehendi", slug: "festival-mehendi", description: "Fast-paced designs for Karwa Chauth, Teej, Eid, and Diwali.", icon: "Flame" },
  { name: "Wedding Tips", slug: "wedding-tips", description: "Expert advice on planning bridal Mehendi ceremonies & schedules.", icon: "Heart" },
  { name: "Mehendi Care", slug: "mehendi-care", description: "Stain darkening techniques, organic henna tips, and long-lasting care.", icon: "Shield" },
  { name: "Artist Tips", slug: "artist-tips", description: "Career growth, cone mixing, and client management for Mehendi artists.", icon: "Award" },
  { name: "Bridal Inspiration", slug: "bridal-inspiration", description: "Trending bridal themes, portrait designs, and celebrity henna styles.", icon: "Camera" },
];

export const FEATURED_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "top-10-bridal-mehendi-designs-2026",
    title: "Top 10 Royal Bridal Mehendi Designs for 2026 Brides",
    metaDescription: "Discover 2026's most stunning bridal Mehendi trends! From personalized portrait henna to traditional Rajasthani motifs, find your perfect wedding design.",
    category: "Bridal Mehendi",
    author: "Ananya Roy (Senior Stylist)",
    datePublished: "2026-07-15",
    readTime: "6 min read",
    image: "/service-bridal.png",
    targetKeyword: "bridal mehendi designs 2026",
    secondaryKeywords: ["royal bridal henna", "portrait mehendi", "full arm wedding mehendi"],
    h1: "Top 10 Royal Bridal Mehendi Designs for 2026 Brides",
    outline: [
      "Introduction to 2026 Bridal Trends",
      "1. Personalized Groom & Bride Portraits",
      "2. Traditional Rajasthani Jharokha Patterns",
      "3. Minimalist Indo-Arabic Fusion Trails",
      "4. Symmetric Mandala Palms with Intricate Cuffs",
      "How to Choose the Right Artist",
      "Conclusion & Booking Advice"
    ],
    contentHtml: `
      <p class="text-lg leading-relaxed mb-6">Bridal Mehendi has evolved from simple geometric motifs into a deeply personal storytelling art. In 2026, brides across India and globally are seeking designs that blend timeless royal traditions with modern aesthetic simplicity.</p>
      
      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">1. Personalized Groom & Bride Portraits</h2>
      <p class="mb-4">Portrait henna continues to top the wishlist for destination and royal weddings. Skilled artists recreate delicate sketches of the bride and groom, your proposal moment, or even beloved pets right on your wrists or palms.</p>

      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">2. Traditional Rajasthani Jharokha Patterns</h2>
      <p class="mb-4">Featuring intricate archways, royal elephants, peacocks, and doli motifs, the Rajasthani style fills the full length of the arms with royal storytelling.</p>

      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">3. Minimalist Indo-Arabic Fusion Trails</h2>
      <p class="mb-4">For brides who love negative space, Indo-Arabic designs combine fine lace details with thick Arabic shaded flowers, leaving elegant breathing space across the hands.</p>

      <div class="my-8 p-6 bg-luxury-cream/40 border border-luxury-gold/20 rounded-2xl">
        <h3 class="font-serif font-bold text-xl text-luxury-green mb-2">✨ Pro Tip for Brides</h3>
        <p class="text-sm">Always ensure your artist uses 100% natural, chemical-free organic henna. Chemical cones can cause skin reactions and fade unevenly within 2 days.</p>
      </div>
    `,
    faqs: [
      { question: "How many hours does a full bridal Mehendi take?", answer: "A full bridal Mehendi up to elbows and knees typically takes between 4 to 6 hours depending on detail level." },
      { question: "When should I schedule my bridal Mehendi ceremony?", answer: "Schedule your Mehendi ceremony 48 hours before the main wedding day to allow maximum stain development." }
    ],
    internalLinks: [
      { text: "Book Verified Bridal Mehendi Artists", url: "/#contact" },
      { text: "Best Mehendi Artist in Jaipur", url: "/city/jaipur" }
    ],
    cta: { text: "Book Your Bridal Mehendi Artist Now", url: "/#contact" }
  },
  {
    id: "2",
    slug: "how-to-darken-mehendi-stain-naturally",
    title: "7 Proven Steps to Get a Deep Dark Red Mehendi Stain Naturally",
    metaDescription: "Learn how to get a rich, deep mahogany henna stain for your wedding or festival without using harmful chemical dye cones.",
    category: "Mehendi Care",
    author: "Dr. Smita Sharma (Dermatologist & Naturalist)",
    datePublished: "2026-07-20",
    readTime: "5 min read",
    image: "/service-arabic.png",
    targetKeyword: "how to darken mehendi stain",
    secondaryKeywords: ["dark henna tips", "clove steam for mehendi", "sugar lemon henna paste"],
    h1: "7 Proven Steps to Get a Deep Dark Red Mehendi Stain Naturally",
    outline: [
      "Understanding Henna Stain Chemistry (Lawsonia Molecule)",
      "Step 1: Apply Lemon-Sugar Syrup",
      "Step 2: Clove Steam (Laung Smoke)",
      "Step 3: Keep Warm for 8-12 Hours",
      "Step 4: Scrape, Never Wash with Water",
      "Step 5: Apply Mustard Oil or Vicks",
      "Step 6: Avoid Water for 12 Hours",
      "Step 7: Schedule 48 Hours Prior"
    ],
    contentHtml: `
      <p class="text-lg leading-relaxed mb-6">A rich, dark maroon stain is every bride's dream. But chemical 'Instant Henna' cones pose serious allergy risks. Here is how to achieve a dark, luxurious stain using 100% natural organic henna.</p>
      
      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">1. Lemon Sugar Dab (Sugar Seal)</h2>
      <p class="mb-4">Once the henna paste dries slightly, dab a mixture of fresh lemon juice and sugar using a cotton ball. The sugar holds the paste moist while lemon acid releases dye.</p>

      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">2. Clove Steam Warmth</h2>
      <p class="mb-4">Heat 8-10 cloves (laung) on a warm pan. Hold your hands over the fragrant smoke. The natural essential oils in cloves react with Lawsonia molecules to intensify color.</p>

      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">3. Scrape Off — Do NOT Use Soap Water</h2>
      <p class="mb-4">Scrape the dry paste off gently using butter oil or coconut oil. Washing with soap immediately after removal strips off oxidation layer and lightens the dye.</p>
    `,
    faqs: [
      { question: "Why does water lighten fresh Mehendi?", answer: "Water interrupts the natural oxidation process of natural henna dye, which requires air exposure over 24-48 hours to peak." },
      { question: "Is Vicks vaporub safe to apply on henna?", answer: "Yes, warm menthol balm creates heat, which speeds up dye penetration into skin cells." }
    ],
    internalLinks: [
      { text: "Organic Mehendi Service Guarantee", url: "/#why-choose" }
    ],
    cta: { text: "Download MehndiGo App for Booking", url: "/#download" }
  },
  {
    id: "3",
    slug: "arabic-vs-traditional-mehendi-which-is-best",
    title: "Arabic vs. Traditional Indian Mehendi: Which Style Fits Your Event?",
    metaDescription: "Comparing Arabic and Traditional Indian Henna designs: Differences in speed, coverage, price, and best occasions for brides and guests.",
    category: "Arabic Mehendi",
    author: "Rohan Kapoor",
    datePublished: "2026-07-22",
    readTime: "4 min read",
    image: "/service-indo-arabic.png",
    targetKeyword: "arabic vs traditional mehendi",
    secondaryKeywords: ["arabic henna designs", "traditional indian mehendi", "fast mehendi for guests"],
    h1: "Arabic vs. Traditional Indian Mehendi: Which Style Fits Your Event?",
    outline: [
      "Key Differences Overview",
      "Arabic Style Characteristics: Flow & Bold Lines",
      "Traditional Indian Style: Heavy Details & Symmetry",
      "Indo-Arabic Fusion: The Best of Both Worlds",
      "Price & Time Comparison Chart",
      "Final Recommendation"
    ],
    contentHtml: `
      <p class="text-lg leading-relaxed mb-6">Choosing between Arabic and Traditional Indian Mehendi depends on your outfit, occasion time, and personal aesthetic preferences.</p>
      
      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">Arabic Mehendi: Elegant & Quick</h2>
      <p class="mb-4">Arabic designs feature bold outlines, leafy trails, open skin spaces, and floral vines. It is ideal for engagement parties, wedding guests, or modern brides looking for light coverage.</p>

      <h2 class="text-2xl font-bold font-serif text-luxury-green mt-8 mb-4">Traditional Indian: Intricate & Royal</h2>
      <p class="mb-4">Traditional designs cover every millimeter with delicate mandalas, peacocks, chequered nets, and portraits. Ideal for grand bridal henna ceremonies.</p>
    `,
    faqs: [
      { question: "Is Arabic Mehendi cheaper than Bridal Mehendi?", answer: "Yes, Arabic designs require less time and paste, making them more affordable for festival and guest bookings." }
    ],
    internalLinks: [
      { text: "Explore Popular Mehendi Services", url: "/#services" }
    ],
    cta: { text: "Explore Verified Artists Near You", url: "/#artists" }
  }
];

// Content Strategy Plan Matrix for 150 Future Blog Posts across 8 Categories
export const BLOG_CONTENT_STRATEGY_MATRIX = Array.from({ length: 150 }).map((_, i) => {
  const categories = [
    "Bridal Mehendi", "Arabic Mehendi", "Simple Mehendi", "Festival Mehendi",
    "Wedding Tips", "Mehendi Care", "Artist Tips", "Bridal Inspiration"
  ];
  const cat = categories[i % categories.length];
  const indexNum = i + 1;

  const titleTemplates = [
    `Complete Guide to ${cat} Trends for Wedding Season ${2026 + (i % 2)}`,
    `Top 15 Must-Try ${cat} Patterns & Ideas (#${indexNum})`,
    `How to Master ${cat} - Expert Advice & Step-by-Step Tips`,
    `Ultimate ${cat} Checklist for Indian Brides & Event Hosts`,
    `Best ${cat} Inspirations for Festivals & Grand Celebrations`
  ];

  const title = titleTemplates[i % titleTemplates.length] + ` - Part ${Math.floor(i / 8) + 1}`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return {
    id: `plan-${indexNum}`,
    index: indexNum,
    title,
    category: cat,
    slug,
    targetKeyword: `${cat.toLowerCase()} tips ${indexNum}`,
    secondaryKeywords: [`${cat.toLowerCase()} designs`, "organic henna", "mehndi artist booking"],
    metaDescription: `Discover professional insights on ${title}. Learn expert techniques, dark stain secrets, and verified artist tips on MehndiGo.`,
    h1: title,
    outline: [
      "Introduction & Industry Overview",
      "Key Motifs & Style Breakdown",
      "Material Selection & Chemical Safety",
      "Step-by-Step Execution Guide",
      "Maintenance & Dark Stain Prolongation",
      "Booking the Right Artist on MehndiGo"
    ],
    faq: [
      { question: `What makes ${cat} unique?`, answer: `${cat} combines regional heritage motifs with precise line density.` },
      { question: "How do I book an artist on MehndiGo?", answer: "Download the MehndiGo app or select an artist directly on the website to lock in your date." }
    ],
    internalLinks: ["/#artists", "/#services", "/#pricing"],
    cta: "Book verified artist on MehndiGo app"
  };
});
