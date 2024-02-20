import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OptionType } from "../../types/optionType";
import { handleOptionClick } from "../../helpers/optionClick";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import { getTranslatedData } from "../../helpers/translatedData";
import './Age.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredAge: any,
  storedAge: OptionType,
}

export const Age: React.FC<Props> = ({ storedLanguage, setStoredAge, storedAge }) => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const translatedData = getTranslatedData(storedLanguage);
  const ages = translatedData ? translatedData.ages : [];

  const handleClick = (age: OptionType) => {
    setStoredAge(age);

    navigate(`/quiz/4`);
    
    // setTimeout(() => {
    //   handleOptionClick(dispatch, stepNumber, navigate);
    // }, 500);
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
          <p
            className={classNames("page__option page__option--long", {
              'page__option--checked': age.id === storedAge.id,
            })}
            onClick={() => handleClick(age)}
            key={age.id}
          >
            {age.name}
          </p>
        ))}
      </div>
    </section>
  );
}
