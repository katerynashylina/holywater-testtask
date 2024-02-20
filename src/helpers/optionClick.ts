import { NavigateFunction } from "react-router-dom";
import { setStepNumber } from "../features/stepNumber";
import { Dispatch } from "redux";
import { StepType } from "../types/stepType";
import { setPlusPersantage } from "../features/persantage";
import { stepsEng as steps } from "../data/dataEn";

export const handleOptionClick = (
  dispatch: Dispatch,
  navigate: NavigateFunction,
) => {
  dispatch(setPlusPersantage());

  const pathName = window.location.pathname;
  // const currentStepNumber = pathName ? parseInt(pathName.split('/').pop(), 10) : 0;

  //   if (currentStepNumber < 5) {
  //     navigate(`/quiz/${currentStepNumber + 1}`);
  //   }
}