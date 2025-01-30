import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of loading

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center text-white z-50"
      initial={{ opacity: 1 }}
      animate={progress >= 100 ? { opacity: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center w-[90%] md:w-[20%]">
        {/* Percentage Counter */}
        <span className="text-6xl font-bold">{progress}%</span>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-800 rounded-md mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-red-500 rounded-md"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;