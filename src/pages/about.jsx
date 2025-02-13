import React, { useEffect, useState } from "react";
import About1 from "../assets/images/about/about1.jpg";
import About2 from "../assets/images/about/about2.jpg";
import About3 from "../assets/images/about/about3.jpg";
import About4 from "../assets/images/about/about4.jpg";
import About5 from "../assets/images/about/about5.jpg";
import About6 from "../assets/images/about/about6.jpg";
import About7 from "../assets/images/class3.jpg";
import About8 from "../assets/images/dfi-counsellor2.png";
import About9 from "../assets/images/hero-dfi.png";

const images = [
  About1,
  About2,
//   About3,
  About4,
  About5,
  About6,
  About7,
  About8,
  About9,
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 700);

      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <section className="min-h-screen">
        <div className="w-full h-[400px] md:h-[400px] md:w-[400px] overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
