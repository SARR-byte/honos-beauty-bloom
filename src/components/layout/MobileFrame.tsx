
import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
}

const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-50"></div>
        
        {/* Content Container */}
        <div className="h-full overflow-y-auto scrollbar-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
