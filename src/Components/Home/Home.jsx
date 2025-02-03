import React from "react";
import avatarImg from "../../assets/avatarimage.png";
import TextChange from "../TextChange";


const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })};
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 flex-col md:flex-row">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
         
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-fdd5c0e3-bea6-4b19-9c94-73f5b1a8d6ff' src='https://widgets.fiverr.com/api/v1/seller/arunhoradi?widget_id=fdd5c0e3-bea6-4b19-9c94-73f5b1a8d6ff' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>

        </h1>
        <p className="text-2xl xl:text-4xl tracking-tight ">
        Frontend Developer | UI/UX Enthusiast | Creating Intuitive Interfaces
        </p>
        <button onClick={()=>{scrollToSection("Footer")}} className="mt-5 mb-5 md:mb-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className=" w-full h-full" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
