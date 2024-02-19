import { createSlice } from '@reduxjs/toolkit';

import { gendersEng as genders } from '../data/dataEn';

const initialState = {
  chosenGender: genders[0],
};

const chosenGenderSlice = createSlice({
  name: 'chosenGender',
  initialState,
  reducers: {
    setGender: (state, action) => {
      state.chosenGender = action.payload;
    },
  }
});

export const { setGender } = chosenGenderSlice.actions;
export default chosenGenderSlice.reducer;
