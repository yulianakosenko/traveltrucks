import { createSelector } from "@reduxjs/toolkit";

const selectCampersState = (state) => state.campers;
const selectFiltersState = (state) => state.filters;

export const selectIsLoading = createSelector(
  [selectCampersState],
  (campersState) => campersState.isLoading,
);

export const selectFilteredCampers = createSelector(
  [selectCampersState, selectFiltersState],
  (campersState, filters) => {
    const { location, vehicleType, equipment } = filters;

    return campersState.items.filter((camper) => {
      if (
        location &&
        !camper.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      if (vehicleType && camper.form !== vehicleType) {
        return false;
      }

      if (equipment.length > 0) {
        return equipment.every((eq) => camper[eq]);
      }

      return true;
    });
  },
);
