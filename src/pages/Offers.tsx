
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

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

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Coupon code copied!");
  };

  return (
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-serif mb-1 md:mb-2">Special Offers</h1>
      <p className="text-sm md:text-base text-muted-foreground mb-6">Discover our current promotions and exclusive deals</p>
      
      <div className="grid gap-3 md:gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden border shadow-sm">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-2/5 max-w-[120px]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4 flex-1">
                  <h2 className="text-base md:text-lg font-medium mb-1">{offer.title}</h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{offer.description}</p>
                  
                  <div className="flex justify-between items-center text-xs mb-3">
                    <div className="bg-muted px-2 py-1 rounded">
                      <p className="font-medium">Code: {offer.code}</p>
                    </div>
                    <p className="text-muted-foreground">Expires: {offer.expiryDate}</p>
                  </div>
                  
                  <div className="flex justify-between gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs md:text-sm"
                      onClick={() => handleCopyCode(offer.code)}
                    >
                      Copy Code
                    </Button>
                    <Button size="sm" className="text-xs md:text-sm">Shop Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Separator className="my-8" />
      
      <div className="text-center mb-8">
        <h2 className="text-xl font-serif mb-3">Sign Up For Exclusive Offers</h2>
        <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
          Join our newsletter to receive the latest updates on new products and special promotions.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <Button className="rounded-l-none text-sm">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
