import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;;
    },
  }
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
