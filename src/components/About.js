import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

gsap.registerPlugin(ScrollToPlugin);  // Register the ScrollToPlugin

const About = () => {
  useEffect(() => {
    // You can animate elements when the component is mounted (optional)
    gsap.from(".about-section-text-container", {
      // opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  // Smooth scroll function to scroll to the next section (or any target)
  const handleScroll = () => {
    gsap.to(window, {
      scrollTo: ".about-section-image-container",  // Scroll to the element with this class
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About Image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" onClick={handleScroll}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
