import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { languages, stepsEng } from '../../data/dataEn';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { OptionType } from '../../types/optionType';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { handleOptionClick } from '../../helpers/optionClick';
import { setLanguage } from '../../features/chosenLanguage';
import './Language.scss';

export const Language = () => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [storedLanguage, setStoredLanguage] = useLocalStorage(null, 'language');

  const handleClick = (language: OptionType) => {
    setStoredLanguage(language);
    dispatch(setLanguage(language));
    
    setTimeout(() => {
      handleOptionClick(dispatch, stepNumber, navigate);
    }, 1000);
  };

  return (
    <section className="language page__section">
      <h1>
        {stepsEng[0].title}
      </h1>

      <p className="page__pretext">
        {stepsEng[0].subTitle}
      </p>

      <div className="language__items">
        {languages.map(language => (
          <p
            className={classNames("page__option page__option--long", {
              'page__option--checked': language.id === chosenLanguage.id,
            })}
            onClick={() => handleClick(language)}
            key={language.id}
          >
            {language.name}
          </p>
        ))}
      </div>
    </section>
  );
}
