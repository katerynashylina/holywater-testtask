import { OptionImgType } from "../../types/optionImgType";
import './TopicsCard.scss';
import classNames from "classnames";

type Props = {
  topic: OptionImgType;
  isTopicSelected: boolean,
  toggleTopicSelected: () => void,
}

export const TopicsCard: React.FC<Props> = ({
  topic,
  isTopicSelected,
  toggleTopicSelected
}) => {
  return (
    <div
      className={classNames("topic", {
        "topic--selected": isTopicSelected,
      })}
      onClick={toggleTopicSelected}
    >
      <img
        src={`img/${topic.img}`}
        alt={`${topic.name}`}
        className="topic__img"
      />

      <p className="topic__text">
        {topic.name}
      </p>
    </div>
  );
}