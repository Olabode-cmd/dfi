// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Video from "../assets/videos/gsap-bg.mp4";

// // Register GSAP Plugin
// gsap.registerPlugin(ScrollTrigger);

// export default function VideoScrollEffect() {
//   const videoRef = useRef(null);
//   const textRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     const text = textRef.current;
//     const container = containerRef.current;

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "+=200%",
//           scrub: 1.5,
//           pin: true,
//         },
//       })
//       .to(video, { width: "100vw", height: "100vh", ease: "power2.out" })
//       .to(text, { x: "-100vw", duration: 3, ease: "none" }, "-=0.5");
//   }, []);

//   return (
//     <div className="relative w-full min-h-[300vh] bg-white">
//       {/* Video Section */}
//       <div
//         ref={containerRef}
//         className="relative flex justify-center items-center min-h-screen overflow-hidden"
//       >
//         <video
//           ref={videoRef}
//           className="absolute w-1/2 h-[50vh] object-cover transition-all"
//           src={Video}
//           autoPlay
//           muted
//           loop
//         />
//       </div>

//       {/* Scrolling Marquee Text */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-50">
//         <h1
//           ref={textRef}
//           className="text-6xl font-bold text-white p-4"
//         >
//           Learn Tech From Digital Fortress.
//         </h1>
//         {/* <marquee
//           className="text-6xl font-bold text-white p-4"
//           behavior=""
//           direction="left"
//         >
//           Learn Tech from Digital Fortress
//         </marquee> */}
//       </div>

//       {/* Next Section Placeholder */}
//       {/* <div className="h-screen bg-gray-900 flex items-center justify-center text-white text-4xl">
//         Next Section
//       </div> */}
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

import Video from "../assets/videos/gsap-bg.mp4";
import Class from '../assets/images/class3.jpg';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, Flip);

export default function VideoScrollEffect() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const text = textRef.current;
    const container = containerRef.current;

    // Initial Timeline for Video Expansion
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true,
      },
    });

    // Expand Video to Fullscreen
    tl.to(video, {
      width: "100vw",
      height: "100vh",
      duration: 2,
      ease: "power2.out",
    });

    // Flip Animation Timeline
    const flipTl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    // Text Flip Effect
    const texts = [
      "Learn Tech",
      "Learn Smart",
      "Learn Tech with Digital Fortress.",
    ];
    let currentIndex = 0;

    function flipText() {
      if (currentIndex >= texts.length - 1) return;

      const newText = texts[++currentIndex];

      const state = Flip.getState(textRef.current);
      textRef.current.innerText = newText;
      Flip.from(state, {
        duration: 1.2,
        ease: "power2.out",
        scale: true,
      });
    }

    // Trigger flip animation at different scroll points
    flipTl.call(flipText).to({}, { duration: 1 }); // First flip
    flipTl.call(flipText).to({}, { duration: 1 }); // Second flip
  }, []);

  return (
    <div className="relative w-full min-h-[300vh]">
      {/* Video Section */}
      <div
        ref={containerRef}
        className="relative flex justify-center items-center min-h-screen overflow-hidden"
      >
        {/* <video
          ref={videoRef}
          className="absolute w-1/2 h-[50vh] object-cover transition-all"
          src={Video}
          autoPlay
          muted
          loop
        /> */}

        <img
          src={Class}
          ref={videoRef}
          alt="class image"
          className="absolute w-1/2 h-[50vh] object-cover transition-all"
        />
      </div>

      {/* Centered Text That Flips */}
      {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 z-50">
        <h1 ref={textRef} className="text-6xl font-bold text-white">
          Learn Tech
        </h1>
      </div> */}

      {/* Next Section Placeholder */}
      {/* <div className="h-screen bg-gray-900 flex items-center justify-center text-white text-4xl">
        Next Section
      </div> */}
    </div>
  );
}
