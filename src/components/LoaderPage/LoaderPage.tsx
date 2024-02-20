import { getTranslatedData } from "../../helpers/translatedData";
import { OptionType } from "../../types/optionType";
import { Loader } from "../Loader/Loader";
import './LoaderPage.scss';

type Props = {
  storedLanguage: OptionType,
}

export const LoaderPage: React.FC<Props> = ({ storedLanguage }) => {
  const translatedData = getTranslatedData(storedLanguage);

  return (
    <section className="loader-page page__section">
      <div className="loader-page__loader">
        <Loader />
      </div>

      <p className="loader-page__text">
        {translatedData && translatedData.text[2].loaderText}
      </p>
    </section>
  );
}