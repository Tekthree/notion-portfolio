import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";


export default function footer() {
  return (
    <div>
      <div className="navbar-contain" >
        <div className="flex-row space-between">
          <div className="flex-row">
            <Link className="nav-link ml-two" to="/">
              Contact
            </Link>
            <Link className="nav-link" to="/portfolio">
              LinkedIn
            </Link>
            <Link className="nav-link" to="/about">
              Behance
            </Link>
            <Link className="nav-link" to="/about">
              GitHub
            </Link>
          </div>
          <div>
            Logo
          </div>
        </div>
      </div>
    </div>
  );
}
