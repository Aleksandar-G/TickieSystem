import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../Service/AuthenticationService";

function NavBar() {
  const navbarstyle = {
    backgroundColor: "#ffffff",
  };

  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    setisLoggedIn(AuthenticationService.isUserLoggedIn());
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={navbarstyle}
      >
        <a className="navbar-brand">LOGO</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              {" "}
              <li className="nav-item nav-link">Home</li>
            </Link>
            <Link to="/profile">
              <li className="nav-item nav-link">Profile</li>
            </Link>
            {isLoggedIn && (
              <Link to="/signout">
                <li className="nav-item nav-link">Sign OUT</li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
      <br />
    </>
  );
}

export default NavBar;
