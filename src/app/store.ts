import { configureStore } from "@reduxjs/toolkit";

import persantageReducer from "../features/persantage";
import stepNumberReducer from '../features/stepNumber';
import isEmailValidReducer from '../features/isEmailValid';
import isHateCheckedReducer from '../features/isHateChecked';
import chosenLanguageReducer from '../features/chosenLanguage';
import chosenGenderReducer from '../features/chosenGender';
import chosenAgeReducer from '../features/chosenAge';
import chosenHateReducer from '../features/chosenHate';
import chosenTopicsReducer from '../features/chosenTopics';
import usersEmailReducer from '../features/usersEmail';

export const store = configureStore({
  reducer: {
    persantage: persantageReducer,
    stepNumber: stepNumberReducer,
    isEmailValid: isEmailValidReducer,
    isHateChecked: isHateCheckedReducer,
    chosenLanguage: chosenLanguageReducer,
    chosenGender: chosenGenderReducer,
    chosenAge: chosenAgeReducer,
    chosenHate: chosenHateReducer,
    chosenTopics: chosenTopicsReducer,
    usersEmail: usersEmailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
