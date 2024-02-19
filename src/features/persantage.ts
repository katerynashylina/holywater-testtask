import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persantage: 16,
};

const persantageSlice = createSlice({
  name: 'persantage',
  initialState,
  reducers: {
    setPlusPersantage: (state) => {
      state.persantage += 16;
    },
    setMinusPersantage: (state) => {
      state.persantage -= 16;
    },
  },
});

export const { setPlusPersantage, setMinusPersantage } = persantageSlice.actions;
export default persantageSlice.reducer;
