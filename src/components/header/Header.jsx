import React from 'react';
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <div className="navbar-address">
          <h3>Deliver to</h3>
          <FontAwesomeIcon icon={faLocationDot} className="navbar-icon" />
          <p>123 Main Street, City, Country</p>
        </div>

        <div className="navbar-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
          <input placeholder='Search Here' />
          <button className="navbar-login"><FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />Login</button>
        </div>
      </div>

      <div className="mobile_navabar">
        <div className='mobile_header'>
          <div>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>
          <div>
            <button className="mobile_login_btn"><FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />Login</button>
          </div>
        </div>
        <div className="navbar-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
          <input placeholder='Search Here' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
