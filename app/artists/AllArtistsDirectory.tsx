"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { RealArtist } from "@/lib/api";
import { Star, MapPin, Briefcase, ShieldCheck, Search, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import BookArtistModal from "@/components/BookArtistModal";

interface AllArtistsDirectoryProps {
  initialArtists: RealArtist[];
}

const CITY_FILTERS = ["All", "Jaipur", "Mumbai", "Roorkee", "Delhi NCR"];
const ITEMS_PER_PAGE = 12;

export default function AllArtistsDirectory({ initialArtists }: AllArtistsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "experience" | "price_asc" | "price_desc">("rating");
  const [selectedArtist, setSelectedArtist] = useState<RealArtist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  // Filter and sort artists
  const filteredArtists = useMemo(() => {
    let result = [...initialArtists];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.speciality.toLowerCase().includes(q)
      );
    }

    // City filter
    if (selectedCity !== "All") {
      const c = selectedCity.toLowerCase();
      result = result.filter((a) => a.location.toLowerCase().includes(c));
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "rating") {
        const aHasCloudinary = a.image.includes("cloudinary.com") ? 1 : 0;
        const bHasCloudinary = b.image.includes("cloudinary.com") ? 1 : 0;
        if (bHasCloudinary !== aHasCloudinary) return bHasCloudinary - aHasCloudinary;
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.reviews - a.reviews;
      }
      if (sortBy === "experience") {
        const expA = parseInt(a.experience, 10) || 0;
        const expB = parseInt(b.experience, 10) || 0;
        return expB - expA;
      }
      if (sortBy === "price_asc") {
        const pA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
        const pB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
        return pA - pB;
      }
      if (sortBy === "price_desc") {
        const pA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
        const pB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
        return pB - pA;
      }
      return 0;
    });

    return result;
  }, [initialArtists, searchQuery, selectedCity, sortBy]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCity, sortBy]);

  // Total pages calculation
  const totalPages = Math.ceil(filteredArtists.length / ITEMS_PER_PAGE) || 1;

  // Paginated 12 artists slice
  const paginatedArtists = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArtists.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArtists, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBook = (artist: RealArtist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCity("All");
    setSortBy("rating");
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredArtists.length);

  return (
    <div ref={gridTopRef}>
      {/* Control Bar: Search, City Filter, Sort */}
      <div className="bg-white rounded-3xl p-6 border border-luxury-gold/20 shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-luxury-gold absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by artist name, city, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 text-sm rounded-2xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* City Filter Chips */}
          <div className="md:col-span-4 flex flex-wrap gap-1.5 items-center">
            {CITY_FILTERS.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  selectedCity === city
                    ? "bg-luxury-green text-white shadow-sm border border-luxury-gold/30"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-3 flex items-center gap-2 justify-end">
            <span className="text-xs text-neutral-500 font-semibold shrink-0">Sort:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3.5 py-2.5 text-xs font-semibold rounded-2xl border border-luxury-gold/25 bg-luxury-cream/20 focus:outline-none focus:border-luxury-gold text-luxury-green"
            >
              <option value="rating">Top Rated (⭐ High to Low)</option>
              <option value="experience">Most Experience</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
          <div>
            Showing <b className="text-luxury-green">{filteredArtists.length > 0 ? `${startIndex}-${endIndex}` : 0}</b> of{" "}
            <b className="text-luxury-green">{filteredArtists.length}</b> verified artists (12 per page)
            {selectedCity !== "All" && <span> in <b>{selectedCity}</b></span>}
            {searchQuery && <span> matching <b>"{searchQuery}"</b></span>}
          </div>

          {(searchQuery || selectedCity !== "All" || sortBy !== "rating") && (
            <button
              onClick={clearFilters}
              className="text-luxury-gold hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Artists Grid (Exactly 12 per page max) */}
      {paginatedArtists.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-luxury-gold/20 shadow-sm max-w-lg mx-auto my-12">
          <Sparkles className="w-10 h-10 text-luxury-gold mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-luxury-green mb-2">No Artists Found</h3>
          <p className="text-xs text-neutral-600 mb-6">
            We couldn't find any artists matching your search criteria. Try removing filters or searching for another city.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2.5 bg-luxury-green hover:bg-luxury-green-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
          >
            Show All Artists
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paginatedArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white rounded-3xl border border-luxury-gold/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-luxury-gold/40 transition-all duration-300 flex flex-col group"
              >
                {/* Photo Banner */}
                <div className="relative h-52 w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    unoptimized={
                      artist.image.startsWith("http") &&
                      !artist.image.includes("unsplash.com") &&
                      !artist.image.includes("cloudinary.com")
                    }
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 280px"
                  />

                  {/* Verified Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-luxury-green/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-luxury-gold/30">
                      <ShieldCheck className="w-3 h-3 text-luxury-gold" />
                      Verified
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-luxury-gold/25 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                    <span className="text-xs font-bold text-luxury-green">
                      {artist.rating.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-luxury-green/50">({artist.reviews})</span>
                  </div>
                </div>

                {/* Artist Details */}
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

                  {/* Pricing & Booking CTA */}
                  <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase font-semibold block leading-none mb-1">
                        Starting From
                      </span>
                      <span className="font-serif font-bold text-sm text-luxury-green">
                        {artist.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBook(artist)}
                      className="px-4 py-2 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-gold hover:-translate-y-0.5 transition-all focus:outline-none"
                    >
                      Book Artist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls (Appears when totalPages > 1) */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-3xl p-5 border border-luxury-gold/20 shadow-sm mb-16">
              <div className="text-xs text-neutral-600 font-medium">
                Page <b className="text-luxury-green">{currentPage}</b> of{" "}
                <b className="text-luxury-green">{totalPages}</b> ({filteredArtists.length} total artists)
              </div>

              <div className="flex items-center gap-2">
                {/* Prev Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 rounded-xl border border-luxury-gold/25 text-xs font-semibold text-luxury-green hover:bg-luxury-cream/40 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        currentPage === page
                          ? "bg-luxury-green text-white shadow-md border border-luxury-gold/30"
                          : "border border-luxury-gold/20 text-luxury-green hover:bg-luxury-cream/40"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 rounded-xl border border-luxury-gold/25 text-xs font-semibold text-luxury-green hover:bg-luxury-cream/40 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Dedicated Artist Booking Modal */}
      <BookArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityName={selectedCity !== "All" ? selectedCity : undefined}
      />
    </div>
  );
}
