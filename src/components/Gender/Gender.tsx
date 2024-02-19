import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { GenderCard } from '../GenderCard/GenderCard';
import { OptionImgType } from '../../types/optionImgType';
import { handleOptionClick } from '../../helpers/optionClick';
import { getTranslatedData } from '../../helpers/translatedData';
import { setChosenHates } from '../../features/chosenHate';
import './Gender.scss';
import { setGender } from '../../features/chosenGender';

export const Gender = () => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [_, setStoredGender] = useLocalStorage(null, 'gender');

  const translatedData = getTranslatedData(chosenLanguage);
  const genders = translatedData ? translatedData.genders : [];

  const handleClick = (gender: OptionImgType) => {
    setStoredGender(gender);
    dispatch(setGender(gender));
    
    setTimeout(() => {
      handleOptionClick(dispatch, stepNumber, navigate);
    }, 500);
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
            handleClick={handleClick}
            key={gender.id}
          />
        ))}
      </div>
    </section>
  );
}