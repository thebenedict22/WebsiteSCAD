"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Instagram, Music, ExternalLink } from 'lucide-react';
import { getArtistById, Artist } from '@/lib/artists';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function ArtistPage() {
  const params = useParams();
  const artistId = params.artistId as string;
  
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      const foundArtist = getArtistById(artistId);
      setArtist(foundArtist || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [artistId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-24 pt-32">
          <div className="animate-pulse">
            <div className="h-8 bg-[#4A4A4A]/30 w-32 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="aspect-square bg-[#4A4A4A]/20"></div>
              <div className="space-y-4">
                <div className="h-12 bg-[#4A4A4A]/30 w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#4A4A4A]/20"></div>
                  <div className="h-4 bg-[#4A4A4A]/20"></div>
                  <div className="h-4 bg-[#4A4A4A]/20 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-24 pt-32 text-center">
          <h1 className="font-bebas-neue text-4xl text-white mb-4">
            ARTIST NOT FOUND
          </h1>
          <p className="font-roboto text-[#4A4A4A] mb-8">
            The requested artist could not be found.
          </p>
          <Link 
            href="/residents"
            className="inline-flex items-center space-x-2 bg-[#6c13aa] text-white font-roboto font-bold py-3 px-6 hover:bg-[#8b1bb8] transition-colors glitch-bg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO RESIDENTS</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Artist Profile - Added top padding to account for fixed header */}
      <section className="py-12 pt-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            href="/residents"
            className="inline-flex items-center space-x-2 text-[#4A4A4A] hover:text-[#6c13aa] transition-colors mb-8 glitch-hover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-roboto font-medium">BACK TO RESIDENTS</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Artist Photo */}
            <div className="relative aspect-square overflow-hidden border-2 border-[#4A4A4A] group">
              <Image
                src={artist.photo_url || 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'}
                alt={artist.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#6c13aa] opacity-60 tribal-pulse"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-2 border-[#6c13aa] opacity-40"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#6c13aa] opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-[#6c13aa] opacity-30"></div>
            </div>

            {/* Artist Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-bebas-neue text-5xl md:text-6xl font-bold text-[#6c13aa] mb-4 pulse-glow">
                  {artist.name}
                </h1>
                <p className="font-roboto text-lg text-white/90 leading-relaxed">
                  {artist.full_bio || artist.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-bebas-neue text-2xl text-white">
                  CONNECT
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {artist.instagram_url && (
                    <a
                      href={artist.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-4 py-3 transition-colors glitch-hover group"
                    >
                      <Instagram className="w-5 h-5 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">Instagram</span>
                      <ExternalLink className="w-4 h-4 text-[#4A4A4A] ml-auto" />
                    </a>
                  )}
                  
                  {artist.soundcloud_url && (
                    <a
                      href={artist.soundcloud_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-4 py-3 transition-colors glitch-hover group"
                    >
                      <Music className="w-5 h-5 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">SoundCloud</span>
                      <ExternalLink className="w-4 h-4 text-[#4A4A4A] ml-auto" />
                    </a>
                  )}
                  
                  {artist.bandcamp_url && (
                    <a
                      href={artist.bandcamp_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-4 py-3 transition-colors glitch-hover group"
                    >
                      <Music className="w-5 h-5 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">Bandcamp</span>
                      <ExternalLink className="w-4 h-4 text-[#4A4A4A] ml-auto" />
                    </a>
                  )}
                  
                  {artist.spotify_url && (
                    <a
                      href={artist.spotify_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-4 py-3 transition-colors glitch-hover group"
                    >
                      <Music className="w-5 h-5 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">Spotify</span>
                      <ExternalLink className="w-4 h-4 text-[#4A4A4A] ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 border-t border-[#4A4A4A]">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 bg-[#6c13aa] text-white font-roboto font-bold py-4 px-8 hover:bg-[#8b1bb8] transition-all duration-300 glitch-bg transform hover:scale-105"
                >
                  <Music className="w-5 h-5" />
                  <span>EXPERIENCE LIVE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}