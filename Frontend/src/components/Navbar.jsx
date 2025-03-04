import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo-transparent.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height={"75px"} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left-side navigation */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/cricket">
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/football">
                  Football
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basketball">
                  Basketball
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/baseball">
                  Baseball
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rugby">
                  Rugby
                </Link>
              </li>
            </ul>

            {/* Right-side navigation */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
