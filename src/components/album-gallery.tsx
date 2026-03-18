
"use client";

import * as React from "react";
import Image from "next/image";
import { X, DownloadCloud } from "lucide-react";
import { Album } from "@/lib/events-data";

export function AlbumGallery({ album }: { album: Album }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {album.images.map((image, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(image)} 
            className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <Image
              src={image}
              alt={`${album.title} gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1920}
              height={1080}
              className="object-contain max-w-full max-h-[90vh] rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-secondary transition-colors z-10"
              title="Close image"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
            <a 
              href={selectedImage} 
              download
              className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-secondary transition-colors z-10"
              title="Download image"
            >
              <DownloadCloud className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
