import { useState, useEffect, useRef } from "react";
import VideoBg from "./components/home/videobg";
import Navbar from "./components/navbar";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function App() {
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.9 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <VideoBg /> */}
      <Navbar />

      <div className="relative bg-gray-50" style={{ zIndex: "-1" }}>
        <section className="relative py-32 px-4 md:px-32 banner h-[170vh]">
          <div className="grid grid-cols-1 gap-6">
            <h1 className="text-[120px] uppercase leading-[120px] pt-28">
              <span className="font-light">Learn</span> <br />
              <span className="font-medium">
                <ReactTyped
                  strings={[
                    "tech",
                    "ui/ux",
                    "web development",
                  ]}
                  typeSpeed={80}
                  backSpeed={55}
                  loop
                  // className="text-xl text-blue-500 mt-2"
                />
              </span>
            </h1>
          </div>
        </section>

        <section className="bg-white relative py-32 px-4 md:px-32">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:leading-[50px]">
            Empowering you, one
            <br />
            step at a time. Your future <br />
            in tech{" "}
            <span
              ref={textRef}
              className={`slide-text ${inView ? "slide-in" : ""}`}
            >
              starts right here.
            </span>
          </h2>
          <p className="text-md md:text-[18px] w-[97%] md:w-[85%] text-gray-700 leading-[34px] my-8">
            Success in tech is built one line of code at a time. Our training
            program is designed to take you from where you are now to where you
            want to be, equipping you with in-demand skills and real-world
            experience. With expert-led courses and a supportive community, we
            help you turn knowledge into action and action into career growth.
          </p>

          <div className="w-auto inline-block">
            <Link
              to="/about"
              className="bg-red-600 text-white px-3 py-3 text-base flex items-center space-x-3 hover:bg-red-700 mt-2"
            >
              <span>About us</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </section>
      </div>

      {/* <h1 className="text-red-400">HEYYEY</h1> */}
    </>
  );
}

export default App;
