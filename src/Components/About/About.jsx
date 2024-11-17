import React from "react";
import arunhoradi from "../../assets/arunhoradi5.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={arunhoradi} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a passionate React Front-End Developer, I specialize in creating responsive, 
                user-focused web applications. Leveraging modern frameworks and intuitive UI/UX design,
                I strive to build seamless, high-performance interfaces that elevate the 
                user experience across all devices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  UI/UX Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a UI/UX enthusiast skilled in Figma, I design intuitive, 
                user-centered interfaces that enhance digital experiences. 
                With a focus on aesthetics and functionality, I create impactful, 
                accessible designs that engage users and bring ideas to life seamlessly.
                </p>
              </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;