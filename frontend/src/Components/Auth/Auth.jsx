import React from "react";
import Layout from "../Layout/Layout";
import rocketImage from "../../assets/rocket 1.svg";
import "./auth.css";
import { Link, useLocation } from "react-router-dom";

function Auth() {
  const location = useLocation();
  return (
    <Layout>
      <section className="auth-container">
        <p></p>
        <form action="submit" className="auth-form">
          <p className="auth-title">
            {(location.pathname === "/signin" ? "Sign in" : "Sign up")}
          </p>
          <label> Username / Email address</label>
          <input type="text" />
          <label> Password</label>
          <input type="password" />
          <button type="submit">
            {(location.pathname === "/signin" ? "Sign in" : "Sign up")}{" "}
          </button>
          <p className="auth-question">
            Don't have an account?
            <Link
              className="signin-signup"
              to={
                location.pathname === "/signin" ? `${"/signup"}` : `${"/signin"}`
              }
            >
              {(location.pathname === "/signin" ? " Sign up" : " Sign in")}
            </Link>
          </p>
        </form>
        <img src={rocketImage} className="rocket-img" alt="rocket" />
        <p></p>
      </section>
    </Layout>
  );
}

export default Auth;
