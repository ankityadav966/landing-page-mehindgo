export interface CityData {
  name: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  state: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  artistCount: number;
  popularAreas: string[];
  heroImage: string;
  tagline: string;
  aboutContent: string;
  whyBookHere: string[];
  faqs: { question: string; answer: string }[];
  localTestimonials: { name: string; area: string; review: string; rating: number }[];
}

export const CITIES_DATA: Record<string, CityData> = {
  jaipur: {
    name: "Jaipur",
    slug: "jaipur",
    title: "Best Mehendi Artist in Jaipur | Royal Bridal Henna | MehndiGo",
    metaDescription: "Book top-rated, verified Mehendi artists in Jaipur for royal weddings, sangeet, and festivals. Doorstep service in C-Scheme, Vaishali Nagar, Malviya Nagar & Raja Park.",
    h1: "Best Mehendi Artists in Jaipur",
    state: "Rajasthan",
    priceRange: "₹2,500 - ₹18,000",
    rating: 4.95,
    reviewCount: 380,
    artistCount: 140,
    popularAreas: ["C-Scheme", "Vaishali Nagar", "Malviya Nagar", "Raja Park", "Mansarovar", "Jagatpura", "Tonk Road"],
    heroImage: "/service-bridal.png",
    tagline: "Experience Authentic Rajasthani & Royal Heritage Henna at Your Doorstep in Jaipur",
    aboutContent: "Jaipur is the heart of royal Indian weddings. From grand palace ceremonies at Rambagh Palace and Samode Palace to intimate family celebrations in C-Scheme, MehndiGo connects you with Jaipur's most celebrated master artists specializing in Rajasthani Jharokha, portrait henna, and royal peacock motifs.",
    whyBookHere: [
      "100% Authentic Rajasthani Traditional & Portrait Artists",
      "Freshly Filtered Organic Sojat Henna Cones with Eucalyptus Oils",
      "Doorstep Service across all Pink City Localities & Palace Venues",
      "Instant Backup Guarantee for Royal Wedding Ceremonies"
    ],
    faqs: [
      { question: "Can MehndiGo artists travel to palace wedding venues outside Jaipur main city?", answer: "Yes! Our Jaipur artists frequently travel to heritage palace venues in Kukas, Samode, Chomu, and Amer with pre-booked travel accommodations." },
      { question: "What is the starting price for Bridal Mehendi in Jaipur?", answer: "Bridal Mehendi packages in Jaipur start at ₹3,500 for traditional half-leg and half-arm coverage and go up to ₹18,000 for intricate royal portrait designs." }
    ],
    localTestimonials: [
      { name: "Riddhika Rathore", area: "C-Scheme, Jaipur", review: "Booked my sangeet Mehendi through MehndiGo for our destination wedding in Jaipur. The artist arrived right on time at our resort and made stunning royal peacock motifs!", rating: 5 },
      { name: "Pooja Shekhawat", area: "Vaishali Nagar, Jaipur", review: "The dark stain of natural Sojat organic henna lasted for more than 10 days! Exceptional service and zero stress.", rating: 5 }
    ]
  },
  delhi: {
    name: "Delhi",
    slug: "delhi",
    title: "Best Mehendi Artist in Delhi NCR | Top Bridal Henna Booking",
    metaDescription: "Find verified top Mehendi artists in South Delhi, West Delhi, Gurugram & Noida. Transparent pricing, organic henna & doorstep booking on MehndiGo.",
    h1: "Best Mehendi Artists in Delhi NCR",
    state: "Delhi NCR",
    priceRange: "₹3,000 - ₹25,000",
    rating: 4.9,
    reviewCount: 620,
    artistCount: 310,
    popularAreas: ["South Extension", "Lajpat Nagar", "Rajouri Garden", "DLF Phase 5 Gurgaon", "Noida Sector 62", "Dwarka", "Vasant Kunj"],
    heroImage: "/service-arabic.png",
    tagline: "Delhi's Top Celebrity & Royal Bridal Henna Artists Delivered to Your Home",
    aboutContent: "Delhi weddings are famous for their grandeur, color, and high energy. Whether you are hosting a farm house wedding in Chattarpur or a chic ceremony in Gurgaon, MehndiGo brings Delhi's top rated bridal henna artists directly to your doorstep with guaranteed punctuality and 100% organic henna.",
    whyBookHere: [
      "Vetted Artists from Lajpat Nagar & South Delhi Studios",
      "Specialized Guest Booking Teams for 50+ Guests",
      "100% Chemical-Free Organic Cones Safe for Sensitive Skin",
      "Transparent Pricing with No Hidden Travel Charges"
    ],
    faqs: [
      { question: "How early should I book a bridal artist in Delhi during peak season?", answer: "During November-February peak wedding season in Delhi NCR, we recommend booking 2 to 3 months in advance to reserve top-rated celebrity artists." },
      { question: "Do you provide guest package artists for Delhi weddings?", answer: "Yes, we dispatch teams of 2 to 6 artists for guest henna functions across Delhi, Gurgaon, and Noida." }
    ],
    localTestimonials: [
      { name: "Tanya Kapoor", area: "Golf Course Road, Gurgaon", review: "MehndiGo saved my wedding day! Our previous artist cancelled last minute, but MehndiGo dispatched a backup celebrity artist within 2 hours.", rating: 5 }
    ]
  },
  mumbai: {
    name: "Mumbai",
    slug: "mumbai",
    title: "Best Mehendi Artist in Mumbai | Verified Bridal Henna Booking",
    metaDescription: "Book top Mehendi artists in Mumbai (Bandra, Juhu, South Bombay, Thane & Navi Mumbai). Luxury Arabic, Indo-Arabic & Bridal designs on demand.",
    h1: "Best Mehendi Artists in Mumbai",
    state: "Maharashtra",
    priceRange: "₹3,500 - ₹30,000",
    rating: 4.88,
    reviewCount: 540,
    artistCount: 280,
    popularAreas: ["Bandra West", "Juhu", "Colaba", "Powai", "Andheri West", "Thane West", "Vashi Navi Mumbai"],
    heroImage: "/service-indo-arabic.png",
    tagline: "Bollywood Style & Chic Luxury Mehendi Artists across Mumbai",
    aboutContent: "From seaside weddings in Juhu to elegant celebrations in South Bombay, Mumbai demands trend-setting henna designs. MehndiGo connects you with Mumbai's premier artists who specialize in Bollywood glam, sleek Arabic trails, and intricate portrait henna.",
    whyBookHere: [
      "Bollywood & Glamour Style Experts",
      "Rapid Doorstep Delivery across Mumbai Metro Area",
      "Organic Henna Cones Infused with Pure Eucalyptus Oil",
      "100% Money-Back & Backup Guarantee"
    ],
    faqs: [
      { question: "Do Mumbai artists travel to Thane and Navi Mumbai?", answer: "Yes! MehndiGo artists cover the entire Mumbai Metropolitan Region including Thane, Navi Mumbai, and Kalyan." }
    ],
    localTestimonials: [
      { name: "Ananya Deshmukh", area: "Juhu, Mumbai", review: "The Arabic fusion design was so chic and elegant. All my guests loved the fast service!", rating: 5 }
    ]
  },
  bangalore: {
    name: "Bangalore",
    slug: "bangalore",
    title: "Best Mehendi Artist in Bangalore | Doorstep Bridal Henna",
    metaDescription: "Book verified Mehendi artists in Bengaluru (Indiranagar, Koramangala, Whitefield, HSR Layout). Transparent rates & doorstep service on MehndiGo.",
    h1: "Best Mehendi Artists in Bangalore",
    state: "Karnataka",
    priceRange: "₹2,500 - ₹20,000",
    rating: 4.92,
    reviewCount: 410,
    artistCount: 220,
    popularAreas: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield", "JP Nagar", "Malleshwaram", "Jayanagar"],
    heroImage: "/service-festival.png",
    tagline: "Bengaluru's Premier On-Demand Mehendi Booking Platform",
    aboutContent: "Bangalore's cosmopolitan culture embraces both rich South Indian traditional motifs and modern minimal henna art. MehndiGo makes booking doorstep Mehendi artists in Bengaluru as easy as ordering a ride.",
    whyBookHere: [
      "Top-rated Artists in IT Hubs & Suburbs",
      "Flexible Time Slots for Busy Professionals",
      "Pure Organic Henna with Dark Stain Guarantee",
      "Dedicated Customer Support for Weddings"
    ],
    faqs: [
      { question: "Can I book a quick Mehendi session for Karwa Chauth or festival in Bangalore?", answer: "Yes! We offer 1-hour fast festival booking slots across Indiranagar, HSR Layout, and Whitefield." }
    ],
    localTestimonials: [
      { name: "Sneha Murthy", area: "Indiranagar, Bengaluru", review: "The booking process was seamless. The artist arrived with all natural organic cones and worked super fast!", rating: 5 }
    ]
  },
  hyderabad: {
    name: "Hyderabad",
    slug: "hyderabad",
    title: "Best Mehendi Artist in Hyderabad | Nizam Heritage Bridal Henna",
    metaDescription: "Find verified Mehendi artists in Hyderabad (Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Hitec City). Doorstep booking on MehndiGo.",
    h1: "Best Mehendi Artists in Hyderabad",
    state: "Telangana",
    priceRange: "₹2,500 - ₹22,000",
    rating: 4.91,
    reviewCount: 350,
    artistCount: 190,
    popularAreas: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Madhapur", "Kondapur", "Begumpet", "Secunderabad"],
    heroImage: "/service-engagement.png",
    tagline: "Nizami Heritage & Modern Arabic Mehendi Art in Pearl City Hyderabad",
    aboutContent: "Hyderabad is known for its royal culture, grand sangeet functions, and intricate Marwari and Hyderabadi Mehendi styles. MehndiGo brings top local talent right to your home in Banjara Hills, Jubilee Hills, and Hitec City.",
    whyBookHere: [
      "Nizami Heritage & Marwari Style Masters",
      "Punctual Doorstep Service Across Cyberabad & Old City",
      "100% Organic Natural Cones",
      "Secure Online Payment Options"
    ],
    faqs: [
      { question: "Do you have artists specialized in Hyderabadi bridal Mehendi?", answer: "Yes! Our Hyderabadi artists excel in dense marwari netting, peacock arches, and royal nizami motifs." }
    ],
    localTestimonials: [
      { name: "Zoya Khan", area: "Banjara Hills, Hyderabad", review: "Stunning Arabic wedding designs for my sister's wedding! Professionalism at its finest.", rating: 5 }
    ]
  }
};
