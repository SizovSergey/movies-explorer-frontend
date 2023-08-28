import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import Preloader from '../Preloader/Preloader';

const Register = ({ handleRegister }) => {

    const [formValue, setFormValue] = React.useState({
        userName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        const { email, password } = formValue;
        e.preventDefault();
        if (!email && !password) return;
        handleRegister(formValue);
    }

    return (
        <AuthTemplate
            title="Добро пожаловать!"
            name="register"
            buttonText="Зарегистрироваться"
            handleSubmit={handleSubmit}
        >
            <label className="authTemplate__input-container" htmlFor="userName">
                <span className='authTemplate__placeholder'>Имя</span>
                <input
                    onChange={handleChange}
                    value={formValue.userName}
                    type="text"
                    className="authTemplate__input"
                    id="email"
                    name="userName"
                    required
                />
            </label>
            <div className='authTemplate__line'></div>
            <label className="authTemplate__input-container" htmlFor="regEmail">
                <span className='authTemplate__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={formValue.email}
                    type="email"
                    className="authTemplate__input"
                    id="email"
                    name="email"
                    required
                />
            </label>
            <div className='authTemplate__line'></div>
            <label className="authTemplate__input-container" htmlFor="regPass">
                <span className='authTemplate__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={formValue.password}
                    type="password"
                    className="authTemplate__input"
                    id="password"
                    name="password"
                    minLength="8"
                    maxLength="10"
                    required
                />
            </label>
            <div className='authTemplate__line'></div>
            <span className='authTemplate__error'>Что-то пошло не так...</span>
        </AuthTemplate>
    );

}

export default Register;