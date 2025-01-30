import React from "react";
import VideoBg from "../../assets/videos/hero-bg.mp4";
import Logo from '../../assets/images/dfi-logo.png'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const FixedVideoBackground = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
    });
  }, []);
  return (
    <>
      {/* Fixed video background - lowest z-index */}
      <div className="fixed top-0 -left-1 w-full h-screen overflow-hidden -z-10">
        <video
          className="absolute top-1/2 left-1/2 min-w-[100%] min-h-[100%] w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{backgroundPosition: 'right'}}
        >
          <source src={VideoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content wrapper - removed z-index to prevent new stacking context */}
      <div className="relative">
        {/* Hero section overlaying video */}
        <section className="h-screen flex items-center justify-center text-white relative">
          <div className="absolute left-2 md:left-12 top-2 text-left flex space-x-2 items-center">
            <img src={Logo} alt="Logo" className="w-28" />
            <div>
              <h3 className="font-bold text-sm md:text-lg uppercase">Learn tech.</h3>
              <h3 className="font-bold text-sm md:text-lg uppercase">
                Explore our courses
              </h3>
            </div>
          </div>
          <div className="absolute left-[5%] top-[15%] md:top-[35%]">
            <h3 className="text-5xl text-left font-light">
              Welcome to DFI
            </h3>
            <p className="text-lg pl-1 text-gray-300 mt-2 text-left font-light">
              Get the best of digital technology services from <br /> Training
              to Transformation
            </p>

            <button className="bg-red-600 text-white px-3 py-3 text-base flex items-center space-x-3 hover:bg-red-700 mt-6">
              <span>Explore courses</span>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="absolute bottom-3 left-6 right-6">
            <div className="text-xl md:text-4xl flex items-center justify-around capitalize w-full">
              <h1 className="font-medium mb-4">where</h1>
              <h1 className="font-medium mb-4">leaders</h1>
              <h1 className="font-medium mb-4">are</h1>
              <h1 className="font-medium mb-4">made</h1>
            </div>
          </div>
        </section>

        {/* Following section that scrolls over video but under navbar */}
      </div>
    </>
  );
};

export default FixedVideoBackground;