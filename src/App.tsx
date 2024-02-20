import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Language } from './components/Language/Language';
import { Gender } from './components/Gender/Gender';
import { Age } from './components/Age/Age';
import { Hate } from './components/Hate/Hate';
import { Topics } from './components/Topics/Topics';
import { LoaderPage } from './components/LoaderPage/LoaderPage';
import { Email } from './components/Email/Email';
import { Thank } from './components/Thank/Thank';
import './App.scss';
import './styles/reset.scss';
import './styles/normalize.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { NotFound } from './components/NotFound/NotFound';
import { useLocalStorage } from './helpers/useLocalStorage';
import { languages } from './data/dataEn';
import { setStepNumber } from './features/stepNumber';
import Quiz from './components/Quiz/Quiz';

export const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [storedLanguage, setStoredLanguage] = useLocalStorage(null, 'language');
  const [storedGender, setStoredGender] = useLocalStorage(null, 'gender');
  const [storedAge, setStoredAge] = useLocalStorage(null, 'age');
  const [storedHates, setStoredHates] = useLocalStorage([], 'selected-hates');
  const [storedTopics, setStoredTopics] = useLocalStorage([], 'selected-topics');
  const [email, setEmail] = useLocalStorage('', 'email');
  
  const [isQuizPage, setIsQuizPage] = useState(false);

  useEffect(() => {
    setIsQuizPage(location.pathname.startsWith('/quiz'));
  }, [location.pathname]);

  return (
    <div className="page">
      <div className="page__container">
        {isQuizPage && <Header />}

        <Routes>
          {/* <Route
            path="/quiz/1"
            element={(
              <Language
                storedLanguage={storedLanguage}
                setStoredLanguage={setStoredLanguage}
              />
            )}
          />
          <Route
            path="/"
            element={
              <Navigate to="/quiz/1" replace />
            }
          />
          <Route
            path="/quiz/2"
            element={(
              <Gender
                storedLanguage={storedLanguage}
                storedGender={storedGender}
                setStoredGender={setStoredGender}
              />
            )}
          />
          <Route
            path="/quiz/3"
            element={(
              <Age
                setStoredAge={setStoredAge}
                storedAge={storedAge}
                storedLanguage={storedLanguage}
              />
            )}
          />
          <Route
            path="/quiz/4"
            element={(
              <Hate
                storedLanguage={storedLanguage}
                setStoredHates={setStoredHates}
              />
            )}
          />
          <Route
            path="/quiz/5"
            element={(
              <Topics
                storedLanguage={storedLanguage}
                setStoredTopics={setStoredTopics}
              />
            )}
          /> */}
          <Route path="/" element={<Navigate to="/quiz/1" replace />} />
          <Route path="/quiz/:stepNumber" element={(
            <Quiz
              storedLanguage={storedLanguage}
              setStoredLanguage={setStoredLanguage}
              storedGender={storedGender}
              setStoredGender={setStoredGender}
              storedAge={storedAge}
              setStoredAge={setStoredAge}
              setStoredHates={setStoredHates}
              setStoredTopics={setStoredTopics}
            />
          )} />
          <Route
            path="/loading"
            element={(
              <LoaderPage
                storedLanguage={storedLanguage}
              />
            )}
          />
          <Route
            path="/email"
            element={(
              <Email
                storedLanguage={storedLanguage}
                email={email}
                setEmail={setEmail}
              />
            )}
          />
          <Route
            path="/thank-you"
            element={(
              <Thank
                storedLanguage={storedLanguage}
                storedGender={storedGender}
                storedAge={storedAge}
                storedHates={storedHates}
                storedTopics={storedTopics}
                email={email}
              />
            )}
          />
          <Route
            path="*"
            element={
              <NotFound />
            }
          />
        </Routes>
      </div>
    </div>
  );
}