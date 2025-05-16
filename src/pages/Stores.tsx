
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";

const Stores = () => {
  // Mock data for store locations
  const stores = [
    {
      id: 1,
      name: "Honos Beauty Flagship",
      address: "123 Fifth Avenue",
      city: "New York",
      state: "NY",
      zip: "10003",
      phone: "(212) 555-1234",
      hours: "Mon-Sat: 10am-9pm, Sun: 11am-7pm",
      image: "https://placehold.co/800x400/FDE1D3/403E43?text=NY+Store"
    },
    {
      id: 2,
      name: "Honos Beauty LA",
      address: "456 Rodeo Drive",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      phone: "(310) 555-5678",
      hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
      image: "https://placehold.co/800x400/E5DEFF/403E43?text=LA+Store"
    },
    {
      id: 3,
      name: "Honos Beauty Chicago",
      address: "789 Michigan Avenue",
      city: "Chicago",
      state: "IL",
      zip: "60611",
      phone: "(312) 555-9012",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
      image: "https://placehold.co/800x400/F6F6F7/403E43?text=Chicago+Store"
    },
    {
      id: 4,
      name: "Honos Beauty Miami",
      address: "321 Collins Avenue",
      city: "Miami",
      state: "FL",
      zip: "33139",
      phone: "(305) 555-3456",
      hours: "Mon-Sun: 10am-10pm",
      image: "https://placehold.co/800x400/FDE1D3/403E43?text=Miami+Store"
    }
  ];

  return (
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      <h1 className="text-3xl font-serif mb-2">Find a Store</h1>
      <p className="text-muted-foreground mb-8">Visit one of our stores for a personalized beauty experience</p>
      
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="w-full md:w-auto mb-8">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-0">
          <div className="space-y-6">
            {stores.map((store) => (
              <Card key={store.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h2 className="text-xl font-medium mb-2">{store.name}</h2>
                      <div className="space-y-2 mb-4">
                        <p>{store.address}</p>
                        <p>{store.city}, {store.state} {store.zip}</p>
                        <p>Phone: {store.phone}</p>
                        <p className="text-sm text-muted-foreground">{store.hours}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Get Directions</span>
                        </Button>
                        <Button size="sm">Book Appointment</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="map" className="mt-0">
          <Card>
            <CardContent className="p-0 aspect-[16/9]">
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-muted-foreground">Map would display store locations here</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 space-y-2">
            {stores.map((store) => (
              <div key={store.id} className="p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <h3 className="font-medium">{store.name}</h3>
                <p className="text-sm text-muted-foreground">{store.address}, {store.city}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 mb-12 text-center">
        <h2 className="text-2xl font-serif mb-4">Book an In-Store Consultation</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Schedule a personalized beauty consultation with one of our beauty experts.
        </p>
        <Button size="lg">Book Now</Button>
      </div>
    </div>
  );
};

export default Stores;
