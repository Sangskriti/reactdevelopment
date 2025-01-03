import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "../assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const handleSmoothScroll = (target) => {
    gsap.to(window, {
      scrollTo: target,
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span onClick={() => handleSmoothScroll(".quality-section")}>Quality</span>
          <span onClick={() => handleSmoothScroll(".help-section")}>Help</span>
          <span onClick={() => handleSmoothScroll(".share-section")}>Share</span>
          <span onClick={() => handleSmoothScroll(".careers-section")}>Careers</span>
          <span onClick={() => handleSmoothScroll(".testimonials-section")}>
            Testimonials
          </span>
          <span onClick={() => handleSmoothScroll(".work-section")}>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span onClick={() => handleSmoothScroll(".terms-section")}>
            Terms & Conditions
          </span>
          <span onClick={() => handleSmoothScroll(".privacy-section")}>
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
