import { agesEng, gendersEng, hatesEng, languages, stepsEng, textEng, topicsEng } from "../data/dataEn";
import { agesFr, gendersFr, hatesFr, stepsFr, textFr, topicsFr } from "../data/dataFr";
import { agesGer, gendersGer, hatesGer, stepsGer, textGer, topicsGer } from "../data/dataGer";
import { agesSp, gendersSp, hatesSp, stepsSp, textSp, topicsSp } from "../data/dataSp";
import { OptionType } from "../types/optionType";

export const getTranslatedData = (chosenLanguage: OptionType ) => {
  if (chosenLanguage === languages[0]) {
    return {
      text: textEng,
      steps: stepsEng,
      genders: gendersEng,
      ages: agesEng,
      hates: hatesEng,
      topics: topicsEng,
    };
  }
  if (chosenLanguage === languages[1]) {
    return {
      text: textFr,
      steps: stepsFr,
      genders: gendersFr,
      ages: agesFr,
      hates: hatesFr,
      topics: topicsFr,
    };
  }
  if (chosenLanguage === languages[2]) {
    return {
      text: textGer,
      steps: stepsGer,
      genders: gendersGer,
      ages: agesGer,
      hates: hatesGer,
      topics: topicsGer,
    };
  }
  if (chosenLanguage === languages[3]) {
    return {
      text: textSp,
      steps: stepsSp,
      genders: gendersSp,
      ages: agesSp,
      hates: hatesSp,
      topics: topicsSp,
    };
  }
}