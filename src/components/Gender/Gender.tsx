import { useAppDispatch } from '../../app/hooks';
import { GenderCard } from '../GenderCard/GenderCard';
import { OptionImgType } from '../../types/optionImgType';
import { getTranslatedData } from '../../helpers/translatedData';
import { OptionType } from '../../types/optionType';
import { setPlusPersantage } from '../../features/persantage';
import './Gender.scss';

type Props = {
  storedLanguage: OptionType,
  setStoredGender: any,
  storedGender: OptionImgType,
}

export const Gender: React.FC<Props> = ({ storedLanguage, setStoredGender, storedGender }) => {
  const dispatch = useAppDispatch();
  
  const translatedData = getTranslatedData(storedLanguage);
  const genders = translatedData ? translatedData.genders : [];

  const handleClick = (gender: OptionImgType) => {
    setStoredGender(gender);
    dispatch(setPlusPersantage());
  };

  return (
    <section className="gender page__section">
      <h1>
        {translatedData && translatedData.steps[1].title}
      </h1>

      <p className="page__pretext">
        {translatedData && translatedData.steps[1].subTitle}
      </p>

      <div className="gender__items">
        {genders.map((gender: OptionImgType) => (
          <GenderCard
            gender={gender}
            storedGender={storedGender}
            handleClick={handleClick}
            key={gender.id}
          />
        ))}
      </div>
    </section>
  );
}