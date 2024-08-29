import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar oswald">
      <h1 className="LOGO">GetMeGig</h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i> 
      </div>
      <ul className={menuOpen ? "show" : ""}>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>CONTACT</li>
      </ul>
      <div className="rsm">
        <p className="col4 oswald cta0">Are you a freelancer?</p>
        <button className="CTA oswald">Hire Our Services</button>
      </div>
    </div>
  );
}
