import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  DropdownSelect,
  InputField,
} from "../InputPageElectric/InputPageElectric";
import "../InputPageElectric/InputPageElectric.css";

//Dummy data
const gasVehicles = [
  {
    id: "g1",
    name: "Honda",
    model: ["Civic", "Accord", "Oddyssey"],
  },
  {
    id: "g2",
    name: "Toyota",
    model: ["Camry", "Corolla", "Venza"],
  },
  {
    id: "g3",
    name: "BMW",
    model: ["5 Series", "7 Series 740i"],
  },
];

function InputPageGas() {
  const [vehicleName, setName] = useState("");
  const [vehicleModel, setModel] = useState("");
  const [avgMPG, setAvgMPG] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);

  //When user click Continue, we submit the form
  const submitInput = (e) => {
    e.preventDefault();
    const savedData = {
      vehicleName: vehicleName,
      vehicleModel: vehicleModel,
      avgMPG: avgMPG,
      yearlyMileage: yearlyMileage,
      gasPrice: gasPrice,
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
              options={["Honda", "Toyota", "BMW"]}
              setState={setName}
            />
            <DropdownSelect
              title="Select Vehicle Model"
              options={[
                "Civic",
                "Accord",
                "Oddyssey",
                "Camry",
                "Corolla",
                "Venza",
                "5 Series",
                "7 Series 740i",
              ]}
              setState={setModel}
            />
          </div>
          <div className="right-container">
            <InputField label="Enter your average MPG" setState={setAvgMPG} />
            <InputField
              label="Enter your yearly mileage"
              setState={setYearlyMileage}
            />
            <InputField
              label="Enter current gas price"
              setState={setGasPrice}
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

export default InputPageGas;
