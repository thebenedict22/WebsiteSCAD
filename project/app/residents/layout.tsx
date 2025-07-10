import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residents - SCAD Collective',
  description: 'Meet our hard techno artists pushing the boundaries of electronic music culture. Discover the residents of SCAD Collective and their unique sounds.',
  keywords: ['hard techno artists', 'SCAD Collective residents', 'electronic music artists', 'techno collective', 'underground artists'],
  openGraph: {
    title: 'SCAD Collective Residents',
    description: 'Meet our hard techno artists pushing the boundaries of electronic music culture.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCAD Collective Residents',
    description: 'Meet our hard techno artists pushing the boundaries of electronic music culture.',
  },
};

export default function ResidentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}