// Product.jsx
import React, { useEffect } from "react";
import "./Product.css";

import cityImg from "../assets/product-hero.png";
import logoImg from "../assets/dendoo.png";
import quickImg from "../assets/Dendo quick.png";
import cravixImg from "../assets/Cravix.png";
import NexaImg from "../assets/Nexaride.png";

const Product = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("row-visible");
        }
      });
    }, { threshold: 0.25 });

    const rows = document.querySelectorAll('.service-row');
    rows.forEach(row => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-page">
      {/* ================= HERO ================= */}
      <header className="product-header">
        <div className="header-bg">
          <img src={cityImg} alt="city skyline" />
          <div className="header-overlay"></div>
        </div>

        <div className="header-content">
          <h1 className="header-title">One Ecosystem. Everywhere.</h1>
          <p className="header-subtitle">
            Dendo creates digital services that <br className="responsive-br" />
            make everyday life faster, easier, <br className="responsive-br" />
            and more connected.
          </p>
        </div>

        {/* WHITE CURVE AT BOTTOM */}
        <div className="header-curve">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,320 Q720,0 1440,320 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </header>

      {/* ================= SERVICES ================= */}
      <section className="services-list">
        
        {/* ROW 1: DENDO */}
        <div className="service-row">
          <div className="service-logo-container left-container">
            <img src={logoImg} alt="Dendo" className="logo-img big-logo" />
          </div>
          <div className="service-text-content">
            <h2 className="service-title">Freshly Prepared<br className="responsive-br" />Quickly Delivered</h2>
            <p className="service-description">
              Dendo connects customers with<br className="responsive-br" /> 
              their favorite restaurants and <br className="responsive-br" />
              brings fresh meals directly to <br className="responsive-br" />
              their doorstep.
            </p>
          </div>
        </div>

        {/* ROW 2: CRAVIX (REVERSE) */}
        <div className="service-row reverse">
          <div className="service-logo-container right-container">
            <img src={cravixImg} alt="Cravix" className="logo-img big-logo cravix-fix" />
          </div>
          <div className="service-text-content">
            <h2 className="service-title">Made for Cravings<br className="responsive-br" />Delivered with Speed</h2>
            <p className="service-description">
              Cravix brings café favorites,<br className="responsive-br" />
              snacks, and beverages directly<br className="responsive-br" />
              to customers anytime.
            </p>
          </div>
        </div>

        {/* ROW 3: DENDO QUICK */}
        <div className="service-row">
          <div className="service-logo-container left-container">
            <img src={quickImg} alt="Dendo Quick" className="logo-img big-logo" />
          </div>
          <div className="service-text-content">
            <h2 className="service-title">Daily Needs<br className="responsive-br" />Delivered Instantly</h2>
            <p className="service-description">
              Dendo Quick delivers groceries<br className="responsive-br" />
              and essential products with<br className="responsive-br" />
              convenience and reliability.
            </p>
          </div>
        </div>

        {/* ROW 4: NEXA RIDE (REVERSE) */}
        <div className="service-row reverse">
          <div className="service-logo-container right-container">
            <img src={NexaImg} alt="Nexa" className="logo-img big-logo" />
          </div>
          <div className="service-text-content">
            <h2 className="service-title">Move with Freedom<br className="responsive-br" />Ride with Comfort</h2>
            <p className="service-description">
              Dendo connects customers with <br className="responsive-br" />
              their favorite restaurants and <br className="responsive-br" />
              helps local vendors grow.
            </p>
          </div>
        </div>

        {/* ROW 5: ZEN */}
        <div className="service-row">
          <div className="service-logo-container left-container">
            <h2 className="zen-logo-text">ZEN</h2>
          </div>
          <div className="service-text-content">
            <h2 className="service-title">Smart Tech<br className="responsive-br" />Delivered Faster</h2>
            <p className="service-description">
              Zen makes electronic accessories <br className="responsive-br" />
              and gadgets accessible with fast <br className="responsive-br" />
              doorstep delivery.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Product;