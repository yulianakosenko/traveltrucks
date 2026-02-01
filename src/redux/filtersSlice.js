import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    AC: false,
    kitchen: false,
  },
  reducers: {
    setFilter(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    resetFilters() {
      return {
        location: "",
        form: "",
        AC: false,
        kitchen: false,
      };
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
