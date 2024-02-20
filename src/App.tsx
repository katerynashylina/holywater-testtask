import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { LoaderPage } from './components/LoaderPage/LoaderPage';
import { Email } from './components/Email/Email';
import { Thank } from './components/Thank/Thank';
import { NotFound } from './components/NotFound/NotFound';
import { useLocalStorage } from './helpers/useLocalStorage';
import Quiz from './components/Quiz/Quiz';
import './App.scss';
import './styles/reset.scss';
import './styles/normalize.scss';

export const App = () => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage(null, 'language');
  const [storedGender, setStoredGender] = useLocalStorage(null, 'gender');
  const [storedAge, setStoredAge] = useLocalStorage(null, 'age');
  const [storedHates, setStoredHates] = useLocalStorage([], 'selected-hates');
  const [storedTopics, setStoredTopics] = useLocalStorage([], 'selected-topics');
  const [email, setEmail] = useLocalStorage('', 'email');


  return (
    <div className="page">
      <div className="page__container">
        <Routes>
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
              <NotFound
                storedLanguage={storedLanguage}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}