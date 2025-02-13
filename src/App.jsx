import { useState, useEffect, useRef } from "react";
// import VideoBg from "./components/home/videobg";
import Navbar from "./components/homenavbar";
import MarqueeSection from "./components/home/marqueelearn";
import TestimonialsSection from "./components/home/testimonials";
import Clients from "./components/home/clients";
import Footer from "./components/footer";
import CountUp from 'react-countup';
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

// import { ReactTyped } from "react-typed";

import { HiUsers } from "react-icons/hi2";
import { FaBookOpen, FaPhone } from "react-icons/fa";
// import Calendar from './assets/images/calendar.svg'

// Images
import HeroDFI from "./assets/images/hero-dfi.png";
import Arrow from "./assets/images/arrow.png";
import Student1 from "./assets/images/student1.png";
import Student2 from "./assets/images/student2.png";
import Student3 from "./assets/images/student3.png";
import Heart from "./assets/images/laptop.png";
import ShapePurple from "./assets/images/shape-purple.svg";
import Class1 from "./assets/images/class1.jpg";
import Class2 from "./assets/images/class2.jpg";
import Class3 from "./assets/images/class3.jpg";
import Instructors from "./assets/images/undraw-instructors.svg";
import Courses from "./assets/images/undraw-courses.svg";
import Certificate from "./assets/images/undraw-certificates.svg";
import Counsellor from './assets/images/dfi-counsellor.png'

import CourseCard from "./components/course-card";

function App() {
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const courses = [
    {
      title: "Digital Marketing",
      description:
        "In this course, you'll learn how to create effective online marketing strategies, optimize social media campaigns, and analyze digital marketing metrics to grow any business.",
      image: Class1,
      id: 1,
      duration: "12 weeks",
      beginnerFriendly: true,
    },
    {
      title: "Web Development",
      description:
        "This course is all about building responsive websites and dynamic web applications using HTML, CSS, JavaScript, and modern frameworks. You'll also learn best practices for front-end and back-end development.",
      image: Class2,
      id: 2,
      duration: "16 weeks",
      beginnerFriendly: false,
    },
    {
      title: "Data Analytics",
      description:
        "In this course, you'll master data analysis techniques, learn to visualize insights using popular tools, and make data-driven decisions to solve real-world problems.",
      image: Class3,
      id: 3,
      duration: "10 weeks",
      beginnerFriendly: true,
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
        <section className="relative py-16 md:pb-24 md:pt-16 px-8 md:px-0 md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-28">
            <div>
              <div data-aos="fade-up" className="mb-6 mt-4">
                <p className="text-sm uppercase text-red-500 bg-[#fff6f6] rounded-2xl px-2.5 py-1.5 inline">
                  Digital Fortress{" "}
                  <span className="text-blue-500 text-xl">&#x2022;</span> 2025
                </p>
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-5xl md:text-[75px] leading-[60px] md:leading-[80px]"
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
                className="my-8 flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:items-center"
                // data-aos="fade-up"
              >
                <div className="flex items-center">
                  <img src={Student1} alt="student 1" className="w-12" />
                  <img src={Student2} alt="student 2" className="w-12" />
                  <img src={Student3} alt="student 3" className="w-12" />
                </div>

                <h1 className="font-medium text-sm md:text-md">
                  More than 500 graduates annually.
                </h1>
              </div>

              <div className="relative mt-6">
                <button className="flex items-center text-white text-sm md:text-base px-3 md:px-5 py-3 rounded-md space-x-3 bg-red-500 hover:bg-blue-600 duration-200">
                  <span>Explore courses</span>
                  <FaArrowRightLong className="w-8" />
                </button>

                <img
                  // data-aos="fade-right"
                  src={Arrow}
                  alt="arrow"
                  className="w-[120px] md:w-[180px] scale-x-[-1] absolute left-[65%] top-[-30px] md:left-[40%] md:top-[-55px]"
                />
              </div>
            </div>

            <div className="md:flex justify-center md:justify-end relative hidden">
              <img
                src={HeroDFI}
                alt="heroimg"
                className="w-[80%] rounded-md shade-img"
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

        <section
          className="py-10 bg-slate-900 text-white relative overflow-hidden px-8"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <img
            src={ShapePurple}
            alt="shape"
            className="-top-10 w-[180px] -right-10 absolute z-10 hidden md:inline-block"
          />
          <h1 className="text-md md:text-xl text-center">
            We've helped over 700+ students worldwide build a career in tech.
          </h1>
        </section>

        {/* WHY DFI */}
        <section className="px-4 py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-left" data-aos="fade-up">
              <h3 className="text-sm font-medium uppercase text-gray-500">
                Why Digital Fortress?
              </h3>
              <h1 className="text-3xl md:text-5xl mt-4 font-semibold leading-[35px] md:leading-[55px]">
                Things that set us apart
                <br className="hidden md:block" /> from the others
              </h1>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                data-aos="fade-up"
                className="bg-white px-5 py-8 border-2 border-slate-900 flex flex-col space-y-3 rounded-md"
              >
                <img
                  src={Instructors}
                  alt="instructors"
                  className="h-[180px]"
                />

                <div className="content">
                  <h1 className="text-2xl font-bold my-4">
                    Expert Instructors
                  </h1>

                  <p className="text-md md:text-lg leading-7 text-gray-500">
                    Learn from industry professionals with years of experience.
                    Our expert instructors provide valuable insights, practical
                    strategies, and dedicated support to help you succeed.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white px-5 py-8 border-2 border-slate-900 flex flex-col-reverse md:flex-col space-y-3 rounded-md"
              >
                <div className="content">
                  <h1 className="text-2xl font-bold my-4 md:mb-4 md:mt-0">
                    Great Courses
                  </h1>

                  <p className="text-md md:text-lg leading-7 text-gray-500">
                    Gain practical skills with our expertly designed courses.
                    Whether you're upskilling or switching careers, our content
                    is engaging, hands-on, and tailored for real-world
                    application.
                  </p>
                </div>

                <img
                  src={Courses}
                  alt="courses"
                  className="h-[180px] md:mt-4"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white px-5 py-8 border-2 border-slate-900 flex flex-col space-y-3 rounded-md"
              >
                <img src={Certificate} alt="courses" className="h-[180px]" />

                <div className="content">
                  <h1 className="text-2xl font-bold my-4">
                    Trusted Cetificates
                  </h1>

                  <p className="text-md md:text-lg leading-7 text-gray-500">
                    Boost your career with recognized certifications. Our
                    certificates showcase your expertise and are trusted by
                    employers, giving you a competitive edge in the job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION COURSES */}
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-32">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-5">
              Our Most Popular Courses
            </h1>
            <p className="text-sm md:text-base text-gray-500">
              Providing aspiring professionals with the tools and materials they
              need to <br className="hidden md:inline-block" /> explore and
              develop in their chosen fields.
            </p>
          </div>

          <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                id={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                duration={course.duration}
                beginnerFriendly={course.beginnerFriendly}
                // aosDelay={index * 200}
              />
            ))}
          </div>

          <div className="flex items-center justify-center mt-10">
            <button className="flex items-center text-sm text-white px-3 py-2.5 rounded-md space-x-2 bg-red-500 hover:bg-red-600 duration-200">
              <span>View all courses</span>
              <FaArrowRightLong className="w-8" />
            </button>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="bg-slate-900 pt-24 pb-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div data-aos="fade-up" className="relative">
                <div className="w-[75%] md:w-[65%] rounded-lg bg-red-500 border-[10px] border-red-500 -translate-y-40 -rotate-[6deg]">
                  <img
                    src={Counsellor}
                    alt="dfi counsellor"
                    className="w-full !rounded-lg -rotate-[1deg]"
                  />
                </div>
              </div>
              <div data-aos="fade-right">
                <h1 className="text-2xl md:text-[44px] text-white font-semibold mb-4 -mt-24 md:mt-0">
                  We help our students <br /> learn, grow and succeed.
                </h1>
                <p className="text-sm md:text-md text-slate-300">
                  Digital Fortress provides comprehensive education and support
                  to help you reach your full potential. Our mission is to
                  transform your passion for learning into valuable skills and
                  successful careers with high-quality courses and expert
                  guidance.
                </p>

                <div className="grid grid-cols-3 text-center py-16">
                  <div>
                    <h1 className="text-3xl md:text-5xl text-white mb-2 font-bold">
                      <CountUp key={key} start={0} end={15} duration={4} />+
                    </h1>
                    <p className="text-slate-500 text-sm">
                      Years of experience
                    </p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-5xl text-white mb-2 font-bold">
                      <CountUp key={key + 1} start={0} end={521} duration={4} />
                    </h1>
                    <p className="text-slate-500 text-sm">Graduates annually</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-5xl text-white mb-2 font-bold">
                      <CountUp key={key + 2} start={0} end={6} duration={4} />
                    </h1>
                    <p className="text-slate-500 text-sm">
                      Operational centers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeSection />

        <div className="">
          <section className="bg-white/85 relative py-24 px-4 md:px-32">
            <h2 className="text-[28px] md:text-[33px] font-semibold mb-4 md:leading-[50px]">
              Empowering you, one
              <br className="hidden md:inline-block" />
              step at a time. Your future{" "}
              <br className="hidden md:inline-block" />
              in tech{" "}
              <span
                ref={textRef}
                className={`slide-text ${inView ? "slide-in" : ""}`}
              >
                starts right here.
              </span>
            </h2>
            <p className="text-[14px] md:text-[16px] w-[97%] md:w-[85%] text-gray-700 leading-[24px] md:leading-[34px] my-8">
              Success in tech is built one line of code at a time. Our training
              program is designed to take you from where you are now to where
              you want to be, equipping you with in-demand skills and real-world
              experience. With expert-led courses and a supportive community, we
              help you turn knowledge into action and action into career growth.
            </p>
          </section>
        </div>

        <div className="max-w-6xl mx-auto px-5 pb-1">
          <h1 className="text-2xl font-semibold">Trusted Partners</h1>
        </div>
        <Clients />

        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
