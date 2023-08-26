import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <a className="not-found__link" onClick={back}>Назад</a>
        </section>
    );
}

export default NotFound;