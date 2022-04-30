import React from "react";
import Layout from "../Layout/Layout";
import "./InputPage.css";
import { Link } from "react-router-dom";

function InputPage() {
  return (
    <Layout>
      <div className="inputpage-ellipse"></div>
      <section className="inputpage-container">
        <h2 className="inputpage-header">Choose your vehicle type</h2>
        <div className="inputpage-button-container">
          <Link className="inputpage-choice" to={"/electric"}>
            Electric
          </Link>
          <Link className="inputpage-choice" to={"/gasoline"}>
            Gasoline
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default InputPage;
