  // Career.jsx

  import React, { useState } from "react";
  import "./Career.css";

  import heroImg from "../assets/career-hero.png";

  const Career = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });

    const [status, setStatus] = useState({
      loading: false,
      success: false,
      error: null,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus({ loading: true, success: false, error: null });

      try {
        const response = await fetch("http://localhost:5000/api/career", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ firstName: "", lastName: "", phone: "", email: "" });
        } else {
          throw new Error(data.message || "Something went wrong");
        }
      } catch (err) {
        setStatus({ loading: false, success: false, error: err.message });
      }
    };

    return (
      <div className="career-page">

        {/* ================= HERO SECTION ================= */}

        <section className="career-hero">

          <div className="career-hero-content">

            {/* LEFT CONTENT */}
            <div className="career-left">

              <h1 className="career-title">
                Innovate With <br className="responsive-br" />
                DENDO
              </h1>

              <p className="career-description">
                Be part of a team that's redefining the boundaries of delivery and technology. We're looking for passionate individuals to join us in our mission to empower local communities and drive global innovation.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="career-right">

              <div className="career-image-card">
                <img src={heroImg} alt="Professional Team" />
              </div>

            </div>

          </div>

        </section>

        {/* ================= WHY JOIN ================= */}

        <section className="why-section">

          <h2 className="why-title">Why Build Your Career Here?</h2>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.6 7.99556L5.55 8.82056C5.78333 8.3539 6.025 7.9039 6.275 7.47056C6.525 7.03723 6.8 6.6039 7.1 6.17056L5.7 5.89556L3.6 7.99556ZM7.15 10.0706L10 12.8956C10.7 12.6289 11.45 12.2206 12.25 11.6706C13.05 11.1206 13.8 10.4956 14.5 9.79556C15.6667 8.6289 16.5792 7.33306 17.2375 5.90806C17.8958 4.48306 18.1833 3.17056 18.1 1.97056C16.9 1.88723 15.5833 2.17473 14.15 2.83306C12.7167 3.4914 11.4167 4.4039 10.25 5.57056C9.55 6.27056 8.925 7.02056 8.375 7.82056C7.825 8.62056 7.41667 9.37056 7.15 10.0706ZM11.6 8.44556C11.2167 8.06223 11.025 7.5914 11.025 7.03306C11.025 6.47473 11.2167 6.0039 11.6 5.62056C11.9833 5.23723 12.4583 5.04556 13.025 5.04556C13.5917 5.04556 14.0667 5.23723 14.45 5.62056C14.8333 6.0039 15.025 6.47473 15.025 7.03306C15.025 7.5914 14.8333 8.06223 14.45 8.44556C14.0667 8.8289 13.5917 9.02056 13.025 9.02056C12.4583 9.02056 11.9833 8.8289 11.6 8.44556ZM12.075 16.4706L14.175 14.3706L13.9 12.9706C13.4667 13.2706 13.0333 13.5414 12.6 13.7831C12.1667 14.0247 11.7167 14.2622 11.25 14.4956L12.075 16.4706ZM19.9 0.145565C20.2167 2.16223 20.0208 4.12473 19.3125 6.03306C18.6042 7.9414 17.3833 9.76223 15.65 11.4956L16.15 13.9706C16.2167 14.3039 16.2 14.6289 16.1 14.9456C16 15.2622 15.8333 15.5372 15.6 15.7706L11.4 19.9706L9.3 15.0456L5.025 10.7706L0.1 8.67056L4.275 4.47056C4.50833 4.23723 4.7875 4.07056 5.1125 3.97056C5.4375 3.87056 5.76667 3.8539 6.1 3.92056L8.575 4.42056C10.3083 2.68723 12.125 1.46223 14.025 0.745565C15.925 0.0288979 17.8833 -0.171102 19.9 0.145565ZM1.875 13.9456C2.45833 13.3622 3.17083 13.0664 4.0125 13.0581C4.85417 13.0497 5.56667 13.3372 6.15 13.9206C6.73333 14.5039 7.02083 15.2164 7.0125 16.0581C7.00417 16.8997 6.70833 17.6122 6.125 18.1956C5.70833 18.6122 5.0125 18.9706 4.0375 19.2706C3.0625 19.5706 1.71667 19.8372 0 20.0706C0.233333 18.3539 0.5 17.0081 0.8 16.0331C1.1 15.0581 1.45833 14.3622 1.875 13.9456ZM3.3 15.3456C3.13333 15.5122 2.96667 15.8164 2.8 16.2581C2.63333 16.6997 2.51667 17.1456 2.45 17.5956C2.9 17.5289 3.34583 17.4164 3.7875 17.2581C4.22917 17.0997 4.53333 16.9372 4.7 16.7706C4.9 16.5706 5.00833 16.3289 5.025 16.0456C5.04167 15.7622 4.95 15.5206 4.75 15.3206C4.55 15.1206 4.30833 15.0247 4.025 15.0331C3.74167 15.0414 3.5 15.1456 3.3 15.3456Z" fill="#C5C0FF"/>
  </svg>
  </div>
              <h3>Elite Teams</h3>
              <p>
                Work alongside industry experts in a high-performance environment.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 20L0 15V5L9 0L18 5V15L9 20ZM6.1 7.25C6.48333 6.85 6.925 6.54167 7.425 6.325C7.925 6.10833 8.45 6 9 6C9.55 6 10.075 6.10833 10.575 6.325C11.075 6.54167 11.5167 6.85 11.9 7.25L14.9 5.575L9 2.3L3.1 5.575L6.1 7.25ZM8 17.15V13.875C7.1 13.6417 6.375 13.1667 5.825 12.45C5.275 11.7333 5 10.9167 5 10C5 9.81667 5.00833 9.64583 5.025 9.4875C5.04167 9.32917 5.075 9.16667 5.125 9L2 7.25V13.825L8 17.15ZM9 12C9.55 12 10.0208 11.8042 10.4125 11.4125C10.8042 11.0208 11 10.55 11 10C11 9.45 10.8042 8.97917 10.4125 8.5875C10.0208 8.19583 9.55 8 9 8C8.45 8 7.97917 8.19583 7.5875 8.5875C7.19583 8.97917 7 9.45 7 10C7 10.55 7.19583 11.0208 7.5875 11.4125C7.97917 11.8042 8.45 12 9 12ZM10 17.15L16 13.825V7.25L12.875 9C12.925 9.16667 12.9583 9.32917 12.975 9.4875C12.9917 9.64583 13 9.81667 13 10C13 10.9167 12.725 11.7333 12.175 12.45C11.625 13.1667 10.9 13.6417 10 13.875V17.15Z" fill="#C5C0FF"/>
  </svg>
  </div>
              <h3>Career Growth</h3>
              <p>
                Clear paths for advancement and professional development.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 16V12C0 11.4333 0.195833 10.9583 0.5875 10.575C0.979167 10.1917 1.45 10 2 10H5.275C5.60833 10 5.925 10.0833 6.225 10.25C6.525 10.4167 6.76667 10.6417 6.95 10.925C7.43333 11.575 8.02917 12.0833 8.7375 12.45C9.44583 12.8167 10.2 13 11 13C11.8167 13 12.5792 12.8167 13.2875 12.45C13.9958 12.0833 14.5833 11.575 15.05 10.925C15.2667 10.6417 15.5208 10.4167 15.8125 10.25C16.1042 10.0833 16.4083 10 16.725 10H20C20.5667 10 21.0417 10.1917 21.425 10.575C21.8083 10.9583 22 11.4333 22 12V16H15V13.725C14.4167 14.1417 13.7875 14.4583 13.1125 14.675C12.4375 14.8917 11.7333 15 11 15C10.2833 15 9.58333 14.8875 8.9 14.6625C8.21667 14.4375 7.58333 14.1167 7 13.7V16H0ZM11 12C10.3667 12 9.76667 11.8542 9.2 11.5625C8.63333 11.2708 8.15833 10.8667 7.775 10.35C7.49167 9.93333 7.1375 9.60417 6.7125 9.3625C6.2875 9.12083 5.825 9 5.325 9C5.69167 8.38333 6.46667 7.89583 7.65 7.5375C8.83333 7.17917 9.95 7 11 7C12.05 7 13.1667 7.17917 14.35 7.5375C15.5333 7.89583 16.3083 8.38333 16.675 9C16.1917 9 15.7333 9.12083 15.3 9.3625C14.8667 9.60417 14.5083 9.93333 14.225 10.35C13.8583 10.8833 13.3917 11.2917 12.825 11.575C12.2583 11.8583 11.65 12 11 12ZM3 9C2.16667 9 1.45833 8.70833 0.875 8.125C0.291667 7.54167 0 6.83333 0 6C0 5.15 0.291667 4.4375 0.875 3.8625C1.45833 3.2875 2.16667 3 3 3C3.85 3 4.5625 3.2875 5.1375 3.8625C5.7125 4.4375 6 5.15 6 6C6 6.83333 5.7125 7.54167 5.1375 8.125C4.5625 8.70833 3.85 9 3 9ZM19 9C18.1667 9 17.4583 8.70833 16.875 8.125C16.2917 7.54167 16 6.83333 16 6C16 5.15 16.2917 4.4375 16.875 3.8625C17.4583 3.2875 18.1667 3 19 3C19.85 3 20.5625 3.2875 21.1375 3.8625C21.7125 4.4375 22 5.15 22 6C22 6.83333 21.7125 7.54167 21.1375 8.125C20.5625 8.70833 19.85 9 19 9ZM11 6C10.1667 6 9.45833 5.70833 8.875 5.125C8.29167 4.54167 8 3.83333 8 3C8 2.15 8.29167 1.4375 8.875 0.8625C9.45833 0.2875 10.1667 0 11 0C11.85 0 12.5625 0.2875 13.1375 0.8625C13.7125 1.4375 14 2.15 14 3C14 3.83333 13.7125 4.54167 13.1375 5.125C12.5625 5.70833 11.85 6 11 6Z" fill="#C5C0FF"/>
  </svg>
  </div>
              <h3>Innovation First</h3>
              <p>
                Build the future of digital services with cutting-edge tech.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon"><svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 20C6.95 20 6.47917 19.8042 6.0875 19.4125C5.69583 19.0208 5.5 18.55 5.5 18H9.5C9.5 18.55 9.30417 19.0208 8.9125 19.4125C8.52083 19.8042 8.05 20 7.5 20ZM3.5 17V15H11.5V17H3.5ZM3.75 14C2.6 13.3167 1.6875 12.4 1.0125 11.25C0.3375 10.1 0 8.85 0 7.5C0 5.41667 0.729167 3.64583 2.1875 2.1875C3.64583 0.729167 5.41667 0 7.5 0C9.58333 0 11.3542 0.729167 12.8125 2.1875C14.2708 3.64583 15 5.41667 15 7.5C15 8.85 14.6625 10.1 13.9875 11.25C13.3125 12.4 12.4 13.3167 11.25 14H3.75ZM4.35 12H10.65C11.4 11.4667 11.9792 10.8083 12.3875 10.025C12.7958 9.24167 13 8.4 13 7.5C13 5.96667 12.4667 4.66667 11.4 3.6C10.3333 2.53333 9.03333 2 7.5 2C5.96667 2 4.66667 2.53333 3.6 3.6C2.53333 4.66667 2 5.96667 2 7.5C2 8.4 2.20417 9.24167 2.6125 10.025C3.02083 10.8083 3.6 11.4667 4.35 12Z" fill="#C5C0FF"/>
  </svg>
  </div>
              <h3>Direct Impact</h3>
              <p>
                Your work contributes directly to real-world solutions.
              </p>
            </div>

          </div>

        </section>

        {/* ================= APPLICATION FORM ================= */}

        {/* ================= APPLY SECTION ================= */}

  <section className="apply-section">
    <div className="apply-container">

      {/* TITLE */}

      <h2 className="apply-title">
        Join Our Team
      </h2>

      <p className="apply-subtitle">
        Explore opportunities to grow and lead with DENDO.
      </p>

      {/* FORM */}

      <form className="apply-form" onSubmit={handleSubmit}>

        {/* STATUS MESSAGES */}

        {status.success && (
          <p style={{ color: "green", textAlign: "center" }}>
            Application submitted successfully!
          </p>
        )}
        {status.error && (
          <p style={{ color: "red", textAlign: "center" }}>{status.error}</p>
        )}

        {/* FIRST + LAST NAME */}

        <div className="form-row">

          <div className="form-field">
            <label className="form-label">
              First Name
            </label>

            <div className="input-box">
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Last Name
            </label>

            <div className="input-box">
              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

        </div>

        {/* MOBILE */}

        <div className="form-field">

          <label className="form-label">
            Mobile Number
          </label>

          <div className="input-box">
            <input
              type="text"
              name="phone"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        {/* EMAIL */}

        <div className="form-field">

          <label className="form-label">
            Email Address
          </label>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="apply-button"
          disabled={status.loading}
        >
          {status.loading ? "Submitting..." : "Apply Now"}
        </button>

        {/* FOOTER */}

        <p className="form-footer">
          By applying, you agree to our verification process
          for financial assistance eligibility.
        </p>

      </form>

    </div>
  </section>

        

      </div>
    );
  };

  export default Career; 