import React from "react";
import "./SideIcons.css";

export default function SideIcons() {
  return (
    <div className="SideIcons">
      <ul>
        <li>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user-circle"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-bell"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
