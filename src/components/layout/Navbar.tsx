
import React from "react";
import { Link } from "react-router-dom";
import { User, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <Link to="/" className="mr-auto">
          <h1 className="text-lg font-serif font-medium">
            <span className="text-accent">Honos</span> Beauty
          </h1>
        </Link>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Search className="h-4 w-4" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute top-0.5 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[10px] text-white">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
