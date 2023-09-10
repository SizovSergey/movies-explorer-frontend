
import { useState, useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(value) && value) {
        setErrors({...errors, [name]: 'Введите корректный email'});
      } else {
        setErrors({...errors, [name]: ''});
      }
    }

    if (name === 'userName') {
      const namePattern = /^[а-яА-ЯёЁ\s-]+$/;
      if (!value) {
        setErrors({...errors, [name]: 'Это обязательное поле'});
      } else if (!namePattern.test(value)) {
        setErrors({...errors, [name]: 'Имя должно содержать только кириллицу'});
      } else if (value.length < 3) {
        setErrors({...errors, [name]: 'Имя должно содержать более 2 символов'});
      } else {
        setErrors({...errors, [name]: ''});
      }
    }
    
    if (name === 'password') {
      if (value.length < 8 && value) {
        setErrors({...errors, [name]: 'Пароль должен содержать минимум 8 символов'});
      } else {
        setErrors({...errors, [name]: ''});
      }
    }

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

