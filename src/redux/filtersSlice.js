import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [], 
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    toggleEquipment(state, action) {
      const item = action.payload;
      state.equipment = state.equipment.includes(item)
        ? state.equipment.filter((i) => i !== item)
        : [...state.equipment, item];
    },
    setVehicleType(state, action) {
      const value = action.payload;
      state.vehicleType = state.vehicleType === value ? "" : value;
    },
  },
});

export const { setLocation, toggleEquipment, setVehicleType } =
  filtersSlice.actions;

export default filtersSlice.reducer;
