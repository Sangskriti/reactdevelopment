import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Journey = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <section className="journey-intro">
        <h1>Your Journey Begins Here</h1>
      </section>
      <section className="journey-experience">
        <h2>Experience the Transformation</h2>
      </section>
    </div>
  );
};

export default Journey;
