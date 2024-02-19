
import { createSlice } from "@reduxjs/toolkit";
import { stepsEng as steps } from "../data/dataEn";

const initialState = {
  stepNumber: steps[0],
};

const stepNumberSlice = createSlice({
  name: 'stepNumber',
  initialState,
  reducers: {
    setStepNumber: (state, action) => {
      state.stepNumber = action.payload;
    },
  },
});

export const { setStepNumber } = stepNumberSlice.actions;
export default stepNumberSlice.reducer;
