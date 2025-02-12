import React, { useState, useEffect } from "react";
import Student1 from "../../assets/images/student1.png";
import Student2 from "../../assets/images/student2.png";
import Student3 from "../../assets/images/student3.png";
import Class1 from "../../assets/images/class1.jpg";
import Class2 from "../../assets/images/class2.jpg";
import Class3 from "../../assets/images/class3.jpg";

const TestimonialsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    Class1,
    Class2,
    Class3,
  ];

  const testimonials = [
    {
      text: "The instructors at Digital Fortress are exceptional. Their hands-on approach to teaching tech concepts made complex topics easy to understand. I've grown tremendously as a developer during my time here.",
      author: "Sarah Johnson",
      avatar: Student1,
    },
    {
      text: "Joining Digital Fortress was the best career decision I've made. The curriculum is comprehensive and up-to-date with industry standards. I landed my dream job right after completing the program!",
      author: "Michael Chen",
      avatar: Student2,
    },
    {
      text: "What sets Digital Fortress apart is their focus on practical skills. The projects we worked on gave me real-world experience that I now use daily in my software engineering role.",
      author: "Alex Rivera",
      avatar: Student3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 py-16 mt-2">
        <div className="text-center mb-8">
            <h1 className="text-4xl mb-3 text-white font-semibold">Testimonials</h1>
            <p className="text-gray-500 text-sm">What our students say about us</p>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image Carousel */}
          <div className="relative h-[600px] overflow-hidden rounded-lg">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Student ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                {index > 0 && <div className="border-t border-white/10 my-6" />}
                <div className="space-y-4">
                  <p className="text-white/90 text-md italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="text-white font-medium">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;