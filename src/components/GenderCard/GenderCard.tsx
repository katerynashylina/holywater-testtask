import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { OptionImgType } from "../../types/optionImgType";
import './GenderCard.scss';

type Props = {
  gender: OptionImgType,
  handleClick: (gender: OptionImgType) => void,
  storedGender: OptionImgType,
}

export const GenderCard: React.FC<Props> = ({ gender, handleClick, storedGender }) => {
  return (
    <div 
      className={classNames("gender-card page__option", {
        'page__option--checked': gender.id === storedGender.id,
      })}
      onClick={() => handleClick(gender)}
    >
      <img
        src={`img/${gender.img}`}
        alt={`${gender.name}`}
        className="gender-card__img"
      />

      <p>
        {gender.name}
      </p>
    </div>
  );
}