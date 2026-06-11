import React from "react";
import "./Hero.css";
import heroVisual from "../assets/city.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT SIDE: Text Content */}
        <div className="hero-left">
          <div className="text-wrapper">
            <h1 className="hero-title">
              Delivering Beyond Cities
            </h1>
            <p className="hero-description">
              Dendo connects food, groceries,<br className="responsive-br" />
              mobility, and electronics delivery <br className="responsive-br" />
              across towns, cities, and rural<br className="responsive-br" />
              communities.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Single Image Only */}
        <div className="hero-right">
          <div className="hero-image-container">
             <img src={heroVisual} alt="Dendo Visual" className="hero-main-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;