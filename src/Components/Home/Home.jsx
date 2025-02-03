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
          <!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/arunhoradi rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-fdd5c0e3-bea6-4b19-9c94-73f5b1a8d6ff' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >arunhoradi</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>Hi there! I’m Arun, a 4-year seasoned web developer specializing in crafting stunning, pixel-perfect landing pages and websites that convert visitors into loyal customers. Armed with Webflow’s no-code power, React’s dynamic interactivity, and Tailwind CSS’s sleek styling, I turn your vision into a high-performance digital experience.
💡 I Deliver:
✔️ Landing Pages That Sell (Mobile-First & SEO-Friendly)
✔️ Custom Webflow & React Websites (Zero Templates, 100% Unique)
✔️ Revamps That Skyrocket Engagement & Conversions
✔️ Seamless Integrations (CMS, APIs, Payment Gateways)
✔️ 5 Days Delivery </div>
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
