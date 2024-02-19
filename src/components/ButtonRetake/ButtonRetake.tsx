import { useNavigate } from 'react-router-dom';
import '../ButtonNext/ButtonNext.scss';
import { getTranslatedData } from '../../helpers/translatedData';
import { useAppSelector } from '../../app/hooks';

export const ButtonRetake = () => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const translatedData = getTranslatedData(chosenLanguage);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button 
      className="button"
      onClick={handleClick}
    >
      {translatedData && translatedData.text[0].btnRetake}
    </button>
  );
}