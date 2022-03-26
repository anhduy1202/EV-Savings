import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import electricIcon from "../../assets/electricIcon.png";

function NavBar() {
  //This is fake user data to simulate when a user succesfully logged in
  const [user, setUser] = useState({
    username: "John Doe",
    avatar:
      "https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png",
  });
  //For dropdown menu, will use Redux to manage this later
  const [isOpened, setOpened] = useState(false);
  const openMenu = () => {
    setOpened(!isOpened);
  };
  return (
    <nav className="navbar-container">
      <p> </p>
      <p className="navbar-title">
        Spark savers
        <img src={electricIcon} className="navbar-icon" alt="icon" />
      </p>
      {user ? (
        <div className="user-container">
          <img
            onClick={openMenu}
            src={user.avatar}
            alt="User avatar"
            className="user-avatar"
          />
          {isOpened && (
            <div className="user-menu">
              <Link to="/profile" className="user-item">My Profile </Link>
              <p className="user-item">Settings</p>
              <p className="user-item">Favorites</p>
              <p className="user-item">Sign out</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link className="navbar-login" to={"/signin"}>
            Sign in
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
