import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OptionType } from "../../types/optionType";
import { setAge } from "../../features/chosenAge";
import { handleOptionClick } from "../../helpers/optionClick";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import { getTranslatedData } from "../../helpers/translatedData";
import './Age.scss';

export const Age = () => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const chosenAge = useAppSelector(state => state.chosenAge.chosenAge);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [storedAge, setStoredAge] = useLocalStorage(null, 'age');

  const translatedData = getTranslatedData(chosenLanguage);
  const ages = translatedData ? translatedData.ages : [];

  const handleClick = (age: OptionType) => {
    dispatch(setAge(age));
    setStoredAge(age);
    
    setTimeout(() => {
      handleOptionClick(dispatch, stepNumber, navigate);
    }, 1000);
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
              'page__option--checked': age.id === chosenAge.id,
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
