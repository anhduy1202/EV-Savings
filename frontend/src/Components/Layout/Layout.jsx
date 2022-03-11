import React from "react";
import { useNavigate } from "react-router-dom";
import electricIcon from "../../assets/electricIcon.png";
import "./layout.css";

function Layout({ children }) {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <section className="layout-container">
      <nav className="icon">
        <img
          src={electricIcon}
          className="navbar-icon"
          alt="icon"
          onClick={goHome}
        />
      </nav>
      {children}
    </section>
  );
}

export default Layout;
