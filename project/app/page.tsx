"use client";

import { useState, useEffect } from 'react';
import { Ticket, Music, Users, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import WeeztixEmbed from '@/components/WeeztixEmbed';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Added top padding to account for fixed header */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Desktop Background - Gradient */}
        <div className="absolute inset-0 scad-gradient-bg opacity-90 hidden md:block"></div>
        
        {/* Mobile and Desktop Background - New Event Photo */}
        <div className="absolute inset-0">
          <Image
            src="/Copy of P4060985-Enhanced-NR (1)(1).jpg"
            alt="SCAD Collective Event"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Neo-tribal overlay - appears on both mobile and desktop */}
        <div className="absolute inset-0 scad-neo-tribal"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Logo - Fixed to use correct image */}
            <div className={`mb-8 ${isLoaded ? 'pulse-glow' : ''} transition-all duration-1000`}>
              <Image
                src="/png_SCAD_TYPO_01_WHITE.png"
                alt="SCAD Collective"
                width={800}
                height={240}
                className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto mx-auto"
                priority
              />
            </div>
            
            <p className="font-bebas-neue text-2xl md:text-3xl lg:text-4xl mb-4 text-[#6c13aa] tracking-widest">
              PIONEERING HARD TECHNO CULTURE
            </p>
            <p className="font-roboto text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in the raw power of hard techno. We create experiences that transcend boundaries, 
              blending neo-tribal aesthetics with cutting-edge electronic music to forge a new underground movement.
            </p>
            <button className="bg-[#6c13aa] text-white font-roboto font-bold py-4 px-8 text-lg hover:bg-[#8b1bb8] transition-all duration-300 glitch-bg transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <Ticket className="w-5 h-5" />
                <span>BUY TICKETS</span>
              </div>
            </button>
          </div>
        </div>

        {/* Decorative Elements - Enhanced visibility on mobile */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#6c13aa] rotate-45 opacity-80 md:opacity-60 tribal-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-[#6c13aa] rotate-45 opacity-60 md:opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#6c13aa] opacity-70 md:opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-[#6c13aa] opacity-50 md:opacity-30"></div>
      </section>

      {/* Ticket Shop Section - Single Weeztix Integration */}
      <section id="tickets" className="py-16 bg-black border-t border-[#4A4A4A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas-neue text-4xl md:text-5xl font-bold text-[#6c13aa] mb-4">
              UPCOMING EVENTS
            </h2>
            <p className="font-roboto text-lg text-white/80 max-w-2xl mx-auto">
              Secure your place in the underground. Limited tickets available for exclusive hard techno experiences.
            </p>
          </div>

          {/* Single Weeztix Ticket Shop Integration */}
          <div className="max-w-4xl mx-auto relative">
            <WeeztixEmbed />
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="py-16 bg-[#4A4A4A]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residents */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6c13aa] mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bebas-neue text-2xl text-[#6c13aa] mb-2">RESIDENTS</h3>
              <p className="font-roboto text-white/80">
                Meet our collective of underground artists pushing the boundaries of hard techno.
              </p>
            </div>

            {/* Creative Agency */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6c13aa] mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bebas-neue text-2xl text-[#6c13aa] mb-2">CREATIVE AGENCY</h3>
              <p className="font-roboto text-white/80">
                Full-service creative solutions for electronic music events and brands.
              </p>
            </div>

            {/* FAQ */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6c13aa] mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bebas-neue text-2xl text-[#6c13aa] mb-2">FAQ</h3>
              <p className="font-roboto text-white/80">
                Everything you need to know about SCAD Collective events and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}