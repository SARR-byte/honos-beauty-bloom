import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index: React.FC = () => {
  // Mock data for featured products - keeping the structure but removing text
  const featuredProducts = [
    { id: 1, name: "Luminous Foundation", price: "$42", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43" },
    { id: 2, name: "Hydrating Serum", price: "$58", category: "Skincare", image: "https://placehold.co/300x400/E5DEFF/403E43" },
    { id: 3, name: "Volumizing Mascara", price: "$26", category: "Makeup", image: "https://placehold.co/300x400/F6F6F7/403E43" },
    { id: 4, name: "Lip Enhancer", price: "$34", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43" },
  ];

  // Mock data for trending categories - keeping structure but removing text
  const categories = [
    { id: 1, name: "", image: "https://placehold.co/200x200/FDE1D3/403E43" },
    { id: 2, name: "", image: "https://placehold.co/200x200/E5DEFF/403E43" },
    { id: 3, name: "", image: "https://placehold.co/200x200/F6F6F7/403E43" },
    { id: 4, name: "", image: "https://placehold.co/200x200/FDE1D3/403E43" },
  ];

  return (
    <div className="pb-16 md:pb-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[60vh] md:h-[70vh] bg-gradient-to-r from-honos-purple to-honos-pink flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">Free Indulgence</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Beauty and Wellness for Everyone</p>
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

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 basis-[140px] md:basis-1/4">
                <div className="rounded-lg overflow-hidden bg-background">
                  <div className="h-[160px]">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    {/* Removed all text content from product boxes */}
                    <p className="text-xs text-muted-foreground">
                      &nbsp;
                    </p>
                    <h3 className="font-medium text-sm mt-1">
                      &nbsp;
                    </h3>
                    <p className="font-medium text-sm mt-1">
                      &nbsp;
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
                  alt=""
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Removed all text content from category boxes */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
