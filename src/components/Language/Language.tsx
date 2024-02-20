import classNames from 'classnames';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { languages, stepsEng } from '../../data/dataEn';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { OptionType } from '../../types/optionType';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { handleOptionClick } from '../../helpers/optionClick';
import './Language.scss';
import { setPlusPersantage } from '../../features/persantage';

type Props = {
  storedLanguage: OptionType,
  setStoredLanguage: any,
}

// export const Language = () => {
export const Language: React.FC<Props> = ({ storedLanguage, setStoredLanguage }) => {
  // const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const { step } = useParams<{ step: string }>();

  const handleClick = (language: OptionType) => {
    setStoredLanguage(language);
    dispatch(setPlusPersantage());
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
          <Link
            className={classNames("page__option page__option--long", {
              'page__option--checked': language.id === storedLanguage.id,
            })}
            onClick={() => setStoredLanguage(language)}
            key={language.id}
            to='/quiz/2'
          >
            {language.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
