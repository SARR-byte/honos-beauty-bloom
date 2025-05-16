
import React from "react";
import { Link } from "react-router-dom";
import { User, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="mr-8">
          <h1 className="text-xl font-serif font-medium">
            <span className="text-accent">Honos</span> Beauty
          </h1>
        </Link>
        
        <div className="flex-1">
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium transition-colors hover:text-accent">
              Shop
            </Link>
            <Link to="/offers" className="text-sm font-medium transition-colors hover:text-accent">
              Offers
            </Link>
            <Link to="/gallery" className="text-sm font-medium transition-colors hover:text-accent">
              Gallery
            </Link>
            <Link to="/stores" className="text-sm font-medium transition-colors hover:text-accent">
              Stores
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
