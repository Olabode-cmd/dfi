import React from "react";
import Google from "../../assets/images/logos/google.png";
import Microsoft from "../../assets/images/logos/microsoft_partner.svg";
import ICDL from "../../assets/images/logos/icdl.jpg";
import Pearson from "../../assets/images/logos/pearson-vue.jpg";
import Cisco from "../../assets/images/logos/cisco.png";
import HP from "../../assets/images/logos/hp-partner.png";
import Java from "../../assets/images/logos/java.png";
import Middlesex from "../../assets/images/logos/middlesex.png";

const logos = [Google, Microsoft, ICDL, Pearson, Cisco, HP, Java, Middlesex];

const Clients = () => {
  return (
    <div className="w-full overflow-hidden pt-4 pb-4">
      <div
        className="flex items-center space-x-12 whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Client Logo"
            className="h-16 object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt="Client Logo"
            className="h-16 object-contain"
          />
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

export default Clients;
