import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getOrganizationSchema, getWebsiteSchema, getMobileAppSchema, getLocalBusinessSchema } from "@/lib/schema";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MehndiGo | Book Verified Professional Mehendi Artists On Demand",
  description: "Book 1,000+ verified professional Mehendi artists for weddings, festivals, & sangeet. 100% organic henna, transparent pricing, doorstep service across India.",
  metadataBase: new URL("https://mehndigo.in"),
  alternates: {
    canonical: "https://mehndigo.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MehndiGo | Book Verified Professional Mehendi Artists On Demand",
    description: "Book verified professional Mehendi artists for weddings, festivals, and corporate events. Transparent pricing, luxury quality, and seamless online booking.",
    url: "https://mehndigo.in",
    siteName: "MehndiGo",
    images: [
      {
        url: "https://mehndigo.in/service-bridal.png",
        width: 1200,
        height: 630,
        alt: "MehndiGo Premium Booking Experience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MehndiGo | Book Verified Professional Mehendi Artists On Demand",
    description: "Book verified professional Mehendi artists for weddings, festivals, and corporate events.",
    images: ["https://mehndigo.in/service-bridal.png"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const appSchema = getMobileAppSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Production JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

        {/* Analytics & Tag Manager Hooks */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
