import React, { useEffect, useState } from 'react';

import './busketItem.css';

import { useDispatch } from 'react-redux';
import { removeIntoBusket } from '../../store/productsSlice';

export default function BusketItem({ item }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { image, title, value, brand } = item;

    console.log('BusketItem render');

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item]);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className='busketItem__wrapper'>
            <div className='busketItem__product'>
                <img src={image} alt='img' />
                <div className='busketItem__title'>{brand} {title}</div>
            </div>
            <div className='busketItem__price'>${value}</div>
            <select value={quantity} onChange={handleChange} >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <div className='busketItem__total'>$ {(value * quantity).toFixed(2)}</div>
            <img
                className='busketItem__delete'
                src='https://cdn-icons-png.flaticon.com/512/1345/1345874.png'
                alt='delete'
                onClick={() => dispatch(removeIntoBusket(item.id))} />
        </div>
    )
}