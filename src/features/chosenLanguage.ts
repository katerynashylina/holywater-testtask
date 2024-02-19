import { createSlice } from '@reduxjs/toolkit';

import { languages } from '../data/dataEn';
import { useLocalStorage } from '../helpers/useLocalStorage';

const initialState = {
  chosenLanguage: languages[0],
};

const chosenLanguageSlice = createSlice({
  name: 'chosenLanguage',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.chosenLanguage = action.payload;
    },
  }
});

export const { setLanguage } = chosenLanguageSlice.actions;
export default chosenLanguageSlice.reducer;
