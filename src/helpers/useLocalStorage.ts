import { useState, useEffect } from 'react';
import { OptionType } from '../types/optionType';
import { OptionImgType } from '../types/optionImgType';
import { EmailType } from '../types/EmailType';

export function useLocalStorage(
  initialValue: OptionType | OptionType[] | OptionImgType | OptionImgType[] | EmailType | string | null,
  key: string,
) {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
