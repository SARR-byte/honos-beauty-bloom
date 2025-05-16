
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Shop = () => {
  // Mock data for products
  const products = [
    { id: 1, name: "Luminous Foundation", price: "$42", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43?text=Foundation" },
    { id: 2, name: "Hydrating Serum", price: "$58", category: "Skincare", image: "https://placehold.co/300x400/E5DEFF/403E43?text=Serum" },
    { id: 3, name: "Volumizing Mascara", price: "$26", category: "Makeup", image: "https://placehold.co/300x400/F6F6F7/403E43?text=Mascara" },
    { id: 4, name: "Lip Enhancer", price: "$34", category: "Makeup", image: "https://placehold.co/300x400/FDE1D3/403E43?text=Lip+Care" },
    { id: 5, name: "Night Cream", price: "$45", category: "Skincare", image: "https://placehold.co/300x400/E5DEFF/403E43?text=Night+Cream" },
    { id: 6, name: "Eyeshadow Palette", price: "$52", category: "Makeup", image: "https://placehold.co/300x400/F6F6F7/403E43?text=Eyeshadow" },
  ];

  // Categories for filtering
  const categories = ["Makeup", "Skincare", "Fragrance", "Hair", "Tools"];
  
  return (
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      <h1 className="text-3xl font-serif mb-6">Shop All</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-auto mb-8 overflow-x-auto flex-nowrap">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="makeup">Makeup</TabsTrigger>
          <TabsTrigger value="skincare">Skincare</TabsTrigger>
          <TabsTrigger value="fragrance">Fragrance</TabsTrigger>
          <TabsTrigger value="hair">Hair</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Only visible on desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={200} step={1} />
                <div className="flex justify-between mt-2 text-sm">
                  <span>$0</span>
                  <span>$200+</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div className="flex items-center space-x-2" key={category}>
                      <Checkbox id={category.toLowerCase()} />
                      <Label htmlFor={category.toLowerCase()}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-4">Product Type</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="new-arrivals" />
                    <Label htmlFor="new-arrivals">New Arrivals</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="best-sellers" />
                    <Label htmlFor="best-sellers">Best Sellers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="on-sale" />
                    <Label htmlFor="on-sale">On Sale</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid - Main Content */}
          <div className="flex-1">
            <TabsContent value="all" className="mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <h3 className="font-medium mt-1">{product.name}</h3>
                      <p className="font-medium mt-1">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="makeup" className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
              {products
                .filter((product) => product.category === "Makeup")
                .map((product) => (
                  <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <h3 className="font-medium mt-1">{product.name}</h3>
                        <p className="font-medium mt-1">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="skincare" className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
              {products
                .filter((product) => product.category === "Skincare")
                .map((product) => (
                  <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <h3 className="font-medium mt-1">{product.name}</h3>
                        <p className="font-medium mt-1">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="fragrance" className="mt-0">
              <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">No fragrance products available yet</p>
              </div>
            </TabsContent>
            
            <TabsContent value="hair" className="mt-0">
              <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">No hair products available yet</p>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Shop;
