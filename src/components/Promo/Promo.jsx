import React from 'react';
import promoLogo from '../../images/landing-logo.png'

const Promo = () => {
    return (
        <>
        <section className='promo'>
            <div className="promo__container">
                <div className='promo__title-container'>
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <span className='promo__caption'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                    <a className='promo__button' href="#about">Узнать больше</a>
                </div>
                <img src={promoLogo} className="promo__logo" alt="логотип компоненты Promo" />
            </div>
        </section>
        </>
    );
}

export default Promo;