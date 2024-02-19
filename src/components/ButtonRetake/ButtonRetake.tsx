import { useNavigate } from 'react-router-dom';
import { getTranslatedData } from '../../helpers/translatedData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setStepNumber } from '../../features/stepNumber';
import { stepsEng } from '../../data/dataEn';

export const ButtonRetake = () => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const translatedData = getTranslatedData(chosenLanguage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setStepNumber(stepsEng[0]));

    navigate('/');
  };

  return (
    <button 
      className="button button--valid"
      onClick={handleClick}
    >
      {translatedData && translatedData.text[0].btnRetake}
    </button>
  );
}