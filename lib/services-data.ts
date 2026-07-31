export interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  priceRange: string;
  duration: string;
  heroImage: string;
  description: string;
  features: string[];
  popularMotifs: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "bridal-mehendi": {
    slug: "bridal-mehendi",
    title: "Bridal Mehendi Artist Service | Royal Full Arm & Portrait Henna",
    metaDescription: "Book verified bridal Mehendi artists for full arm, leg, and personalized groom portrait designs. 100% organic henna & doorstep service on MehndiGo.",
    h1: "Royal Bridal Mehendi Service",
    tagline: "Intricate, full-coverage royal portrait henna tailored for your dream wedding day.",
    priceRange: "₹4,500 - ₹25,000",
    duration: "4 - 6 Hours",
    heroImage: "/service-bridal.png",
    description: "Bridal Mehendi is the crowning glory of Indian wedding rituals. Our top-rated bridal artists specialize in personalized groom-bride sketches, Rajasthani jharokha arches, peacock motifs, and heavy leg coverage using 100% organic, chemical-free henna cones.",
    features: [
      "Customized Bride & Groom Portrait Sketches",
      "Full Elbow & Knees Deep Coverage",
      "Free Trial Session for Premium Packages",
      "100% Organic Eucalyptus Henna for Mahogany Stain"
    ],
    popularMotifs: ["Royal Jharokha", "Doli & Baraat Sketches", "Peacock Trails", "Symmetric Palm Mandalas"],
    faqs: [
      { question: "How long does a bridal Mehendi session take?", answer: "Bridal henna typically takes between 4 to 6 hours depending on arm length and portrait detail." },
      { question: "When should I schedule my bridal henna?", answer: "Book your session 48 hours prior to the wedding day for peak stain color." }
    ]
  },
  "arabic-mehendi": {
    slug: "arabic-mehendi",
    title: "Arabic Mehendi Service | Modern Flowing Floral Henna Trails",
    metaDescription: "Book top Arabic Mehendi artists for chic, bold, spatial floral trails and modern henna art. Fast doorstep service across India on MehndiGo.",
    h1: "Arabic Mehendi Art Service",
    tagline: "Bold outlines, elegant negative space, and modern floral trails flowing across your hands.",
    priceRange: "₹1,500 - ₹6,000",
    duration: "1 - 2 Hours",
    heroImage: "/service-arabic.png",
    description: "Arabic Mehendi stands out for its graceful flow, thick shaded outlines, and open skin aesthetics. Perfect for engagement ceremonies, sangeet guests, and brides looking for contemporary elegance.",
    features: [
      "Bold Shaded Floral Trails",
      "Fast 30-Minute Application Per Hand",
      "Ideal for Engagement & Guests",
      "Skin-Safe Natural Organic Henna"
    ],
    popularMotifs: ["Rose Trails", "Lace Wrist Cuffs", "Leafy Vines", "Diagonal Palm Flows"],
    faqs: [
      { question: "Is Arabic Mehendi faster to apply than traditional Mehendi?", answer: "Yes, Arabic designs feature open space, allowing application in 30-45 minutes." }
    ]
  },
  "simple-mehendi": {
    slug: "simple-mehendi",
    title: "Simple & Minimalist Mehendi Service | Quick Aesthetic Henna",
    metaDescription: "Book artists for simple, minimalist, and aesthetic Mehendi designs. Fast, affordable doorstep henna for festivals and casual celebrations.",
    h1: "Simple & Minimalist Mehendi Service",
    tagline: "Clean, elegant, and quick henna designs crafted for modern simplicity.",
    priceRange: "₹800 - ₹2,500",
    duration: "30 - 45 Mins",
    heroImage: "/service-festival.png",
    description: "Simple Mehendi focuses on delicate mandala centers, finger accents, and subtle wrist bands. It is ideal for office events, small family gatherings, and kids.",
    features: [
      "Minimalist Finger Accents & Mandalas",
      "Ultra-Fast Application",
      "Budget Friendly Rates",
      "Natural Eucalyptus Scented Cones"
    ],
    popularMotifs: ["Single Center Mandala", "Geometric Finger Bands", "Minimal Leaf Mesh"],
    faqs: [
      { question: "Can I book simple Mehendi for a small group at home?", answer: "Yes! We offer group discount packages for 5+ family members." }
    ]
  },
  "royal-mehendi": {
    slug: "royal-mehendi",
    title: "Royal Mehendi Service | Heritage Rajasthani & Palace Henna",
    metaDescription: "Experience luxury Royal Mehendi with heritage palace motifs, elephant processions, and dense shading. Book master stylists on MehndiGo.",
    h1: "Royal Heritage Mehendi Service",
    tagline: "Magnificent palace arches, royal elephants, and heritage Indian storytelling.",
    priceRange: "₹6,000 - ₹30,000",
    duration: "5 - 7 Hours",
    heroImage: "/service-bridal.png",
    description: "Royal Mehendi captures the opulent heritage of Indian kingdoms. Master artists construct detailed palace jharokhas, royal processions, and intricate chequered nets.",
    features: [
      "Heritage Rajasthani Master Artists",
      "Royal Elephant & Palace Jharokha Motifs",
      "Full Leg & Full Arm Execution",
      "Backup Artist Guarantee Included"
    ],
    popularMotifs: ["Royal Elephant Procession", "King & Queen Portraits", "Palace Archways"],
    faqs: [
      { question: "Do royal Mehendi packages include artists for family members?", answer: "We offer combo packages that include 1 master artist for the bride and 2 assistance artists for family." }
    ]
  },
  "engagement-mehendi": {
    slug: "engagement-mehendi",
    title: "Engagement Mehendi Service | Elegant Ring Ceremony Henna",
    metaDescription: "Book top artists for engagement & ring ceremony Mehendi. Chic wrist cuffs, ring accents, and modern fusion designs on MehndiGo.",
    h1: "Engagement Mehendi Service",
    tagline: "Elegant designs highlighting your engagement ring and wrist jewels.",
    priceRange: "₹2,000 - ₹7,000",
    duration: "1.5 - 2.5 Hours",
    heroImage: "/service-engagement.png",
    description: "Engagement Mehendi balances beauty with comfort, ensuring your hands look picture-perfect for ring exchange photos without requiring 6 hours of application.",
    features: ["Ring Finger Accentuation", "Wrist Jewelry Bands", "Fast Drying Formula"],
    popularMotifs: ["Ring Box Sketches", "Interlocking Hearts", "Modern Leaf Rings"],
    faqs: [{ question: "How long before the ring ceremony should I apply henna?", answer: "Apply 24 hours prior to allow stain maturity." }]
  },
  "wedding-mehendi": {
    slug: "wedding-mehendi",
    title: "Wedding Guest & Family Mehendi Service | Bulk Booking Team",
    metaDescription: "Book teams of professional Mehendi artists for wedding guest packages. Fast execution, transparent rates & doorstep service across India.",
    h1: "Wedding Guest Mehendi Service",
    tagline: "Speedy, beautiful henna execution for large guest lists and sangeet parties.",
    priceRange: "₹5,000 - ₹35,000 (Group Pack)",
    duration: "3 - 8 Hours",
    heroImage: "/service-indo-arabic.png",
    description: "Keep your wedding guests delighted with our multi-artist team dispatches. We handle 20 to 200+ guests efficiently with beautiful front and back hand designs.",
    features: ["Dispatched Team of 2 to 8 Artists", "Handles 50+ Guests Seamlessly", "Uniform Pricing per Hand"],
    popularMotifs: ["Fast Arabic Trails", "Mandala Palms", "Quick Floral Vines"],
    faqs: [{ question: "How many artists are sent for 50 guests?", answer: "We typically send 3 to 4 fast-paced artists for 50 guests." }]
  },
  "festival-mehendi": {
    slug: "festival-mehendi",
    title: "Festival Mehendi Booking | Karwa Chauth, Teej, Eid & Diwali",
    metaDescription: "Book instant festival Mehendi artists for Karwa Chauth, Teej, Eid, and Diwali. Pure organic henna & guaranteed slots on MehndiGo.",
    h1: "Festival Mehendi Service",
    tagline: "Celebratory henna patterns for Karwa Chauth, Teej, Eid, and Diwali festivities.",
    priceRange: "₹1,000 - ₹4,000",
    duration: "45 Mins - 1.5 Hours",
    heroImage: "/service-festival.png",
    description: "Celebrate Indian festivals with auspicious henna motifs. We reserve dedicated slots during peak Karwa Chauth, Teej, and Eid days.",
    features: ["Dedicated Festival Slots", "Auspicious Moon & Sun Motifs", "Organic Dark Stain Guarantee"],
    popularMotifs: ["Karwa Chauth Moon Sieve", "Eid Crescent & Stars", "Diwali Diyas"],
    faqs: [{ question: "Are slots guaranteed for Karwa Chauth evening?", answer: "Yes, pre-booked slots on the app are 100% guaranteed with locked time slots." }]
  },
  "home-mehendi-service": {
    slug: "home-mehendi-service",
    title: "Doorstep Home Mehendi Service | Verified Artists at Home",
    metaDescription: "Get verified professional Mehendi artists delivered directly to your home. Hygienic, safe, and convenient booking on MehndiGo.",
    h1: "Doorstep Home Mehendi Service",
    tagline: "Relax at home while our certified artists bring luxury henna to your doorstep.",
    priceRange: "₹1,500 - ₹15,000",
    duration: "Flexible",
    heroImage: "/hero-app.png",
    description: "Enjoy complete convenience with our door-to-door service. Artists arrive with sanitized tools, organic cones, and seating pads.",
    features: ["Zero Travel Hassle", "Sanitized & Hygienic Equipment", "Live ETA Tracking"],
    popularMotifs: ["Custom Preferred Motifs"],
    faqs: [{ question: "Are there extra travel charges for home visits?", answer: "No, transparent package prices include local travel fees." }]
  },
  "kids-mehendi": {
    slug: "kids-mehendi",
    title: "Kids Mehendi Service | Cute, Safe & Chemical-Free Henna",
    metaDescription: "Safe, 100% organic, chemical-free cute Mehendi designs for kids. Playful motifs applied quickly by gentle artists on MehndiGo.",
    h1: "Kids Mehendi Art Service",
    tagline: "Fun, cute, and 100% skin-safe organic henna for delicate young hands.",
    priceRange: "₹500 - ₹1,500",
    duration: "15 - 30 Mins",
    heroImage: "/service-kids.png",
    description: "Crafted specifically for children's sensitive skin, using mild natural henna infused with lavender or tea tree oil.",
    features: ["100% Natural Mild Cones", "Quick 15-Minute Application", "Fun Cartoon & Butterfly Motifs"],
    popularMotifs: ["Butterflies", "Fairies & Stars", "Cute Paw Prints"],
    faqs: [{ question: "Is the henna safe for 4-year-old kids?", answer: "Yes, our kids cones are 100% organic with zero chemical dyes." }]
  },
  "mandala-mehendi": {
    slug: "mandala-mehendi",
    title: "Mandala Mehendi Service | Sacred Geometric Center Henna",
    metaDescription: "Book artists specialized in intricate circular Mandala Mehendi art. Symmetric, sacred geometric palm patterns on MehndiGo.",
    h1: "Sacred Mandala Mehendi Service",
    tagline: "Harmonious circular mandalas symbolizing eternity and cosmic balance.",
    priceRange: "₹1,800 - ₹5,500",
    duration: "1 - 2 Hours",
    heroImage: "/service-engagement.png",
    description: "Mandalas offer timeless aesthetic harmony. Perfectly circular centerpieces framed by fine finger lines create a stunning look.",
    features: ["Precision Circular Geometry", "Balanced Negative Space", "Symmetric Cuff Matching"],
    popularMotifs: ["Sunburst Mandala", "Lotus Core Circle", "Layered Sun Circle"],
    faqs: [{ question: "Can Mandalas be combined with Arabic trails?", answer: "Yes, Mandala centerpieces with Arabic finger trails are very popular." }]
  },
  "minimal-mehendi": {
    slug: "minimal-mehendi",
    title: "Minimalist Mehendi Art | Subtle & Chic Finger Henna",
    metaDescription: "Minimalist finger and palm Mehendi for modern women. Subtle, clean, and elegant henna booking on MehndiGo.",
    h1: "Minimalist Mehendi Art",
    tagline: "Subtle elegance for modern women who love delicate minimalist art.",
    priceRange: "₹800 - ₹2,000",
    duration: "20 - 40 Mins",
    heroImage: "/service-arabic.png",
    description: "For lovers of micro-tattoos and fine line art, minimal Mehendi offers delicate ring lines, tiny dots, and understated wrist bands.",
    features: ["Ultra-Fine Line Detailing", "Modern Micro Patterns", "Fast Application"],
    popularMotifs: ["Dot Work Rings", "Single Leaf Vine", "Wrist Line Bracelet"],
    faqs: [{ question: "Is minimal Mehendi suitable for office wear?", answer: "Yes, its subtle look blends seamlessly with professional attire." }]
  },
  "front-hand-mehendi": {
    slug: "front-hand-mehendi",
    title: "Front Hand Mehendi Service | Palm & Forearm Henna",
    metaDescription: "Book Mehendi artists for front hand palm and forearm designs. Traditional, Arabic, and bridal palm art on MehndiGo.",
    h1: "Front Hand Mehendi Service",
    tagline: "Detailed palm shading and forearm work that captures deep stain color.",
    priceRange: "₹1,200 - ₹5,000",
    duration: "1 - 2 Hours",
    heroImage: "/service-bridal.png",
    description: "Front hands absorb henna dye best, yielding the darkest maroon tones. We craft dense palm mandalas and finger meshes.",
    features: ["Deep Color Oxidation", "Detailed Palm Work", "Custom Style Choice"],
    popularMotifs: ["Full Palm Mesh", "Center Mandala", "Finger Tops"],
    faqs: [{ question: "Why is front hand stain darker than back hand?", answer: "Palms have thicker skin layers which absorb more Lawsonia dye." }]
  },
  "back-hand-mehendi": {
    slug: "back-hand-mehendi",
    title: "Back Hand Mehendi Service | Jewelry & Glove Style Henna",
    metaDescription: "Book artists for back hand Mehendi, haathphool, ring bands & Arabic cuffs. Doorstep booking across India on MehndiGo.",
    h1: "Back Hand Mehendi Service",
    tagline: "Jewelry-style haathphool lace and elegant back hand cuffs.",
    priceRange: "₹1,200 - ₹5,000",
    duration: "1 - 2 Hours",
    heroImage: "/service-indo-arabic.png",
    description: "Back hand Mehendi complements bridal bangles and rings. Popular styles mimic traditional haathphool jewelry chains.",
    features: ["Jewelry Imitation Lines", "Back Wrist Cuffs", "Ring Link Chains"],
    popularMotifs: ["Haathphool Chains", "Lace Gloves", "V-Shaped Cuffs"],
    faqs: [{ question: "Can back hand Mehendi match my wedding jewelry?", answer: "Yes, artists can replicate your haathphool design." }]
  },
  "leg-mehendi": {
    slug: "leg-mehendi",
    title: "Bridal Leg Mehendi Service | Ankle & Knee Length Henna",
    metaDescription: "Book top bridal leg Mehendi artists for anklet, foot, and knee coverage. Beautiful royal motifs on MehndiGo.",
    h1: "Bridal Leg Mehendi Service",
    tagline: "Royal foot mandalas, payal anklets, and intricate leg coverage.",
    priceRange: "₹2,500 - ₹10,000",
    duration: "2 - 3.5 Hours",
    heroImage: "/service-bridal.png",
    description: "Leg Mehendi completes the royal bridal ensemble. From subtle foot borders to full knee-length peacock nets.",
    features: ["Payal Anklet Motifs", "Symmetric Foot Mandalas", "Up to Knee Coverage"],
    popularMotifs: ["Payal Borders", "Foot Lotus", "Peacock Anklets"],
    faqs: [{ question: "Should leg Mehendi be done on the same day as arm Mehendi?", answer: "Yes, or scheduled right after arm completion." }]
  },
  "finger-mehendi": {
    slug: "finger-mehendi",
    title: "Finger Mehendi Service | Chic Ring & Tip Henna Designs",
    metaDescription: "Book fast finger Mehendi sessions for trendy ring patterns, geometric lines, and shaded tips on MehndiGo.",
    h1: "Finger Mehendi Art Service",
    tagline: "Focused finger artwork highlighting your rings and manicure.",
    priceRange: "₹600 - ₹1,800",
    duration: "20 - 30 Mins",
    heroImage: "/service-arabic.png",
    description: "Finger-focused designs highlight manicured nails and rings without covering the whole palm.",
    features: ["Quick 20-Minute Service", "High Precision Lines", "Complements Ring Wear"],
    popularMotifs: ["Chequered Finger Caps", "Leafy Bands", "Linear Stripes"],
    faqs: [{ question: "Is finger Mehendi good for casual events?", answer: "Yes, it is very popular for college fests and casual parties." }]
  },
  "pakistani-mehendi": {
    slug: "pakistani-mehendi",
    title: "Pakistani Mehendi Service | Intricate Shaded Mesh & Lace",
    metaDescription: "Experience authentic Pakistani Mehendi with detailed mesh, shaded domes, and heavy lace work on MehndiGo.",
    h1: "Pakistani Mehendi Art Service",
    tagline: "Heavy shading, intricate domes, and elegant lace mesh patterns.",
    priceRange: "₹2,500 - ₹12,000",
    duration: "2 - 4 Hours",
    heroImage: "/service-indo-arabic.png",
    description: "Pakistani henna combines fine line fills with shaded floral domes and detailed net cuffs for a royal look.",
    features: ["Shaded Floral Domes", "Intricate Netting Mesh", "Dark Oxidation Formula"],
    popularMotifs: ["Dome Jharokhas", "Lace Cuffs", "Shaded Roses"],
    faqs: [{ question: "What is the difference between Pakistani and Arabic Mehendi?", answer: "Pakistani Mehendi has finer mesh filling and heavy shading compared to Arabic negative space." }]
  },
  "indian-mehendi": {
    slug: "indian-mehendi",
    title: "Traditional Indian Mehendi Service | Classic Peacock & Kalash",
    metaDescription: "Book traditional Indian Mehendi artists for classic peacock, kalash, doli & shehnai motifs on MehndiGo.",
    h1: "Traditional Indian Mehendi Service",
    tagline: "Timeless cultural motifs representing prosperity, love, and tradition.",
    priceRange: "₹2,000 - ₹15,000",
    duration: "2.5 - 5 Hours",
    heroImage: "/service-bridal.png",
    description: "Traditional Indian Mehendi weaves auspicious wedding symbols—kalash, peacocks, shehnai, and mango paisleys—into dense, meaningful patterns.",
    features: ["Auspicious Kalash & Peacock Motifs", "Full Hand & Arm Density", "Organic Sojat Henna"],
    popularMotifs: ["Peacocks", "Kalash with Mango Leaves", "Paisley Ambis"],
    faqs: [{ question: "Can traditional motifs be customized for my family culture?", answer: "Yes, our artists can include regional motifs like South Indian mangoes or Marwari arches." }]
  }
};
