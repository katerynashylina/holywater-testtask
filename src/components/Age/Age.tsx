import classNames from "classnames";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { OptionType } from "../../types/optionType";
import { getTranslatedData } from "../../helpers/translatedData";
import { setPlusPersantage } from "../../features/persantage";
import './Age.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredAge: any,
  storedAge: OptionType,
}

export const Age: React.FC<Props> = ({ storedLanguage, setStoredAge, storedAge }) => {
  const dispatch = useAppDispatch();

  const translatedData = getTranslatedData(storedLanguage);
  const ages = translatedData ? translatedData.ages : [];

  const handleClick = (age: OptionType) => {
    setStoredAge(age);
    dispatch(setPlusPersantage());
  };

  return (
    <section className="age page__section">
      <h1>
        {translatedData && translatedData.steps[2].title}
      </h1>

      <p className="page__pretext">
        {translatedData && translatedData.steps[2].subTitle}
      </p>

      <div className="age__elements">
        {ages.map((age: OptionType) => (
          <Link
            className={classNames("page__option page__option--long", {
              'page__option--checked': age.id === storedAge.id,
            })}
            onClick={() => handleClick(age)}
            key={age.id}
            to='/quiz/4'
          >
            {age.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
