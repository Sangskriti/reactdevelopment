import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    // Hero text animation with GSAP
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="hero" data-scroll-section>
      <h1 className="hero-text">Welcome to Bloom</h1>
    </section>
  );
};

export default Hero;
