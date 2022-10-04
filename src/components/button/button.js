import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

import { useSelector } from 'react-redux';

export default function Button() {
    const busket = useSelector(state => state.products.busket);

    console.log('Button render');

    return (
        <button>
            <Link to='/busket'>
                <img
                    src='https://cdn-icons-png.flaticon.com/512/2956/2956820.png'
                    alt='busket'
                    className='header__busket' />
                <div>{busket.length > 0 ? busket.length : ''}</div>
            </Link>
        </button>
    )
}