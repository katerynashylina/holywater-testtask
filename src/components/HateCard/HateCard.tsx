import classNames from "classnames";
import { OptionType } from "../../types/optionType";
import './HateCard.scss';

type Props = {
  hate: OptionType;
  isHateSelected: boolean,
  toggleHateSelected: React.Dispatch<React.SetStateAction<boolean>>,
}

export const HateCard: React.FC<Props> = ({
  hate,
  isHateSelected,
  toggleHateSelected
}) => {
  const handleToggleHateChecked = () => {
    toggleHateSelected(prevState => !prevState);
  };

  return (
      <label
        className={classNames("page__option page__option--long hate-card", {
          "page__option--checked": isHateSelected,
        })}
      >
        <p>{hate.name}</p>

        <input 
          type="checkbox" 
          className="hate-card__input" 
          checked={isHateSelected}
          onChange={handleToggleHateChecked}
        />
        <span className="hate-card__checkmark"></span>
      </label>
  );
}