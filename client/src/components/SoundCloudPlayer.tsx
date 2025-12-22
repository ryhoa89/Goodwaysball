import { Track } from "@/lib/data";
import { motion } from "framer-motion";

interface SoundCloudPlayerProps {
  currentTrack: Track | null;
}

export function SoundCloudPlayer({ currentTrack }: SoundCloudPlayerProps) {
  if (!currentTrack) return null;

  const encodedUrl = encodeURIComponent(currentTrack.soundcloudUrl);

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2"
    >
      <div className="glass-panel max-w-5xl mx-auto rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
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
