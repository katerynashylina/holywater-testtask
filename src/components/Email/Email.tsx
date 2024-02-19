import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ButtonNext } from '../ButtonNext/ButtonNext';
import { useEmailValidation } from '../../helpers/validateEmail';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTranslatedData } from '../../helpers/translatedData';
import { setEmail } from '../../features/usersEmail';
import './Email.scss';

export const Email = () => {
  const navigate = useNavigate();
  const isEmailValid = useAppSelector(state => state.isEmailValid.isEmailValid);
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const usersEmail = useAppSelector(state => state.usersEmail.email);
  const translatedData = getTranslatedData(chosenLanguage);
  const dispatch = useAppDispatch();

  const {
    emailData,
    emailErrors,
    handleInputChange,
    handleSubmit,
  } = useEmailValidation();

  const handleClick = () => {
    dispatch(setEmail(emailData))
    handleSubmit();
    
    if (isEmailValid) {
      navigate('/thank-you');
    }
  };


  return (
    <section className="email page__section">
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
          value={emailData.email}
          onChange={handleInputChange}
        />

        {emailErrors.email &&
          <p className="email__error">{emailErrors.email}</p>
        }
      </div>

      <p className='email__text'>
        {translatedData && translatedData.text[1].terms}
      </p>

      <ButtonNext
        onClick={handleClick}
        disabled={!isEmailValid}
      />
    </section>
  ); 
}