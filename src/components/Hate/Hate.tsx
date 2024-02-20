import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { ButtonNext } from "../ButtonNext/ButtonNext";
import { HateCard } from "../HateCard/HateCard";
import { OptionType } from "../../types/optionType";
import { getTranslatedData } from "../../helpers/translatedData";
import { setPlusPersantage } from "../../features/persantage";
import './Hate.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredHates: any,
}

export const Hate: React.FC<Props> = ({ storedLanguage, setStoredHates }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedHates, setSelectedHates] = useState<{ [key: string]: boolean }>({});

  const translatedData = getTranslatedData(storedLanguage);
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
    dispatch(setPlusPersantage());

    if (isAnyHateSelected) navigate('/quiz/5')
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
        storedLanguage={storedLanguage}
      />
    </section>
  );
}
