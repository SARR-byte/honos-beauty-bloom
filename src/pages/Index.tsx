
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index: React.FC = () => {
  // Mock data for featured products
  const featuredProducts = [
    { id: 1, name: "Luminous Foundation", price: "$42", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43?text=Foundation" },
    { id: 2, name: "Hydrating Serum", price: "$58", category: "Skincare", image: "https://placehold.co/300x400/E5DEFF/403E43?text=Serum" },
    { id: 3, name: "Volumizing Mascara", price: "$26", category: "Makeup", image: "https://placehold.co/300x400/F6F6F7/403E43?text=Mascara" },
    { id: 4, name: "Lip Enhancer", price: "$34", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43?text=Lip+Care" },
  ];

  // Mock data for trending categories
  const categories = [
    { id: 1, name: "Makeup", image: "https://placehold.co/200x200/FDE1D3/403E43?text=Makeup" },
    { id: 2, name: "Skincare", image: "https://placehold.co/200x200/E5DEFF/403E43?text=Skincare" },
    { id: 3, name: "Fragrance", image: "https://placehold.co/200x200/F6F6F7/403E43?text=Fragrance" },
    { id: 4, name: "Hair", image: "https://placehold.co/200x200/FDE1D3/403E43?text=Hair" },
  ];

  return (
    <div className="pb-16 md:pb-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[60vh] md:h-[70vh] bg-gradient-to-r from-honos-purple to-honos-pink flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">Beauty that empowers</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Discover our collection of luxury beauty products crafted for the modern woman.</p>
            <Link to="/shop">
              <Button size="lg" className="font-medium">Shop Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-serif">Featured Products</h2>
          <Link to="/shop" className="text-sm font-medium text-accent hover:underline">
            View All
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-none">
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[120px] flex-shrink-0">
              <div className="rounded-lg overflow-hidden bg-background">
                <div className="h-[160px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <h3 className="font-medium text-sm mt-0.5 line-clamp-1">{product.name}</h3>
                  <p className="font-medium text-sm mt-0.5">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Offer Banner */}
      <section className="px-4 mt-8">
        <div className="bg-honos-neutral rounded-xl p-6 text-center">
          <h2 className="text-xl md:text-2xl font-serif mb-2">Limited Time Offer</h2>
          <p className="mb-4 text-sm">Get 20% off your first purchase with code <span className="font-medium bg-accent/10 px-2 py-1 rounded">WELCOME</span></p>
          <Link to="/offers">
            <Button size="sm">View Offers</Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mt-8 mb-12">
        <h2 className="text-2xl font-serif mb-4">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
