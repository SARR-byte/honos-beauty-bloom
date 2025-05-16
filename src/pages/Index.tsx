
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
      <section className="honos-container mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif">Featured Products</h2>
          <Link to="/shop" className="text-sm font-medium text-accent hover:underline">
            View All
          </Link>
        </div>

        <div className="md:hidden">
          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="basis-[70%] sm:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-sm">
                      <CardContent className="p-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                          <h3 className="font-medium mt-1">{product.name}</h3>
                          <p className="font-medium mt-1">{product.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-sm">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="font-medium mt-1">{product.name}</h3>
                  <p className="font-medium mt-1">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Offer Banner */}
      <section className="honos-container mt-12">
        <div className="bg-honos-neutral rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Limited Time Offer</h2>
          <p className="mb-6">Get 20% off your first purchase with code <span className="font-medium bg-accent/10 px-2 py-1 rounded">WELCOME</span></p>
          <Link to="/offers">
            <Button>View Offers</Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="honos-container mt-12 mb-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-honos-dark text-xl font-medium">{category.name}</h3>
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
