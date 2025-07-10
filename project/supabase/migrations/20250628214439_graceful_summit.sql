/*
  # Create artists table for SCAD Collective residents

  1. New Tables
    - `artists`
      - `id` (uuid, primary key)
      - `name` (text, artist name)
      - `bio` (text, short bio for cards)
      - `full_bio` (text, detailed bio for individual pages)
      - `photo_url` (text, URL to artist photo)
      - `instagram_url` (text, optional Instagram link)
      - `soundcloud_url` (text, optional SoundCloud link)
      - `bandcamp_url` (text, optional Bandcamp link)
      - `spotify_url` (text, optional Spotify link)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `artists` table
    - Add policy for public read access (artists are public content)
    - Add policy for authenticated admin users to manage artists
*/

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text NOT NULL DEFAULT '',
  full_bio text NOT NULL DEFAULT '',
  photo_url text NOT NULL DEFAULT '',
  instagram_url text,
  soundcloud_url text,
  bandcamp_url text,
  spotify_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE artists ENABLE ROW LEVEL SECURITY;

-- Allow public read access to artists (they are public content)
CREATE POLICY "Artists are publicly readable"
  ON artists
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage artists (for admin purposes)
CREATE POLICY "Authenticated users can manage artists"
  ON artists
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample artists data
INSERT INTO artists (name, bio, full_bio, photo_url, instagram_url, soundcloud_url) VALUES
(
  'NEXUS',
  'Leading the hard techno scene with industrial soundscapes and relentless energy.',
  'NEXUS has been at the forefront of the hard techno movement for over a decade, crafting industrial soundscapes that push the boundaries of electronic music. Known for their relentless energy and innovative production techniques, NEXUS has performed at major festivals across Europe and continues to influence the next generation of hard techno artists. Their signature sound combines crushing basslines with intricate percussion patterns, creating an immersive experience that captivates audiences worldwide.',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
  'https://instagram.com/nexus_hardtechno',
  'https://soundcloud.com/nexus_official'
),
(
  'VORTEX',
  'Pioneering neo-tribal rhythms with cutting-edge production and underground authenticity.',
  'VORTEX emerged from the underground scene with a unique approach to hard techno that incorporates neo-tribal elements and experimental sound design. Their productions are characterized by hypnotic rhythms, atmospheric textures, and a deep understanding of dancefloor dynamics. Having released on several prestigious labels, VORTEX continues to push creative boundaries while maintaining the raw energy that defines the SCAD Collective sound.',
  'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
  'https://instagram.com/vortex_techno',
  'https://soundcloud.com/vortex_underground'
),
(
  'CIPHER',
  'Master of dark atmospheres and driving basslines that define the SCAD sound.',
  'CIPHER brings a darker edge to the SCAD Collective roster, specializing in atmospheric hard techno that tells stories through sound. Their meticulous attention to detail and ability to create tension and release has made them a favorite among both critics and fans. CIPHER''s live performances are legendary for their intensity and emotional depth, taking audiences on a journey through the darker corners of electronic music.',
  'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg',
  'https://instagram.com/cipher_dark',
  'https://soundcloud.com/cipher_official'
),
(
  'PULSE',
  'High-energy performances and innovative sound design pushing techno boundaries.',
  'PULSE represents the next generation of hard techno artists, bringing fresh perspectives and innovative techniques to the genre. Their high-energy performances and cutting-edge sound design have quickly established them as a rising star in the electronic music scene. PULSE''s ability to seamlessly blend traditional hard techno elements with modern production techniques creates a sound that is both familiar and revolutionary.',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
  'https://instagram.com/pulse_techno',
  'https://soundcloud.com/pulse_hardtechno'
),
(
  'ECHO',
  'Experimental artist blending ambient textures with hard-hitting techno elements.',
  'ECHO stands out in the SCAD Collective for their experimental approach to hard techno, incorporating ambient textures and unconventional sound sources into their productions. This unique style has garnered attention from both the underground scene and mainstream electronic music press. ECHO''s ability to create immersive sonic landscapes while maintaining the driving energy of hard techno makes them a truly distinctive voice in contemporary electronic music.',
  'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
  'https://instagram.com/echo_experimental',
  'https://soundcloud.com/echo_ambient_techno'
),
(
  'STORM',
  'Relentless energy and precision crafting unforgettable dancefloor experiences.',
  'STORM brings an uncompromising approach to hard techno, delivering relentless energy and precision in every track and performance. Known for their ability to read crowds and adapt their sets accordingly, STORM has become a sought-after performer at underground events and major festivals alike. Their production style emphasizes powerful kicks, intricate hi-hat patterns, and carefully crafted builds that create unforgettable dancefloor moments.',
  'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
  'https://instagram.com/storm_hardtechno',
  'https://soundcloud.com/storm_official'
);