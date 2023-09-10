import { useState, useCallback, useEffect } from "react";

export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
export function useFormWithValidation() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);


  console.log(values)
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });



    let errorMessage = "";

    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!value) {
        errorMessage = 'Это обязательное поле';
        setIsValid(false)
      }
      else if (!emailPattern.test(value) && value) {
        errorMessage = 'Введите корректный email';
        setIsValid(false)
      }
    }

    if (name === 'userName') {
      const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
      if (!value) {
        errorMessage = 'Это обязательное поле';
        setIsValid(false)
      }
      else if (!namePattern.test(value)) {
        errorMessage = 'Имя содержит недопустимый символ';
        setIsValid(false)
      } else if (value.length < 3) {
        errorMessage = 'Имя должно содержать более 2 символов';
        setIsValid(false)
      }else if (value.length > 16 && value) {
        errorMessage = 'Максимальная длина имени 16 символов';
        setIsValid(false)
      }
    }

    if (name === 'password') {
      if (!value) {
        errorMessage = 'Это обязательное поле';
        setIsValid(false)
      }
      else if (value.length < 8 && value) {
        errorMessage = 'Пароль должен содержать минимум 8 символов';
        setIsValid(false)
      }
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  useEffect(() => {
    setIsValid(
      Object.values(errors).every((error) => !error) && values.email && values.password  
    );
  }, [values, errors]);

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
