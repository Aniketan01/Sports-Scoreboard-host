import React from "react";
import {Link} from "react-router-dom";
import logo from "/logo.png"
export default function Navbar() {
    return(
    <div >
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Live Sports ScoreBoard" width={"150px"}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/cricket">Cricket</Link>
            
            <Link className="nav-item nav-link" to="/football">Football</Link>
            <Link className="nav-item nav-link" to="/basketball">Basketball</Link>
            <Link className="nav-item nav-link" to="/rugby">Rugby</Link>
            <Link className="nav-item nav-link" to="/Baseball">Baseball</Link>
            </div>

            <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-item nav-link" to="/signup">
              Signup
            </Link>
          </div>
        </div>
        </div>
    </nav>



        
    </div>
    );
}

