// Navbar.jsx

import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const location = useLocation();

  const useTransparentNavbar = location.pathname === "/" || location.pathname === "/contact";

  // Function to move the sliding pill
  const moveIndicator = (el) => {
    if (el && navRef.current && window.innerWidth > 992) {
      const parentRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - parentRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  };

  // Reset to active link when not hovering
  const resetIndicator = () => {
    const activeEl = navRef.current?.querySelector("a.active");
    if (activeEl && window.innerWidth > 992) {
      moveIndicator(activeEl);
    } else {
      setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      resetIndicator();
    }, 50);
  }, [location]);

  return (
    <nav
      className={`navbar ${
        useTransparentNavbar ? "navbar-transparent" : "navbar-solid"
      } ${mobileMenuOpen ? "mobile-menu-active" : ""}`}
    >
      <div className="nav-content">
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoImg} alt="Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* HAMBURGER TOGGLE BUTTON */}
        <button
          className={`nav-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`} ref={navRef} onMouseLeave={resetIndicator}>
          {/* SLIDING PILL */}
          <div className="nav-indicator" style={indicatorStyle}></div>

          <li onMouseEnter={(e) => moveIndicator(e.currentTarget.querySelector("a"))} onClick={() => setMobileMenuOpen(false)}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              ABOUT US
            </NavLink>
          </li>

          <li onMouseEnter={(e) => moveIndicator(e.currentTarget.querySelector("a"))} onClick={() => setMobileMenuOpen(false)}>
            <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>
              PRODUCT
            </NavLink>
          </li>

          {/* DROPDOWN */}
          <li
            className="dropdown-container"
            onMouseEnter={(e) => {
              setDropdownOpen(true);
              moveIndicator(e.currentTarget.querySelector("a.nav-main-link"));
            }}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink 
              to="/internship" 
              className={({ isActive }) => 
                `nav-main-link ${(isActive || location.pathname === "/foundation" || location.pathname === "/career") ? "active" : ""}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              CAREER
            </NavLink>

            {dropdownOpen && (
              <ul className="dropdown-menu desktop-only-dropdown">
                <li>
                  <NavLink to="/career" onClick={() => setDropdownOpen(false)}>Internship</NavLink>
                </li>
                <li>
                  <NavLink to="/foundation" onClick={() => setDropdownOpen(false)}>Rajeshwari Foundation</NavLink>
                </li>
              </ul>
            )}

            {/* Mobile-only nested links displayed directly under CAREER in the drawer */}
            <ul className="mobile-only-dropdown">
              <li>
                <NavLink to="/career" onClick={() => setMobileMenuOpen(false)}>Internship</NavLink>
              </li>
              <li>
                <NavLink to="/foundation" onClick={() => setMobileMenuOpen(false)}>Rajeshwari Foundation</NavLink>
              </li>
            </ul>
          </li>

          <li onMouseEnter={(e) => moveIndicator(e.currentTarget.querySelector("a"))} onClick={() => setMobileMenuOpen(false)}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;