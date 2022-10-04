import React from 'react';

import './productItem.css';

import { useDispatch } from 'react-redux';
import { addToBusket } from '../../store/productsSlice';

export default function ProductItem({ item }) {
    const dispatch = useDispatch();
    const { image, title, brand, value } = item;

    console.log('ProductItem render');

    const addHandler = (product) => {
        const data = { ...product, quantity: 1 }
        dispatch(addToBusket(data))
    };

    return (
        <div className='productItem__wrapper' onClick={() => addHandler(item)}>
            <img src={image} alt='desc' />
            <div className='productItem__title'>{brand} {title}</div>
            {/* <div className='productItem__brand'>Brand: {brand}</div> */}
            <div className='productItem__price'>$ {value}</div>
        </div>
    )
}