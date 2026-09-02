import { Metadata, ResolvingMetadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InviteClient from "./InviteClient";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.searchParams;
  const refCode = (typeof params?.ref === 'string' ? params.ref : "MEHNDI100").toUpperCase();
  
  const title = `You're Invited to MehndiGo! Get ₹100 Welcome Discount`;
  const description = `Use referral code ${refCode} to get ₹100 off on your first home Mehndi booking. Discover verified artists near you.`;
  const canonicalUrl = `https://mehndigo.in/invite?ref=${refCode}`;
  const playStoreUrl = `https://play.google.com/store/apps/details?id=com.sonuy123.mehendigoo&referrer=utm_source%3Dmehndigo_invite%26utm_medium%3Ddeeplink%26utm_content%3Dref%3D${refCode}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85",
          width: 1200,
          height: 630,
          alt: "MehndiGo Invite",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85"],
    },
    other: {
      "al:android:app_name": "MehndiGo",
      "al:android:package": "com.sonuy123.mehendigoo",
      "al:android:url": `mehendigoo://invite?ref=${refCode}`,
      "al:web:url": canonicalUrl,
      "al:web:should_fallback": "false",
    },
  };
}

export default async function InvitePage({ searchParams }: Props) {
  const params = await searchParams;
  const refCode = (typeof params?.ref === 'string' ? params.ref : "MEHNDI100").toUpperCase();

  return (
    <div className="flex flex-col min-h-screen bg-rose-50/50">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        <InviteClient refCode={refCode} />
      </main>
      <Footer />
    </div>
  );
}
