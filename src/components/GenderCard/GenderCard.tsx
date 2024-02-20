import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { OptionImgType } from "../../types/optionImgType";
import './GenderCard.scss';
import { Link } from "react-router-dom";

type Props = {
  gender: OptionImgType,
  handleClick: (gender: OptionImgType) => void,
  storedGender: OptionImgType,
}

export const GenderCard: React.FC<Props> = ({ gender, handleClick, storedGender }) => {
  return (
    <Link
      className={classNames("gender-card page__option", {
        'page__option--checked': gender.id === storedGender.id,
      })}
      onClick={() => handleClick(gender)}
      to='/quiz/3'
    >
      <img
        src={`img/${gender.img}`}
        alt={`${gender.name}`}
        className="gender-card__img"
      />

      <p>
        {gender.name}
      </p>
    </Link>
  );
}