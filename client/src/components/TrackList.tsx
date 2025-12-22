import { useState } from "react";
import { Track } from "@/lib/data";
import { Play, Pause, FileText, Info } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface TrackListProps {
  tracks: Track[];
  currentTrackId: string | null;
  isPlaying: boolean;
  onPlay: (track: Track) => void;
  onPause: () => void;
}

export function TrackList({ tracks, currentTrackId, isPlaying, onPlay, onPause }: TrackListProps) {
  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrent = currentTrackId === track.id;
        const isActuallyPlaying = isCurrent && isPlaying;

        return (
          <motion.div 
            key={track.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              group flex items-center justify-between p-4 md:p-6 
              border-b border-white/5 hover:bg-white/5 transition-colors
              ${isCurrent ? "bg-white/5" : ""}
            `}
          >
            <div className="flex items-center gap-4 md:gap-8 flex-1">
              <span className="font-mono text-muted-foreground w-6">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              
              <button 
                onClick={() => isActuallyPlaying ? onPause() : onPlay(track)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all group-hover:scale-110"
              >
                {isActuallyPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>

              <div className="flex flex-col gap-1">
                <h3 className={`font-display font-bold text-lg md:text-xl tracking-tight ${isCurrent ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {track.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground md:hidden">
                  {track.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
              <span className="font-mono text-sm text-muted-foreground hidden md:block">
                {track.duration}
              </span>

              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="p-2 text-muted-foreground hover:text-white transition-colors"
                    title="Lyrics & Info"
                    data-testid={`lyrics-${track.id}`}
                  >
                    <FileText className="w-5 h-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-[#0a0a0a] border-white/10 font-mono">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl md:text-4xl uppercase font-bold mb-2">
                      {track.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                      Track {index + 1} — {track.duration}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div className="space-y-4">
                      <h4 className="text-sm uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">Lyrics</h4>
                      <ScrollArea className="h-[300px] pr-4">
                        <p className="whitespace-pre-line leading-loose text-gray-300">
                          {track.lyrics}
                        </p>
                      </ScrollArea>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">Artist Notes</h4>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/5 italic text-gray-400">
                        <Info className="w-4 h-4 mb-2 opacity-50" />
                        "{track.commentary}"
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
