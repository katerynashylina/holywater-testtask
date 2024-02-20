import { useNavigate } from 'react-router-dom';
import { getTranslatedData } from '../../helpers/translatedData';
import { OptionType } from '../../types/optionType';
import { useAppDispatch } from '../../app/hooks';
import { setDefaulPersantage } from '../../features/persantage';

type Props = {
  storedLanguage: OptionType,
}

export const ButtonRetake: React.FC<Props> = ({ storedLanguage }) => {
  const translatedData = getTranslatedData(storedLanguage);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setDefaulPersantage());

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