import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  vehicle: null,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export const { setVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
