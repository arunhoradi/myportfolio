import React from "react";
import ProjectCard from "./ProjectCard";
import Chatscreen from "../../assets/ChatScreen.png"
import ai from "../../assets/ai_website.png"
import virtual from "../../assets/VirtualR.png"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Chat Application concept"
          main="Designed an intuitive chat web application in Figma, focusing on seamless user experience and modern interface."
          link="https://www.figma.com/proto/Diy5eyz5DXDa5RjjP7Slri/Practice%3A-Chat-App-Homepage-Design-(Copy)?node-id=56-2&t=b5Zj5zyQv2AZ7pUd-1"
          chtsc={Chatscreen}
        />
        <ProjectCard
          title="Artificial intelligence web concept"
          main="Developed a modern, responsive AI website UI using React and CSS, emphasizing clean design, intuitive navigation, and an engaging UX."
          link=" https://arunhoradi.github.io/gpt3-website-concept/"
          chtsc={ai}
        />
        <ProjectCard
          title="Virtual reality website"
          main="Developed a modern, responsive VR website UI using React and tailwind CSS, with clean design, intuitive navigation, and an engaging UX."
          link="https://arunhoradi.github.io/virtual/"
          chtsc={virtual}
        />
      </div>
    </div>
  );
};

export default Projects;
