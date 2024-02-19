import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHateChecked: false,
};

const isHateCheckedSlice = createSlice({
  name: 'isHateChecked',
  initialState,
  reducers: {
    setIsHateChecked: (state) => {
      state.isHateChecked = !state.isHateChecked;
    },
  }
});

export const { setIsHateChecked } = isHateCheckedSlice.actions;
export default isHateCheckedSlice.reducer;
