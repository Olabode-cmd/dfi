import React from "react";
import { MdOutlineEmojiObjects } from "react-icons/md";

const MarqueeSection = () => {
  const textItem = (
    <div className="flex items-center space-x-6">
      <span className="text-xl md:text-2xl font-medium">
        Learn Tech with Digital Fortress
      </span>
      <MdOutlineEmojiObjects className="w-6 h-6 text-red-600" />
    </div>
  );

  return (
    <div className="w-full bg-black py-4 text-white overflow-hidden">
      <div
        className="flex items-center space-x-8 whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 15s linear infinite",
        }}
      >
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>{textItem}</React.Fragment>
        ))}
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={`duplicate-${index}`}>{textItem}</React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeSection;