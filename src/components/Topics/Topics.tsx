import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNext } from "../ButtonNext/ButtonNext";
import { TopicsCard } from "../TopicsCard/TopicsCard";
import { getTranslatedData } from "../../helpers/translatedData";
import { OptionType } from "../../types/optionType";
import { useAppDispatch } from "../../app/hooks";
import { setPlusPersantage } from "../../features/persantage";
import './Topics.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredTopics: any,
}

export const Topics: React.FC<Props> = ({ storedLanguage, setStoredTopics }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedTopics, setSelectedTopics] = useState<{ [key: string]: boolean }>({});

  const translatedData = getTranslatedData(storedLanguage);
  const topics = translatedData ? translatedData.topics : [];

  const toggleTopicSelected = (topicId: string) => {
    setSelectedTopics(prevState => ({
      ...prevState,
      [topicId]: !prevState[topicId]
    }));
  };

  const selectedTopicsValues = Object.values(selectedTopics);
  const hasAtLeastThreeSelectedTopics = Object.keys(selectedTopics).length >= 3;
  const allSelectedTopicsTrue = selectedTopicsValues.every(value => value === true);

  const handleClick = () => {
    setStoredTopics(selectedTopics);
    dispatch(setPlusPersantage());

    if (hasAtLeastThreeSelectedTopics && allSelectedTopicsTrue) {
      navigate('/loading');
    }
  };

  return (
    <section className="topics page__section">
      <div className="topics__top">
        <h1>
          {translatedData && translatedData.steps[4].title}
        </h1>

        <p className="page__pretext">
          {translatedData && translatedData.steps[4].subTitle}
        </p>
      </div>

      <div className="topics__items">
        {topics.map(topic => (
          <TopicsCard
            topic={topic}
            isTopicSelected={selectedTopics[topic.id] || false}
            toggleTopicSelected={() => toggleTopicSelected(`${topic.id}`)}
            key={topic.id}
          />
        ))}
      </div>

      <ButtonNext
        onClick={handleClick}
        disabled={!(hasAtLeastThreeSelectedTopics && allSelectedTopicsTrue)}
        storedLanguage={storedLanguage}
      />
    </section>
  );
}
