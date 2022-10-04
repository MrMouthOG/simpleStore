import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import Button from '../button/button';

export default function Header() {
    console.log('Header render');

    return (
        <header className='header__wrapper'>
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lamoda_logo.svg/2560px-Lamoda_logo.svg.png'
                    alt='logo'
                    className='header__logo' />
            </Link>
            <Button />
        </header>
    )
}