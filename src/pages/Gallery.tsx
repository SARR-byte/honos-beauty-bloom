
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  // Mock data for gallery items
  const lookGallery = [
    { id: 1, title: "Summer Glow", image: "https://placehold.co/600x800/FDE1D3/403E43?text=Summer+Look" },
    { id: 2, title: "Evening Elegance", image: "https://placehold.co/600x800/E5DEFF/403E43?text=Evening+Look" },
    { id: 3, title: "Natural Beauty", image: "https://placehold.co/600x800/F6F6F7/403E43?text=Natural+Look" },
    { id: 4, title: "Bold & Bright", image: "https://placehold.co/600x800/FDE1D3/403E43?text=Bold+Look" },
    { id: 5, title: "Everyday Essentials", image: "https://placehold.co/600x800/E5DEFF/403E43?text=Everyday+Look" },
    { id: 6, title: "Golden Hour", image: "https://placehold.co/600x800/F6F6F7/403E43?text=Golden+Hour" },
  ];
  
  const tutorialGallery = [
    { id: 1, title: "Perfect Foundation", image: "https://placehold.co/600x800/FDE1D3/403E43?text=Foundation+Tutorial" },
    { id: 2, title: "Smokey Eye Guide", image: "https://placehold.co/600x800/E5DEFF/403E43?text=Eye+Tutorial" },
    { id: 3, title: "Contouring 101", image: "https://placehold.co/600x800/F6F6F7/403E43?text=Contour+Tutorial" },
    { id: 4, title: "Natural Glow", image: "https://placehold.co/600x800/FDE1D3/403E43?text=Glow+Tutorial" },
  ];

  return (
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      <h1 className="text-3xl font-serif mb-2">Beauty Gallery</h1>
      <p className="text-muted-foreground mb-8">Explore trending looks and tutorials</p>
      
      <Tabs defaultValue="looks" className="w-full">
        <TabsList className="w-full md:w-auto mb-8">
          <TabsTrigger value="looks">Looks</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
        </TabsList>
        
        <TabsContent value="looks" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lookGallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-md cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tutorials" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tutorialGallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-md cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/80 text-sm">Watch tutorial</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-serif mb-4">Share Your Look</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Tag @honosbeauty and #honosbeauty on Instagram to be featured in our gallery.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
