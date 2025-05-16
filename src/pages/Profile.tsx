
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingBag, Heart, Settings, User } from "lucide-react";

const Profile = () => {
  // Mock data for orders
  const orders = [
    { 
      id: "ORD-2024-001", 
      date: "May 10, 2024", 
      status: "Delivered", 
      total: "$127.95",
      items: [
        { name: "Luminous Foundation", quantity: 1, price: "$42.00" },
        { name: "Hydrating Serum", quantity: 1, price: "$58.00" },
        { name: "Shipping", price: "$5.99" },
        { name: "Tax", price: "$21.96" }
      ]
    },
    { 
      id: "ORD-2024-002", 
      date: "Apr 25, 2024", 
      status: "Delivered", 
      total: "$68.45",
      items: [
        { name: "Volumizing Mascara", quantity: 1, price: "$26.00" },
        { name: "Lip Enhancer", quantity: 1, price: "$34.00" },
        { name: "Shipping", price: "$0.00" },
        { name: "Tax", price: "$8.45" }
      ]
    }
  ];
  
  // Mock data for favorites
  const favorites = [
    { id: 1, name: "Hydrating Serum", price: "$58", image: "https://placehold.co/300x400/E5DEFF/403E43?text=Serum" },
    { id: 2, name: "Lip Enhancer", price: "$34", image: "https://placehold.co/300x400/FDE1D3/403E43?text=Lip+Care" },
    { id: 3, name: "Night Cream", price: "$45", image: "https://placehold.co/300x400/E5DEFF/403E43?text=Night+Cream" },
  ];

  return (
    <div className="pb-16 md:pb-0 px-4 py-6 animate-fade-in">
      {/* Login Status */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 bg-gray-100">
            <AvatarFallback className="text-gray-600">HB</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-medium">Welcome Back</h1>
            <p className="text-muted-foreground text-sm">Please sign in to view your profile</p>
          </div>
        </div>
      </div>
      
      <Card className="border rounded-lg shadow-sm mb-6">
        <CardContent className="p-5">
          <h2 className="text-xl font-medium mb-4">Sign In</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded border-gray-300" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              <a href="#" className="text-sm text-accent hover:underline">Forgot password?</a>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90">Sign In</Button>
          </form>
          
          <Separator className="my-5" />
          
          <div className="text-center">
            <p className="mb-3 text-sm">Don't have an account?</p>
            <Button variant="outline" className="w-full">Create Account</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Demo Content - Would normally show after login */}
      <div>
        <h2 className="text-xl font-serif mb-4">Demo Content</h2>
        
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 h-auto">
            <TabsTrigger value="orders" className="py-2 px-1">
              <div className="flex flex-col items-center gap-1 text-xs">
                <ShoppingBag className="h-4 w-4" />
                <span>Orders</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="py-2 px-1">
              <div className="flex flex-col items-center gap-1 text-xs">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="account" className="py-2 px-1">
              <div className="flex flex-col items-center gap-1 text-xs">
                <User className="h-4 w-4" />
                <span>Account</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="mt-0">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-medium text-sm">{order.id}</h3>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{order.total}</p>
                        <p className="text-xs font-medium text-green-600">{order.status}</p>
                      </div>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span>{item.name} {item.quantity ? `x${item.quantity}` : ""}</span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {favorites.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <p className="font-medium text-sm">{product.price}</p>
                      <Button variant="outline" size="sm" className="mt-2 w-full text-xs">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="account" className="mt-0">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-base font-medium mb-3">Account Information</h3>
                <form className="space-y-3">
                  <div>
                    <Label htmlFor="firstName" className="text-xs">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                    <Input
                      type="text"
                      id="lastName"
                    />
                  </div>
                  <div>
                    <Label htmlFor="profile-email" className="text-xs">Email</Label>
                    <Input
                      type="email"
                      id="profile-email"
                    />
                  </div>
                  <Button size="sm">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
