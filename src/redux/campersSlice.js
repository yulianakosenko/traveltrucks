import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers } from "../api/campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    const { filters, campers } = thunkAPI.getState();
    const data = await getCampers({
      ...filters,
      page: campers.page,
      limit: 4,
    });
    return data;
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
