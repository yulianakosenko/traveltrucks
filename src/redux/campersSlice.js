import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

/* =========================
   ASYNC THUNK
========================= */

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState }) => {
    const state = getState().campers;

    const params = {
      page: state.page,
      limit: 4,
      location: state.location || undefined,
      vehicleType: state.vehicleType || undefined,
      ...state.equipment,
    };

    const { data } = await axios.get(API_URL, { params });
    return data;
  },
);

/* =========================
   INITIAL STATE
========================= */

const initialState = {
  items: [],
  isLoading: false,
  error: null,

  page: 1,

  location: "",

  vehicleType: "",

  equipment: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  },
};

/* =========================
   SLICE
========================= */

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },

    setLocation(state, action) {
      state.location = action.payload;
      state.page = 1;
      state.items = [];
    },

    toggleEquipment(state, action) {
      const key = action.payload;
      state.equipment[key] = !state.equipment[key];
      state.page = 1;
      state.items = [];
    },

    setVehicleType(state, action) {
      state.vehicleType = action.payload;
      state.page = 1;
      state.items = [];
    },

    resetFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.equipment = {
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
      };
      state.page = 1;
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items =
          state.page === 1
            ? action.payload
            : [...state.items, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

/* =========================
   EXPORTS
========================= */

export const {
  incrementPage,
  setLocation,
  toggleEquipment,
  setVehicleType,
  resetFilters,
} = campersSlice.actions;

export default campersSlice.reducer;
