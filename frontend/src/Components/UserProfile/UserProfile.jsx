import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Collections from "./Collections/Collections";
import "./userprofile.css";

function UserProfile() {
  //This is fake user data to simulate when a user succesfully logged in
  const [user, setUser] = useState({
    username: "John Doe",
    avatar:
      "https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png",
  });
  const collections = useSelector((state) => state.user.user.vehicles);
  return (
    <Layout>
      <section className="userprofile-container">
        <div className="userinfo-container">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <p className="username"> {user.username} </p>
        </div>
        <div className="user-dashboard">
          <p className="user-dashboard-item">My Collections</p>
        </div>
        <div className="collection-container">
          <Collections collections={collections} />
        </div>
      </section>
    </Layout>
  );
}

export default UserProfile;
