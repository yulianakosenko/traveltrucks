import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleEquipment(state, action) {
      const value = action.payload;
      if (state.equipment.includes(value)) {
        state.equipment = state.equipment.filter((v) => v !== value);
      } else {
        state.equipment.push(value);
      }
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setLocation, setVehicleType, toggleEquipment, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
