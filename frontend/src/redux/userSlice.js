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
    }
  },
});

export const { saveVehicle } = userSlice.actions;
export default userSlice.reducer;
