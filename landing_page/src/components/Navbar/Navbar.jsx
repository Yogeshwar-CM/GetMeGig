import React, { useRef, useState } from "react";
import "./Navbar.css";
// import { WhenInView } from "../../utils/utils";

export default function Navbar() {
  const [menuOpen, SetmenuOpen] = useState();
  return (
    <>
      <div className="Navbar oswald">
        <h1 className="LOGO">GetMeGig</h1>
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="rsm">
          <p className="col4 oswald cta0">Are you a freelancer?</p>
          <button className="CTA oswald">
            <a href="#contact">Hire Our Services</a>
          </button>
        </div>
        {!menuOpen && (
          <i
            className="fa-solid fa-bars hbm"
            onClick={() => {
              SetmenuOpen(!menuOpen);
            }}
          ></i>
        )}
      </div>
      {menuOpen && (
        // <WhenInView>
        <div className="nav-menu">
          <i
            className="fa-solid fa-x"
            onClick={() => {
              SetmenuOpen(!menuOpen);
            }}
          ></i>
          <ul id="inner-menu">
            <li>
              <a
                href="#about"
                onClick={() => {
                  SetmenuOpen(!menuOpen);
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => {
                  SetmenuOpen(!menuOpen);
                }}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  SetmenuOpen(!menuOpen);
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
          <div className="rsm">
            <p
              className="col4 oswald cta0"
              onClick={() => {
                SetmenuOpen(!menuOpen);
              }}
            >
              Are you a freelancer?
            </p>
            <button className="CTA oswald">
              <a
                href="#contact"
                onClick={() => {
                  SetmenuOpen(!menuOpen);
                }}
              >
                Hire Our Services
              </a>
            </button>
          </div>
        </div>
        // </WhenInView>
      )}
    </>
  );
}
