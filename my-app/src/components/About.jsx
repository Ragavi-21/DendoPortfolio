// About.jsx
import React from "react";
import "./About.css";
import heroImg from "../assets/about-hero.png";

const About = () => {
  return (
    <section id="about" className="about-section">

      {/* =================== HERO =================== */}
      <div className="about-hero">
        <div className="about-hero-left">
          <h1 className="about-hero-title">
            Building Delivery Beyond Cities
          </h1>
          <p className="about-story">
            Founded in March 2025.<br className="responsive-br" />
            Dendo was created with one mission<br className="responsive-br" />
            to make delivery accessible in every town,<br className="responsive-br" />
            village, and growing city. Starting with<br className="responsive-br" />
            food delivery, Dendo is building a complete<br className="responsive-br" />
            ecosystem of services for South India.<br className="responsive-br" />
          </p>
        </div>

        <div className="about-hero-right">
          <div className="about-hero-circle">
            <img src={heroImg} alt="Dendo Team" />
          </div>
          <div className="about-quote-box">
            <p>
              "Technology should reach
              every street, every town,
              every family."
            </p>
          </div>
        </div>
      </div>

      {/* =================== MISSION & VISION =================== */}
      <div className="about-mv-section">

        {/* Mission */}
        <div className="about-mv-card">
          <div className="about-mv-icon">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 17.2565L13.8 18.4565C14.1 17.8898 14.4 17.3315 14.7 16.7815C15 16.2315 15.3333 15.6731 15.7 15.1065L13.6 14.7065L11.05 17.2565ZM18.85 22.2565L24.1 27.5065C25.7 26.7398 27.2167 25.8815 28.65 24.9315C30.0833 23.9815 31.4833 22.8231 32.85 21.4565C35.0167 19.2898 36.7417 16.9065 38.025 14.3065C39.3083 11.7065 39.9333 9.08978 39.9 6.45645C37.2667 6.42312 34.65 7.04812 32.05 8.33145C29.45 9.61478 27.0667 11.3398 24.9 13.5065C23.5333 14.8731 22.375 16.2731 21.425 17.7065C20.475 19.1398 19.6167 20.6565 18.85 22.2565ZM28.35 18.0065C27.65 17.3065 27.3 16.4481 27.3 15.4315C27.3 14.4148 27.65 13.5565 28.35 12.8565C29.05 12.1565 29.9083 11.8065 30.925 11.8065C31.9417 11.8065 32.8 12.1565 33.5 12.8565C34.2 13.5565 34.55 14.4148 34.55 15.4315C34.55 16.4481 34.2 17.3065 33.5 18.0065C32.8 18.7065 31.9417 19.0565 30.925 19.0565C29.9083 19.0565 29.05 18.7065 28.35 18.0065ZM29.05 35.3064L31.65 32.7565L31.25 30.6565C30.6833 31.0231 30.125 31.3565 29.575 31.6565C29.025 31.9565 28.4667 32.2565 27.9 32.5564L29.05 35.3064ZM46.15 0.206452C46.6833 5.57312 46.2 10.3398 44.7 14.5065C43.2 18.6731 40.7333 22.4731 37.3 25.9065C37.2333 25.9731 37.1583 26.0565 37.075 26.1565C36.9917 26.2565 36.9167 26.3398 36.85 26.4065L37.85 31.5065C38.05 32.5398 38 33.5564 37.7 34.5564C37.4 35.5564 36.8667 36.4398 36.1 37.2065L26.95 46.3565L21.7 34.0065L12.35 24.6565L0 19.4065L9.15 10.2565C9.91667 9.48979 10.8 8.95645 11.8 8.65645C12.8 8.35645 13.8167 8.30645 14.85 8.50645L19.95 9.50645C20.0167 9.43979 20.0917 9.38145 20.175 9.33145C20.2583 9.28145 20.3333 9.22312 20.4 9.15645C23.8333 5.72312 27.6417 3.23978 31.825 1.70645C36.0083 0.173118 40.7833 -0.326882 46.15 0.206452ZM5.05 31.0065C6.55 29.5065 8.33333 28.7481 10.4 28.7315C12.4667 28.7148 14.25 29.4565 15.75 30.9565C17.25 32.4565 17.9917 34.2398 17.975 36.3064C17.9583 38.3731 17.2 40.1565 15.7 41.6565C14.6 42.7565 12.7417 43.6981 10.125 44.4815C7.50833 45.2648 4.33333 45.8231 0.6 46.1565C0.933333 42.4231 1.48333 39.2398 2.25 36.6065C3.01667 33.9731 3.95 32.1065 5.05 31.0065ZM9.55 35.4565C9.28333 35.7231 9.05 36.1148 8.85 36.6315C8.65 37.1481 8.48333 37.7398 8.35 38.4065C9.01667 38.2731 9.60833 38.0981 10.125 37.8815C10.6417 37.6648 11.0333 37.4231 11.3 37.1565C11.5667 36.8898 11.7 36.5981 11.7 36.2815C11.7 35.9648 11.5667 35.6731 11.3 35.4065C11.0333 35.1398 10.7417 35.0148 10.425 35.0315C10.1083 35.0481 9.81667 35.1898 9.55 35.4565Z" fill="white"/>
</svg>

            
          </div>
          <h3>Our Mission</h3>
          <p>
            At Dendo, we believe convenience should not be limited to
            major cities. Our mission is to bring fast, reliable, and technology
            driven delivery services to towns, villages, and emerging
            communities, ensuring every customer has access to essential
            services with speed, trust, and convenience.
          </p>
        </div>

        {/* Vision */}
        <div className="about-mv-card">
          <div className="about-mv-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3>Our Vision</h3>
          <p>
            At Dendo, we are committed to creating opportunities that drive
            community growth. By supporting local businesses, developing
            young talent, and creating meaningful employment, we aim to
            build stronger local economies and empower communities to grow
            with technology and innovation.
          </p>
        </div>

      </div>

      {/* =================== STATS =================== */}
      <div className="about-stats-section">
        <h2 className="about-stats-title">Built for Fast Urban Commerce</h2>

        <div className="about-stats-grid">

          {/* Card 1: Cities */}
          <div className="about-stat-card">
            <div className="about-stat-icon">
              <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28.5V7.5H9V4.5L13.5 0L18 4.5V13.5H27V28.5H0ZM3 25.5H6V22.5H3V25.5ZM3 19.5H6V16.5H3V19.5ZM3 13.5H6V10.5H3V13.5ZM12 25.5H15V22.5H12V25.5ZM12 19.5H15V16.5H12V19.5ZM12 13.5H15V10.5H12V13.5ZM12 7.5H15V4.5H12V7.5ZM21 25.5H24V22.5H21V25.5ZM21 19.5H24V16.5H21V19.5Z" fill="white"/>
</svg>

            </div>
            <div className="about-stat-number">30+ Cities</div>
            <div className="about-stat-label">EXPANDING MONTHLY</div>
          </div>

          {/* Card 2: Orders */}
          <div className="about-stat-card">
            <div className="about-stat-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H4C4 3.61667 4.4875 2.4375 5.4625 1.4625C6.4375 0.4875 7.61667 0 9 0C10.3833 0 11.5625 0.4875 12.5375 1.4625C13.5125 2.4375 14 3.61667 14 5H16C16.55 5 17.0208 5.19583 17.4125 5.5875C17.8042 5.97917 18 6.45 18 7V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H2ZM2 19H16V7H2V19ZM9 13C10.3833 13 11.5625 12.5125 12.5375 11.5375C13.5125 10.5625 14 9.38333 14 8H12C12 8.83333 11.7083 9.54167 11.125 10.125C10.5417 10.7083 9.83333 11 9 11C8.16667 11 7.45833 10.7083 6.875 10.125C6.29167 9.54167 6 8.83333 6 8H4C4 9.38333 4.4875 10.5625 5.4625 11.5375C6.4375 12.5125 7.61667 13 9 13ZM6 5H12C12 4.16667 11.7083 3.45833 11.125 2.875C10.5417 2.29167 9.83333 2 9 2C8.16667 2 7.45833 2.29167 6.875 2.875C6.29167 3.45833 6 4.16667 6 5ZM2 19V7V19Z" fill="white"/>
</svg>

            </div>
            <div className="about-stat-number">10K+ Orders</div>
            <div className="about-stat-label">DAILY DELIVERIES</div>
          </div>

          {/* Card 3: Real-Time */}
          <div className="about-stat-card">
            <div className="about-stat-icon">
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24V15H4.5V24H0ZM9 24V7.5H13.5V24H9ZM18 24V0H22.5V24H18Z" fill="white"/>
</svg>

            </div>
            <div className="about-stat-number">Real-Time</div>
            <div className="about-stat-label">DYNAMIC EXPANSION</div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
