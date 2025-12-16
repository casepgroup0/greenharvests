import { useState } from "react";
import { X } from "lucide-react";
import farmHarvest from "@/assets/farm-harvest.jpg";
import farmPackaging from "@/assets/farm-packaging.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import tomatoesImg from "@/assets/tomatoes.jpg";
import peppersImg from "@/assets/peppers.jpg";

const galleryImages = [
  { src: heroFarm, alt: "Beautiful vegetable farm at sunset" },
  { src: farmHarvest, alt: "Farmers harvesting fresh vegetables" },
  { src: farmPackaging, alt: "Fresh vegetables being packaged" },
  { src: farmAerial, alt: "Aerial view of our organic farm" },
  { src: tomatoesImg, alt: "Fresh vine-ripened tomatoes" },
  { src: peppersImg, alt: "Colorful bell peppers" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Glimpse of{" "}
            <span className="text-primary">Our Farm</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a visual journey through our fields, harvests, and the care 
            that goes into every vegetable we grow.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
