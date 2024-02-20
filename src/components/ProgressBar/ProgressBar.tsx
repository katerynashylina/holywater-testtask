import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setMinusPersantage } from '../../features/persantage';
import arrow from '../../images/back-arw.svg';
import './ProgressBar.scss';

export const ProgressBar = () => {
  const persantage = useAppSelector(state => state.persantage.persantage);
  const { stepNumber } = useParams();
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    dispatch(setMinusPersantage());

    if (stepNumber) {
      const prevStepNumber = parseInt(stepNumber, 10) - 1;
      if (prevStepNumber >= 1) {
        navigate(`/quiz/${prevStepNumber}`);
      }
    }
  };

  return (
    <div className="progress">
      <div className="progress__top">
        <button
          className='progress__button'
          onClick={handleBackClick}
          style={{
            opacity: stepNumber && parseInt(stepNumber, 10) !== 1 ? "1" : "0",
          }}
        >
          <img src={arrow} alt="arrow" className='progress__arrow' />
        </button>

        <p className="progress__text">
          <span style={{ color: '#e4229c' }}>{`${stepNumber}`}</span> / 5
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
          id='progress__bar--inside'
        ></div>
      </div>
    </div>
  );
}