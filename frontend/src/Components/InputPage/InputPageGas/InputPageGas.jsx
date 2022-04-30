import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import {
  DropdownSelect,
  InputField,
} from "../InputPageElectric/InputPageElectric";
import "../InputPageElectric/InputPageElectric.css";

//Dummy data

function InputPageGas() {
  const [vehicleName, setName] = useState("Honda");
  const [vehicleModel, setModel] = useState("Civic");
  const [avgMPG, setAvgMPG] = useState(0);
  const navigate = useNavigate();
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [gasVehicle, setGasVehicles] = useState([
    {
      id: "g1",
      name: "Honda",
      model: ["Civic", "Accord", "Oddyssey"],
      price: [12, 15, 20],
    },
    {
      id: "g2",
      name: "Toyota",
      model: ["Camry", "Corolla", "Venza"],
      price: [13, 12, 11],
    },
    {
      id: "g3",
      name: "BMW",
      model: ["5 Series", "7 Series 740i"],
      price: [14, 15],
    },
  ]);
  const [filteredModel, setFilteredModel] = useState(gasVehicle[0].model);
  let filteredVehicles = [
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

  useEffect(() => {
    if (vehicleName.length > 0) {
      filteredVehicles = gasVehicle.filter((e) => e.name == vehicleName);
      setFilteredModel(filteredVehicles[0].model);
    }
  }, [vehicleName]);

  //When user click Continue, we submit the form
  const submitInput = (e) => {
    e.preventDefault();
    let filteredOne = filteredVehicles.find((e) => e.name == vehicleName);
    let priceIndex = filteredOne.model.indexOf(vehicleModel);
    const savedData = {
      vehicleName: vehicleName,
      vehicleModel: vehicleModel,
      avgMPG: avgMPG,
      yearlyMileage: yearlyMileage,
      gasPrice: gasPrice,
      pricePerMile: filteredOne.price[priceIndex - 1],
    };
    //Check the console on web to see the data we're passing
    console.log(savedData);
    navigate("/result");
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
              options={gasVehicle}
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
