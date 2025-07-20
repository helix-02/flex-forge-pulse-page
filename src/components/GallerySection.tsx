/* 
 * GALLERY SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Replace placeholder images with your actual gym photos
 * - Edit image descriptions and categories
 * - Update the number of images displayed
 * - Add or modify gallery categories
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// EDIT GALLERY CONTENT HERE - Replace with your actual gym photos
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    alt: "Modern gym equipment area",
    category: "Equipment",
    description: "State-of-the-art strength training equipment"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    alt: "Group fitness class in session",
    category: "Classes",
    description: "Energetic group fitness classes"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
    alt: "Cardio equipment zone",
    category: "Cardio",
    description: "Modern cardio equipment with entertainment systems"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e",
    alt: "Personal training session",
    category: "Training",
    description: "One-on-one personal training sessions"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    alt: "Free weights area",
    category: "Equipment",
    description: "Complete free weights section"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506629905607-d7e50f96e47b",
    alt: "Yoga and stretching area",
    category: "Classes",
    description: "Peaceful yoga and stretching zone"
  }
];

const SECTION_CONTENT = {
  title: "Our Facilities",
  subtitle: "See What Sets Us Apart",
  description: "Take a virtual tour of our state-of-the-art facility designed to inspire and motivate your fitness journey.",
  videoTitle: "Virtual Tour",
  videoDescription: "Watch our complete facility walkthrough"
};

// EDIT CATEGORIES HERE
const CATEGORIES = ["All", "Equipment", "Classes", "Cardio", "Training"];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleWatchTour = () => {
    // CUSTOMIZE: Add your video modal or virtual tour logic here
    alert("Add your virtual tour video logic here!");
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">{SECTION_CONTENT.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-electric-blue font-semibold mb-8">
            {SECTION_CONTENT.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {SECTION_CONTENT.description}
          </p>
        </div>

        {/* VIRTUAL TOUR CTA */}
        <div className="text-center mb-12">
          <Button 
            variant="energy" 
            size="lg"
            onClick={handleWatchTour}
            className="group"
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-left">
              <div className="font-semibold">{SECTION_CONTENT.videoTitle}</div>
              <div className="text-xs opacity-90">{SECTION_CONTENT.videoDescription}</div>
            </div>
          </Button>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "neon" : "outline_neon"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* MAIN GALLERY DISPLAY */}
        <div className="relative mb-12">
          <div className="aspect-video bg-card rounded-2xl overflow-hidden border border-border">
            {filteredImages.length > 0 && (
              <>
                <img
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* IMAGE OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="text-white font-semibold text-lg mb-2">
                    {filteredImages[currentImageIndex].description}
                  </div>
                  <div className="text-electric-blue text-sm">
                    {filteredImages[currentImageIndex].category}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* NAVIGATION BUTTONS */}
          {filteredImages.length > 1 && (
            <>
              <Button
                variant="outline_neon"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline_neon"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* IMAGE COUNTER */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>

        {/* THUMBNAIL GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`aspect-square bg-card rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                index === currentImageIndex 
                  ? 'border-electric-blue shadow-neon' 
                  : 'border-transparent hover:border-electric-blue/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;