import { Metadata } from 'next';
import { getArtistById } from '@/lib/artists';

interface Props {
  params: { artistId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = getArtistById(params.artistId);

  if (!artist) {
    return {
      title: 'Artist Not Found',
      description: 'The requested artist could not be found.',
    };
  }

  return {
    title: `${artist.name} - SCAD Collective Resident`,
    description: artist.bio,
    keywords: [`${artist.name}`, 'hard techno artist', 'SCAD Collective', 'electronic music', 'techno resident'],
    openGraph: {
      title: `${artist.name} - SCAD Collective Resident`,
      description: artist.bio,
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} - SCAD Collective Resident`,
      description: artist.bio,
    },
  };
}

export default function ArtistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}