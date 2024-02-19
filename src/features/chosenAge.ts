import { createSlice } from '@reduxjs/toolkit';

import { agesEng } from '../data/dataEn';

const initialState = {
  chosenAge: agesEng[0],
};

const chosenAgeSlice = createSlice({
  name: 'chosenAge',
  initialState,
  reducers: {
    setAge: (state, action) => {
      state.chosenAge = action.payload;
    },
  }
});

export const { setAge } = chosenAgeSlice.actions;
export default chosenAgeSlice.reducer;
