import { useLocation, useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Language } from "../Language/Language";
import { Gender } from "../Gender/Gender";
import { Age } from "../Age/Age";
import { Hate } from "../Hate/Hate";
import { Topics } from "../Topics/Topics";
import { OptionType } from "../../types/optionType";
import { OptionImgType } from "../../types/optionImgType";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";

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
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith('/quiz');

  switch (stepNumber) {
    case '1':
      return (
        <div>
          {isQuizPage && <Header />}
          <Language
            storedLanguage={storedLanguage}
            setStoredLanguage={setStoredLanguage}
          />
        </div>
      );
    case '2':
      return (
        <div>
          {isQuizPage && <Header />}
          <Gender
            storedLanguage={storedLanguage}
            storedGender={storedGender}
            setStoredGender={setStoredGender}
          />
        </div>
      );
    case '3':
      return (
        <div>
          {isQuizPage && <Header />}
          <Age
            setStoredAge={setStoredAge}
            storedAge={storedAge}
            storedLanguage={storedLanguage}
          />
        </div>
      );
    case '4':
      return (
        <div>
          {isQuizPage && <Header />}
          <Hate
            storedLanguage={storedLanguage}
            setStoredHates={setStoredHates}
          />
        </div>
      );
    case '5':
      return (
        <div>
          {isQuizPage && <Header />}
          <Topics
            storedLanguage={storedLanguage}
            setStoredTopics={setStoredTopics}
          />
        </div>
      );
    default:
      return (
        <NotFound
          storedLanguage={storedLanguage}
        />
      );
  }
};

export default Quiz;