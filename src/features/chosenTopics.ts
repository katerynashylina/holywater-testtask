import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosenTopics: [],
};

const chosenTopicsSlice = createSlice({
  name: 'chosenTopics',
  initialState,
  reducers: {
    setChosenTopics: (state, action) => {
      state.chosenTopics = action.payload;
    },
  }
});

export const { setChosenTopics } = chosenTopicsSlice.actions;
export default chosenTopicsSlice.reducer;
