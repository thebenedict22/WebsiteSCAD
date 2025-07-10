"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Artist } from '@/lib/artists';

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/residents/${artist.id}`}>
      <div className="group relative bg-[#4A4A4A]/10 border-2 border-[#4A4A4A] hover:border-[#6c13aa] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6c13aa]/20 cursor-pointer overflow-hidden">
        {/* Artist Photo */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={artist.photo_url || 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'}
            alt={artist.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>

        {/* Artist Info */}
        <div className="p-6">
          <h3 className="font-bebas-neue text-2xl font-bold text-[#6c13aa] mb-2 group-hover:pulse-glow transition-all duration-300">
            {artist.name}
          </h3>
          <p className="font-roboto text-white/80 text-sm leading-relaxed line-clamp-3">
            {artist.bio}
          </p>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6c13aa] transition-all duration-300 pointer-events-none">
          <div className="absolute top-2 left-2 w-4 h-4 bg-[#6c13aa] opacity-0 group-hover:opacity-60 transition-opacity duration-300 tribal-pulse"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-2 border-[#6c13aa] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#6c13aa] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-[#6c13aa] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      </div>
    </Link>
  );
}