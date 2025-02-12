import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // Position states for instant and delayed movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const trailingX = useSpring(cursorX, { stiffness: 50, damping: 10 });
  const trailingY = useSpring(cursorY, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hide the default cursor */}
      {/* <style>{`body { cursor: none; }`}</style> */}

      {/* Fast-moving cursor dot */}
      <motion.div
        className="fixed w-3 h-3 bg-red-400 z-90 rounded-full pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      />

      {/* Lagging trailing glow */}
      <motion.div
        className="fixed w-12 h-12 border border-red-300 z-90 rounded-full pointer-events-none"
        style={{ x: trailingX, y: trailingY }}
      />
    </>
  );
};

export default CustomCursor;