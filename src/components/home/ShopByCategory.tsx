
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  url: string;
}

const ShopByCategory = () => {
  const categories: CategoryItem[] = [
    {
      id: "skincare",
      name: "Skincare",
      image: "https://placehold.co/300x300/F6F6F7/403E43?text=Skincare",
      url: "/shop?category=skincare"
    },
    {
      id: "featured",
      name: "Featured",
      image: "https://placehold.co/300x300/E5DEFF/403E43?text=Featured",
      url: "/shop?category=featured"
    },
    {
      id: "body-hair",
      name: "Body & Hair Care",
      image: "https://placehold.co/300x300/FDE1D3/403E43?text=Body+%26+Hair",
      url: "/shop?category=body-hair"
    },
    {
      id: "makeup",
      name: "Makeup",
      image: "https://placehold.co/300x300/F6F6F7/403E43?text=Makeup",
      url: "/shop?category=makeup"
    },
    {
      id: "concern",
      name: "Skincare by concern",
      image: "https://placehold.co/300x300/E5DEFF/403E43?text=By+Concern",
      url: "/shop?category=concern"
    }
  ];

  return (
    <div className="py-8 px-4 bg-muted">
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-6 text-honos-blue">Shop by Category</h2>
      
      <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 md:justify-center scrollbar-none">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center min-w-[120px] md:min-w-[150px]">
            <Link 
              to={category.url} 
              className="transition-transform hover:scale-105 w-full"
            >
              <div className="rounded-full overflow-hidden border-2 border-white shadow-sm mb-2">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-center text-sm font-medium">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
