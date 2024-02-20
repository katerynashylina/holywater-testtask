import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Language } from "../Language/Language";
import { Gender } from "../Gender/Gender";
import { Age } from "../Age/Age";
import { Hate } from "../Hate/Hate";
import { Topics } from "../Topics/Topics";
import { OptionType } from "../../types/optionType";
import { OptionImgType } from "../../types/optionImgType";

type Props = {
  storedLanguage: OptionType,
  setStoredLanguage: any,
  storedGender: OptionImgType,
  setStoredGender: any,
  storedAge: OptionType,
  setStoredAge: any,
  setStoredHates: any,
  setStoredTopics: any,
}

const Quiz: React.FC<Props> = ({
  storedLanguage,
  setStoredLanguage,
  storedGender,
  setStoredGender,
  storedAge,
  setStoredHates,
  setStoredTopics,
  setStoredAge,
}) => {
  const { stepNumber } = useParams();
  console.log(stepNumber)


  switch (stepNumber) {
    case '1':
      return (
        <Language
          storedLanguage={storedLanguage}
          setStoredLanguage={setStoredLanguage}
        />
      );
    case '2':
      return (
        <Gender
          storedLanguage={storedLanguage}
          storedGender={storedGender}
          setStoredGender={setStoredGender}
        />
      );
    case '3':
      return (
        <Age
          setStoredAge={setStoredAge}
          storedAge={storedAge}
          storedLanguage={storedLanguage}
        />
      );
    case '4':
      return (
        <Hate
          storedLanguage={storedLanguage}
          setStoredHates={setStoredHates}
        />
      );
    case '5':
      return (
        <Topics
          storedLanguage={storedLanguage}
          setStoredTopics={setStoredTopics}
        />
      );
    default:
      return <NotFound />;
  }
};

export default Quiz;