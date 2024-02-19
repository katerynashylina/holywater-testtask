import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNext } from "../ButtonNext/ButtonNext";
import { TopicsCard } from "../TopicsCard/TopicsCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setChosenTopics } from "../../features/chosenTopics";
import { getTranslatedData } from "../../helpers/translatedData";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import './Topics.scss';

export const Topics = () => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<{ [key: string]: boolean }>({});

  const [storedTopics, setStoredTopics] = useLocalStorage([], 'selected-topics');

  const translatedData = getTranslatedData(chosenLanguage);
  const topics = translatedData ? translatedData.topics : [];

  const toggleTopicSelected = (topicId: string) => {
    setSelectedTopics(prevState => ({
      ...prevState,
      [topicId]: !prevState[topicId]
    }));
  };

  const handleClick = () => {
    setStoredTopics(selectedTopics);
    dispatch(setChosenTopics(selectedTopics));

    navigate('/loading');
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
        disabled={!Object.values(selectedTopics).some(selected => selected)}
      />
    </section>
  );
}
