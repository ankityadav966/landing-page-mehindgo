import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "MehndiGo | Premium & Professional Mehendi Artists on Demand",
  description: "Book verified professional Mehendi artists for weddings, festivals, and corporate events. Transparent pricing, luxury quality, and seamless online booking.",
  metadataBase: new URL("https://mehndigo.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MehndiGo | Premium & Professional Mehendi Artists on Demand",
    description: "Book verified professional Mehendi artists for weddings, festivals, and corporate events. Transparent pricing, luxury quality, and seamless online booking.",
    url: "https://mehndigo.in",
    siteName: "MehndiGo",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "MehndiGo | Premium & Professional Mehendi Artists on Demand",
    description: "Book verified professional Mehendi artists for weddings, festivals, and corporate events.",
    images: ["/og-image.jpg"],
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

