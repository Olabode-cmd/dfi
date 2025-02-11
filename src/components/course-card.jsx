import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden w-full max-w-sm h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
      <div className="relative w-full pt-[56.25%] bg-gray-100">
        <img
          src={image || "/api/placeholder/400/225"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        {/* Course Level & Duration - inspired by tech bootcamps */}
        <div className="flex items-center gap-4 mb-3">
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
            Beginner Friendly
          </span>
          <span className="text-gray-500 text-sm">8 weeks</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto">
          {/* Progress Bar - common in online learning platforms */}
          {/* <div className="w-full h-1 bg-gray-100 rounded-full mb-4">
            <div className="w-12 h-full bg-blue-500 rounded-full transition-all duration-300 hover:w-full" />
          </div> */}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center text-sm text-white px-3 py-2.5 rounded-md space-x-3 bg-red-500 hover:bg-blue-600 duration-200">
              <span>Learn more</span>
              <FaArrowRightLong className="w-8" />
            </button>
            {/* <button className="px-4 py-3 border border-gray-200 rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;