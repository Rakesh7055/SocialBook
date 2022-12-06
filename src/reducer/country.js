import { createReducer } from "@reduxjs/toolkit";

export const fatchCountryApi = () => {
  return async (dispatch) => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const result = await res.json();
    dispatch({ type: "COUNTRY", payload: result });
  };
};

const initializeState = {
  countryData: [],
};

export const countryDetail = createReducer(initializeState, (builder) => {
  builder.addCase("COUNTRY", (state, action) => {
    state.countryData = [...state.countryData, ...action.payload];
  });
});
