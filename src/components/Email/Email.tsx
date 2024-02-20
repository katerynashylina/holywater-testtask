import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ButtonNext } from '../ButtonNext/ButtonNext';
import { getTranslatedData } from '../../helpers/translatedData';
import { OptionType } from '../../types/optionType';
import { useState } from 'react';
import './Email.scss';

type Props = {
  storedLanguage: OptionType,
  email: string,
  setEmail: any,
}

export const Email: React.FC<Props> = ({ storedLanguage, email, setEmail }) => {
  const navigate = useNavigate();
  const translatedData = getTranslatedData(storedLanguage);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrors, setEmailErrors] = useState({ email: '' });

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    setIsEmailValid(isValid);
    setEmailErrors({ email: isValid ? '' : (translatedData?.text[1].error || '') });
    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (validateEmail(email)) {
      navigate('/thank-you');
    }
  }

  return (
    <section className="email page__section">
      <form onSubmit={handleSubmit}>
        <div className="email__top">
          <h1>
            {translatedData && translatedData.text[1].email}
          </h1>
          
          <p className="page__pretext">
            {translatedData && translatedData.text[1].enterEm}
          </p>
        </div>

        <div className="email__form">
          <input
            type="email"
            name="email"
            className={classNames('email__input', {
              'email__input--error': !isEmailValid,
              'email__input--valid': isEmailValid,
            })}
            placeholder='Your email'
            value={email}
            onChange={handleEmailChange}
          />

          {emailErrors.email &&
            <p className="email__error">{emailErrors.email}</p>
          }
        </div>

        <p className='email__text'>
          {translatedData && translatedData.text[1].terms}
        </p>

        <ButtonNext
          disabled={!isEmailValid}
          storedLanguage={storedLanguage}
          onClick={handleClick}
        />
      </form>
    </section>
  ); 
}
