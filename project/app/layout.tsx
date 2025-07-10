import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-bebas-neue'
});
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: {
    default: 'SCAD Collective - Pioneering Hard Techno Culture',
    template: '%s | SCAD Collective'
  },
  description: 'Hard techno music collective pushing the boundaries of electronic music culture with neo-tribal aesthetics. Meet our residents, book events, and experience the underground.',
  keywords: ['hard techno', 'electronic music', 'techno collective', 'underground music', 'neo-tribal', 'SCAD Collective', 'techno artists', 'electronic events'],
  authors: [{ name: 'SCAD Collective' }],
  creator: 'SCAD Collective',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scadcollective.com',
    siteName: 'SCAD Collective',
    title: 'SCAD Collective - Pioneering Hard Techno Culture',
    description: 'Hard techno music collective pushing the boundaries of electronic music culture with neo-tribal aesthetics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCAD Collective - Pioneering Hard Techno Culture',
    description: 'Hard techno music collective pushing the boundaries of electronic music culture with neo-tribal aesthetics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}