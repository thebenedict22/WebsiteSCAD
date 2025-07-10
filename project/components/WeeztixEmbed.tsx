"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamic component to prevent SSR issues
const WeeztixShopFrame = dynamic(() => Promise.resolve(() => (
  <div 
    id="shop-frame" 
    data-url="https://shop.weeztix.com/b687c491-848f-11ee-bdc3-6a57c78572ab" 
    className="max-w-[600px] mx-auto"
    style={{ maxWidth: '600px', margin: '0 auto' }}
  />
)), { ssr: false });

export default function WeeztixEmbed() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple script loads
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Clear existing content in shop-frame to prevent duplicates
    const shopFrame = document.getElementById("shop-frame");
    if (shopFrame) shopFrame.innerHTML = "";

    // Remove any existing Weeztix scripts to prevent duplicates
    const existingScripts = document.querySelectorAll('script[src="https://shop.weeztix.com/build/integrate.js"]');
    existingScripts.forEach(script => script.remove());

    // Load Weeztix script
    const script = document.createElement("script");
    script.src = "https://shop.weeztix.com/build/integrate.js";
    script.async = true;
    script.onload = () => console.log("Weeztix script loaded");
    script.onerror = () => console.error("Weeztix script failed to load");
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-[#4A4A4A]/10 border-2 border-[#4A4A4A] p-6 md:p-8 relative">
      {/* Single Weeztix embed container */}
      <div className="relative">
        <WeeztixShopFrame />
      </div>
      
      {/* Decorative neo-tribal elements */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-[#6c13aa] opacity-40 tribal-pulse"></div>
      <div className="absolute top-4 right-4 w-2 h-2 border border-[#6c13aa] opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#6c13aa] opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 border border-[#6c13aa] opacity-20"></div>
    </div>
  );
}