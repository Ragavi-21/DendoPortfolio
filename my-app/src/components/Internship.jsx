import React from "react";
import "./Internship.css";

import heroImg from "../assets/student-coding.png";
import studentsImg from "../assets/groupphoto.png";
import ceoImg from "../assets/ceo.jpg";

const Internship = () => {
  return (
    <div className="internship-page">
      {/* ================= HERO SECTION (REDESIGNED) ================= */}
      <section className="intern-hero-alt">
        <div className="intern-hero-overlay"></div>
        <div className="intern-hero-content-alt">
          <h1 className="intern-title-alt">
            Ignite Your Career <br className="responsive-br" />
            <span className="text-highlight">With DENDO Internships</span>
          </h1>
          <p className="intern-description-alt">
            Step into the world of innovation. Our internship program is designed to provide students with real-world experience, mentorship, and a platform to build the future of technology and delivery.
          </p>
        </div>
      </section>

      {/* ================= NEXT CEO SECTION ================= */}
      <section className="ceo-section">
        <div className="ceo-content">
          <div className="ceo-image-wrapper">
            <img src={ceoImg} alt="Next CEO" />
          </div>
          <div className="ceo-text">
            <h2 className="ceo-title">MUNIYAPPAN EDUMBAN
</h2>
            <p className="ceo-description">
              We don't just hire interns; we cultivate future leaders. Our "Next CEO" initiative identifies high-potential individuals and provides them with direct mentorship from our executive team, preparing them to lead the industry.
            </p>
            <ul className="ceo-perks">
              <li>Direct Executive Mentorship</li>
              <li>Leadership Workshops</li>
              <li>Strategic Project Ownership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STUDENTS PHOTO SECTION ================= */}
      <section className="students-section">
        <div className="section-header">
          <h2 className="section-title">Our Vibrant Community</h2>
          <p className="section-subtitle">Meet the talented minds shaping tomorrow at DENDO.</p>
        </div>
        <div className="students-display">
          <div className="students-image-container">
            <img src={studentsImg} alt="Internship Students" className="students-group-photo" />
            <div className="photo-overlay">
              <span>Future Innovators</span>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Internship;
