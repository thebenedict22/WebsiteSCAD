import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#4A4A4A] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/png_SCAD_TYPO_02_WHITE JUST LOGO.png"
                alt="SCAD Collective"
                width={160}
                height={48}
                className="h-6 w-auto"
              />
            </div>
            <p className="font-roboto text-[#4A4A4A] text-sm">
              Pioneering the future of hard techno culture through immersive experiences and cutting-edge sound.
            </p>
          </div>

          <div>
            <h4 className="font-bebas-neue text-lg text-white mb-4">CONNECT</h4>
            <div className="space-y-2">
              <a href="#" className="block font-roboto text-[#4A4A4A] hover:text-[#6c13aa] transition-colors text-sm glitch-hover">
                Instagram
              </a>
              <a href="#" className="block font-roboto text-[#4A4A4A] hover:text-[#6c13aa] transition-colors text-sm glitch-hover">
                SoundCloud
              </a>
              <a href="#" className="block font-roboto text-[#4A4A4A] hover:text-[#6c13aa] transition-colors text-sm glitch-hover">
                Bandcamp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas-neue text-lg text-white mb-4">CONTACT</h4>
            <div className="space-y-2">
              <p className="font-roboto text-[#4A4A4A] text-sm">info@scadcollective.com</p>
              <p className="font-roboto text-[#4A4A4A] text-sm">booking@scadcollective.com</p>
              <p className="font-roboto text-[#4A4A4A] text-sm">+1 (555) 123-SCAD</p>
            </div>
          </div>

          <div>
            <h4 className="font-bebas-neue text-lg text-white mb-4">NEWSLETTER</h4>
            <p className="font-roboto text-[#4A4A4A] text-sm mb-4">
              Stay updated with our latest events and releases.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-[#4A4A4A]/20 border border-[#4A4A4A] px-3 py-2 text-sm text-white placeholder-[#4A4A4A] flex-1"
              />
              <button className="bg-[#6c13aa] px-4 py-2 hover:bg-[#8b1bb8] transition-colors">
                <span className="text-white text-sm">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4A4A4A] pt-8 text-center">
          <p className="font-roboto text-[#4A4A4A] text-sm">
            © 2025 SCAD Collective. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}