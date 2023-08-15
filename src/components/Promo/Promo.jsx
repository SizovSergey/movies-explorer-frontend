import React from 'react';
import promoLogo from '../../images/promo__logo.svg'

const Promo = () => {
    return (
        <div className='promo'>
            <div className="promo__container">
                <div className='promo__title-container'>
                <h1 className="promo__title">Учебный проект студента факультета&nbsp;Веб-разработки.</h1>
                <span className='promo__caption'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                </div>
        <img src={promoLogo} className="promo__logo" alt="логотип компоненты Promo" />
      </div>
        </div> 
    );
}

export default Promo;