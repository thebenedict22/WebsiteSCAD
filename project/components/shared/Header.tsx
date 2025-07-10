"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/residents', label: 'RESIDENTS' },
    { href: '/agency', label: 'CREATIVE AGENCY' },
    { href: '/faq', label: 'FAQ' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-lg border-b border-white/10"></div>
      
      <nav className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <div className="relative">
              <Image
                src="/png_SCAD_TYPO_02_WHITE JUST LOGO.png"
                alt="SCAD Collective"
                width={200}
                height={60}
                className="h-8 w-auto md:h-10 lg:h-12"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-roboto font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isActive(link.href)
                    ? 'text-[#6c13aa]'
                    : 'text-white hover:text-[#6c13aa]'
                }`}
              >
                {link.label}
                {/* Glitch hover effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse text-[#6c13aa] transition-opacity duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#6c13aa] transition-colors duration-300 relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          {/* Mobile menu glass background */}
          <div className="bg-black/80 backdrop-blur-lg border-b border-white/10 mx-4 rounded-b-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-roboto font-medium transition-all duration-300 hover:translate-x-2 relative group ${
                    isActive(link.href)
                      ? 'text-[#6c13aa]'
                      : 'text-white hover:text-[#6c13aa]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {/* Mobile glitch effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse text-[#6c13aa] transition-opacity duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}