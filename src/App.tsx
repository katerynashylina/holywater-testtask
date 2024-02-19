import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

export const App = () => {
  const location = useLocation();
  
  const [isQuizPage, setIsQuizPage] = useState(false);

  useEffect(() => {
    setIsQuizPage(location.pathname.startsWith('/quiz'));
  }, [location.pathname]);  

  return (
    <div className="page">
      <div className="page__container">
        {isQuizPage && <Header />}

        <Routes>
          <Route
            path="/quiz/1"
            element={(
              <Language />
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
              <Gender />
            )}
          />
          <Route
            path="/quiz/3"
            element={(
              <Age />
            )}
          />
          <Route
            path="/quiz/4"
            element={(
              <Hate />
            )}
          />
          <Route
            path="/quiz/5"
            element={(
              <Topics />
            )}
          />
          <Route
            path="/loading"
            element={(
              <LoaderPage />
            )}
          />
          <Route
            path="/email"
            element={(
              <Email />
            )}
          />
          <Route
            path="/thank-you"
            element={(
              <Thank />
            )}
          />
        </Routes>
      </div>
    </div>
  );
}