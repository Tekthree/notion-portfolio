import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function navbar() {
  return (
    <div>
      <div className="navbar-contain">
        <div className="flex-row space-between align">
          <div className="logo-wrapper flex-row align">
            
            <Link className="nav-link ml-two" to="/"><h3>Tek Jones</h3></Link>
            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
            <Link className="nav-link" to="/about">ABOUT</Link>
          </div>
          <div className="button">LET'S TALK</div>
        </div>
      </div>
    </div>
  );
}
