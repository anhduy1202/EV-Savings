import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveVehicle } from "../../redux/userSlice";
import Layout from "../Layout/Layout";
import "./result.css";

const ResultPage = () => {
  const vehicle = useSelector((state) => state.vehicle.vehicle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [gallonUsed, setGallon] = useState(
    vehicle.type === "electric"
      ? (vehicle.yearlyMileage / vehicle.avgMPGe).toFixed(2)
      : (vehicle.yearlyMileage / vehicle.avgMPG).toFixed(2)
  );
  const [isSaved, setSave] = useState(false);
  const [cost, setCost] = useState(
    ((gallonUsed * vehicle.pricePerMile) / 100).toFixed(2)
  );
  const saveResult = () => {
    const data = {
      ...vehicle,
      cost: cost,
    };
    dispatch(saveVehicle(data));
    setSave(true);
  };

  return (
    <Layout>
      <div className="result-container">
        <p className="result-heading"> Result </p>
        <div className="display">
          <p className="display-item">
            Vehicle Name:
            <span className="name"> {vehicle.vehicleName} </span>
          </p>
          <p className="display-item">
            Vehicle Model:
            <span className="model"> {vehicle.vehicleModel} </span>
          </p>
          <p className="display-item">
            Gallon used: <span className="gallon"> {gallonUsed} </span>
          </p>
          <p className="display-item">
            Cost:
            <span className="gallon">{` $ ${cost}`}</span>
          </p>
        </div>
        <p className="save-label"> Save result ? </p>
        {isSaved ? (
          <button
            disabled
            onClick={saveResult}
            className={isSaved ? "saved-btn" : "save-btn"}
          >
            {isSaved ? "Your result is saved" : "Yes please"}
          </button>
        ) : (
          <button
            onClick={saveResult}
            className={isSaved ? "saved-btn" : "save-btn"}
          >
            {isSaved ? "Your result is saved" : "Yes please"}
          </button>
        )}
        <p onClick={() => navigate(-1)} className="go-back">
          {" "}
          Go back
        </p>
      </div>
    </Layout>
  );
};

export default ResultPage;
