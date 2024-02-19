import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.scss';

export const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const animationDuration = 5000;
    const framesPerSecond = 60;
    const totalFrames = framesPerSecond * (animationDuration / 1000);
    const increment = 100 / totalFrames;

    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        const nextPercentage = prevPercentage + increment;
        return nextPercentage > 100 ? 100 : nextPercentage;
      });
    }, 1000 / framesPerSecond);

    setTimeout(() => {
      clearInterval(interval);
      navigate('/email');
    }, animationDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader__content">
        <svg className='loader__svg'>
          <circle cx={70} cy={70} r={70} className='loader__circle'></circle>
          <circle cx={70} cy={70} r={70} className='loader__circle'></circle>
        </svg>
        <div className="loader__percents">
          <h2>{Math.round(percentage)}%</h2>
        </div>
      </div>
    </div>
  );
};