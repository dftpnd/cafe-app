import React from 'react';
import style from './header.css';

const Header = () => 
<header className="header">
    <div className="header__box brake">
        <div className="header__wrapper">
            <div className="header__icon">
                <div className="header__logo">
                    <img src="/images/cacio-e-vino.jpg" alt="Cacio e Vino" height={110} />
                </div>
            </div>
            <div className="header__info">
                <a href="tel:+78432453020" className="header__number">
                    +78432453020
                </a>
            </div>
        </div>
    </div>
</header>;

export default Header;

