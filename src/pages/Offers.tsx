
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Offers = () => {
  // Mock data for offers and promotions
  const offers = [
    {
      id: 1,
      title: "20% Off Your First Order",
      code: "WELCOME",
      description: "New customers get 20% off their first purchase",
      expiryDate: "June 15, 2024",
      image: "https://placehold.co/800x400/FDE1D3/403E43?text=20%+Off"
    },
    {
      id: 2,
      title: "Free Shipping",
      code: "FREESHIP",
      description: "Free shipping on all orders over $50",
      expiryDate: "Ongoing",
      image: "https://placehold.co/800x400/E5DEFF/403E43?text=Free+Shipping"
    },
    {
      id: 3,
      title: "Buy One, Get One 50% Off",
      code: "BOGO50",
      description: "On all skincare products",
      expiryDate: "May 31, 2024",
      image: "https://placehold.co/800x400/F6F6F7/403E43?text=BOGO+50%+Off"
    }
  ];

  return (
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      <h1 className="text-3xl font-serif mb-2">Special Offers</h1>
      <p className="text-muted-foreground mb-8">Discover our current promotions and exclusive deals</p>
      
      <div className="grid gap-8">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full aspect-[2/1] md:h-full md:aspect-auto object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-medium mb-2">{offer.title}</h2>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-muted px-4 py-2 rounded-md">
                        <p className="text-sm font-medium">Code: {offer.code}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Expires: {offer.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" onClick={() => navigator.clipboard.writeText(offer.code)}>
                      Copy Code
                    </Button>
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Separator className="my-12" />
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-serif mb-4">Sign Up For Exclusive Offers</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Join our newsletter to receive the latest updates on new products and special promotions.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
