
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import Stores from "./pages/Stores";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";
import MobileFrame from "./components/layout/MobileFrame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MobileFrame>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <BottomNav />
        </MobileFrame>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
