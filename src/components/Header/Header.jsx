import React, {useState, useEffect} from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <h2 className="header__title">
                        Ты сегодня покормил кота?
                    </h2>
                </div>
            </header>
        </>
    );
}

export default Header;