import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import About1 from "../assets/images/about/about1.jpg";
import About2 from "../assets/images/about/about2.jpg";
import About3 from "../assets/images/about/about3.jpg";
import About4 from "../assets/images/about/about4.jpg";
import About5 from "../assets/images/about/about5.jpg";
import About6 from "../assets/images/about/about6.jpg";
import About7 from "../assets/images/class3.jpg";
import About8 from "../assets/images/dfi-counsellor2.png";
import About9 from "../assets/images/hero-dfi.png";
import Heart from "../assets/images/laptop.png";

const images = [
  About1,
  About2,
  //   About3,
  About4,
  About5,
  About9,
  About6,
  About7,
  About8,
];

const gridImages = [
  {
    src: About4,
    alt: "DFI Image 1",
    className: "col-span-2 h-64",
  },
  {
    src: About5,
    alt: "DFI Image 2",
    className: "col-span-1 h-64",
  },
  {
    src: About6,
    alt: "DFI Image 3",
    className: "col-span-1 h-64",
  },
  {
    src: About7,
    alt: "DFI Image 4",
    className: "col-span-2 h-64",
  },
];

const About = () => {
    // const [currentImage, setCurrentImage] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentImage((prevIndex) =>
    //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    //   }, 700);

    //   return () => clearInterval(interval);
    // }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-28 md:pt-52 px-8 items-center">
          <h1 className="text-3xl md:text-5xl font-semibold md:font-normal mb-2 md:mb-0">
            {/* About Digital Fortress */}
            <ReactTyped
              strings={["About Digital Fortress..."]}
              typeSpeed={120}
            />
          </h1>
          <p className="text-sm md:text-lg md:text-right">
            The Leading Global Talent Development Corporation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full">
            <img
              src={About2}
              alt="about hero"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-slate-900 text-white py-16 px-4 md:px-12">
            <h1 data-aos="fade-up" className="text-3xl font-semibold mb-6">
              Established in 1981.
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="space-y-8 text-white text-base font-normal leading-[26px]"
            >
              <p>
                Digital Fortress Limited opened for business officially in July
                2006 in GRA Ikeja. With a parent company based in the United
                Kingdom, ForteSoft opened with a vision for the development of
                the ICT industry in Nigeria.
              </p>
              <p>
                While the aim is the development of new technology aimed for our
                peculiar environment, we recognized the need for developing a
                workforce capable of using current technology and the need for
                improvements in training methodology for ICT products in this
                environment.
              </p>
              <p>
                With this in mind we decided to tie up as a franchise partner
                with an international ICT training organization with pedigree
                and wherewithal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-28 flex justify-center pt-44 relative">
        <div>
          <h1 className="text-4xl text-red-500 w-full md:text-8xl text-center font-light absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            About Digital Fortress
          </h1>

          <div className="w-full h-[400px] md:h-[530px] md:w-[380px] mx-auto overflow-hidden">
            <img
              src={images[currentImage]}
              alt="Slideshow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}

      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        <div
          data-aos="fade-up"
          className="text-2xl md:text-4xl font-medium leading-9 md:leading-16"
        >
          <h1>
            Growing from there, we now have well equipped and fully operational
            training centres all over Lagos, placing an emphasis on the future
            generation workforce of this great nation.{" "}
            <img
              src={Heart}
              alt="heart"
              className="inline h-8 md:h-12 animated-heart"
            />
          </h1>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Guiding principles that drive us forward.
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-12">
            <div className="group relative">
              <div className="absolute inset-0 rounded-lg transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={About1}
                      alt="Students learning"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="px-8 pt-4 pb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Mission
                      </h3>
                    </div>
                    <div className="space-y-3 text-gray-600 leading-relaxed">
                      <p>
                        At Digital Fortress Limited, our mission is to empower
                        individuals and organizations with innovative learning
                        solutions that inspire growth, enhance skills, and drive
                        success.
                      </p>

                      <p>
                        We are committed to bridging the global talent gap by
                        delivering world-class training and development programs
                        tailored to meet the evolving needs of the digital age.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-lg transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={About7}
                      alt="Future of learning"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="px-8 pt-4 pb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Vision
                      </h3>
                    </div>
                    <div className="space-y-3 text-gray-600 leading-relaxed">
                      <p>
                        To be the leading global catalyst for skills
                        transformation, shaping the future of learning and
                        talent development.
                      </p>
                      <p>
                        We envision a world where every individual has access to
                        the knowledge and opportunities needed to thrive in a
                        rapidly changing digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First row */}
          <div className="md:col-span-2 overflow-hidden rounded-lg">
            <img
              src={About4}
              alt="Company Image 1"
              className="w-full h-[340px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-lg">
            <img
              src={About5}
              alt="Company Image 2"
              className="w-full h-[340px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>

          {/* Second row */}
          <div className="col-span-1 overflow-hidden rounded-lg">
            <img
              src={About1}
              alt="Company Image 3"
              className="w-full h-[340px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-lg">
            <img
              src={About7}
              alt="Company Image 4"
              className="w-full h-[340px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Be part of a brand that values creativity, innovation, and
              excellence.
            </p>
            <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-indigo-50 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
