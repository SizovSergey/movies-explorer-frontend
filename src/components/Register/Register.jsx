import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";

const Register = ({handleRegister}) => {

    const [formValue, setFormValue] = React.useState({
        userName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

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
            handleSubmit = {handleSubmit}
        >
            <label className="authTemplate__placeholder" htmlFor="userName">Имя
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
            <label className="authTemplate__placeholder" htmlFor="regEmail">Email
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
            <label className="authTemplate__placeholder" htmlFor="regPass">Пароль
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
        </AuthTemplate>
    );

}

export default Register;