import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

gsap.registerPlugin(ScrollToPlugin);

const Testimonial = () => {
  useEffect(() => {
    // Animate elements on component mount
    gsap.from(".testimonial-section-bottom", {
      // opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  const handleScrollToTestimonials = () => {
    gsap.to(window, {
      scrollTo: ".testimonial-section-bottom",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <button className="secondary-button" onClick={handleScrollToTestimonials}>
          Read Testimonials
        </button>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="John Doe" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
