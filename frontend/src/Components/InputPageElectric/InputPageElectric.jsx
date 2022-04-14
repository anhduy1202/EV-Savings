import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./InputPageElectric.css";

function InputPageElectric() {
  /*Select will eventually turn into a <select multiple={true} value={['B', 'C']}>
   */
  const [vehicleName,setName] = useState();
  const [vehicleModel,setModel] = useState();

  return (
    <Layout>
      <section className="inputpageelectric-container">
        <h2 className="inputpageelectric-header">Choose your vehicle type</h2>
        <form>
          <DropdownSelect
            name="Name"
            label="inputpageelectric-name"
            select="inputpageelectric-select"
            options={["Tesla", "Mazda", "Toyota", "ETC"]}
            elementState={vehicleName}
            setState={setName}
          />
        </form>

        <form>
          <DropdownSelect
            name="Model"
            label="inputpageelectric-model"
            select="inputpageelectric-select"
            options={["3", "S", "Y", "X"]}
            elementState={vehicleModel}
            setState={setModel}
          />
        </form>
      </section>
    </Layout>
  );
}

function DropdownSelect(props) {
  const { name, label, select, options, elementState, setState } = props;
  return (
    <label className={label}>
      Select Vehicle {name}
      <select className={select} onChange={(e) => setState(e.target.value)}>
        {options.map((option) => {
          return <option value={option}> {option}</option>;
        })}
      </select>
      <h1> {elementState} </h1>
    </label>
  );
}

export default InputPageElectric;
