import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEmailValid: true,
};

const isEmailValidSlice = createSlice({
  name: 'isEmailValid',
  initialState,
  reducers: {
    setIsEmailValid: (state, action) => {
      state.isEmailValid = action.payload;;
    },
  }
});

export const { setIsEmailValid } = isEmailValidSlice.actions;
export default isEmailValidSlice.reducer;
