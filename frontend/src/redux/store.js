import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicleSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    vehicle: vehicleReducer,
    user: userReducer
  },
});
