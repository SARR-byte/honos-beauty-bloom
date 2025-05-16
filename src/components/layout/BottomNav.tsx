
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Percent, User, Gallery } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/shop", label: "Shop", icon: ShoppingBag },
    { path: "/offers", label: "Offers", icon: Percent },
    { path: "/gallery", label: "Gallery", icon: Gallery },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t">
      <div className="grid grid-cols-5">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center py-2"
            >
              <item.icon
                className={cn(
                  "h-5 w-5 mb-1",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "text-xs",
                  isActive ? "text-accent font-medium" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
