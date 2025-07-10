"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Instagram, Music, ExternalLink, Play } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function JadenBrownPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Glitch Effect */}
        <div className="absolute inset-0">
          <Image
            src="/Copy of IMG_6377(1).jpg"
            alt="Jaden Brown"
            fill
            className={`object-cover transition-all duration-1000 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Glitch overlay effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#6c13aa]/10 to-transparent transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>

        {/* Neo-tribal overlay */}
        <div className="absolute inset-0 scad-neo-tribal"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                href="/residents"
                className="inline-flex items-center space-x-2 text-white/70 hover:text-[#6c13aa] transition-colors glitch-hover"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-roboto font-medium">BACK TO RESIDENTS</span>
              </Link>
            </div>

            {/* Artist Name with Pulse Animation */}
            <h1 className={`font-bebas-neue text-6xl md:text-8xl lg:text-9xl font-bold text-[#6c13aa] mb-6 ${
              isLoaded ? 'pulse-glow text-reveal' : 'opacity-0'
            }`}>
              JADEN BROWN
            </h1>
            
            <p className={`font-roboto text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${
              isLoaded ? 'smooth-fade-in' : 'opacity-0'
            }`}>
              Pioneering the future of hard techno with innovative soundscapes and cutting-edge production techniques
            </p>

            {/* Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isLoaded ? 'smooth-fade-in' : 'opacity-0'
            }`} style={{ animationDelay: '0.5s' }}>
              <button className="bg-[#6c13aa] text-white font-roboto font-bold py-4 px-8 text-lg hover:bg-[#8b1bb8] transition-all duration-300 glitch-bg transform hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>LISTEN NOW</span>
                </div>
              </button>
              <button className="border-2 border-[#6c13aa] text-[#6c13aa] font-roboto font-bold py-4 px-8 text-lg hover:bg-[#6c13aa] hover:text-white transition-all duration-300 glitch-hover transform hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Music className="w-5 h-5" />
                  <span>VIEW DISCOGRAPHY</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 left-10 w-4 h-4 bg-[#6c13aa] rotate-45 opacity-60 tribal-pulse"></div>
        <div className="absolute top-52 right-20 w-6 h-6 border-2 border-[#6c13aa] rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#6c13aa] opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-[#6c13aa] opacity-30"></div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-black border-t border-[#4A4A4A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-bebas-neue text-4xl md:text-5xl font-bold text-[#6c13aa] mb-4 pulse-glow">
                ABOUT JADEN BROWN
              </h2>
              <div className="w-24 h-1 bg-[#6c13aa] mx-auto"></div>
            </div>

            {/* Bio Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Bio Text */}
              <div className="space-y-6">
                <p className="font-roboto text-lg text-white/90 leading-relaxed">
                  JADEN BROWN represents the cutting edge of hard techno, combining traditional elements with experimental approaches to create a unique sonic identity. Their dedication to pushing boundaries while maintaining the raw energy that defines the SCAD Collective sound has established them as a key figure in the contemporary electronic music landscape.
                </p>
                <p className="font-roboto text-lg text-white/80 leading-relaxed">
                  With a background rooted in underground culture and a vision that extends far beyond conventional techno boundaries, Jaden Brown crafts immersive experiences that transport listeners into otherworldly sonic realms. Each performance is a journey through carefully constructed soundscapes that blend industrial textures with hypnotic rhythms.
                </p>
                <p className="font-roboto text-lg text-white/70 leading-relaxed">
                  From intimate underground venues to major festival stages, Jaden Brown's performances are characterized by their intensity, precision, and ability to create genuine connections with audiences through the universal language of hard techno.
                </p>
              </div>

              {/* Artist Stats/Info */}
              <div className="bg-[#4A4A4A]/10 border-2 border-[#4A4A4A] p-8 space-y-6">
                <h3 className="font-bebas-neue text-2xl text-[#6c13aa] mb-4">
                  ARTIST INFO
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#4A4A4A]/50 pb-2">
                    <span className="font-roboto text-white/70">Genre</span>
                    <span className="font-roboto font-medium text-white">Hard Techno</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#4A4A4A]/50 pb-2">
                    <span className="font-roboto text-white/70">Years Active</span>
                    <span className="font-roboto font-medium text-white">2018 - Present</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#4A4A4A]/50 pb-2">
                    <span className="font-roboto text-white/70">Label</span>
                    <span className="font-roboto font-medium text-white">SCAD Collective</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-white/70">Location</span>
                    <span className="font-roboto font-medium text-white">Underground</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-[#4A4A4A]/50">
                  <h4 className="font-bebas-neue text-lg text-white mb-4">CONNECT</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://instagram.com/jadenbrown_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-3 py-2 transition-colors glitch-hover group text-sm"
                    >
                      <Instagram className="w-4 h-4 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">Instagram</span>
                    </a>
                    
                    <a
                      href="https://soundcloud.com/jadenbrown"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#4A4A4A]/20 border border-[#4A4A4A] hover:border-[#6c13aa] px-3 py-2 transition-colors glitch-hover group text-sm"
                    >
                      <Music className="w-4 h-4 text-[#6c13aa]" />
                      <span className="font-roboto text-white group-hover:text-[#6c13aa] transition-colors">SoundCloud</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section className="py-16 bg-[#4A4A4A]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bebas-neue text-4xl md:text-5xl font-bold text-[#6c13aa] mb-4">
                LATEST RELEASES
              </h2>
              <p className="font-roboto text-lg text-white/80 max-w-2xl mx-auto">
                Explore the latest sonic explorations from Jaden Brown's ever-evolving catalog
              </p>
            </div>

            {/* Placeholder for releases - can be populated with real data later */}
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#4A4A4A]/10 border-2 border-[#4A4A4A] hover:border-[#6c13aa] transition-colors group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-[#6c13aa]/20 to-black flex items-center justify-center">
                    <Music className="w-16 h-16 text-[#6c13aa] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bebas-neue text-xl text-white mb-2">
                      UPCOMING RELEASE {item}
                    </h3>
                    <p className="font-roboto text-[#4A4A4A] text-sm">
                      New hard techno exploration coming soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}