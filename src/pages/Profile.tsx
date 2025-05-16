
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
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
    <div className="honos-container pb-16 md:pb-0 animate-fade-in">
      {/* Login Status */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-muted">HB</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-medium">Welcome Back</h1>
            <p className="text-muted-foreground">Please sign in to view your profile</p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="********"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-sm text-accent hover:underline">Forgot password?</a>
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
            
            <Separator className="my-6" />
            
            <div className="text-center">
              <p className="mb-4">Don't have an account?</p>
              <Button variant="outline" className="w-full">Create Account</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Demo Content - Would normally show after login */}
        <div className="mt-8">
          <h2 className="text-xl font-serif mb-6">Demo Content</h2>
          
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="w-full md:w-auto mb-6">
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span>Orders</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders" className="mt-0">
              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="font-medium">{order.id}</h3>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.total}</p>
                          <p className="text-sm font-medium text-green-600">{order.status}</p>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} {item.quantity ? `x${item.quantity}` : ""}</span>
                            <span>{item.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">Order Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {favorites.map((product) => (
                  <Card key={product.id} className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium mt-1">{product.name}</h3>
                        <p className="font-medium mt-1">{product.price}</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
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
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Account Information</h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">Email</label>
                      <input
                        type="email"
                        id="profile-email"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive emails about new products and offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Updates</p>
                        <p className="text-sm text-muted-foreground">Get text messages for order updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Button variant="destructive">Sign Out</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
