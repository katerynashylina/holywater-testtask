import { configureStore } from "@reduxjs/toolkit";

import persantageReducer from "../features/persantage";
import stepNumberReducer from '../features/stepNumber';
import isEmailValidReducer from '../features/isEmailValid';

export const store = configureStore({
  reducer: {
    persantage: persantageReducer,
    stepNumber: stepNumberReducer,
    isEmailValid: isEmailValidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
