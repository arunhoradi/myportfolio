import React from "react";
import avatarImg from "../../assets/arunhoradi.png";
import TextChange from "../TextChange";

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })};
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 flex-col md:flex-row">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-4xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-2xl tracking-tight ">
        Frontend Developer | UI/UX Enthusiast | Creating Intuitive Interfaces
        </p>
        <button onClick={()=>{scrollToSection("Footer")}} className="mt-5 mb-5 md:mb-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className=" w-70 h-80 shadow-lg shadow-indigo-400 " src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
