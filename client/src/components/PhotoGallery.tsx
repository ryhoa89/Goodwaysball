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
      <h2 className="font-display text-2xl md:text-3xl font-bold">VISUAL ARCHIVE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
