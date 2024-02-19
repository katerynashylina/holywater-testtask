import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ButtonNext } from "../ButtonNext/ButtonNext";
import { HateCard } from "../HateCard/HateCard";
import { handleOptionClick } from "../../helpers/optionClick";
import { OptionType } from "../../types/optionType";
import { getTranslatedData } from "../../helpers/translatedData";
import { setChosenHates } from "../../features/chosenHate";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import './Hate.scss';

export const Hate = () => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedHates, setSelectedHates] = useState<{ [key: string]: boolean }>({});

  const [storedHates, setStoredHates] = useLocalStorage([], 'selected-hates');

  const translatedData = getTranslatedData(chosenLanguage);
  const hates = translatedData ? translatedData.hates : [];

  const toggleHateSelected = (hateId: string) => {
    setSelectedHates(prevState => ({
      ...prevState,
      [hateId]: !prevState[hateId]
    }));
  };

  const isAnyHateSelected = Object.values(selectedHates).some(selected => selected);

  const handleClick = () => {
    setStoredHates(selectedHates);
    dispatch(setChosenHates(selectedHates));

    setTimeout(() => {
      handleOptionClick(dispatch, stepNumber, navigate);
    }, 1000);
  }

  return (
    <section className="hate page__section">
      <h1>
        {translatedData && translatedData.steps[3].title}
      </h1>

      <p className="page__pretext">
        {translatedData && translatedData.steps[3].subTitle}
      </p>

      <div className="hate__elements">
        {hates.map((hate: OptionType) => (
          <HateCard
            hate={hate}
            key={hate.id}
            isHateSelected={selectedHates[hate.id] || false}
            toggleHateSelected={() => toggleHateSelected(`${hate.id}`)}
          />
        ))}
      </div>

      <ButtonNext
        onClick={handleClick}
        disabled={!isAnyHateSelected}
      />
    </section>
  );
}
