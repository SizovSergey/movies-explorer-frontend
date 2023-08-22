import React from 'react';
import promoLogo from '../../images/promo__logo.svg'

const Promo = () => {
    return (
   
        <div className='promo'>
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <span className='promo__caption'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
        <img src={promoLogo} className="promo__logo" alt="логотип компоненты Promo" />
        <button className='promo__button' >Узнать больше</button>
      </div>
        </div> 

    );
}

export default Promo;