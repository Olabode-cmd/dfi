import { useState, useEffect, useRef } from "react";
// import VideoBg from "./components/home/videobg";
import Navbar from "./components/homenavbar";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

// import { ReactTyped } from "react-typed";

import Plus from './assets/images/plus-icon.png'
import { HiUsers } from "react-icons/hi2";
import { FaBookOpen, FaPhone } from "react-icons/fa";
import VideoScrollEffect from "./components/gasp-home";
// import Calendar from './assets/images/calendar.svg'

// Images
import HeroDFI from './assets/images/hero-dfi.png';
import Arrow from './assets/images/arrow.png'
import Student1 from './assets/images/student1.png'
import Student2 from './assets/images/student2.png'
import Student3 from './assets/images/student3.png'
import Heart from './assets/images/valentine.png';
import ShapePurple from './assets/images/shape-purple.svg'
import Class1 from './assets/images/class1.jpg'
import Class2 from './assets/images/class2.jpg'
import Class3 from './assets/images/class3.jpg'


import CourseCard from "./components/course-card";


function App() {
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

  const courses = [
    {
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Web Development",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Data Analytics",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const audiences = [
    {
      title: "Startups",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Enterprises",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Entrepreneurs",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

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

      <div className="relative bg-hero">
        <section className="relative py-16 md:pb-24 md:pt-16 px-8 md:px-2 md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-28">
            <div>
              <div data-aos="fade-up" className="mb-6 mt-4">
                <p className="text-sm uppercase text-red-500 bg-[#fff6f6] rounded-2xl px-2.5 py-1.5 inline">
                  Digital Fortress{" "}
                  <span className="text-blue-500 text-xl">&#x2022; </span> 2025
                </p>
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-5xl md:text-[75px] leading-[40px] md:leading-[80px]"
              >
                <span className="">
                  Learn <span className="text-red-500">Tech</span>
                  <span className="text-blue-500">.</span>
                </span>{" "}
                <br />
                <span className="">
                  {/* <ReactTyped
                  strings={[
                    "tech",
                    "ui/ux",
                    "web development",
                  ]}
                  typeSpeed={80}
                  backSpeed={55}
                  loop
                /> */}
                  Learn Smart
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="my-5 text-sm md:text-[17px] text-slate-900"
              >
                We equip learners with the skills to build real-world software
                solutions. <br className="hidden md:inline-block" />
                Our hands-on approach ensures you stay ahead in tech.
              </p>

              <div
                className="my-8 flex space-x-3 items-center"
                // data-aos="fade-up"
              >
                <div className="flex items-center">
                  <img src={Student1} alt="student 1" className="w-12" />
                  <img src={Student2} alt="student 2" className="w-12" />
                  <img src={Student3} alt="student 3" className="w-12" />
                </div>

                <h1 className="font-medium text-md">
                  More than 500 graduates annually.
                </h1>
              </div>

              <div className="relative mt-6">
                <button className="flex items-center text-white px-5 py-3 rounded-md space-x-3 bg-red-500 hover:bg-blue-600 duration-200">
                  <span>Explore courses</span>
                  <FaArrowRightLong className="w-8" />
                </button>

                <img
                  // data-aos="fade-right"
                  src={Arrow}
                  alt="arrow"
                  className="w-[120px] md:w-[180px] scale-x-[-1] absolute left-[40%] top-[-55px]"
                />
              </div>
            </div>

            <div className="flex justify-center md:justify-end relative">
              <img
                src={HeroDFI}
                alt="heroimg"
                className="w-[80%]"
                data-aos="fade-up"
              />
              <img
                src={Heart}
                alt="heart"
                className="w-[65px] absolute -top-3 left-[15%] float"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>

          {/* <img
              src={Plus}
              alt="plus icon"
              className="w-[90px] md:w-[200px] absolute left-[8%] top-[24%] -z-1"
            /> */}
        </section>

        <section className="pt-16 pb-32 bg-slate-900 text-white relative overflow-hidden">
          <img
            src={ShapePurple}
            alt="shape"
            className="-top-10 w-[180px] -right-10 absolute"
          />
          <h1 className="text-lg text-center" data-aos="fade-up">
            We've helped over 700+ students worldwide build a career in tech.
          </h1>
        </section>

        {/* SECTION COURSES */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-5">Our Courses</h1>
            <p className="text-base text-gray-500">
              Providing aspiring professionals with the tools and materials they
              need to <br /> explore and develop in their chosen fields.
            </p>
          </div>

          <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-3">
            <CourseCard
              title="Product Design"
              description="lorem ipsmu jschjds fdjd k fdjsf d bfdsfy duscdfhbd hsdhdf djsf"
              image={Class1}
            />

            <CourseCard
              title="Frontend Web Development"
              description="lorem ipsmu jschjds fdjd k fdjsf d bfdsfy duscdfhbd hsdhdf djsf ipsmu jschjds fdjd k fdjsf d bfdsfy duscdfhbd "
              image={Class2}
            />

            <CourseCard
              title="Python for Beginners"
              description="lorem ipsmu jschjds fdjd jschjds fdjd k fdjsf d bfdsfy duscdfhbd "
              image={Class3}
            />
          </div>
        </section>

        <div className="">
          <section className="bg-white/85 relative py-24 px-4 md:px-32">
            <h2 className="text-[28px] md:text-[33px] font-semibold mb-4 md:leading-[50px]">
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
            <p className="text-[14px] md:text-[16px] w-[97%] md:w-[85%] text-gray-700 leading-[34px] my-8">
              Success in tech is built one line of code at a time. Our training
              program is designed to take you from where you are now to where
              you want to be, equipping you with in-demand skills and real-world
              experience. With expert-led courses and a supportive community, we
              help you turn knowledge into action and action into career growth.
            </p>

            <div className="w-auto inline-block">
              <Link
                to="/about"
                className="pr-3 pb-1.5 text-base flex items-center space-x-3 text-red-500 border-b border-red-500 cursor-pointer"
              >
                <span>About us</span>
                <FaArrowRightLong />
              </Link>
            </div>
          </section>
        </div>

        {/* <VideoScrollEffect /> */}

        {/* Who We Serve Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center space-x-2 mb-2">
              <HiUsers className="w-5 h-5 text-red-500" />
              <p className="text-red-500 font-medium">Our Audience</p>
            </div>
            <h2 className="text-4xl font-bold mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{audience.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-red-500 border-b border-red-500"
                  >
                    <span>Learn more</span>
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 px-4 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 rounded-lg">
              <h1 className="text-red-500">Welcome to DFI</h1>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="border-2 border-gray-700 bg-white rounded-lg flex flex-col justify-between">
                <div className="pt-4 px-3 mb-6">
                  <h1 className="text-3xl md:text-5xl font-semibold">15</h1>
                  <p className="text-gray-500 text-base mt-2">
                    Years of experience
                  </p>
                </div>
                {/* <img src={Calendar} alt="calendar svg" /> */}
              </div>

              <div className="border-2 border-gray-700 bg-white rounded-lg flex flex-col justify-between">
                <div className="pt-4 px-3 mb-6">
                  <h1 className="text-3xl md:text-5xl font-semibold">521</h1>
                  <p className="text-gray-500 text-base mt-2">
                    Graduates annually
                  </p>
                </div>
                {/* <img src={Calendar} alt="calendar svg" /> */}
              </div>

              <div className="border-2 border-gray-700 bg-white rounded-lg flex flex-col justify-between">
                <div className="pt-4 px-3 mb-6">
                  <h1 className="text-3xl md:text-5xl font-semibold">6</h1>
                  <p className="text-gray-500 text-base mt-2">
                    Operational centers
                  </p>
                </div>
                {/* <img src={Calendar} alt="calendar svg" /> */}
              </div>

              <div className="border-2 border-gray-700 bg-white rounded-lg flex flex-col justify-between">
                <div className="pt-4 px-3 mb-6">
                  <h1 className="text-3xl md:text-5xl font-semibold">60</h1>
                  <p className="text-gray-500 text-base mt-2">
                    Placement partners
                  </p>
                </div>
                {/* <img src={Calendar} alt="calendar svg" /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center space-x-2 mb-2">
              <FaBookOpen className="w-5 h-5 text-red-500" />
              <p className="text-red-500 font-medium">Education</p>
            </div>
            <h2 className="text-4xl font-bold mb-12">Courses We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to={`/courses/${course.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="inline-flex items-center space-x-2 text-red-500 border-b border-red-500"
                  >
                    <span>View course</span>
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="w-5 h-5 text-red-500" />
              <p className="text-red-500 font-medium">Contact</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-400 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-red-500 border-b border-red-500"
                  >
                    <span>Schedule a call</span>
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <button className="inline-flex items-center space-x-2 text-red-500 border-b border-red-500">
                  <span>Send message</span>
                  <FaArrowRightLong className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* <h1 className="text-red-400">HEYYEY</h1> */}
    </>
  );
}

export default App;
