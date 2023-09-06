import React from 'react';
import usePopupClose from '../../hooks/usePopupClose';
import succesImg from '../../images/succes.svg';
import errorImg from '../../images/error.svg';

const InfoPopup = ({ isOpen, onClose, message, PopupFlag }) => {

    usePopupClose(isOpen, onClose);

    return (
        <div className={`info-popup ${isOpen ? "info-popup_opened" : ""}`}>
            <div className={`info-popup__container`}>
                <img src={!PopupFlag ? errorImg : succesImg} alt={!PopupFlag ? 'ошибка' : 'успешно'} className='info-popup__icon' />
                <p className='info-popup__text'>{message}</p>
                <button className="info-popup__close-button"
                    type="button"
                    onClick={onClose} />
            </div>
        </div>
    );
};

export default InfoPopup;