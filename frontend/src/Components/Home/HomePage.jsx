import React from "react";
import "./homepage.css";
import NavBar from "../Navbar/NavBar";
import Greeting from "../Greeting/Greeting"

function HomePage() {
  return (
    <section className="homepage-container">
      <NavBar />
      <Greeting />
    </section>
  );
}

export default HomePage;
