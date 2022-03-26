import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./userprofile.css";

function UserProfile() {
  //This is fake user data to simulate when a user succesfully logged in
  const [user, setUser] = useState({
    username: "John Doe",
    avatar:
      "https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png",
  });
  return (
    <Layout>
      <section className="userprofile-container">
        <div className="userinfo-container">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <p className="username"> {user.username} </p>
        </div>
        <div className="user-dashboard">
            <p className="user-dashboard-item">About</p>
            <p className="user-dashboard-item">Saved</p>
            <p className="user-dashboard-item">My Collections</p>
        </div>
      </section>
    </Layout>
  );
}

export default UserProfile;
