import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollToPlugin);  // Register the ScrollToPlugin

const Home = () => {
  useEffect(() => {
    // You can animate elements when the component is mounted (optional)
    gsap.from(".home-text-section", {
      // opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  // Smooth scroll function
  const handleScroll = () => {
    gsap.to(window, {
      scrollTo: ".home-bannerImage-container",  // Scroll to the element with this class
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeling,
            chopping & marinating, so you can cook fresh food.
          </p>
          <button className="secondary-button" onClick={handleScroll}>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
