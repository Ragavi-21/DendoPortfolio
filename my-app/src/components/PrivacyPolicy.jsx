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
            <div className="privacy-content">

  <h2>DENDO Privacy Policy</h2>

  <p>
    DENDO ("DENDO," "we," "our," or "us") is committed to protecting
    the privacy, confidentiality, and security of user information.
    This Privacy Policy explains how we collect, use, process, store,
    disclose, and protect personal information when users access or use
    the DENDO mobile application, website, and related delivery services
    (collectively referred to as the "Platform").
  </p>

  <p>
    By accessing or using the Platform, you acknowledge that you have
    read, understood, and agreed to the practices described in this
    Privacy Policy.
  </p>

  <section className="policy-section">
    <h3>1. Information We Collect</h3>

    <h4>Personal Information</h4>
    <ul>
      <li>Full name</li>
      <li>Mobile number</li>
      <li>Email address</li>
      <li>Delivery address</li>
      <li>Profile details voluntarily provided by the user</li>
      <li>Date of birth (if voluntarily provided)</li>
    </ul>

    <h4>Order and Transaction Information</h4>
    <ul>
      <li>Order history and purchased items</li>
      <li>Payment method selected by the user</li>
      <li>Transaction details processed through secure payment gateways</li>
      <li>Refund, cancellation, and dispute records</li>
    </ul>

    <h4>Location Information</h4>
    <ul>
      <li>Real-time GPS location</li>
      <li>Saved delivery addresses</li>
      <li>Approximate location derived from IP address</li>
    </ul>

    <h4>Device and Technical Information</h4>
    <ul>
      <li>Device type and model</li>
      <li>Operating system and app version</li>
      <li>IP address</li>
      <li>Device identifiers</li>
      <li>Crash reports and diagnostics</li>
      <li>Cookies and analytics technologies</li>
    </ul>

    <h4>Communication and Interaction Data</h4>
    <ul>
      <li>Masked call and chat records</li>
      <li>Delivery tracking events</li>
      <li>User ratings and reviews</li>
      <li>Customer support conversations</li>
    </ul>
  </section>

  <section className="policy-section">
    <h3>2. How We Use Your Information</h3>
    <ul>
      <li>Processing and fulfilling orders</li>
      <li>Assigning delivery partners</li>
      <li>Providing customer support</li>
      <li>Improving platform functionality</li>
      <li>Sending order updates and notifications</li>
      <li>Providing offers and promotions</li>
      <li>Preventing fraud and illegal activities</li>
      <li>Conducting analytics and research</li>
      <li>Complying with legal obligations</li>
    </ul>
  </section>

  <section className="policy-section">
    <h3>3. How We Share Your Information</h3>

    <h4>Restaurant, Store and Vendor Partners</h4>
    <p>
      Information necessary to process and prepare orders may be shared
      with merchant partners.
    </p>

    <h4>Delivery Partners</h4>
    <p>
      Necessary delivery-related information including customer name,
      contact number, and address may be shared securely.
    </p>

    <h4>Payment Service Providers</h4>
    <p>
      Payment information is processed through trusted third-party
      payment gateways and financial institutions.
    </p>

    <h4>Third-Party Service Providers</h4>
    <ul>
      <li>Cloud hosting</li>
      <li>Analytics services</li>
      <li>Customer support tools</li>
      <li>SMS and email services</li>
      <li>Cybersecurity and fraud prevention</li>
      <li>Operational and logistics support</li>
    </ul>

    <p>
      DENDO does not sell, rent, trade, or commercially distribute user
      personal information to third parties.
    </p>
  </section>

  <section className="policy-section">
    <h3>4. Data Security</h3>
    <ul>
      <li>Encrypted data transmission</li>
      <li>Secure server infrastructure</li>
      <li>Role-based access controls</li>
      <li>Authentication systems</li>
      <li>Periodic security reviews</li>
    </ul>

    <p>
      Despite reasonable safeguards, no digital platform can guarantee
      complete security.
    </p>
  </section>

  <section className="policy-section">
    <h3>5. User Rights</h3>
    <ul>
      <li>Access personal information</li>
      <li>Request correction of data</li>
      <li>Request deletion of account</li>
      <li>Withdraw consent</li>
      <li>Opt out of marketing communications</li>
      <li>Restrict certain data processing activities</li>
    </ul>
  </section>

  <section className="policy-section">
    <h3>6. Data Retention</h3>
    <p>
      DENDO retains personal information only for as long as necessary
      to provide services, comply with laws, resolve disputes, and
      enforce agreements.
    </p>
  </section>

  <section className="policy-section">
    <h3>7. Cookies and Tracking Technologies</h3>
    <ul>
      <li>Maintain user sessions</li>
      <li>Analyze traffic and user behavior</li>
      <li>Improve platform functionality</li>
      <li>Personalize user experience</li>
      <li>Measure advertising effectiveness</li>
    </ul>
  </section>

  <section className="policy-section">
    <h3>8. Children's Privacy</h3>
    <p>
      The DENDO Platform is strictly intended only for individuals who
      are 18 years of age or older.
    </p>

    <p>
      DENDO does not knowingly collect personal information from minors
      under the age of 18.
    </p>
  </section>

  <section className="policy-section">
    <h3>9. Third-Party Links and Services</h3>
    <p>
      The Platform may contain links to third-party websites,
      applications, or services. DENDO is not responsible for the
      privacy practices of such external platforms.
    </p>
  </section>

  <section className="policy-section">
    <h3>10. Amendments to This Privacy Policy</h3>
    <p>
      DENDO reserves the right to modify, update, or revise this Privacy
      Policy at any time.
    </p>

    <ul>
      <li>In-app notifications</li>
      <li>Email communications</li>
      <li>WhatsApp updates</li>
      <li>SMS notifications</li>
      <li>Website announcements</li>
    </ul>
  </section>

  <section className="policy-section">
    <h3>11. Contact Information</h3>

    <div className="contact-box">
      <p>
        For questions, concerns, or requests relating to this Privacy
        Policy:
      </p>

      <p>
        <strong>[COMPANY CONTACT DETAILS TO BE ADDED]</strong>
      </p>
    </div>
  </section>

  <section className="policy-section">
    <h3>12. Consent</h3>

    <p>
      By accessing or using the DENDO Platform, users expressly consent
      to the collection, processing, storage, and use of information in
      accordance with this Privacy Policy.
    </p>

    <p>
      This Privacy Policy shall be governed by and interpreted in
      accordance with the laws of India.
    </p>

    <div className="policy-footer-note">
      DENDO operates under DENDO Private Limited.
    </div>
  </section>

</div>
          </div>
        </div>

      </main>

    </div>
  );
};

export default PrivacyPolicy;