import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-xs md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-xs md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          arunhoradi@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com//in/arun-horadi-966b7217/
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/arunhoradi
        </li>
      </ul>
    </div>
  );
};

export default Footer;
