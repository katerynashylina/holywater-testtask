import { Link } from "react-router-dom";
import './NotFound.scss';
import { OptionType } from "../../types/optionType";
import { getTranslatedData } from "../../helpers/translatedData";

type Props = {
  storedLanguage: OptionType,
}

export const NotFound: React.FC<Props> = ({ storedLanguage }) => {
  const translatedData = getTranslatedData(storedLanguage);

  return (
    <section className="error">
      <h1 className="error__404">404</h1>

      <h1>{translatedData && translatedData.text[4].oops}</h1>

      <p className="error__subtitle">
        {translatedData && translatedData.text[4].sorry}
      </p>

      <p className="error__desc">
        {translatedData && translatedData.text[4].maybe}
        <Link to="/" className="error__link"> Home page </Link>
        ?
      </p>
    </section>
  );
}