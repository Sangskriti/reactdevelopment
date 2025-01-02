import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import "./styles/App.css"; // Global Styles
import Hero from "./components/Hero";
import Journey from "./components/Journey";

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1.2, // Adjust scroll speed
      class: "is-scrolling", // Optional: Add this class during scrolling
    });

    // Scroll-triggered animations
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });

    // Cleanup on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      {/* Hero Section */}
      <Hero />

      {/* Journey Section */}
      <Journey />

      {/* Features Section */}
      <section className="features" data-scroll-section>
        <h2 className="features-title">Features</h2>
        <p className="features-description">
          Bloom is an empowerment algorithm that transforms your scrolling experience into something meaningful and positive.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta" data-scroll-section>
        <h2>Join the Bloom Revolution</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default App;
