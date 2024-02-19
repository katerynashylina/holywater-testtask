import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setMinusPersantage } from '../../features/persantage';
import { stepsEng as steps } from '../../data/dataEn';
import { setStepNumber } from '../../features/stepNumber';
import arrow from '../../images/back-arw.svg';
import './ProgressBar.scss';

export const ProgressBar = () => {
  const persantage = useAppSelector(state => state.persantage.persantage);
  const stepNumber = useAppSelector(state => state.stepNumber.stepNumber);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    dispatch(setMinusPersantage());

    const currentStepIndex = steps.findIndex(step => step.number === stepNumber.number);
    if (currentStepIndex > 0) {
      dispatch(setStepNumber(steps[currentStepIndex - 1]));
    }

  navigate(`/quiz/${stepNumber.number - 1}`);
  };

  return (
    <div className="progress">
      <div className="progress__top">
        <button
          className='progress__button'
          onClick={handleBackClick}
          style={{
            opacity: stepNumber.number !== 1 ? "1" : "0",
          }}
        >
          <img src={arrow} alt="arrow" className='progress__arrow' />
        </button>

        <p className="progress__text">
          <span style={{ color: '#e4229c' }}>{`${stepNumber.number}`}</span> / 5
        </p>
      </div>

      <div className="progress__bar">
        <div
          style={{
            height: "100%",
            width: `${persantage}%`,
            backgroundColor: "#e4229c",
            borderRadius: '8px',
            transition: "backgroundColor 0.3s"
          }}
        ></div>
      </div>
    </div>
  );
}