import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__title">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h2>
                <div className="footer__content">
                    <p className="footer__year">© {new Date().getFullYear()}</p>
                    <ul className="footer__links">
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SizovSergey" target="_blank" rel="noreferrer" className="footer__link">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;