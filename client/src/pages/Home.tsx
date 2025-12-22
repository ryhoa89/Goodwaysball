import { useState } from "react";
import { tracks, photos } from "@/lib/data";
import { SoundCloudPlayer } from "@/components/SoundCloudPlayer";
import { TrackList } from "@/components/TrackList";
import { PhotoGallery } from "@/components/PhotoGallery";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@assets/image_1766406556937.png";
import textureImage from "@assets/generated_images/abstract_dark_texture_background.png";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = currentTrackIndex !== null ? tracks[currentTrackIndex] : null;

  const playTrack = (index: number) => {
    if (currentTrackIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0); // Loop
    }
  };

  const handlePrev = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-white selection:text-black pb-32">
      {/* Texture Overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen"
        style={{ backgroundImage: `url(${textureImage})`, backgroundSize: 'cover' }}
      />
      <div className="grain-overlay" />
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-between p-6 md:p-12 z-10">
        <nav className="flex justify-between items-start">
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter mix-blend-difference">Ben 
          Goodway</h1>
          <div className="font-mono text-xs md:text-sm text-right opacity-60">
            SOLO ARTIST<br />
            PORTFOLIO 2025
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-2xl md:text-5xl font-bold leading-tight mb-6"
            >"the soul should always stand ajar"</motion.p>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="font-mono text-sm md:text-base text-muted-foreground max-w-md"
            >A sonic exploration of the inner self. Lo-fi textures meet cinematic soundscapes.                                                       Music by Benjamin Goodway</motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden rounded-sm"
          >
            <img 
              src={heroImage} 
              alt="Artist Portrait" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </motion.div>
        </div>

        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50"
        >
            <ArrowDown className="w-6 h-6" />
        </motion.div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* Tracks Section */}
        <section id="tracks" className="space-y-12 pt-24">
          <div className="border-t border-white/20 pt-8 flex justify-between items-end">
             <h2 className="font-mono text-sm uppercase tracking-widest opacity-50">Latest Recordings</h2>
             <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded">Volume 1</span>
          </div>
          
          <TrackList 
            tracks={tracks}
            currentTrackId={currentTrack?.id || null}
            isPlaying={isPlaying}
            onPlay={(track) => playTrack(Number(track.id) - 1)} // Assuming ID maps to index 1-based
            onPause={() => setIsPlaying(false)}
          />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-12">
           <div className="border-t border-white/20 pt-8">
             <h2 className="font-mono text-sm uppercase tracking-widest opacity-50 mb-8">Visuals</h2>
             <PhotoGallery photos={photos} />
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <div className="font-display font-bold text-2xl">ECHOES</div>
            <div className="font-mono text-xs">
                &copy; 2025 All Rights Reserved.<br />
                Designed & Built for the Void.
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Spotify</a>
                <a href="#" className="hover:text-white transition-colors">Bandcamp</a>
            </div>
        </footer>

      </main>
      {/* Sticky Player */}
      <AnimatePresence>
        {currentTrack && (
          <SoundCloudPlayer 
            currentTrack={currentTrack}
            onClose={() => setCurrentTrackIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
