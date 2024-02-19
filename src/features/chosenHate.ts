import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosenHates: [],
};

const chosenHatesSlice = createSlice({
  name: 'chosenHates',
  initialState,
  reducers: {
    setChosenHates: (state, action) => {
      state.chosenHates = action.payload;
    },
  }
});

export const { setChosenHates } = chosenHatesSlice.actions;
export default chosenHatesSlice.reducer;
