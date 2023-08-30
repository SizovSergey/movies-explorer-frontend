import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";

const Login = () => {

    const [formValue, setFormValue] = React.useState ({
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const validate = () => {
        const errorsList = {};

        if (!formValue.email) {
            errorsList.email = 'Введите email';
        }

        if (!formValue.password || formValue.password.length < 8) {
            errorsList.password = 'Пароль должен быть не менее 8 символов';
        }

        return errorsList;
    };

    const handleSubmit = (e) => {
        // const {  email, password } = formValue; 
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
    }

    return (
        <AuthTemplate
            title="Рады видеть!"
            name="login"
            buttonText="Войти"
            handleSubmit = {handleSubmit}
        >
            <label className="authTemplate__input-container" htmlFor="regEmail">
            <span className='authTemplate__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={formValue.email}
                    type="email"
                    className="authTemplate__input"
                    id="email"
                    name="email"
                    placeholder="test@mail.ru"
                />
            </label>
            <span className="authTemplate__error">{errors.email}</span>
            <label className="authTemplate__input-container" htmlFor="regPass">
            <span className='authTemplate__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={formValue.password}
                    type="password"
                    className="authTemplate__input"
                    id="password"
                    name="password"
                    placeholder="12345678"
                />
            </label>
            <span className="authTemplate__error">{errors.password}</span>
        </AuthTemplate>
    );

}

export default Login;