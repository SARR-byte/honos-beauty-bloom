
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Shop = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  
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
    <div className="pb-16 animate-fade-in px-3 sm:px-4 md:pb-0 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Shop All</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="overflow-x-auto mb-4">
          <TabsList className="w-full inline-flex whitespace-nowrap">
            <TabsTrigger value="all" className="text-xs sm:text-sm">All</TabsTrigger>
            <TabsTrigger value="makeup" className="text-xs sm:text-sm">Makeup</TabsTrigger>
            <TabsTrigger value="skincare" className="text-xs sm:text-sm">Skincare</TabsTrigger>
            <TabsTrigger value="fragrance" className="text-xs sm:text-sm">Fragrance</TabsTrigger>
            <TabsTrigger value="hair" className="text-xs sm:text-sm">Hair</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile filters - Popover implementation */}
          <div className="md:hidden mb-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="w-full flex justify-between">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>Filters</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-4 bg-white" align="start">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-sm mb-3">Price Range</h3>
                    <Slider defaultValue={[0, 100]} max={200} step={1} />
                    <div className="flex justify-between mt-2 text-xs">
                      <span>$0</span>
                      <span>$200+</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-sm mb-3">Categories</h3>
                    <RadioGroup className="space-y-2">
                      {categories.map((category) => (
                        <div className="flex items-center space-x-2" key={category}>
                          <RadioGroupItem value={category.toLowerCase()} id={`mobile-${category.toLowerCase()}`} />
                          <Label htmlFor={`mobile-${category.toLowerCase()}`} className="text-sm">{category}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-sm mb-3">Product Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile-new-arrivals" />
                        <Label htmlFor="mobile-new-arrivals" className="text-sm">New Arrivals</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile-best-sellers" />
                        <Label htmlFor="mobile-best-sellers" className="text-sm">Best Sellers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile-on-sale" />
                        <Label htmlFor="mobile-on-sale" className="text-sm">On Sale</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Desktop Filters - Only visible on desktop */}
          <div className="hidden md:block w-56 shrink-0">
            <div className="space-y-5">
              <div>
                <h3 className="font-medium text-sm mb-3">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={200} step={1} />
                <div className="flex justify-between mt-2 text-xs">
                  <span>$0</span>
                  <span>$200+</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium text-sm mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div className="flex items-center space-x-2" key={category}>
                      <Checkbox id={category.toLowerCase()} />
                      <Label htmlFor={category.toLowerCase()} className="text-sm">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium text-sm mb-3">Product Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="new-arrivals" />
                    <Label htmlFor="new-arrivals" className="text-sm">New Arrivals</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="best-sellers" />
                    <Label htmlFor="best-sellers" className="text-sm">Best Sellers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="on-sale" />
                    <Label htmlFor="on-sale" className="text-sm">On Sale</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid - Main Content */}
          <div className="flex-1">
            <TabsContent value="all" className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-2 sm:p-4">
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                      <h3 className="font-medium text-sm mt-1">{product.name}</h3>
                      <p className="font-medium text-sm mt-1">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="makeup" className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
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
                      <div className="p-2 sm:p-4">
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <h3 className="font-medium text-sm mt-1">{product.name}</h3>
                        <p className="font-medium text-sm mt-1">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="skincare" className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
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
                      <div className="p-2 sm:p-4">
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <h3 className="font-medium text-sm mt-1">{product.name}</h3>
                        <p className="font-medium text-sm mt-1">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="fragrance" className="mt-0">
              <div className="flex items-center justify-center h-40 sm:h-64">
                <p className="text-sm text-muted-foreground">No fragrance products available yet</p>
              </div>
            </TabsContent>
            
            <TabsContent value="hair" className="mt-0">
              <div className="flex items-center justify-center h-40 sm:h-64">
                <p className="text-sm text-muted-foreground">No hair products available yet</p>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Shop;
