import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from '../assets/images/class3.jpg';

const CourseCard = ({ id, image, title, description, duration, beginnerFriendly }) => {
  return (
    <div
      data-aos="fade-up"
      // data-aos-delay={aosDelay}
      className="bg-white rounded-md border border-gray-200 overflow-hidden w-full max-w-sm mx-auto h-full flex flex-col transform transition-transform duration-300"
    >
      <div className="relative w-full pt-[56.25%] bg-gray-100">
        <img
          // src={Image}
          src={image || "/api/placeholder/400/225"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-4 mb-3">
          {beginnerFriendly == true ? (
            <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
              Beginner Friendly
            </span>
          ): ""}
          <span className="text-gray-500 text-sm">{duration}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex gap-3">
            <button className="group flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-300">
              <span>Learn more</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <FaArrowRightLong className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;