import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import logoImg from "../assets/dendo.png";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">

      {/* ================= HEADER ================= */}
      <header className="privacy-header">
        <div className="privacy-header-content">
          
          <Link to="/" className="back-home-btn" aria-label="Back to Home">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <img
            src={logoImg}
            alt="Dendo Logo"
            className="privacy-logo"
          />

          <div className="privacy-divider"></div>

          <h1 className="privacy-title">
            PRIVACY POLICY
          </h1>

        </div>
      </header>

      {/* ================= CURVE ================= */}
      <div className="privacy-curve">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0,140
              C320,20 1120,20 1440,140
              L1440,0
              L0,0
              Z
            "
            fill="#001A41"
          />
        </svg>
      </div>

      {/* ================= MAIN ================= */}
      <main className="privacy-main">

        <div className="privacy-container">
          <div className="privacy-card">
          </div>
        </div>

      </main>

    </div>
  );
};

export default PrivacyPolicy;