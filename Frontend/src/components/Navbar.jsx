import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/logo-transparent.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height={"75px"} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center w-100">
              <li className="nav-item">
                <Link className="nav-link" to="/cricket">
                  <strong>Cricket</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/football">
                  <strong>Football</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basketball">
                  <strong>Basketball</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/baseball">
                  <strong>Baseball</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rugby">
                  <strong>Rugby</strong>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <strong>Login</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <strong>Signup</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
