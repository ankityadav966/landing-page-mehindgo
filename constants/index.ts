export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Artists", href: "#artists" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const APK_DOWNLOAD_URL = process.env.NEXT_PUBLIC_DOWNLOAD_APK_URL || "https://mehndigo.in/apps/mehndigo-release.apk";

export const ANNOUNCEMENT_TEXT = "✨ Special Wedding Season Offer: Book now and get a trial session at 50% off! | 1,000+ Verified Artists | 5,000+ Bookings Across India";

export const TRUSTED_BRANDS = [
  { name: "Royal Weddings India", logo: "💍" },
  { name: "Vogue Bride", logo: "👑" },
  { name: "Shine Events & Co", logo: "✨" },
  { name: "Ethnic Couture", logo: "👗" },
  { name: "Elite Decor Group", logo: "🕯️" },
  { name: "Celebrations Unlimited", logo: "🎉" },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Bookings Completed" },
  { value: 1000, suffix: "+", label: "Verified Artists" },
  { value: 50, suffix: "+", label: "Cities Covered" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export const FEATURES = [
  {
    title: "Verified Artists",
    description: "Every artist on our platform undergoes a rigorous 5-step background and skill check.",
    icon: "ShieldCheck",
  },
  {
    title: "Secure Payments",
    description: "Pay a small booking fee upfront and the remainder only after service completion.",
    icon: "Lock",
  },
  {
    title: "Live Booking Tracking",
    description: "Know exactly when your artist will arrive with real-time ETA tracking.",
    icon: "MapPin",
  },
  {
    title: "Instant Booking",
    description: "Browse availability and lock in your favorite artist within minutes.",
    icon: "Zap",
  },
  {
    title: "Dedicated Chat Support",
    description: "Need help coordinating or have special instructions? Chat with your artist or support anytime.",
    icon: "MessageSquare",
  },
  {
    title: "Ratings & Reviews",
    description: "See honest ratings and past portfolios from other brides before booking.",
    icon: "Star",
  },
  {
    title: "Wallet System",
    description: "Manage bookings, deposits, refunds, and rewards securely inside the app wallet.",
    icon: "Wallet",
  },
  {
    title: "Easy Cancellation",
    description: "Change of plans? Cancel or reschedule with absolute ease and minimal policy hassle.",
    icon: "CalendarX",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Search Artist",
    description: "Enter your date, location, and preferred styles to view local verified Mehendi artists.",
  },
  {
    step: "02",
    title: "Choose Package",
    description: "Select from Bridal, Engagement, Festival, or Custom packs based on your preferences.",
  },
  {
    step: "03",
    title: "Book Online",
    description: "Secure your artist by paying a small 10% advance fee through our secure checkout.",
  },
  {
    step: "04",
    title: "Artist Arrives",
    description: "Your professional artist arrives at your doorstep with premium, natural, organic cones.",
  },
  {
    step: "05",
    title: "Booking Complete",
    description: "Sit back and watch the intricate design come to life. The booking is marked done in the app.",
  },
  {
    step: "06",
    title: "Remaining Payment",
    description: "Pay the remaining 90% of the cost directly through the app or in cash post-service.",
  },
];

export const COMPARISONS = {
  traditional: [
    "Unverified skill level and reliability",
    "Hidden charges and dynamic pricing changes",
    "No fallback if the artist doesn't show up",
    "Manual cash negotiations and stress",
    "Unknown chemical contents of henna cones",
  ],
  mehndigo: [
    "100% Verified portfolios and identity checks",
    "Transparent pricing with clear package splits",
    "Backup artist guarantee for peace of mind",
    "Seamless digital payment & order tracking",
    "Strict quality control using 100% organic henna",
  ],
};

export const ARTISTS = [
  {
    id: 1,
    name: "Aanya Sharma",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    reviews: 124,
    experience: "7+ Years",
    price: "₹3,500",
    location: "South Delhi, Delhi",
    speciality: "Royal Bridal & Arabic Fusion",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    reviews: 98,
    experience: "5+ Years",
    price: "₹2,800",
    location: "Andheri West, Mumbai",
    speciality: "Intricate Indo-Arabic & Mandala",
    verified: true,
  },
  {
    id: 3,
    name: "Meera Nair",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 145,
    experience: "9+ Years",
    price: "₹4,500",
    location: "Indiranagar, Bengaluru",
    speciality: "Traditional Rajasthani & Portrait",
    verified: true,
  },
  {
    id: 4,
    name: "Sanya Gupta",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    reviews: 84,
    experience: "4+ Years",
    price: "₹2,200",
    location: "Salt Lake, Kolkata",
    speciality: "Zardosi Style & Contemporary",
    verified: true,
  },
];

export const SERVICES = [
  {
    title: "Bridal Mehendi",
    description: "Detailed, full-arm and leg portrait Mehendi capturing the royal Indian heritage.",
    icon: "Heart",
    image: "/service-bridal.png",
  },
  {
    title: "Engagement Mehendi",
    description: "Elegant, minimalist designs focused on modern patterns for your special ring ceremony.",
    icon: "Gem",
    image: "/service-engagement.png",
  },
  {
    title: "Festival Mehendi",
    description: "Traditional fast-paced Mehendi for Karwa Chauth, Eid, Diwali, Teej, and more.",
    icon: "Sparkles",
    image: "/service-festival.png",
  },
  {
    title: "Arabic Mehendi",
    description: "Bold outlines, empty spaces, and modern floral trails flowing across the hands.",
    icon: "Wind",
    image: "/service-arabic.png",
  },
  {
    title: "Indo-Arabic Mehendi",
    description: "A perfect blend of heavy traditional Indian detailing and spatial Arabic designs.",
    icon: "Flame",
    image: "/service-indo-arabic.png",
  },
  {
    title: "Kids Mehendi",
    description: "Playful, quick, and cute small designs specifically crafted for sensitive skin.",
    icon: "Baby",
    image: "/service-kids.png",
  },
  {
    title: "Corporate Events",
    description: "Professional quick designs for office parties, ethnic days, and grand annual gatherings.",
    icon: "Briefcase",
    image: "/service-indo-arabic.png",
  },
  {
    title: "Wedding Guests Pack",
    description: "Speedy and beautiful designs executed by a team of artists to cater to large guest lists.",
    icon: "Users",
    image: "/service-engagement.png",
  },
];

export const GALLERY_CATEGORIES = ["All", "Bridal", "Arabic", "Traditional", "Contemporary"];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Bridal",
    title: "Royal Portrait Bridal Design",
    image: "/service-bridal.png",
  },
  {
    id: 2,
    category: "Arabic",
    title: "Modern Thick Flow Arabic",
    image: "/service-arabic.png",
  },
  {
    id: 3,
    category: "Traditional",
    title: "Traditional Festival Mehendi",
    image: "/service-festival.png",
  },
  {
    id: 4,
    category: "Bridal",
    title: "Elegant Engagement Mehendi",
    image: "/service-engagement.png",
  },
  {
    id: 5,
    category: "Contemporary",
    title: "Indo-Arabic Fusion Design",
    image: "/service-indo-arabic.png",
  },
  {
    id: 6,
    category: "Traditional",
    title: "Playful Kids Mehendi Art",
    image: "/service-kids.png",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rhea Deshmukh",
    image: "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    location: "Bandra, Mumbai",
    weddingType: "Destination Wedding",
    quote: "Booking my wedding Mehendi through MehndiGo was the most stress-free decision I made! The artist arrived on time, was extremely polite, and the portrait designs she made of us were breathtaking.",
  },
  {
    id: 2,
    name: "Ishita Gupta",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    location: "Gurugram, Delhi NCR",
    weddingType: "Traditional Rajasthani Wedding",
    quote: "I was extremely concerned about the stain color, but the organic henna used by MehndiGo gave me a deep maroon tone that lasted for more than a week. Incredible service and verified professionalism.",
  },
  {
    id: 3,
    name: "Kavya Murthy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    location: "Jayanagar, Bengaluru",
    weddingType: "South Indian Wedding",
    quote: "We booked guest packages for 40 guests. MehndiGo dispatched 4 extremely fast and professional artists. Everyone loved their speed and intricate patterns. Worth every rupee!",
  },
];

export const FAQS = [
  {
    question: "How do you ensure the quality of the Mehendi artists?",
    answer: "Every artist undergoes a comprehensive 5-step screening process. We verify their portfolios, perform background checks, evaluate their speed and precision in a live practical test, check their customer feedback record, and ensure they only use 100% natural, chemical-free organic henna cones.",
  },
  {
    question: "What is your pricing model? Are there hidden charges?",
    answer: "Our pricing is fully transparent. The price you see on the package is the final price. We charge a 10% advance deposit to secure your booking and date. The remaining 90% is payable to the artist directly after the service is successfully completed.",
  },
  {
    question: "What happens if my booked artist cancels or doesn't show up?",
    answer: "We offer a 100% backup artist guarantee. In the extremely rare event that your artist cannot make it due to an emergency, we automatically dispatch an equally rated or higher backup artist to ensure your event goes smoothly without delay.",
  },
  {
    question: "Is the henna used safe for sensitive skin?",
    answer: "Yes, absolutely. We mandate that all our artists use 100% organic, chemical-free henna cones made with natural essential oils (like eucalyptus and tea tree). They contain no PPD, ammonia, or synthetic dyes, making them safe for kids and pregnant brides.",
  },
  {
    question: "Can I customize the design package for my wedding?",
    answer: "Yes, you can. You can browse artists' specific portfolios and chat with them directly after reserving or contact our dedicated wedding concierge desk to build a customized package that fits your wedding timeline and guest count.",
  },
  {
    question: "How far in advance should I book my artist?",
    answer: "For wedding seasons, we highly recommend booking at least 2 to 3 months in advance as popular artists tend to get reserved very quickly. For festivals and smaller gatherings, 1 to 2 weeks in advance is usually sufficient.",
  },
];
