import { NavigateFunction } from "react-router-dom";
import { setStepNumber } from "../features/stepNumber";
import { Dispatch } from "redux";
import { StepType } from "../types/stepType";
import { setPlusPersantage } from "../features/persantage";
import { stepsEng as steps } from "../data/dataEn";

export const handleOptionClick = (
  dispatch: Dispatch,
  stepNumber: StepType,
  navigate: NavigateFunction,
) => {
  dispatch(setPlusPersantage());

  const currentStepIndex = steps.findIndex(step => step.number === stepNumber.number);
  if (currentStepIndex < steps.length - 1) {
    dispatch(setStepNumber(steps[currentStepIndex + 1]));
  }

  navigate(`/quiz/${stepNumber.number + 1}`);
}