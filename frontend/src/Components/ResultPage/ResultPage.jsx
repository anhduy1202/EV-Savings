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
    (vehicle.yearlyMileage / vehicle.avgMPGe).toFixed(2)
  );
  const [isSaved, setSave] = useState(false);
  const saveResult = () => {
    dispatch(saveVehicle(vehicle));
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
            <span className="gallon">
              {` $ ${((gallonUsed * vehicle.pricePerMile) / 100).toFixed(2)}`}
            </span>
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
