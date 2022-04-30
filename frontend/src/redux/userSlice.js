import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
      name: "John Doe",
      vehicles: []
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveVehicle: (state,action) => {
        state.user.vehicles.push(action.payload);
    },
    removeVehicle: (state,action) => {
        state.user.vehicles = state.user.vehicles.filter((v) => v?.carId !== action.payload);
    }
  },
});

export const { saveVehicle, removeVehicle } = userSlice.actions;
export default userSlice.reducer;
