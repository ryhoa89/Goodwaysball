import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, SkipBack, SkipForward, Disc } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Track } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface AudioPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function AudioPlayer({ currentTrack, isPlaying, onPlayPause, onNext, onPrev }: AudioPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState([80]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 100;
      setProgress((current / duration) * 100);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || 1;
      audioRef.current.currentTime = (value[0] / 100) * duration;
      setProgress(value[0]);
    }
  };

  if (!currentTrack) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2"
    >
      <div className="glass-panel max-w-5xl mx-auto rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 border-t border-white/10 shadow-2xl relative overflow-hidden group">
        
        {/* Progress Bar (Absolute top) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 group-hover:h-2 transition-all cursor-pointer">
           <div 
             className="h-full bg-white relative" 
             style={{ width: `${progress}%` }}
           >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           {/* Invisible click handler for the progress bar could go here, but using Slider component is easier if we restyle it */}
        </div>

        <audio 
          ref={audioRef} 
          src={currentTrack.url} 
          onTimeUpdate={handleTimeUpdate}
          onEnded={onNext}
        />

        {/* Track Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0 w-full md:w-auto">
          <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center shrink-0 animate-[spin_10s_linear_infinite]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
            <Disc className="w-6 h-6 opacity-50" />
          </div>
          <div className="overflow-hidden">
            <h4 className="font-display font-bold text-sm md:text-base truncate">{currentTrack.title}</h4>
            <p className="text-xs text-muted-foreground font-mono truncate">NOW PLAYING</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={onPrev} className="text-muted-foreground hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onPlayPause} 
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-1" />
            )}
          </button>
          
          <button onClick={onNext} className="text-muted-foreground hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-3 w-32">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <Slider 
            value={volume} 
            max={100} 
            step={1} 
            onValueChange={setVolume}
            className="cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
}
