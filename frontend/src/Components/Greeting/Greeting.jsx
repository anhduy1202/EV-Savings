import React from 'react';
import { Link } from 'react-router-dom';
import "./greeting.css";


function Greeting() {
    return(
        <div className="greeting-box">
        <h1 className="main-text">Save money </h1>
        <p className='main-text-subtitle'> with spark savers</p>
        <h2 className="sub-text">The most effective way to see costs from switching from gas to electric</h2>
        <Link className="temp-get-started" to={"/input"}>
        Get Started
        </Link>
        </div>
    )

}

export default Greeting;