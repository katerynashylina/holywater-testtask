import { configureStore } from "@reduxjs/toolkit";

import persantageReducer from "../features/persantage";

export const store = configureStore({
  reducer: {
    persantage: persantageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
