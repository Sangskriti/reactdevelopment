import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(".division", {
  //     opacity: 0,
  //     y: 50,
  //     scrollTrigger: {
  //       trigger: ".division",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true, // Enables smooth animation when scrolling
  //     },
  //   });
  // }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
