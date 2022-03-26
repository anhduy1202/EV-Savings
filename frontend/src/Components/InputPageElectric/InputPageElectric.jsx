import React from "react";
import Layout from "../Layout/Layout";
import "./InputPageElectric.css";



function InputPageElectric() {
    /*Select will eventually turn into a <select multiple={true} value={['B', 'C']}>
 */
    return(
        <Layout>
        <section className="inputpageelectric-container">
            <h2 class="inputpageelectric-header">Choose your vehicle type</h2>
            <form>
                <label class="inputpageelectric-name">
                Select Vehicle name
                <select class ="inputpageelectric-select">
                    <option value="Tesla">Tesla</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Toyota">Toyota</option>
                    <option value="ETC">ETC</option>
                </select>
                </label>
            </form>
            
            <form>
                <label class="inputpageelectric-model">
                Select Vehicle Model
                <select class ="inputpageelectric-select">
                    <option value="3">3</option>
                    <option value="S">S</option>
                    <option value="Y">Y</option>
                    <option value="X">X</option>
                </select>
                </label>
            </form>


        </section>
        </Layout>
    )

}


export default InputPageElectric;