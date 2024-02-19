import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { GenderCard } from '../GenderCard/GenderCard';
import { OptionImgType } from '../../types/optionImgType';
import { handleOptionClick } from '../../helpers/optionClick';
import { getTranslatedData } from '../../helpers/translatedData';
import { setChosenHates } from '../../features/chosenHate';
import './Gender.scss';

export const Gender = () => {
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [storedGender, setStoredGender] = useLocalStorage(null, 'gender');

  const translatedData = getTranslatedData(chosenLanguage) || { text: {}, steps: [], genders: [], ages: [], hates: [], topics: [] };

  const handleClick = (gender: OptionImgType) => {
    setStoredGender(gender);
    dispatch(setChosenHates(gender));
    
    setTimeout(() => {
      handleOptionClick(dispatch, stepNumber, navigate);
    }, 1000);
  };

  return (
    <section className="gender page__section">
      <h1>
        {translatedData.steps[1].title}
      </h1>

      <p className="page__pretext">
        {translatedData.steps[1].subTitle}
      </p>

      <div className="gender__items">
        {translatedData.genders.map((gender: OptionImgType) => (
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