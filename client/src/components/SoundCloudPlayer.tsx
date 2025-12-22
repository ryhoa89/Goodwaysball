import { Track } from "@/lib/data";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface SoundCloudPlayerProps {
  currentTrack: Track | null;
  onClose: () => void;
}

export function SoundCloudPlayer({ currentTrack, onClose }: SoundCloudPlayerProps) {
  if (!currentTrack) return null;

  const encodedUrl = encodeURIComponent(currentTrack.soundcloudUrl);

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2"
    >
      <div className="glass-panel max-w-5xl mx-auto rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors p-1"
          data-testid="button-close-player"
          aria-label="Close player"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-display font-bold text-lg mb-1">{currentTrack.title}</h4>
            <p className="text-xs text-muted-foreground font-mono">NOW PLAYING</p>
          </div>
          
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23ffffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            className="rounded-md"
          />
        </div>
      </div>
    </motion.div>
  );
}
