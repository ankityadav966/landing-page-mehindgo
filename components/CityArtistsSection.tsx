"use client";

import { useState } from "react";
import { RealArtist } from "@/lib/api";
import { Star, MapPin, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookArtistModal from "@/components/BookArtistModal";

interface CityArtistsSectionProps {
  artists: RealArtist[];
  cityName: string;
}

export default function CityArtistsSection({ artists, cityName }: CityArtistsSectionProps) {
  const [selectedArtist, setSelectedArtist] = useState<RealArtist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Take top 8 artists serving this city
  const displayArtists = artists.slice(0, 8);

  const handleBookClick = (artist: RealArtist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/15 border border-luxury-gold/25 text-luxury-gold text-[10px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Background Verified
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-green">
            Featured Artists Serving {cityName}
          </h2>
          <p className="text-xs text-luxury-green/75 mt-1">
            Real verified artists with verified portfolios, live ratings, and doorstep service in {cityName}.
          </p>
        </div>
        <Link
          href="/artists"
          className="text-xs font-bold uppercase tracking-wider text-luxury-gold hover:underline flex items-center gap-1 shrink-0"
        >
          View All Artists <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayArtists.map((artist) => {
          const isLocal = artist.location.toLowerCase().includes(cityName.toLowerCase());

          return (
            <div
              key={artist.id}
              className="bg-white rounded-3xl border border-luxury-gold/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-luxury-gold/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  unoptimized={artist.image.startsWith("http") && !artist.image.includes("unsplash.com") && !artist.image.includes("cloudinary.com")}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 280px"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-1 bg-luxury-green/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-luxury-gold/30">
                    <ShieldCheck className="w-3 h-3 text-luxury-gold" />
                    {isLocal ? `${cityName} Local` : `Doorstep Verified`}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-luxury-gold/25 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                  <span className="text-xs font-bold text-luxury-green">{artist.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-luxury-green/50">({artist.reviews})</span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-base text-luxury-green mb-0.5 group-hover:text-luxury-gold transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs font-semibold text-luxury-gold-dark mb-3 line-clamp-1">
                  {artist.speciality}
                </p>

                <div className="space-y-1.5 text-xs text-neutral-600 mb-4 pt-2 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <Briefcase className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                    <span>{artist.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                    <span className="truncate">{artist.location}</span>
                  </div>
                </div>

                {/* Footer and Book Button */}
                <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-neutral-400 uppercase font-semibold block leading-none mb-1">
                      Starting
                    </span>
                    <span className="font-serif font-bold text-sm text-luxury-green">
                      {artist.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookClick(artist)}
                    className="px-4 py-2 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold hover:-translate-y-0.5 transition-all focus:outline-none"
                  >
                    Book Artist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dedicated Artist Booking Modal */}
      <BookArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityName={cityName}
      />
    </section>
  );
}
