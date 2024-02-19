import classNames from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { getTranslatedData } from '../../helpers/translatedData';
import './ButtonNext.scss';

type Props = {
  onClick: () => void,
  disabled: boolean,
}

export const ButtonNext: React.FC<Props> = ({ onClick, disabled }) => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const translatedData = getTranslatedData(chosenLanguage);

  return (
    <button 
      className={classNames("button", {
        "button--disabled": disabled,
        "button--valid": !disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {translatedData && translatedData.text[0].btnNext}
    </button>
  );
}