import React from "react";
import "../../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Cities Section */}
      <div className="footer-cities">
        <h3 style={{textAlign:"left"}}>Our Top Cities</h3>
        <div className="cities-row">
          <div className="column">
            <p>San Francisco</p>
            <p>Miami</p>
            <p>San Diego</p>
            <p>East Bay</p>
          </div>
          <div className="column">
            <p>Los Angeles</p>
            <p>Washington DC</p>
            <p>Seattle</p>
            <p>Portland</p>
          </div>
          <div className="column">
            <p>New York City</p>
            <p>Orange County</p>
            <p>Atlanta</p>
            <p>Charlotte</p>
          </div>
          <div className="column">
            <p>Chicago</p>
            <p>Phoenix</p>
            <p>Las Vegas</p>
            <p>Sacramento</p>
          </div>
          <div className="column">
            <p>New Mexico</p>
            <p>Albuquerque</p>
            <p>Denver</p>
            <p>Austin</p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-line" />

      {/* Company Info Section */}
      <div className="footer-info">
        <div className="column">
          <h4>Company</h4>
          <p>About us</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <p>Help & Support</p>
          <p>Partner with Us</p>
          <p>Ride with Us</p>
        </div>

        <div className="column">
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Refund & Cancellation</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="info-column">
          <h4>Follow Us</h4>
          <div
            style={{
              display: "flex",
              gap: "10px",
              color: "grey",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          {/* Newsletter Section */}
          <h4 style={{ marginTop: "20px" }} >Subscribe to our newsletter</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-line" />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved. 
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
