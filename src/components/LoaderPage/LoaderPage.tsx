import { useAppSelector } from "../../app/hooks";
import { getTranslatedData } from "../../helpers/translatedData";
import { Loader } from "../Loader/Loader";
import './LoaderPage.scss';

export const LoaderPage = () => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const translatedData = getTranslatedData(chosenLanguage);

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