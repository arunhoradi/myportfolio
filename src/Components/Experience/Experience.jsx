import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiElsevier } from "react-icons/si";
;
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
         <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38BDF8" size={50} />
          </span>
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center shadow-md shadow-indigo-200">
            <SiFreelancer color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Web developer , Freelancing</h2>
              <p className="text-sm leading-tight font-thin">
                January 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Web Developer</li>
                <li>- Complete UI/UX development</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg shadow-md shadow-indigo-200 p-4 items-center">
            <SiElsevier color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Education Consultant, Elsevier</h2>
              <p className="text-sm leading-tight font-thin">
                April 2016 - December 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as consultant between clients and developer</li>
                <li>- Liasoned between client and organisation</li>
              </ul>
            </span>
          </div> 
           
        </div>
      </div>
    </div>
  );
};

export default Experience;
