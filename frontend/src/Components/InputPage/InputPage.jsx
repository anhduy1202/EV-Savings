import React from "react";
import Layout from "../Layout/Layout";
import "./InputPage.css";
import { Link} from "react-router-dom";



function InputPage() {
    
    return(
        <Layout>
        <section className="inputpage-container"> 
            <h2 class ="inputpage-header">Choose your vehicle type</h2>
                <div class="inputpage-button-container">
                    <Link className="inputpage-choice" to={"/electric"}>Electric</Link>
                    <Link className="inputpage-choice" to={"/gasoline"}>Gasoline</Link>
                </div>
        </section>
        <div class="inputpage-ellipse"></div>
        </Layout>
    )

}


export default InputPage;