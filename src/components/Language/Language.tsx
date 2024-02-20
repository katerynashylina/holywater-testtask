import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { languages, stepsEng } from '../../data/dataEn';
import { useAppDispatch } from '../../app/hooks';
import { OptionType } from '../../types/optionType';
import { setPlusPersantage } from '../../features/persantage';
import './Language.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredLanguage: any,
}

export const Language: React.FC<Props> = ({ storedLanguage, setStoredLanguage }) => {
  const dispatch = useAppDispatch();

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
            onClick={() => handleClick(language)}
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
