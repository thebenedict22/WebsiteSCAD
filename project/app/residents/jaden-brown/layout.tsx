import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jaden Brown - SCAD Collective Resident',
  description: 'Pioneering hard techno artist bringing innovative soundscapes to the underground scene. Discover Jaden Brown\'s unique approach to electronic music.',
  keywords: ['Jaden Brown', 'hard techno artist', 'SCAD Collective', 'electronic music', 'techno resident', 'underground music'],
  openGraph: {
    title: 'Jaden Brown - SCAD Collective Resident',
    description: 'Pioneering hard techno artist bringing innovative soundscapes to the underground scene.',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaden Brown - SCAD Collective Resident',
    description: 'Pioneering hard techno artist bringing innovative soundscapes to the underground scene.',
  },
};

export default function JadenBrownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}