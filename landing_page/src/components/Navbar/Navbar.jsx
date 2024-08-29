import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar oswald">
      <h1 className="LOGO">GetMeGig</h1>
      <ul>
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
