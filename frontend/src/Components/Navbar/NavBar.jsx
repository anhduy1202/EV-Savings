import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import electricIcon from "../../assets/electricIcon.png";

function NavBar() {
  return (
    <nav className="navbar-container">
      <p> </p>
      <p className="navbar-title">
        Spark savers
        <img src={electricIcon} className="navbar-icon" alt="icon" />
      </p>
      <Link className="navbar-login" to={"/login"}>
        Sign in
      </Link>
    </nav>
  );
}

export default NavBar;
