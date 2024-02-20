import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { GenderCard } from '../GenderCard/GenderCard';
import { OptionImgType } from '../../types/optionImgType';
import { handleOptionClick } from '../../helpers/optionClick';
import { getTranslatedData } from '../../helpers/translatedData';
import './Gender.scss';
import { OptionType } from '../../types/optionType';

type Props = {
  storedLanguage: OptionType,
  setStoredGender: any,
  storedGender: OptionImgType,
}

export const Gender: React.FC<Props> = ({ storedLanguage, setStoredGender, storedGender }) => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const translatedData = getTranslatedData(storedLanguage);
  const genders = translatedData ? translatedData.genders : [];

  const handleClick = (gender: OptionImgType) => {
    setStoredGender(gender);

    navigate(`/quiz/3`);
    
    // setTimeout(() => {
    //   handleOptionClick(dispatch, stepNumber, navigate);
    // }, 500);
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