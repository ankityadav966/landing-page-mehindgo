export interface MarketplaceCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  active: boolean;
  icon: string;
  startingPrice: string;
  popularServices: string[];
}

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: "mehendi",
    name: "Mehendi Artists",
    slug: "mehendi-artists",
    tagline: "Verified Royal Bridal & Festival Henna Stylists",
    active: true,
    icon: "Feather",
    startingPrice: "₹1,500",
    popularServices: ["Bridal Mehendi", "Arabic Mehendi", "Engagement Henna", "Guest Packages"]
  },
  {
    id: "makeup",
    name: "Makeup Artists",
    slug: "makeup-artists",
    tagline: "HD, Airbrush & Celebrity Bridal Makeup Artists",
    active: false,
    icon: "Sparkles",
    startingPrice: "₹8,000",
    popularServices: ["HD Bridal Makeup", "Airbrush Makeup", "Sangeet Glam", "Reception Look"]
  },
  {
    id: "hair",
    name: "Hair Stylists",
    slug: "hair-stylists",
    tagline: "Bridal Updos, Extensions & Designer Braid Stylists",
    active: false,
    icon: "Scissors",
    startingPrice: "₹3,000",
    popularServices: ["Traditional Floral Braid", "Messy Hollywood Waves", "Bridal Bun"]
  },
  {
    id: "nails",
    name: "Nail Artists",
    slug: "nail-artists",
    tagline: "Bridal Extensions, Gel Art & Custom Press-On Nails",
    active: false,
    icon: "Gem",
    startingPrice: "₹1,500",
    popularServices: ["Acrylic Extensions", "3D Bridal Gel Art", "Chrome Finish"]
  },
  {
    id: "photographers",
    name: "Photographers",
    slug: "photographers",
    tagline: "Candid Wedding & Cinematic Portrait Photographers",
    active: false,
    icon: "Camera",
    startingPrice: "₹25,000",
    popularServices: ["Candid Photography", "Pre-Wedding Shoot", "Traditional Album"]
  },
  {
    id: "videographers",
    name: "Videographers",
    slug: "videographers",
    tagline: "4K Cinematic Teasers & Drone Wedding Films",
    active: false,
    icon: "Video",
    startingPrice: "₹30,000",
    popularServices: ["Cinematic Teaser", "Full Documentary Film", "Drone Coverage"]
  },
  {
    id: "decorators",
    name: "Decorators",
    slug: "decorators",
    tagline: "Royal Mandap, Mehendi Stage & Floral Setup",
    active: false,
    icon: "Flower2",
    startingPrice: "₹50,000",
    popularServices: ["Mehendi Stage Setup", "Mandap Floral Decor", "Haldi Yellow Theme"]
  },
  {
    id: "djs",
    name: "DJs & Sound",
    slug: "djs-and-sound",
    tagline: "High-Energy Sangeet DJs, Dhol & Concert Audio",
    active: false,
    icon: "Music",
    startingPrice: "₹15,000",
    popularServices: ["Sangeet DJ", "Live Punjabi Dhol", "Baraat Mobile DJ"]
  },
  {
    id: "planners",
    name: "Wedding Planners",
    slug: "wedding-planners",
    tagline: "Full-Service Destination & Luxury Event Coordinators",
    active: false,
    icon: "Calendar",
    startingPrice: "₹1,000,000",
    popularServices: ["Full Wedding Management", "Vendor Coordination", "Guest Hospitality"]
  }
];
