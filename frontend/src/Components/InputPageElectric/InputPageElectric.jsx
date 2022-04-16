import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./InputPageElectric.css";

function InputPageElectric() {
  /*Select will eventually turn into a <select multiple={true} value={['B', 'C']}>
   */
  const [vehicleName, setName] = useState("");
  const [vehicleModel, setModel] = useState("");
  const [avgMPGe, setAvgMPGe] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [electricPrice, setElectricPrice] = useState(0);

  //When user click Continue, we submit the form
  const submitInput = (e) => {
    e.preventDefault();
    const savedData = {
      vehicleName: vehicleName,
      vehicleModel: vehicleModel,
      avgMPGe: avgMPGe,
      yearlyMileage: yearlyMileage,
      electricPrice: electricPrice,
    };
    //Check the console on web to see the data we're passing
    console.log(savedData);
  };

  return (
    <Layout>
      <section>
        <form
          className="inputpageelectric-container"
          onSubmit={(e) => submitInput(e)}
        >
          <div className="left-container">
            <DropdownSelect
              title="Select Vehicle Name"
              options={["Tesla", "Mazda", "Toyota", "ETC"]}
              setState={setName}
            />
            <DropdownSelect
              title="Select Vehicle Model"
              options={["3", "S", "Y", "X"]}
              setState={setModel}
            />
          </div>
          <div className="right-container">
            <InputField label="Enter your average MPGe" setState={setAvgMPGe} />
            <InputField
              label="Enter your yearly mileage"
              setState={setYearlyMileage}
            />
            <InputField
              label="Enter current electric price"
              setState={setElectricPrice}
            />
          </div>
          <button type="submit" className="submit-input">
            Continue
          </button>
        </form>
      </section>
    </Layout>
  );
}

function DropdownSelect(props) {
  const { title, options, setState } = props;
  return (
    <>
      <label className="inputpageelectric-dropdown">{title}</label>
      <select
        className="inputpageelectric-select"
        onChange={(e) => setState(e.target.value)}
      >
        {options.map((option) => {
          return <option value={option}> {option}</option>;
        })}
      </select>
    </>
  );
}

function InputField(props) {
  const { label, setState } = props;
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="user-input"
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
}

export default InputPageElectric;
