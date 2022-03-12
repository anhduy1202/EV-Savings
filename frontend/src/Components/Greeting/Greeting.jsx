import React from 'react';
import { Link } from 'react-router-dom';
import "./greeting.css";


function Greeting() {
    return(
        <div className="greeting-box">
        <h1 className="main-text">Save money with spark savers</h1>
        <h2 className="sub-text">The most effective way to see costs from switching from gas to electric</h2>
        <Link className="temp-get-started" to={"/signin"}>
        Get Started
        </Link>
        </div>
    )

}

export default Greeting;