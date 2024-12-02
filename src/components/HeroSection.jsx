import React, { useEffect, useRef } from "react";
import {
  OBJECTS1,
  OBJECTS2,
  OBJECTS3,
  OBJECTS4,
  herosection1,
  herosection2,
  herosection3,
  herosection4,
} from "../assets/Images/imageTransfer";

const HeroSection = () => {
  const features = [
    {
      title: "Flexibility",
      description:
        "Say goodbye to rigid schedules! With online classes, you choose when and where you learn.",
      image: herosection4,
    },
    {
      title: "Accessibility",
      description:
        "Access your courses from anywhere with an internet connection. No need to commute!",
      image: herosection1,
    },
    {
      title: "Interactive Learning",
      description:
        "Online courses engage with multimedia, discussions, and interactive tasks.",
      image: herosection2,
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Online education reduces costs by eliminating commuting, housing, and campus fees.",
      image: herosection3,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="flex justify-between">
        {/* Title Section */}
        <div className="">
          <h1 className="text-6xl font-bold text-gray-800 mt-5 ml-20">
            Why Opt for <br />
            <span className="text-customBlue-light">Online Learning?</span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="w-fit mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              // onClick={active}
              className="flex items-center bg-white shadow-lg rounded-l-full mb-3 p-6 z-10"
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mr-4"
              />
              <div className="flex flex-col justify-start">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 ml-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-center w-96">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="-mt-96" src={OBJECTS1} alt="img" />
    </section>
  );
};

export default HeroSection;

// import { gsap } from "gsap";
// import {OBJECTS1, OBJECTS2, OBJECTS3, OBJECTS4} from "../assets/Images/imageTransfer"

// const HeroSection = () => {
//   const heroRef = useRef();

//   useEffect(() => {
//     const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 2 } });

//     // Animating each frame
//     timeline
//       .to(".frame-1", { opacity: 1 })
//       .to(".frame-1", { opacity: 0 }, "+=2")
//       .to(".frame-2", { opacity: 1 })
//       .to(".frame-2", { opacity: 0 }, "+=2")
//       .to(".frame-3", { opacity: 1 })
//       .to(".frame-3", { opacity: 0 }, "+=2")
//       .to(".frame-4", { opacity: 1 })
//       .to(".frame-4", { opacity: 0 }, "+=2");
//   }, []);

//   return (
//     <section className="hero-section bg-gray-100 py-16" ref={heroRef}>
//       <div className="container mx-auto">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600 mb-4">
//             Why Opt for <span className="text-orange-500">Online Learning?</span>
//           </h1>
//         </div>

//         <div className="relative h-96 flex items-center justify-center">
//           {/* Frame 1 */}
//           <div className="frame-1 absolute opacity-0">
//             <img
//               src= {OBJECTS1}
//               alt="Frame 1"
//               className="mx-auto"
//             />
//             <p className="text-center mt-4 text-lg text-black">Accessibility</p>
//           </div>

//           {/* Frame 2 */}
//           <div className="frame-2 absolute opacity-0">
//             <img
//               src={OBJECTS2}
//               alt="Frame 2"
//               className="mx-auto"
//             />
//             <p className="text-center mt-4 text-lg">Interactive Learning</p>
//           </div>

//           {/* Frame 3 */}
//           <div className="frame-3 absolute opacity-0">
//             <img
//               src={OBJECTS3}
//               alt="Frame 3"
//               className="mx-auto"
//             />
//             <p className="text-center mt-4 text-lg">Cost Effectiveness</p>
//           </div>

//           {/* Frame 4 */}
//           <div className="frame-4 absolute opacity-0">
//             <img
//               src={OBJECTS4}
//               alt="Frame 4"
//               className="mx-auto"
//             />
//             <p className="text-center mt-4 text-lg">Flexibility</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const HeroSection = () => (
//   <div className="bg-gray-100 py-12 px-8 text-center">
//     <h1 className="text-4xl font-bold">
//       <span>Why Opt for </span>
//       <span className="text-customBlue-light">Online Learning?</span>
//     </h1>

//     <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
//       {[
//         {
//           title: "Flexibility",
//           description: "Choose when and where you learn.",
//           image: { herosection1 },
//         },
//         {
//           title: "Accessibility",
//           description: "Learn from anywhere.",
//           image: { herosection2 },
//         },
//         {
//           title: "Interactive Learning",
//           description: "Engage with multimedia.",
//           image: { herosection3 },
//         },
//         {
//           title: "Cost-Effectiveness",
//           description: "Save on commute and fees.",
//           image: { herosection4 },
//         },
//       ].map((feature, index) => (
//         <div key={index} className="bg-white shadow-md p-4 rounded">
//           <img src={feature.image} alt="img" />
//           <h3 className="text-lg font-bold">{feature.title}</h3>
//           <p className="mt-2 text-gray-600">{feature.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
