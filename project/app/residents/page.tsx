"use client";

import { useState, useEffect } from 'react';
import { getAllArtists, Artist } from '@/lib/artists';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArtistCard from '@/components/residents/ArtistCard';
import LoadingGrid from '@/components/residents/LoadingGrid';

export default function ResidentsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [headerLoaded, setHeaderLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setArtists(getAllArtists());
      setLoading(false);
    }, 500);

    // Trigger header animation after a short delay - both elements animate together
    const headerTimer = setTimeout(() => {
      setHeaderLoaded(true);
    }, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(headerTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section - Added top padding to account for fixed header */}
      <section className="relative py-24 pt-32 scad-neo-tribal">
        <div className="absolute inset-0 scad-gradient-bg opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className={`font-bebas-neue text-5xl md:text-7xl font-bold text-[#6c13aa] mb-4 ${
            headerLoaded ? 'text-reveal' : 'opacity-0'
          }`}>
            RESIDENTS
          </h1>
          <p className={`font-roboto text-xl text-white/90 max-w-2xl mx-auto leading-relaxed ${
            headerLoaded ? 'smooth-fade-in' : 'opacity-0'
          }`}>
            Meet the artists driving the SCAD Collective sound. Each resident brings their unique vision 
            to the hard techno underground, pushing boundaries and defining the future of electronic music.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#6c13aa] rotate-45 opacity-60 tribal-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-[#6c13aa] rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#6c13aa] opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-[#6c13aa] opacity-30"></div>
      </section>

      {/* Artists Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {loading && <LoadingGrid />}
          
          {!loading && artists.length === 0 && (
            <div className="text-center py-16">
              <h3 className="font-bebas-neue text-2xl text-white mb-2">
                NO RESIDENTS FOUND
              </h3>
              <p className="font-roboto text-[#4A4A4A]">
                Check back soon for our artist roster.
              </p>
            </div>
          )}
          
          {!loading && artists.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}