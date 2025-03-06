import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const logo = "https://media-hosting.imagekit.io//1e3d5fe3fc6a4e44/logo-transparent.png?Expires=1835849925&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aNdKLvFmlqxZnN-n8TlQm5VOfRGirzngMzl0cR03tbdI9~kBGUWzwpWsp63ygCJMejVu48lCGb1HZmoLYxMw-X2TvOaipfwb1AX35aohi8qAsATlt2ickVuKW0IkhBjIUatFJIBQFHC-HJXbQ8QNqtmNeftRIMZAP04fmzHLsbktDDRL1dTBheePCHXCB~aIVQnWyjdhcBETTmnV6vd86jFmcwfpEKv8Bx0-sJRZeGt7-iZL5mr0kEJ5SBFA-kMCznRqFqVKRSEgtv1dqdb4L4cyeUFyBpxrSAibPmLvglGLgJnPSpppEsXPh~NUDCoB4H6FMow23P9uSNNSLGswqw__";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Redirect to login page
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="75px" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          {user && ( // Only show sports links if user is logged in
            <ul className="navbar-nav d-flex justify-content-center w-100">
              <li className="nav-item">
                <Link className="nav-link" to="/cricket"><strong>Cricket</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/football"><strong>Football</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basketball"><strong>Basketball</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/baseball"><strong>Baseball</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rugby"><strong>Rugby</strong></Link>
              </li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link"><strong>Welcome, {user.username}</strong></span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><strong>Login</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup"><strong>Signup</strong></Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
