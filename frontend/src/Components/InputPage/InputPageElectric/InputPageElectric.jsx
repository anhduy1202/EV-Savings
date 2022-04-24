import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import "./InputPageElectric.css";



function InputPageElectric() {
  const [vehicleName, setName] = useState("");
  const [vehicleModel, setModel] = useState("");
  const [electricVehicles, setElectricVehicles] = useState([
    {
      id: "e1",
      name: "Tesla",
      model: ["3", "S", "Y", "Z"],
    },
    {
      id: "e2",
      name: "Toyota",
      model: ["EBX70"],
    },
    {
      id: "e3",
      name: "Honda",
      model: ["EZY90"],
    },
  ]);
  const [filteredModel, setFilteredModel] = useState(electricVehicles[0].model);
  let filteredVehicles = [
    {
      id: "e1",
      name: "Tesla",
      model: ["3", "S", "Y", "Z"],
    },
    {
      id: "e2",
      name: "Toyota",
      model: ["EBX70"],
    },
    {
      id: "e3",
      name: "Honda",
      model: ["EZY90"],
    },
  ];
  const [avgMPGe, setAvgMPGe] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [electricPrice, setElectricPrice] = useState(0);

  useEffect(() => {
    if (vehicleName.length > 0) {
      filteredVehicles = electricVehicles.filter((e) => e.name == vehicleName);
      setFilteredModel(filteredVehicles[0].model);
    }
  }, [vehicleName]);

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
              type="name"
              title="Select Vehicle Name"
              options={electricVehicles}
              setState={setName}
            />
            <DropdownSelect
              type="model"
              title="Select Vehicle Model"
              options={filteredModel}
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

export function DropdownSelect(props) {
  const { type, title, options, setState } = props;
  return (
    <>
      <label className="inputpageelectric-dropdown">{title}</label>
      <select
        className="inputpageelectric-select"
        onChange={(e) => setState(e.target.value)}
      >
        {type == "name" ? (
          <>
            {options.map((option) => {
              return <option key={option.id} value={option.name}> {option.name}</option>;
            })}
          </>
        ) : (
          <>
            {options.map((option,idx) => {
              return <option key={idx} value={option}> {option}</option>;
            })}
          </>
        )}
      </select>
    </>
  );
}

export function InputField(props) {
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
