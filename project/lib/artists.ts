export type Artist = {
  id: string;
  name: string;
  bio: string;
  full_bio: string;
  photo_url: string;
  instagram_url?: string;
  soundcloud_url?: string;
  bandcamp_url?: string;
  spotify_url?: string;
};

export const artists: Artist[] = [
  {
    id: 'jaden-brown',
    name: 'JADEN BROWN',
    bio: 'Pioneering hard techno artist bringing innovative soundscapes to the underground scene.',
    full_bio: 'JADEN BROWN represents the cutting edge of hard techno, combining traditional elements with experimental approaches to create a unique sonic identity. Their dedication to pushing boundaries while maintaining the raw energy that defines the SCAD Collective sound has established them as a key figure in the contemporary electronic music landscape.',
    photo_url: '/Copy of IMG_6377(1).jpg',
    instagram_url: 'https://instagram.com/jadenbrown_official',
    soundcloud_url: 'https://soundcloud.com/jadenbrown'
  },
  {
    id: 'ryukyu',
    name: 'RYUKYU',
    bio: 'Master of atmospheric hard techno with deep underground roots and relentless drive.',
    full_bio: 'RYUKYU brings a distinctive approach to hard techno, drawing inspiration from diverse cultural influences to create immersive sonic experiences. Their ability to blend atmospheric elements with driving rhythms has made them a standout performer in the SCAD Collective roster, consistently delivering sets that captivate and energize audiences.',
    photo_url: '/IMG_9926(2).jpg',
    instagram_url: 'https://instagram.com/ryukyu_techno',
    soundcloud_url: 'https://soundcloud.com/ryukyu_official'
  },
  {
    id: 'druckvoll',
    name: 'DRUCKVOLL',
    bio: 'Delivering crushing basslines and industrial textures that define modern hard techno.',
    full_bio: 'DRUCKVOLL embodies the raw power and industrial aesthetic that lies at the heart of hard techno. Their productions are characterized by crushing basslines, intricate percussion work, and an uncompromising approach to sound design. As a core member of the SCAD Collective, DRUCKVOLL continues to push the boundaries of what hard techno can achieve.',
    photo_url: '/P-190(1).jpg',
    instagram_url: 'https://instagram.com/druckvoll_official',
    soundcloud_url: 'https://soundcloud.com/druckvoll'
  },
  {
    id: 'maxic',
    name: 'MAXIC',
    bio: 'High-energy performances and precision production defining the future of electronic music.',
    full_bio: 'MAXIC represents the next generation of hard techno artists, bringing fresh perspectives and innovative techniques to the genre. Their high-energy performances and meticulous attention to production detail have quickly established them as a rising force in the electronic music scene. MAXIC\'s ability to seamlessly blend traditional hard techno elements with modern production techniques creates a sound that is both familiar and revolutionary.',
    photo_url: '/maxic photo headshot(1).jpg',
    instagram_url: 'https://instagram.com/maxic_techno',
    soundcloud_url: 'https://soundcloud.com/maxic_official'
  }
];

export function getArtistById(id: string): Artist | undefined {
  return artists.find(artist => artist.id === id);
}

export function getAllArtists(): Artist[] {
  return artists;
}