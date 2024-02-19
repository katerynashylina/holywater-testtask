import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setIsEmailValid } from '../features/isEmailValid';
import { useLocalStorage } from './useLocalStorage';
import { EmailType } from '../types/EmailType';

export const useEmailValidation = () => {
  const initialValue = { email: "" };
  const [emailData, setEmailData] = useLocalStorage(initialValue, 'email-info');
  const [emailErrors, setEmailErrors] = useState<EmailType>(initialValue);
  const dispatch = useAppDispatch();

  const validateEmail = () => {
    const newErrors = { ...initialValue };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailData.email.trim() || !emailRegex.test(emailData.email)) {
      newErrors.email = 'Valid email is required';
    } else {
      newErrors.email = '';
    }

    const isFormValid = !newErrors.email;
    setEmailErrors(newErrors);

    dispatch(setIsEmailValid(isFormValid));
    return isFormValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailData((prevData: EmailType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const isValidForm = validateEmail();
    dispatch(setIsEmailValid(isValidForm));
  };

  return {
    emailData,
    emailErrors,
    handleInputChange,
    handleSubmit,
  };
};
