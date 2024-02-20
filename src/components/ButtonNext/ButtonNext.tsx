import classNames from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { getTranslatedData } from '../../helpers/translatedData';
import './ButtonNext.scss';
import { OptionType } from '../../types/optionType';

type Props = {
  onClick?: () => void,
  disabled?: boolean,
  storedLanguage: OptionType,
  type?: "button" | "submit" | "reset",
}

export const ButtonNext: React.FC<Props> = ({ onClick, disabled, storedLanguage, type = "button" }) => {
  const translatedData = getTranslatedData(storedLanguage);

  return (
    <button 
      className={classNames("button", {
        "button--disabled": disabled,
        "button--valid": !disabled,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {translatedData && translatedData.text[0].btnNext}
    </button>
  );
}