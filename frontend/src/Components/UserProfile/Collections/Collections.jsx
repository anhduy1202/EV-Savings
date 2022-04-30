import React, { useEffect, useState } from "react";
import "./collection.css";
import "../userprofile.css";
import { useDispatch } from "react-redux";
import { removeVehicle } from "../../../redux/userSlice";

const Collections = (props) => {
  const { collections } = props;
  const [cheapestId, setId] = useState(0);
  const dispatch = useDispatch();
  const [isDeleteOpened, setShow] = useState(false);
  let min = Infinity;
  useEffect(() => {
    collections?.map((vehicle) => {
      if (parseFloat(vehicle.cost) < min) {
        min = vehicle.cost;
      }
    });
    let cheapestVehicle = collections.find((e) => parseFloat(e.cost) == min);
    setId(cheapestVehicle?.carId);
  }, []);

  const deleteVehicle = (id) => {
    isDeleteOpened && dispatch(removeVehicle(id));
  };

  return (
    <div className="info-container">
      {collections.length <= 0 && (
        <p className="empty">Wow! Such empty, try adding some vehicles</p>
      )}
      {collections?.map((vehicle, idx) => {
        return (
          <div className="user-collections">
            <p
              className="user-collections-label"
              onClick={() => deleteVehicle(vehicle.carId)}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              {" "}
              {isDeleteOpened ? `X` : `0${idx + 1}`}{" "}
            </p>
            <p className="info-name">
              Name: <span> {vehicle.vehicleName}</span>
            </p>
            <p className="info-model">
              Model: <span> {vehicle.vehicleModel}</span>
            </p>
            <p className="info-cost">
              Cost: <span>{` $ ${vehicle.cost}`}</span>
            </p>
            {vehicle.carId === cheapestId && (
              <p className="cheapest"> Cheapest </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
