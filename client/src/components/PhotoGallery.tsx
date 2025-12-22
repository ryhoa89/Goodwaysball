import { Photo } from "@/lib/data";
import { Upload, Plus, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos: initialPhotos }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState(initialPhotos);
  const { toast } = useToast();

  const handleUploadClick = () => {
    // Mock upload flow
    toast({
      title: "Upload Feature",
      description: "In the full version, this would open a file picker to upload to cloud storage.",
    });
    
    // Simulate adding a photo after a delay
    setTimeout(() => {
        const newPhoto: Photo = {
            id: Date.now().toString(),
            src: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
            alt: "New Upload"
        };
        setPhotos([newPhoto, ...photos]);
        toast({
            title: "Photo Added",
            description: "A placeholder photo has been added to the gallery.",
        });
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl font-bold">VISUAL ARCHIVE</h2>
        <button 
          onClick={handleUploadClick}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          data-testid="button-upload"
        >
          <Upload className="w-4 h-4" />
          <span className="hidden md:inline">Upload Media</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mock Upload Card (Visual placeholder for drag & drop) */}
        <div 
            onClick={handleUploadClick}
            className="aspect-square border-2 border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center gap-4 text-muted-foreground hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer group"
        >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest">Add to Archive</span>
        </div>

        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-display font-bold text-lg">{photo.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
