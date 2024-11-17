import React from "react";
const ProjectCard = ({ title, main, link, chtsc }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-2xl shadow-slate-900 rounded-2xl">
      <img className="p-4 w-50 h-40" src={chtsc} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={link} target="_blank" rel="noopener noreferrer" >
        <button className="md:mt-10 md:ml-20 ml-20 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        </a>
        </div>
    </div>
  );
};

export default ProjectCard;